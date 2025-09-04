import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { faker } from '@faker-js/faker';
import { 
  stringFieldGenerators, 
  numberFieldGenerators, 
  booleanFieldGenerators, 
  arrayFieldGenerators, 
  enumFieldGenerators 
} from './fieldGenerators.js';
import { CONFIG } from './config.js';

export class FakeDataGenerator {
  constructor() {
    this.openApiDoc = yaml.load(fs.readFileSync(CONFIG.OPENAPI_PATH, 'utf8'));
  }

  // 生成假数据的主函数
  generateFakeData(schema, schemas) {
    // 处理$ref引用
    if (schema.$ref) {
      const refName = schema.$ref.split('/').pop();
      const refSchema = schemas[refName];
      if (refSchema) {
        return this.generateFakeData(refSchema, schemas);
      }
      return null;
    }

    // 处理枚举类型
    if (schema.enum) {
      return enumFieldGenerators.default(schema.enum);
    }

    // 处理对象类型
    if (schema.type === 'object' && schema.properties) {
      const fakeData = {};
      for (const [key, value] of Object.entries(schema.properties)) {
        fakeData[key] = this.generateFieldData(key, value, schemas);
      }
      return fakeData;
    }

    // 处理基本类型
    return this.generateBasicTypeData(schema);
  }

  // 生成字段数据
  generateFieldData(fieldName, fieldSchema, schemas) {
    if (fieldSchema.type === 'string') {
      // 根据format生成数据
      if (fieldSchema.format && stringFieldGenerators.format[fieldSchema.format]) {
        return stringFieldGenerators.format[fieldSchema.format]();
      }
      
      // 根据字段名生成数据
      if (stringFieldGenerators.fieldName[fieldName]) {
        return stringFieldGenerators.fieldName[fieldName]();
      }
      
      // 根据pattern生成数据
      if (fieldSchema.pattern) {
        if (fieldSchema.pattern.includes('email')) {
          return faker.internet.email();
        }
      }
      
      // 默认字符串生成器
      return stringFieldGenerators.default();
    }
    
    else if (fieldSchema.type === 'integer' || fieldSchema.type === 'number') {
      // 根据字段模式生成数据
      const patternValue = numberFieldGenerators.fieldPattern(fieldName);
      if (patternValue !== null) {
        return patternValue;
      }
      
      // 根据字段名生成数据
      if (numberFieldGenerators.fieldName[fieldName]) {
        return numberFieldGenerators.fieldName[fieldName]();
      }
      
      // 默认数字生成器
      return numberFieldGenerators.default();
    }
    
    else if (fieldSchema.type === 'boolean') {
      // 根据字段名生成数据
      if (booleanFieldGenerators.fieldName[fieldName]) {
        return booleanFieldGenerators.fieldName[fieldName]();
      }
      
      // 默认布尔生成器
      return booleanFieldGenerators.default();
    }
    
    else if (fieldSchema.type === 'array') {
      return arrayFieldGenerators.default(fieldSchema.items, schemas, this.generateFakeData.bind(this));
    }
    
    else if (fieldSchema.$ref) {
      const refName = fieldSchema.$ref.split('/').pop();
      const refSchema = schemas[refName];
      if (refSchema) {
        return this.generateFakeData(refSchema, schemas);
      }
    }
    
    else if (fieldSchema.type === 'object') {
      return this.generateFakeData(fieldSchema, schemas);
    }
    
    return null;
  }

  // 生成基本类型数据
  generateBasicTypeData(schema) {
    if (schema.type === 'string') {
      if (schema.format === 'date-time') {
        return faker.date.recent().toISOString();
      } else if (schema.format === 'email') {
        return faker.internet.email();
      } else if (schema.format === 'uri') {
        return faker.internet.url();
      } else {
        return faker.lorem.word();
      }
    } else if (schema.type === 'integer' || schema.type === 'number') {
      return faker.number.int({ min: 1, max: 100 });
    } else if (schema.type === 'boolean') {
      return faker.datatype.boolean();
    }
    
    return null;
  }

  // 为每个模型生成多个假数据
  generateMultipleFakeData(schema, schemaName) {
    const fakeDataArray = [];
    // 用于跟踪当前模型已生成的ID，确保每个模型内的ID唯一性
    const generatedIds = new Set();
    
    for (let i = 0; i < CONFIG.DATA_COUNT; i++) {
      const data = this.generateFakeData(schema, this.openApiDoc.components.schemas);
      
      // 如果数据对象有id字段，确保其在当前模型内唯一
      if (data && typeof data === 'object' && data.id !== undefined) {
        let newId = data.id;
        // 如果是整数ID，生成唯一的整数ID
        if (Number.isInteger(data.id)) {
          while (generatedIds.has(newId)) {
            newId = faker.number.int({ min: 1, max: 1000000 });
          }
          generatedIds.add(newId);
          data.id = newId;
        }
        // 如果是字符串ID，生成唯一的字符串ID
        else if (typeof data.id === 'string') {
          while (generatedIds.has(newId)) {
            newId = faker.string.uuid();
          }
          generatedIds.add(newId);
          data.id = newId;
        }
      }
      
      fakeDataArray.push(data);
    }
    return fakeDataArray;
  }

  // 处理所有schemas
  processSchemas() {
    const schemas = this.openApiDoc.components.schemas;
    const fakeData = {};
    
    for (const [schemaName, schema] of Object.entries(schemas)) {
      fakeData[schemaName] = this.generateMultipleFakeData(schema, schemaName);
    }
    
    return fakeData;
  }

  // 保存数据到文件
  saveToFile(data) {
    fs.mkdirSync(path.dirname(CONFIG.OUTPUT_PATH), { recursive: true });
    fs.writeFileSync(CONFIG.OUTPUT_PATH, JSON.stringify(data, null, 2));
    console.log(`Fake data saved to ${CONFIG.OUTPUT_PATH}`);
  }

  // 运行主流程
  run() {
    try {
      const fakeData = this.processSchemas();
      this.saveToFile(fakeData);
    } catch (error) {
      console.error('Error generating fake data:', error);
      process.exit(1);
    }
  }
}