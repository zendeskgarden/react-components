#!/bin/bash

echo "Running test group: $TEST_GROUP"

set -ev

# Linting
if [ "${TEST_GROUP}" = "lint" ]; then
  yarn lint
  exit
fi

if [ "${TEST_GROUP}" = "format" ]; then
  yarn format
  exit
fi

if [ "${TEST_GROUP}" = "unit" ]; then
  # unit tests require lerna bootstrap to run but doesn't
  # require each package to do a build step
  yarn lerna bootstrap --ignore-scripts
  yarn test:all --coverage --runInBand
  exit
fi
