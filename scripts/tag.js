#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { githubBranch, githubRelease, lernaChangelog } from '@zendeskgarden/scripts';
import { Command } from 'commander';
import { execa, execaCommand } from 'execa';
import inquirer from 'inquirer';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import util from 'node:util';
import ora from 'ora';
import { track } from 'temp';

const lernaConfig = createRequire(import.meta.url)('../lerna.json');
const temp = track();

const program = new Command();
const info = (message, spinner) => spinner.info(message).start();

/**
 * Generate changelog.
 *
 * @param {String} tag The tag changes are being generated for.
 * @param {Ora} spinner Terminal spinner.
 *
 * @returns Changelog markdown for release.
 */
const changelog = async (tag, spinner) => {
  let retVal;

  info('Generating changelog...', spinner);

  const write = util.promisify(fs.write);
  const open = util.promisify(temp.open);
  const { path, fd } = await open({ prefix: 'CHANGELOG', suffix: '.md' });
  const markdown = await lernaChangelog({ spinner });
  const editor = await execa('git', ['var', 'GIT_EDITOR']);

  await write(fd, markdown);
  spinner.stop();
  await execaCommand(`${editor.stdout} ${path}`, { stdio: 'inherit' });
  spinner.start();

  const readFile = util.promisify(fs.readFile);
  const INSERTION_SLUG = '<!-- insert-new-changelog-here -->';
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const changelogPath = resolve(currentDir, '..', 'CHANGELOG.md');
  const data = await readFile(changelogPath, 'utf8');

  if (data.includes(INSERTION_SLUG)) {
    retVal = await readFile(path, 'utf8');

    const writeFile = util.promisify(fs.writeFile);
    const changes = data.replace(
      INSERTION_SLUG,
      `${INSERTION_SLUG}\n${retVal.split('\n\n#### Committers')[0]}`
    );

    await writeFile(changelogPath, changes);
    await execa('git', [
      'commit',
      '-m',
      `chore(changelog): add ${tag} [skip ci]`,
      '--no-verify',
      '--quiet',
      changelogPath
    ]);
  } else {
    throw new Error(`Missing "${INSERTION_SLUG}" in CHANGELOG.md`);
  }

  return retVal;
};

/**
 * Push a GitHub release.
 *
 * @param {String} main Name for the main branch being released.
 * @param {String} tag The tag for the new release.
 * @param {String} markdown Markdown content.
 * @param {Ora} spinner Terminal spinner.
 *
 * @returns The draft release URL.
 */
const release = async (main, tag, markdown, spinner) => {
  info('Creating release...', spinner);

  const pushArgs = ['push', '--follow-tags', '--no-verify', '--atomic', 'origin'];

  // Ensure `version` commit hits CI, triggering npm publish
  await execa('git', pushArgs.concat(`HEAD^:${main}`));
  await execa('git', pushArgs.concat(main));

  const url = await githubRelease({ tag, body: markdown, spinner });

  spinner.succeed(
    `Success.\n🎗 Approve the draft release – ${url} – upon notification of a successful ${tag} publish to NPM.`
  );
};

/**
 * Rollback version tag and changelog updates.
 *
 * @param {String} tag The tag to rollback.
 * @param {Ora} spinner Terminal spinner.
 */
const rollback = async (tag, spinner) => {
  info(`Rolling back ${tag} changes...`, spinner);
  await execa('git', ['tag', '-d', tag]);
  // Undo the `version` and the `changelog` commits.
  await execa('git', ['reset', '--hard', 'HEAD~2']);
};

/**
 * Sync local main branch and tags with GitHub remote.
 *
 * @param {String} main Name for the main branch being used for tagging.
 * @param {Ora} spinner Terminal spinner.
 */
const sync = async (main, spinner) => {
  const branch = await githubBranch(undefined /* path */, spinner);

  if (branch === main) {
    info('Syncing with remote...', spinner);
    await execa('git', ['pull']);
    await execa('git', ['fetch', '--tags', '--prune', '--prune-tags']);
    spinner.stop();
    await execa('pnpm', ['install', '--force'], { stdout: process.stdout });
  } else {
    throw new Error(`Switch to the ${main} branch`);
  }
};

/**
 * Bump and publish package versions.
 *
 * @param {String} bump Semantic or explicit versioning bump.
 * @param {String} preid Prerelease ID as defined by https://semver.org/#spec-item-9.
 * @param {String} main Name for the main branch being used for tagging.
 * @param {Ora} spinner Terminal spinner.
 *
 * @returns New version tag.
 */
const version = async (bump, preid, main, spinner) => {
  const lernaArgs = [
    'exec',
    'lerna',
    '--',
    'version',
    '--conventional-commits',
    '--force-git-tag',
    '--force-publish',
    '--no-changelog',
    '--no-push'
  ];
  const describeArgs = ['describe', '--abbrev=0', '--tags'];
  let tag;

  if (bump) {
    lernaArgs.splice(4, 0, bump);
  } else {
    info('Commits since current version:', spinner);
    spinner.stop();
    tag = (await execa('git', describeArgs)).stdout.toString();

    await execa('git', ['--no-pager', 'log', `${tag}..HEAD`, '--no-decorate', '--oneline'], {
      stdout: process.stdout
    });
  }

  if (preid) {
    lernaArgs.push('--preid', preid);
  }

  if (main) {
    lernaArgs.push('--allow-branch', main);
  }

  await execa('npm', lernaArgs, { stdin: process.stdin, stdout: process.stdout });

  const retVal = (await execa('git', describeArgs)).stdout.toString();

  if (retVal === tag) {
    throw new Error('No version bump');
  } else {
    return retVal;
  }
};

program
  .description('Tag and publish a new version for react-components packages')
  .arguments('[version]')
  .option('-m, --main <main>', 'Main branch name', lernaConfig.command.version.allowBranch)
  .option('-p, --preid <preid>', 'Prerelease identifier')
  .action(async bump => {
    const spinner = ora();

    try {
      spinner.start();
      await sync(program.opts().main, spinner);

      const tag = await version(bump, program.opts().preid, program.opts().main, spinner);
      const markdown = await changelog(tag, spinner);

      spinner.stop();

      const prompt = await inquirer.prompt([
        {
          type: 'confirm',
          message: `Confirm ${tag} release to the ${program.opts().main} branch?`,
          name: 'release',
          default: true
        }
      ]);

      if (prompt.release) {
        await release(program.opts().main, tag, markdown, spinner);
      } else {
        await rollback(tag, spinner);
      }
    } catch (error) {
      spinner.fail(error.message || error);
      process.exitCode = 1;
    } finally {
      spinner.stop();
    }
  })
  .parse(process.argv);
