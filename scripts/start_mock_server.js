#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory of the current script
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the OpenAPI specification file
const openApiSpecPath = join(__dirname, '..', 'output', 'schema', 'openapi.yaml');

// Check if Prism is installed
const prismProcess = spawn('npx', ['prism', '--version'], {
  stdio: 'pipe'
});

prismProcess.on('error', (error) => {
  console.error('Error checking Prism installation:', error.message);
  console.error('Please install Prism globally with: npm install -g @stoplight/prism-cli');
  process.exit(1);
});

prismProcess.on('close', (code) => {
  if (code !== 0) {
    console.error('Prism is not installed or not in PATH');
    console.error('Please install Prism globally with: npm install -g @stoplight/prism-cli');
    process.exit(1);
  }

  // Start the Prism mock server with dynamic examples for better pagination support
  const mockProcess = spawn('npx', ['prism', 'mock', openApiSpecPath, '--dynamic'], {
    stdio: 'inherit'
  });

  mockProcess.on('error', (error) => {
    console.error('Error starting Prism mock server:', error.message);
    process.exit(1);
  });

  mockProcess.on('close', (code) => {
    console.log(`Prism mock server exited with code ${code}`);
  });

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('Shutting down Prism mock server...');
    mockProcess.kill('SIGINT');
  });
});