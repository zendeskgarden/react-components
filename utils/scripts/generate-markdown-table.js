#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable no-console */

const stdin = process.openStdin();

let data = '';

stdin.on('data', chunk => {
  data += chunk;
});

stdin.on('end', () => {
  const cids = JSON.parse(data);

  const groups = cids.reduce((acc, item) => {
    const [group] = item.split('.');

    if (acc[group]) {
      acc[group].push(item);
    } else {
      acc[group] = [item];
    }

    return acc;
  }, {});

  const table = Object.entries(groups).reduce(
    (mdTable, group) => {
      const [component, componentIds] = group;

      // eslint-disable-next-line no-param-reassign
      mdTable += `| ${component} | ${componentIds.join(', ').replace('_', '&zwnj;_')} |\n`;

      return mdTable;
    },
    `| Component | COMPONENT_IDs |
|-----------|---------------|\n`
  );

  console.log(table);
});
