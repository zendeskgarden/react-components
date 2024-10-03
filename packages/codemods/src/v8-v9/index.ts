/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import fs from 'node:fs';
import path from 'node:path';
import { Command } from 'commander';
import { createRequire } from 'node:module';
import { execaSync } from 'execa';
import { fileURLToPath } from 'node:url';
import { globbySync } from 'globby';
import { input, select, confirm, Separator } from '@inquirer/prompts';
import { Ora } from 'ora';
import chalk from 'chalk';
import {
  ALL_TRANSFORMER_CHOICES,
  CHROME_SUBCOMPONENTS_TRANSFORMER_CHOICE,
  DROPDOWNS_MIGRATION_TRANSFORMER_CHOICE,
  PARSER_CHOICES,
  RENAME_IMPORTS_TRANSFORMER_CHOICES,
  SUBCOMPONENTS_TRANSFORMER_CHOICES
} from './constants';
import { AllTransformIds } from 'packages/codemods/src/types';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const transformsDir = path.join(__dirname, './transforms');
const jscodeshiftExecutable = createRequire(import.meta.url).resolve('.bin/jscodeshift');

interface Flags {
  dry: boolean;
  print: boolean;
  jscodeshift: string;
  parser: string;
}

export function execute({
  files,
  flags,
  transformId
}: {
  files: string[];
  flags: Flags;
  transformId: AllTransformIds;
}) {
  const transformPath = resolveTransform(transformId);

  if (!transformPath) {
    throw new Error(`transform for "${transformId}" not found.`);
  }

  const { dry, jscodeshift, parser, print } = flags;

  const JsCodeshiftOptions =
    typeof jscodeshift === 'string' && jscodeshift.length ? [...jscodeshift.split(' ')] : [];

  const args = [
    ...(dry ? ['--dry'] : []),
    ...(print ? ['--print'] : []),
    '--verbose',
    '2',
    // multiple ignore-patterns: https://github.com/facebook/jscodeshift/blob/4a3878f83670743511d0d93436468ce5f56b1dfd/README.md#L421
    '--ignore-pattern',
    '**/node_modules/**',
    '--ignore-pattern',
    '**/*.d.ts',
    '--parser',
    parser,
    '--extensions',
    parser === 'tsx' ? 'tsx,ts,jsx,js' : 'jsx,js',
    '--transform',
    transformPath,
    '--transformId', // internal flag to pass transformId to the transform
    transformId,
    ...JsCodeshiftOptions,
    ...files
  ];

  console.log(chalk.cyan(`Executing command: jscodeshift ${args.join(' ')}`));

  execaSync(jscodeshiftExecutable, args, {
    stdio: 'inherit'
  });
}

