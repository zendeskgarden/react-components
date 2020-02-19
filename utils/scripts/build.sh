#!/bin/bash
set -x
set -e

NODE_ENV=production rollup -c ../../utils/build/rollup.config.js
