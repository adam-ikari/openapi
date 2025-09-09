
@echo off
REM Windows 离线安装脚本
REM 该脚本会安装对应平台的打包依赖

echo 开始离线安装依赖...

REM 检查是否存在打包的依赖
if not exist "deps%PROCESSOR_ARCHITECTURE%" (
  echo 错误: 未找到当前架构的依赖目录
  exit /b 1
)

REM 进入对应架构的依赖目录
cd deps%PROCESSOR_ARCHITECTURE%

REM 安装对应平台的依赖包
for %%f in (*.tgz) do (
  if exist "%%f" (
    echo 安装 %%f...
    npm install -g "%%f"
  )
)

echo 离线安装完成
