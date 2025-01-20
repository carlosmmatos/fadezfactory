#!/bin/bash
set -e

# Clean dist directory
rm -rf dist/*

# Build the application
npm run build

# Move files to correct location for static deployment
cd dist
cp -r public/* .
rm -rf public

echo "Static files deployed successfully to dist/"
ls -la
