#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const program = require('commander');
const execa = require('execa');
const garden = require('@zendeskgarden/scripts');
const ora = require('ora');
const pluralize = require('pluralize');
const resolve = require('path').resolve;

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
  const src = resolve(__dirname, '..', '..', 'packages', '.template');
  const dest = resolve(
    __dirname,
    '..',
    '..',
    'packages',
    pluralize.plural(component.toLowerCase())
  );
  const tags = { component: pluralize.singular(component) };

  info(`Generating package...`, spinner);

  const result = await garden.lernaNew({ src, dest, tags, spinner });

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
      spinner.succeed(`Success.\nThe new package – ${path} – is ready for development.`);
    } catch (error) {
      spinner.fail(error.message || error);
      process.exitCode = 1;
    } finally {
      spinner.stop();
    }
  })
  .parse(process.argv);
