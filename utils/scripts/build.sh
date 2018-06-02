#!/bin/bash
set -x
set -e

rimraf dist
webpack --config ../../utils/build/webpack.commonjs.js --config ../../utils/build/webpack.umd.js --hide-modules
