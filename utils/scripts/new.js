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
const prettier = require('prettier');

/**
 * Register handlebars template helper utilities
 */
require('handlebars-helpers')({
  handlebars
});

const tsconfigPath = path.resolve(__dirname, '..', '..', 'tsconfig.json');

const tsconfig = require(tsconfigPath);

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

const updateStoryReadme = ({ packageName }) => {
  const storyPath = path.resolve(
    __dirname,
    '..',
    '..',
    'packages',
    packageName,
    'stories',
    '1-Readme.stories.mdx'
  );

  fs.readFile(storyPath, 'utf-8')
    .then(originalStory => {
      const template = handlebars.compile(originalStory);
      const newStoryContent = template({
        componentName: packageName.charAt(0).toUpperCase() + packageName.slice(1)
      });

      return fs.writeFile(storyPath, newStoryContent);
    })
    .catch(console.error);
};

const updateStory = ({ packageName }) => {
  const storyPath = path.resolve(
    __dirname,
    '..',
    '..',
    'packages',
    packageName,
    'stories',
    '2-Example.stories.tsx'
  );

  fs.readFile(storyPath, 'utf-8')
    .then(originalStory => {
      const template = handlebars.compile(originalStory);
      const newStoryContent = template({
        component: packageName,
        componentName: packageName.charAt(0).toUpperCase() + packageName.slice(1)
      });

      return fs.writeFile(storyPath, newStoryContent);
    })
    .catch(console.error);
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
      updateStory({ packageName }),
      updateStoryReadme({ packageName })
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
    tsconfig.compilerOptions.paths[`@zendeskgarden/react-${packageName}`] = [
      `./packages/${packageName}/src/index.ts`
    ];

    fs.writeFile(
      tsconfigPath,
      prettier.format(JSON.stringify(tsconfig), {
        parser: 'json',
        printWidth: 100
      }),
      err => {
        if (err) console.error(err);
      }
    );
  })
  .then(() => {
    console.log(pelorous(`Start local development with: "${chalk.white('yarn start')}"`));
  })
  .catch(console.error);
