#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const program = require('commander');
const execa = require('execa');
const fs = require('fs');
const garden = require('@zendeskgarden/scripts');
const ora = require('ora');
const inquirer = require('inquirer');
const resolve = require('path').resolve;
const temp = require('temp').track();
const util = require('util');

const info = (message, spinner) => spinner.info(message).start();

/**
 * Generate changelog.
 *
 * @param {String} tag The tag changes are being generated for.
 * @param {Ora} spinner Terminal spinner.
 *
 * @returns Updated changelog markdown.
 */
const changelog = async (tag, spinner) => {
  let retVal;

  info('Generating changelog...', spinner);

  const write = util.promisify(fs.write);
  const open = util.promisify(temp.open);
  const { path, fd } = await open({ prefix: 'CHANGELOG', suffix: '.md' });
  const markdown = await garden.lernaChangelog({ spinner });
  const editor = await execa('git', ['var', 'GIT_EDITOR']);

  await write(fd, markdown);
  await execa.command(`${editor.stdout} ${path}`);

  const readFile = util.promisify(fs.readFile);
  const INSERTION_SLUG = '<!-- insert-new-changelog-here -->';
  const changelogPath = resolve(__dirname, '..', '..', 'CHANGELOG.md');
  const data = await readFile(changelogPath, 'utf8');

  if (data.includes(INSERTION_SLUG)) {
    const writeFile = util.promisify(fs.writeFile);
    const changes = (await readFile(path, 'utf8')).split('\n\n#### Committers')[0];

    retVal = data.replace(INSERTION_SLUG, `${INSERTION_SLUG}\n${changes}`);
    await writeFile(changelogPath, retVal);
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
 * @param {String} tag The tag for the new release.
 * @param {String} markdown Markdown content.
 * @param {Ora} spinner Terminal spinner.
 *
 * @returns The draft release URL.
 */
const release = async (tag, markdown, spinner) => {
  info('Creating release...', spinner);
  await execa('git', ['push', '--follow-tags', '--no-verify', '--atomic', 'origin', 'master']);

  const url = await garden.githubRelease({ tag, body: markdown, spinner });

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
 * Sync local master branch and tags with GitHub remote.
 *
 * @param {String} master Name for the master branch being used for tagging.
 * @param {Ora} spinner Terminal spinner.
 */
const sync = async (master, spinner) => {
  const branch = await garden.githubBranch(undefined /* path */, spinner);

  if (branch === master) {
    info('Syncing with remote...', spinner);
    await execa('git', ['pull']);
    await execa('git', ['fetch', '--tags', '--prune', '--prune-tags']);
    spinner.stop();
    await execa('yarn', ['install'], { stdout: process.stdout });
  } else {
    throw new Error(`Switch to the ${master} branch`);
  }
};

/**
 * Bump and publish package versions.
 *
 * @param {String} bump Semantic or explicit versioning bump.
 * @param {String} preid Prerelease ID as defined by https://semver.org/#spec-item-9.
 * @param {String} master Name for the master branch being used for tagging.
 * @param {Ora} spinner Terminal spinner.
 *
 * @returns New version tag.
 */
const version = async (bump, preid, master, spinner) => {
  const lernaArgs = [
    'lerna',
    'version',
    '--conventional-commits',
    '--force-publish',
    '--no-changelog',
    '--no-push'
  ];
  const describeArgs = ['describe', '--abbrev=0', '--tags'];
  let tag;

  if (bump) {
    lernaArgs.splice(2, 0, bump);
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

  if (master) {
    lernaArgs.push('--allow-branch', master);
  }

  await execa('yarn', lernaArgs, { stdin: process.stdin, stdout: process.stdout });

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
  .option('-m, --master <master>', 'Master branch name', 'master')
  .option('-p, --preid <preid>', 'Prerelease identifier')
  .action(async bump => {
    const spinner = ora();

    try {
      spinner.start();
      await sync(program.master, spinner);

      const tag = await version(bump, program.preid, program.master, spinner);
      const markdown = await changelog(tag, spinner);

      spinner.stop();

      const prompt = await inquirer.prompt([
        {
          type: 'confirm',
          message: `Confirm ${tag} release to the ${program.master} branch?`,
          name: 'release',
          default: true
        }
      ]);

      if (prompt.release) {
        await release(tag, markdown, spinner);
      } else {
        await rollback(tag, spinner);
      }
    } catch (error) {
      spinner.fail(error.message || error);
      process.exit(1);
    } finally {
      spinner.stop();
    }
  })
  .parse(process.argv);
