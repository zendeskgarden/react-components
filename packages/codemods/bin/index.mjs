#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable no-console */

import { Command } from 'commander';
import chalk from 'chalk';
import cmds from '../dist/esm/index.mjs';
import { createRequire } from 'node:module';
import figlet from 'figlet';
import ora from 'ora';

const program = new Command();
const spinner = ora();
const version = createRequire(import.meta.url)('../package.json').version;

program
  .version(version)
  .addCommand(cmds.v8ToV9Command(spinner))
  .action(() => {
    console.log(chalk.hex('#5EAE91')(figlet.textSync('garden codemods')));
    program.help();
  })
  .addHelpText('before', '\n') // pad the help text
  .parse();
