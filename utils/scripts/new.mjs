#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Command } from 'commander';
import { execa } from 'execa';
import { lernaNew } from '@zendeskgarden/scripts';
import ora from 'ora';
import pluralize from 'pluralize';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const program = new Command();
const info = (message, spinner) => spinner.info(message).start();

/**
 * Bootstrap the new package.
 *
 * @param {String} component Component name.
 * @param {Ora} spinner Terminal spinner.
 */
const bootstrap = async (component, spinner) => {
  info(`Bootstrapping package...`, spinner);

  const lernaArgs = [
    'lerna',
    'bootstrap',
    '--scope',
    `@zendeskgarden/react-${pluralize.plural(component.toLowerCase())}`
  ];

  await execa('yarn', lernaArgs, { stdin: process.stdin, stdout: process.stdout });
};

/**
 * Generate the new package based on the package template.
 *
 * @param {String} component Component name.
 * @param {Ora} spinner Terminal spinner.
 *
 * @returns The package destination directory path.
 */
const generate = async (component, spinner) => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const src = resolve(currentDir, '..', '..', 'packages', '.template');
  const dest = resolve(
    currentDir,
    '..',
    '..',
    'packages',
    pluralize.plural(component.toLowerCase())
  );
  const tags = { component: pluralize.singular(component) };

  info(`Generating package...`, spinner);

  const result = await lernaNew({ src, dest, tags, spinner });

  return result.dest;
};

program
  .description('Generate a new react-components package')
  .arguments('<name>', 'ComponentName')
  .action(async component => {
    const spinner = ora();

    try {
      spinner.start();

      const path = await generate(component, spinner);

      await bootstrap(component, spinner);
      spinner.succeed(
        `Success.\nThe new package – ${path} – is ready for development. Remember to update the "paths" entry in tsconfig.json.`
      );
    } catch (error) {
      spinner.fail(error.message || error);
      process.exitCode = 1;
    } finally {
      spinner.stop();
    }
  })
  .parse(process.argv);
