#!/bin/bash

AWKCMD='
  # Split record by (=)
  BEGIN { FS = "="; }
  # Remove all semicolons
  { gsub(/;/, "") }
  {
    # On first record
    if ( NR == 1) {
      # Remove single quotes
      gsub(/\047/, "");
    } else {
      # Replace first single quote with (,)
      sub(/\047/, ",");
      # Remove single quotes
      gsub(/\047/, "");
    }
  }
  # Print second column only which contains component_id
  { print $2 }
'

grep \
  --exclude-dir=.template \
  --exclude-dir=node_modules \
  --include=\*.js \
  --exclude=\*.spec.js \
  -rnw '../../packages' \
  -e 'const [A-Z_]*COMPONENT_ID = ' | # Find all COMPONENT_IDs
  sort | # Sort alphabetically
  awk "$AWKCMD" | # Run the above awk program
  tr '\n' ' ' # Collapse result to single line
