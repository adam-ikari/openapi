#!/usr/bin/env node

import { execSync } from 'child_process';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// 创建output目录
const outputDir = join(process.cwd(), '.');
if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

// 创建deps目录
const depsDir = join(outputDir, 'deps');
if (!existsSync(depsDir)) {
  mkdirSync(depsDir);
}

// 定义所有平台
const platforms = ['darwin', 'win32', 'linux'];
const platformNames = ['mac', 'windows', 'linux'];

console.log('开始为所有平台打包依赖...');

// 为每个平台执行打包命令
platforms.forEach((platform, index) => {
  const platformName = platformNames[index];
  const platformDir = join(depsDir, platformName);
  
  // 创建平台特定目录
  if (!existsSync(platformDir)) {
    mkdirSync(platformDir);
  }
  
  console.log(`正在为 ${platformName} 平台打包依赖...`);
  
  try {
    // 设置环境变量来模拟不同平台
    execSync(`npm pack --pack-destination ${platformDir}`, { 
      stdio: 'inherit',
      env: { ...process.env, npm_config_platform: platform }
    });
    console.log(`${platformName} 平台依赖打包完成`);
  } catch (error) {
    console.error(`${platformName} 平台打包依赖时出错:`, error);
  }
});

console.log('所有平台依赖打包完成');

// 为不同平台生成离线安装脚本
const generateInstallScript = (platformName) => {
  let scriptContent = '';
  let scriptName = '';
  
  switch(platformName) {
    case 'windows':
      scriptContent = `
@echo off
REM Windows 离线安装脚本
REM 该脚本会安装对应平台的打包依赖

echo 开始离线安装依赖...

REM 检查是否存在打包的依赖
if not exist "deps\%PROCESSOR_ARCHITECTURE%" (
  echo 错误: 未找到当前架构的依赖目录
  exit /b 1
)

REM 进入对应架构的依赖目录
cd deps\%PROCESSOR_ARCHITECTURE%

REM 安装对应平台的依赖包
for %%f in (*.tgz) do (
  if exist "%%f" (
    echo 安装 %%f...
    npm install -g "%%f"
  )
)

echo 离线安装完成
`;
      scriptName = 'install_offline.bat';
      break;
      
    case 'mac':
    case 'linux':
    default:
      scriptContent = `
#!/bin/bash

# Unix/Linux/macOS 离线安装脚本
# 该脚本会安装对应平台的打包依赖

set -e

echo "开始离线安装依赖..."

# 检查是否存在打包的依赖
if [ ! -d "deps/$OSTYPE" ]; then
  echo "错误: 未找到当前系统的依赖目录"
  exit 1
fi

# 进入对应系统的依赖目录
cd deps/$OSTYPE

# 安装对应平台的依赖包
for package in *.tgz; do
  if [ -f "$package" ]; then
    echo "安装 $package..."
    npm install -g "$package"
  fi
done

echo "离线安装完成"
`;
      scriptName = 'install_offline.sh';
      break;
  }
  
  const scriptPath = join(depsDir, scriptName);
  writeFileSync(scriptPath, scriptContent);
  console.log(`${platformName} 离线安装脚本已生成: ${scriptPath}`);
  
  // 为Unix/Linux/macOS脚本添加执行权限
  if (platformName !== 'windows') {
    execSync(`chmod +x ${scriptPath}`, { stdio: 'inherit' });
    console.log(`${platformName} 离线安装脚本权限已设置`);
  }
};

// 为所有平台生成离线安装脚本
platformNames.forEach(platformName => {
  generateInstallScript(platformName);
});

console.log('所有平台的离线安装脚本已生成');