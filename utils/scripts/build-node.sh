#!/bin/bash
set -x
set -e

rimraf dist
rollup -c ../../utils/build/rollup.config.js  --environment TARGET:node
