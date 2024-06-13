#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import fs from 'fs';
import path from 'path';
import { execa } from 'execa';
import { Command } from 'commander';

const packageDir = './packages';
const templateDir = '.template';
const failedPackages = [];

// Initialize commander
const program = new Command();
program.option('-v, --version <version>', 'Specify the version to use').parse(process.argv);

const options = program.opts();

// Read directories and process package.json files
async function processDirectories() {
  try {
    const items = await fs.promises.readdir(packageDir, { withFileTypes: true });

    for (const item of items) {
      if (!item.isDirectory() || item.name === templateDir) continue;

      const folder = item.name;
      const packageJsonPath = path.join(packageDir, folder, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(await fs.promises.readFile(packageJsonPath, 'utf-8'));

        const { name, version: packageVersion } = packageJson;
        const version = options.version || packageVersion;

        if (name && version) {
          try {
            await execa('npm', ['dist-tag', 'add', `${name}@${version}`, 'latest']);
            console.log(`✅ Successfully updated dist-tag for ${name}@${version}`);
          } catch (error) {
            console.error(
              `❌ Failed to update dist-tag for ${name}@${version}:\n\n`,
              error.stderr,
              '\n\n'
            );
            failedPackages.push(name);
          }
        } else {
          console.warn(`Missing name or version in ${packageJsonPath}`);
        }
      } else {
        console.warn(`package.json not found in ${path.join(packageDir, folder)}`);
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${packageDir}:`, err);
  }
}

// Outputs the list of failed packages
function outputFailedPackages() {
  if (failedPackages.length > 0) {
    console.log('\n\n 😔 The following packages failed to update:');
    failedPackages.forEach(pkg => console.log(pkg));
  } else {
    console.log('\n\n 🥳 All packages updated successfully!');
  }
}

(async () => {
  await processDirectories();
  outputFailedPackages();
})();
