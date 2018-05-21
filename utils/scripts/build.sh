#!/bin/bash
set -x
set -e

rimraf dist
webpack --config ../../utils/build/webpack.commonjs.js --hide-modules
webpack --config ../../utils/build/webpack.umd.js --hide-modules
