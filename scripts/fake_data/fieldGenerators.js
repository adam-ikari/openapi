import { faker } from '@faker-js/faker';

// 字符串字段生成器
export const stringFieldGenerators = {
  // 根据format生成数据
  format: {
    'date-time': () => faker.date.recent().toISOString(),
    'email': () => faker.internet.email(),
    'uri': () => faker.internet.url()
  },
  
  // 根据字段名生成数据
  fieldName: {
    'name': () => faker.person.fullName(),
    'avatar': () => faker.image.avatar(),
    'description': () => faker.lorem.sentence(),
    'msg': () => faker.lorem.sentence()
  },
  
  // 默认生成器
  default: () => faker.lorem.word()
};

// 数字字段生成器
export const numberFieldGenerators = {
  // 根据字段名生成数据
  fieldName: {
    'age': () => faker.number.int({ min: 1, max: 120 }),
    'size': () => faker.number.int({ min: 1024, max: 10485760 }), // 1KB to 10MB
    'channel': () => faker.number.int({ min: 1, max: 11 }),
    'signalStrength': () => faker.number.int({ min: -100, max: -30 })
  },
  
  // 根据字段模式生成数据
  fieldPattern: (key) => {
    if (key.includes('At')) {
      return faker.date.past().getTime();
    }
    return null;
  },
  
  // 默认生成器
  default: () => faker.number.int({ min: 1, max: 100 })
};

// 布尔字段生成器
export const booleanFieldGenerators = {
  // 根据字段名生成数据
  fieldName: {
    'autoConnect': () => faker.datatype.boolean() && faker.datatype.boolean(), // 25%概率为true
    'hidden': () => faker.datatype.boolean() && faker.datatype.boolean() // 25%概率为true
  },
  
  // 默认生成器
  default: () => faker.datatype.boolean()
};

// 数组字段生成器
export const arrayFieldGenerators = {
  default: (items, schemas, generateFakeData) => {
    const arrayLength = faker.number.int({ min: 1, max: 5 });
    const result = [];
    for (let i = 0; i < arrayLength; i++) {
      result.push(generateFakeData(items, schemas));
    }
    return result;
  }
};

// 枚举字段生成器
export const enumFieldGenerators = {
  default: (enumValues) => faker.helpers.arrayElement(enumValues)
};