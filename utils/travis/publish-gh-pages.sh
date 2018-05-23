#!/bin/bash
set -x
set -e

yarn build:demo --since
$(dirname $0)/publish-gh-pages.js
