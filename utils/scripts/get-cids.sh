#!/bin/bash

AWKCMD='
  # Split record by (= | :)
  BEGIN { FS = "[=:]"; }
  # Remove all semicolons and commas
  { gsub(/[;,]/, "") }
  {
    # On first record
    if ( NR == 1) {
      # Remove single quotes
      gsub(/\047/, "");
    } else {
      # Replace first single quote with (,)
      sub(/\047/, ",", $4);
      # Remove single quotes
      gsub(/\047/, ""i, $4);
    }
  }
  # Print second column only which contains component_id
  { print $4 }
'
grep \
  --exclude-dir=.template \
  --exclude-dir=node_modules \
  --exclude-dir=dist \
  --include=\*.js \
  --exclude=\*.spec.js \
  -rn '../../packages' \
  -e "\'data-garden-id\': \'" \
  -e "const [A-Z_]*COMPONENT_ID =" |
  sort | # Sort alphabetically
  awk "$AWKCMD" | # Run the above awk program
  tr '\n' ' ' # Collapse result to single line
