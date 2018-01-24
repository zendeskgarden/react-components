#!/bin/bash
set -x
set -e

# Lint styled-components css
# stylelint './src/**/*.js';
stylelint 'packages/*/src/**/*.js'

# Lint JS
eslint -c '../../.eslintrc.json' './src/**/*.js';
