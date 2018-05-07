#!/bin/bash
set -x
set -e

yarn build:styleguide
$(dirname $0)/publish-gh-pages.js
