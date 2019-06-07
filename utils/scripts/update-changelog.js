#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable no-console */

const getStdin = require('get-stdin');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const blue600 = chalk.hex('#1F73B7');

const INSERTION_POINT = '<!-- insert-new-changelog-here -->';
const CHANGELOG_PATH = path.resolve(__dirname, '..', '..', 'CHANGELOG.md');

/**
 * Insert the provided changelog diff into CHANGELOG.md
 */
async function updateChangelog() {
  let [stdin, changelog] = await Promise.all([getStdin(), fs.readFile(CHANGELOG_PATH, 'utf8')]);

  if (!changelog.includes(INSERTION_POINT)) {
    throw new Error(`Missing "${INSERTION_POINT}" in CHANGELOG.md`);
  }

  // Remove committers for root CHANGELOG
  stdin = stdin.split('\n\n#### Committers')[0];
  changelog = changelog.replace(INSERTION_POINT, `${INSERTION_POINT}\n${stdin}`);

  await fs.writeFile(CHANGELOG_PATH, changelog);

  console.log(blue600('INFO: CHANGELOG.md has been updated...'));
}

updateChangelog();
