#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import ts from 'typescript';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const NAME = '@zendeskgarden/react-components';
const errors = [];

const read = file => fs.readFileSync(file, 'utf8');

const walk = dir =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);

    return entry.isDirectory() ? walk(file) : [file];
  });

const count = (files, pattern) =>
  files.reduce((total, file) => total + (read(file).match(pattern) || []).length, 0);

/* Source text without comments, so a mention in a comment is not counted */
const withoutComments = text =>
  text.replace(/\/\*[\s\S]*?\*\//gu, '').replace(/(?<before>^|[^:])\/\/.*$/gmu, '$<before>');

const countInCode = (files, pattern) =>
  files.reduce(
    (total, file) => total + (withoutComments(read(file)).match(pattern) || []).length,
    0
  );

/* Comments that v9's output did not have: all but the banner and the `__PURE__` annotations.
   A parser finds them, because CSS comments inside template literals are text, not comments. */
const countStrayComments = files => {
  const allowed =
    /^(?:\/\* [#@]__(?:PURE|NO_SIDE_EFFECTS)__ \*\/|\/\*\*\n\* Copyright Zendesk[\s\S]*)$/u;
  let total = 0;

  for (const file of files) {
    const text = read(file);
    const sourceFile = ts.createSourceFile(
      file,
      text,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.JS
    );
    const found = new Map();
    const visit = node => {
      if (node.kind >= ts.SyntaxKind.FirstJSDocNode && node.kind <= ts.SyntaxKind.LastJSDocNode) {
        return;
      }

      for (const range of ts.getLeadingCommentRanges(text, node.pos) ?? []) {
        found.set(range.pos, text.slice(range.pos, range.end));
      }

      node.getChildren(sourceFile).forEach(visit);
    };

    visit(sourceFile);
    total += [...found.values()].filter(comment => !allowed.test(comment)).length;
  }

  return total;
};

/* Names imported from styled-components in declarations: `import { a, type b }` and `import("styled-components").c` */
const styledTypes = files =>
  files.flatMap(file => {
    const text = read(file);

    return [
      ...[
        ...text.matchAll(/import (?:type )?\{(?<list>[^}]*)\} from "styled-components"/gu)
      ].flatMap(({ groups }) =>
        groups.list.split(',').map(item => item.trim().replace(/^type\s+/u, ''))
      ),
      ...[...text.matchAll(/import\("styled-components"\)\.(?<name>\w+)/gu)].map(
        ({ groups }) => groups.name
      )
    ].filter(name => name && !['CSSObject', 'Interpolation'].includes(name));
  });

/* Names that a declaration file exports: `export { a, b as c }` and `export declare const d` */
const exportedNames = text => {
  const names = new Set();

  for (const { groups } of text.matchAll(/^export \{(?<list>[^}]*)\}/gmu)) {
    for (const item of groups.list.split(',')) {
      const name = item
        .trim()
        .replace(/^type\s+/u, '')
        .split(/\s+as\s+/u)
        .pop();

      if (name) {
        names.add(name);
      }
    }
  }

  for (const { groups } of text.matchAll(
    /^export (?:declare )?(?:abstract )?(?:const|let|var|function|class|enum|interface|type|namespace) (?<name>\w+)/gmu
  )) {
    names.add(groups.name);
  }

  return names;
};

const pkg = JSON.parse(read(path.join(ROOT, 'package.json')));
const files = walk(DIST);
const scripts = files.filter(file => /\.c?js$/u.test(file));
const esmScripts = scripts.filter(file => file.endsWith('.js'));
const cjsScripts = scripts.filter(file => file.endsWith('.cjs'));
const declarations = files.filter(file => file.endsWith('.d.ts'));
const cjsDeclarations = files.filter(file => file.endsWith('.d.cts'));
/* Test helpers in `src/test/` are not part of the build */
const sources = walk(path.join(ROOT, 'src')).filter(
  file =>
    /(?<!\.test)\.tsx?$/u.test(file) &&
    !file.startsWith(`${path.join(ROOT, 'src', 'test')}${path.sep}`)
);

/* Both entry points load through the package `exports` map */
const esm = Object.keys(await import(NAME)).sort();
const cjs = Object.keys(createRequire(import.meta.url)(NAME)).sort();

if (esm.length === 0 || esm.join() !== cjs.join()) {
  errors.push(`ESM (${esm.length}) and CJS (${cjs.length}) exports differ`);
}

/* Every runtime export is declared, for both entry points */
for (const [label, file] of [
  ['index.d.ts', path.join(DIST, 'index.d.ts')],
  ['index.d.cts', path.join(DIST, 'index.d.cts')]
]) {
  const declared = fs.existsSync(file) ? exportedNames(read(file)) : new Set();
  const missing = esm.filter(name => !declared.has(name));

  if (missing.length > 0) {
    errors.push(`exports missing from ${label}: ${missing.join(', ')}`);
  }
}

/* Class names come from the styled-components `componentId`, so two components must not share one */
const componentIds = scriptFiles =>
  scriptFiles.flatMap(file =>
    [...read(file).matchAll(/componentId: "(?<id>[^"]+)"/gu)].map(match => match.groups.id)
  );
const esmComponentIds = componentIds(esmScripts);
const cjsComponentIds = componentIds(cjsScripts);

const checks = [
  [
    'duplicate styled-components `componentId` values (ESM)',
    esmComponentIds.length - new Set(esmComponentIds).size,
    0
  ],
  [
    'duplicate styled-components `componentId` values (CJS)',
    cjsComponentIds.length - new Set(cjsComponentIds).size,
    0
  ],
  [
    'styled-components `componentId` values in only one of ESM and CJS',
    new Set(esmComponentIds).symmetricDifference(new Set(cjsComponentIds)).size,
    0
  ],
  [
    'private or version-specific types in declarations',
    count(
      [...declarations, ...cjsDeclarations],
      /react\/jsx-runtime|["']prop-types["']|styled-components\/|\bThemeProviderProps\b|\bRuleSet\b|\bIStyledComponent(?:Base)?\b|\bFastOmit\b|\bStyledComponent\b/gu
    ),
    0
  ],
  [
    'styled-components types that 5 or 6 does not export, in declarations',
    styledTypes([...declarations, ...cjsDeclarations]).join(),
    ''
  ],
  [
    'files without the license banner',
    scripts.filter(file => !read(file).startsWith('/**\n* Copyright Zendesk')).length,
    0
  ],
  ['comments other than the banner and `__PURE__`', countStrayComments(scripts), 0],
  ['`data-test` attributes', count(scripts, /data-test/gu), 0],
  ['`react/jsx-runtime` imports', count(scripts, /react\/jsx-runtime/gu), 0],
  [
    '`dist/node_modules` files',
    files.filter(file => file.includes(`${path.sep}node_modules${path.sep}`)).length,
    0
  ],
  ['`sideEffects: false` missing from package.json', pkg.sideEffects === false ? 0 : 1, 0],
  ['CommonJS files', cjsScripts.map(file => path.relative(DIST, file)).join(), 'index.cjs'],
  [
    'styled-components `withConfig` calls (ESM)',
    count(esmScripts, /\.withConfig\(/gu),
    countInCode(sources, /\bstyled(?:\.[a-z]|\()/gu)
  ],
  [
    'styled-components `withConfig` calls (CJS)',
    count(cjsScripts, /\.withConfig\(/gu),
    countInCode(sources, /\bstyled(?:\.[a-z]|\()/gu)
  ],
  [
    '`process.env.NODE_ENV` reads (ESM)',
    count(esmScripts, /process\.env\.NODE_ENV/gu),
    countInCode(sources, /process\.env\.NODE_ENV/gu)
  ],
  [
    '`process.env.NODE_ENV` reads (CJS)',
    count(cjsScripts, /process\.env\.NODE_ENV/gu),
    countInCode(sources, /process\.env\.NODE_ENV/gu)
  ],
  [
    '`@deprecated` tags in declarations (index.d.ts files)',
    count(declarations, /@deprecated/gu),
    count(sources, /@deprecated/gu)
  ],
  [
    '`@deprecated` tags in declarations (index.d.cts)',
    count(cjsDeclarations, /@deprecated/gu),
    count(sources, /@deprecated/gu)
  ]
];

for (const [label, actual, expected] of checks) {
  if (actual !== expected) {
    errors.push(`${label}: ${actual} (expected ${expected})`);
  }
}

if (errors.length > 0) {
  throw new Error(errors.join('\n'));
}

/* eslint-disable-next-line no-console */
console.log(`dist OK: ${esm.length} exports, ${scripts.length} script files`);
