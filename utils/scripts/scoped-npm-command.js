#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable no-console */

const inquirer = require('inquirer');
const program = require('commander');
const chalk = require('chalk');
const childProcess = require('child_process');
const path = require('path');

const pelorous = chalk.hex('#30AABC');
const lernaPath = path.resolve(__dirname, '..', '..', 'node_modules', '.bin', 'lerna');

const gardenSplashScreen = () => {
  console.log(pelorous('###############################'));
  console.log(pelorous('##  Garden React Components  ##'));
  console.log(pelorous('###############################'));
};

const RetrievePackages = new Promise((resolve, reject) => {
  childProcess.exec(`${lernaPath} ls --json`, (err, stdout, stderr) => {
    if (err) {
      return;
    }

    resolve(JSON.parse(stdout));
    reject(stderr);
  });
});

const PromptUserForPackages = packages => {
  const packageList = packages.map(p => {
    let name = p.name;

    if (p.private) {
      name += ` ${chalk.yellow('[PRIVATE]')} `;
    }

    if (p.version) {
      name += ` ${chalk.gray(`v${p.version}`)}`;
    }

    return {
      name,
      value: p.name
    };
  });

  return inquirer.prompt([
    {
      type: 'list',
      name: 'package',
      message: 'Which package would you like to run against?',
      choices: packageList
    }
  ]);
};

const FormatAnswers = answers => answers.package;

const startLerna = (scope, script) => {
  const lernaStart = childProcess.spawn(lernaPath, ['run', script, '--stream', '--scope', scope]);

  lernaStart.stdout.on('data', data => {
    process.stdout.write(data);
  });

  lernaStart.stderr.on('data', data => {
    process.stderr.write(data);
  });
};

gardenSplashScreen();
program
  .version('0.0.1')
  .option('--scope [scope]')
  .option('--script [script]')
  .parse(process.argv);

if (program.scope) {
  startLerna(program.scope, program.script);
} else {
  RetrievePackages.then(PromptUserForPackages)
    .then(FormatAnswers)
    .then(scope => startLerna(scope, program.script));
}
