#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable no-console */

const path = require('path');
const childProcess = require('child_process');
const lernaPath = path.resolve(__dirname, '..', '..', 'node_modules', '.bin', 'lerna');
const lernaConfig = require(path.resolve(__dirname, '..', '..', 'lerna.json'));
const LERNA_PUBLISH_MESSAGE = lernaConfig.commands.publish.message;

/**
 * Only perform publish if commit message is Lerna created
 */
if (process.env.TRAVIS_COMMIT_MESSAGE.indexOf(LERNA_PUBLISH_MESSAGE) > -1) {
  const lernaExecPublish = childProcess.spawn(lernaPath, ['--since=HEAD^', 'exec', 'npm publish']);

  lernaExecPublish.stdout.on('data', data => {
    process.stdout.write(data);
  });

  lernaExecPublish.stderr.on('data', data => {
    process.stderr.write(data);
  });
} else {
  console.error(`$TRAVIS_COMMIT_MESSAGE of "${process.env.TRAVIS_COMMIT_MESSAGE}" is not valid`);
}
