#!/usr/bin/env node

import fs from 'fs';
import yaml from 'js-yaml';
import { faker } from '@faker-js/faker';

// 读取OpenAPI文件
const OPENAPI_PATH = 'output/schema/openapi.yaml';
const OUTPUT_PATH = 'output/fake_data.json';
const DATA_COUNT = 100; // 每个模型生成100个数据
const openApiDoc = yaml.load(fs.readFileSync(OPENAPI_PATH, 'utf8'));

// 生成假数据的函数
function generateFakeData(schema, schemas) {
  // 处理$ref引用
  if (schema.$ref) {
    const refName = schema.$ref.split('/').pop();
    const refSchema = schemas[refName];
    if (refSchema) {
      return generateFakeData(refSchema, schemas);
    }
    return null;
  }
  
  // 处理枚举类型
  if (schema.enum) {
    return faker.helpers.arrayElement(schema.enum);
  }
  
  if (schema.type === 'object' && schema.properties) {
    const fakeData = {};
    for (const [key, value] of Object.entries(schema.properties)) {
      if (value.type === 'string') {
        if (value.format === 'date-time') {
          fakeData[key] = faker.date.recent().toISOString();
        } else if (value.format === 'email') {
          fakeData[key] = faker.internet.email();
        } else if (value.format === 'uri') {
          fakeData[key] = faker.internet.url();
        } else if (key === 'name') {
          // 为name字段生成更真实的名字
          fakeData[key] = faker.person.fullName();
        } else if (value.pattern) {
          // 根据pattern生成符合要求的数据
          if (value.pattern.includes('email')) {
            fakeData[key] = faker.internet.email();
          } else {
            fakeData[key] = faker.lorem.word();
          }
        } else {
          fakeData[key] = faker.lorem.word();
        }
      } else if (value.type === 'integer' || value.type === 'number') {
        if (key === 'age') {
          fakeData[key] = faker.number.int({ min: 1, max: 120 });
        } else if (key.includes('At')) {
          // 时间戳字段
          fakeData[key] = faker.number.int({ min: 1000000000, max: 2000000000 });
        } else {
          fakeData[key] = faker.number.int({ min: 1, max: 100 });
        }
      } else if (value.type === 'boolean') {
        fakeData[key] = faker.datatype.boolean();
      } else if (value.type === 'array') {
        fakeData[key] = [generateFakeData(value.items, schemas)];
      } else if (value.$ref) {
        const refName = value.$ref.split('/').pop();
        const refSchema = schemas[refName];
        if (refSchema) {
          fakeData[key] = generateFakeData(refSchema, schemas);
        }
      } else if (value.type === 'object') {
        fakeData[key] = generateFakeData(value, schemas);
      }
    }
    return fakeData;
  }
  
  // 处理基本类型
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
function generateMultipleFakeData(schema, schemas, count) {
  const fakeDataArray = [];
  // 用于跟踪当前模型已生成的ID，确保每个模型内的ID唯一性
  const generatedIds = new Set();
  
  for (let i = 0; i < count; i++) {
    const data = generateFakeData(schema, schemas);
    
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
function processSchemas() {
  const schemas = openApiDoc.components.schemas;
  const fakeData = {};
  
  for (const [schemaName, schema] of Object.entries(schemas)) {
    fakeData[schemaName] = generateMultipleFakeData(schema, schemas, DATA_COUNT);
  }
  
  return fakeData;
}

// 主函数
function main() {
  try {
    const fakeData = processSchemas();
    // 保存到文件
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(fakeData, null, 2));
    console.log(`Fake data saved to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error generating fake data:', error);
    process.exit(1);
  }
}

main();