#!/bin/bash
grep \
  --exclude-dir=.template \
  --exclude-dir=node_modules \
  --include=\*.js \
  --exclude=\*.spec.js \
  -rnw 'packages' \
  -e 'const COMPONENT_ID = ' \
  | rev | cut -d: -f1 | rev \
  | sed 's/const COMPONENT_ID = //g' | sed 's/;/,/g' | sort | tr -d '\n' \
  | rev |  cut -c 2- | rev \
  | awk ' BEGIN {print "["}{print} END {print"]"}' | sed "s/'/\"/g" \
  | node ./utils/scripts/generate-markdown-table.js
