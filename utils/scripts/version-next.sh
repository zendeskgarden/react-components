#!/bin/sh

# Exit on error
set -e

echo "INFO: Pulling recent changes..."
git pull
git fetch --tags

echo "INFO: Validating environment..."
yarn install
yarn tsc
yarn lint
yarn test:all

echo "INFO: Prompt for new version..."
yarn lerna version --force-publish
