/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  RENAME_IMPORTS_TRANSFORMER_CHOICES,
  SUBCOMPONENTS_TRANSFORMER_CHOICES,
  allTransformIds
} from '../v8-v9/constants';

export interface JsCodeshiftDefaultOptions {
  babel?: boolean; // apply babeljs to the transform file (default: true)
  cpus?: number; // start at most N child processes to process source files (default: max(all - 1, 1))
  dry?: boolean; // dry run (no changes are made to files) (default: false)
  extensions?: string; // transform files with these file extensions (comma separated list) (default: js)
  help?: boolean; // print this help and exit
  ignoreConfig?: string | string[]; // ignore files if they match patterns sourced from a configuration file
  ignorePattern?: string | string[]; // ignore files that match a provided glob expression
  gitignore?: boolean; // adds entries from the current directory's .gitignore file (default: false)
  parser?: 'babel' | 'babylon' | 'flow' | 'ts' | 'tsx'; // the parser to use for parsing the source files (default: babel)
  parserConfig?: string; // path to a JSON file containing a custom parser configuration for flow or babylon
  print?: boolean; // print transformed files to stdout, useful for development (default: false)
  runInBand?: boolean; // run serially in the current process (default: false)
  silent?: boolean; // do not write to stdout or stderr (default: false)
  stdin?: boolean; // read file/directory list from stdin (default: false)
  transform?: string; // path to the transform file. Can be either a local path or URL (default: ./transform.js)
  verbose?: 0 | 1 | 2; // show more information about the transform process (default: 0)
  version?: boolean; // print version and exit
  failOnError?: boolean; // return a 1 exit code when errors were found during execution of codemods
}

export type SubComponentsTransformIds = Exclude<
  (typeof SUBCOMPONENTS_TRANSFORMER_CHOICES)[number]['value'],
  'chrome-subComponents'
>;

export type RenameImportsTranformIds = (typeof RENAME_IMPORTS_TRANSFORMER_CHOICES)[number]['value'];

export type AllTransformIds = (typeof allTransformIds)[number];

export interface SubComponentsTransformOptions extends JsCodeshiftDefaultOptions {
  transformId: SubComponentsTransformIds;
}

export interface RenameNamedImportsTransformOptions extends JsCodeshiftDefaultOptions {
  transformId: RenameImportsTranformIds;
}

export type SubComponentPropertiesOptions = {
  importSource: string;
  mainComponent: string;
  subComponents: string[] | Record<string, string>;
  bannedComponents?: string[];
};
