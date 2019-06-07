#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable no-console */

const chalk = require('chalk');
const blue600 = chalk.hex('#1F73B7');
const getStdin = require('get-stdin');
const fetch = require('node-fetch');

const [, , /* node */ /* file */ tag] = process.argv;

/**
 * Publish a draft Github release with the provided changelog and git tag
 */
async function githubRelease() {
  const changelog = await getStdin();

  const response = await fetch(
    'https://api.github.com/repos/zendeskgarden/react-components/releases',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${process.env.GITHUB_AUTH}`
      },
      body: JSON.stringify({
        tag_name: tag,
        body: changelog,
        draft: true
      })
    }
  );

  if (response.ok) {
    console.log(blue600('INFO: A draft Github Release has been created...'));
  } else {
    throw Error(response.statusText);
  }
}

githubRelease();
