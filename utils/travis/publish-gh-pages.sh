#!/bin/bash
set -x
set -e

yarn build:demo_changed
$(dirname $0)/publish-gh-pages.js
