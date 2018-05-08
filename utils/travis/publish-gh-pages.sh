#!/bin/bash
set -x
set -e

yarn build:demo
$(dirname $0)/publish-gh-pages.js
