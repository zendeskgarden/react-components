#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable no-console */

const inquirer = require('inquirer');
const chalk = require('chalk');
const pelorous = chalk.hex('#30AABC');
const path = require('path');
const fs = require('fs-extra');
const childProcess = require('child_process');
const handlebars = require('handlebars');

/**
 * Register handlebars template helper utilities
 */
require('handlebars-helpers')({
  handlebars
});

const welcomeSplashScreen = () => {
  console.log(pelorous('#################################'));
  console.log(pelorous(`#### ${chalk.white('Garden - Create Package')} ####`));
  console.log(pelorous('#################################'));
};

const retrievePrompts = () => {
  return inquirer.prompt([
    {
      name: 'packageName',
      message: 'What name would you like to give this package?',
      default: 'example'
    }
  ]);
};

const copyDefaultPackage = ({ packageName }) => {
  if (!packageName) {
    throw new Error('"packageName" must be defined');
  }

  const defaultPackagePath = path.resolve(__dirname, '..', '..', 'packages', '.template');
  const newPackagePath = path.resolve(__dirname, '..', '..', 'packages', packageName);

  return fs.copy(defaultPackagePath, newPackagePath).then(() => ({ packageName }));
};

const updatePackageJson = ({ packageName }) => {
  const packageJsonPath = path.resolve(
    __dirname,
    '..',
    '..',
    'packages',
    packageName,
    'package.json'
  );

  return fs.readFile(packageJsonPath, 'utf-8').then(originalPackageJsonContent => {
    const template = handlebars.compile(originalPackageJsonContent);
    const newPackageJsonContent = template({ component: packageName });

    return fs.writeFile(packageJsonPath, newPackageJsonContent);
  });
};

const updateReadme = ({ packageName }) => {
  const readmePath = path.resolve(__dirname, '..', '..', 'packages', packageName, 'README.md');

  return fs.readFile(readmePath, 'utf-8').then(originalReadmeContent => {
    const template = handlebars.compile(originalReadmeContent);
    const newReadmeContent = template({ component: packageName });

    return fs.writeFile(readmePath, newReadmeContent);
  });
};

const updateStyleguideConfig = ({ packageName }) => {
  const styleguideConfigPath = path.resolve(
    __dirname,
    '..',
    '..',
    'packages',
    packageName,
    'styleguide.config.js'
  );

  return fs.readFile(styleguideConfigPath, 'utf-8').then(originalStyleguideConfigContent => {
    const template = handlebars.compile(originalStyleguideConfigContent);
    const newStyleguideConfigContent = template({ component: packageName });

    return fs.writeFile(styleguideConfigPath, newStyleguideConfigContent);
  });
};

const performLernaBootstrap = ({ packageName }) => {
  console.log(chalk.blue('Bootstrapping dependencies for new package...'));

  return new Promise((resolve, reject) => {
    childProcess.exec('yarn postinstall', (err, stdout, stderr) => {
      if (err) {
        reject(stderr);
      }

      console.log(chalk.blue('Lerna Bootstrapping complete'));
      resolve({ packageName });
    });
  });
};

welcomeSplashScreen();

retrievePrompts()
  .then(copyDefaultPackage)
  .then(({ packageName }) => {
    return Promise.all([
      updatePackageJson({ packageName }),
      updateReadme({ packageName }),
      updateStyleguideConfig({ packageName })
    ]).then(() => {
      console.log(
        chalk.green(
          `Successfully created package "@zendeskgarden/react-${packageName}" at "packages/${packageName}"`
        )
      );

      return { packageName };
    });
  })
  .then(performLernaBootstrap)
  .then(({ packageName }) => {
    console.log(
      pelorous(
        `Start local development with: "${chalk.white(
          `yarn start --scope @zendeskgarden/react-${packageName}`
        )}"`
      )
    );
  });