export default (spinner: Ora): Command => {
  const command = new Command('v8-v9');

  return command
    .description('A collection of codemods to help migrate from Garden v8 to v9')
    .argument(
      '[transform]',
      'The transform to run. If not provided, a list of transforms will be shown.'
    )
    .argument(
      '[paths...]',
      'Files or directory to transform. Can be a glob like src/components/**.tsx'
    )
    .option('--force', 'Forcibly run codemods despite git status')
    .option('--dry', 'Perform a dry run')
    .option('--print', 'Print the transformed files')
    .option('--parser <parser>', 'Choose parser: babel, tsx')
    .option(
      '--jscodeshift <jscodeshift>',
      'Directly pass options to jscodeshift (advanced). Ex: --jscodeshift="--verbose=1 --cpus=4"'
    )
    .addHelpText('before', '\n') // pad the help text
    .addHelpText('after', `\nTo follow the interactive prompt, run "garden-codemods v8-v9"\n`)
    .action(async (maybeTransformId: string | undefined, paths: string[]) => {
      const { dry, force, print, parser: parserFlag, jscodeshift } = command.opts();

      try {
        if (!dry) {
          checkGitStatus(force);
        }

        let validTransformId = maybeGetValidTransformId(maybeTransformId);
        const hasInvalidTransformId = maybeTransformId?.length && !validTransformId;

        if (!validTransformId) {
          if (hasInvalidTransformId) {
            console.log(
              chalk.yellow(`\nThe provided transformId "${maybeTransformId}" is invalid.\n`)
            );
          }

          validTransformId = await select({
            message: `Found ${ALL_TRANSFORMER_CHOICES.length} transforms. Which one would you like to apply?`,
            choices: [
              DROPDOWNS_MIGRATION_TRANSFORMER_CHOICE,
              ...RENAME_IMPORTS_TRANSFORMER_CHOICES,
              new Separator(),
              CHROME_SUBCOMPONENTS_TRANSFORMER_CHOICE,
              ...SUBCOMPONENTS_TRANSFORMER_CHOICES
            ],
            loop: false,
            pageSize: 8
          });
        }

        let validParser = getValidParser(parserFlag);
        const hasInvalidParser = parserFlag?.length && !validParser;

        if (!validParser) {
          if (hasInvalidParser) {
            console.log(chalk.yellow(`\nThe provided parser flag "${parserFlag}" is invalid.\n`));
          }
          validParser =
            getValidParser(parserFlag) ||
            (await select({
              message: 'Which dialect of JavaScript do you use?',
              choices: PARSER_CHOICES,
              default: 'babel'
            }));
        }

        let files = paths;
        if (
          !files.length ||
          // handle case where positional args are incorrect due to missing transformId
          hasInvalidTransformId
        ) {
          const filesInput = await input({
            message: 'On which files or directory should the codemods be applied?',
            default: '.',
            validate: val => val.trim().length > 0 || 'Please enter a valid path or pattern.'
          });

          files = filesInput.split(' ');
        }

        const filesExpanded = expandFilePathsIfNeeded(files);

        if (!filesExpanded.length) {
          console.log(chalk.red(`No files found matching ${files.join(' ')}`));
          return;
        }

        const shouldProceed = await confirm({
          message: `Ready to run "${validTransformId}" on "${files.join(', ')}" with "${validParser}" parser. Proceed?`,
          default: true
        });

        if (!shouldProceed) {
          console.log(chalk.yellow('Operation cancelled.'));
          return;
        }

        spinner.start();

        execute({
          files: filesExpanded,
          flags: {
            dry,
            print,
            jscodeshift,
            parser: validParser
          },
          transformId: validTransformId
        });
      } catch (e: any) {
        throw new Error(e.message);
      } finally {
        spinner.stop();
      }
    });
};

function maybeGetValidTransformId(id = ''): AllTransformIds | undefined {
  const transformerChoice =
    id?.length && ALL_TRANSFORMER_CHOICES.find(choice => choice.value === id.trim());

  return transformerChoice ? transformerChoice.value : undefined;
}

function getValidParser(parser = ''): (typeof PARSER_CHOICES)[number]['value'] | undefined {
  const parserChoice = PARSER_CHOICES.find(choice => choice.value === parser.trim());

  return parserChoice ? parserChoice.value : undefined;
}

function checkGitStatus(force: boolean) {
  const errorMessage = 'Git directory is not clean';

  try {
    // Check if inside a git work tree
    execaSync('git', ['rev-parse', '--is-inside-work-tree'], { cwd: process.cwd() });

    // Check the status of the git directory
    const { stdout } = execaSync('git', ['status', '--short'], { cwd: process.cwd() });
    const isClean = stdout.length === 0;

    if (!isClean) {
      if (force) {
        console.log(chalk.yellow(`\nWARNING: ${errorMessage}. Forcibly continuing.\n`));
      } else {
        throw new Error(
          `${errorMessage}. Please commit or stash your changes before proceeding or use --force.`
        );
      }
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
}
function resolveTransform(id: string) {
  const fileName = id.split('-')[1];
  const filePath = path.join(transformsDir, `${fileName}.mjs`);

  return fs.existsSync(filePath) ? filePath : null;
}

function expandFilePathsIfNeeded(filesBeforeExpansion: string[]) {
  const shouldExpandFiles = filesBeforeExpansion.some(file => file.includes('*'));

  return shouldExpandFiles ? globbySync(filesBeforeExpansion) : filesBeforeExpansion;
}
