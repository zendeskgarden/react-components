#!/bin/bash

AWKCMD='
  BEGIN { FS = "="; print "[" }
  { gsub(/;/, "") }
  {
    if ( NR == 1) {
      gsub(/\047/, "\"")
    } else {
      gsub(/\047/, "\"");
      sub(/\"/, ",\"");
    }
  }
  { print $2 }
  END { print "]" }
'

grep \
  --exclude-dir=.template \
  --exclude-dir=node_modules \
  --include=\*.js \
  --exclude=\*.spec.js \
  -rnw 'packages' \
  -e 'const COMPONENT_ID = ' \
  | sort \
  | awk "$AWKCMD" \
  | node ./utils/scripts/generate-markdown-table.js
