#!/usr/bin/env node

import { FakeDataGenerator } from './fake_data/FakeDataGenerator.js';

// 主函数
function main() {
  const generator = new FakeDataGenerator();
  generator.run();
}

main();