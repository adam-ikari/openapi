
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
