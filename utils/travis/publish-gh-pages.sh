#!/bin/bash
set -x
set -e

yarn build:demo --since HEAD^
$(dirname $0)/publish-gh-pages.js
