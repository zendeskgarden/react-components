'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var path = require('path');
var fs = require('fs');
var core = require('@babel/core');
var commonjs = require('@rollup/plugin-commonjs');
var replace = require('@rollup/plugin-replace');
var nodeResolve = require('@rollup/plugin-node-resolve');
var typescript = require('rollup-plugin-typescript2');
var pluginBabel = require('@rollup/plugin-babel');
var analyze = require('rollup-plugin-analyzer');
var cleanup = require('rollup-plugin-cleanup');
var del = require('rollup-plugin-delete');
var svgr = require('@svgr/rollup');
var tsc = require('typescript');

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


const pkg = require(path.resolve('./package.json'));
const svgoConfig = require(path.resolve('../../.svgo.config.js'));
const babelOptions = require(path.resolve('../../babel.config.js'));
const isTSPackage = fs.existsSync(path.resolve('tsconfig.build.json'));

const externalPackages = [
  'react',
  'react-dom',
  'prop-types',
  'styled-components',
  'react-uid',
  '@zendeskgarden/react-theming',
  ...Object.keys(pkg.dependencies || {})
].map(external => new RegExp(`^${external}/?.*`, 'u'));

const BANNER = `/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/`;

var rollup_config = [
  {
    input: pkg['zendeskgarden:src'],
    /**
     * Filter out dependencies that consumers
     * will bundle during build time
     */
    external: id => externalPackages.filter(regexp => regexp.test(id)).length > 0,
    plugins: [
      /**
       * Remove existing dist files and type definitions
       */
      del({ targets: 'dist/*' }),
      nodeResolve({
        mainFields: ['module', 'main', 'jsnext', 'browser']
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      svgr({ svgoConfig }),
      isTSPackage &&
        typescript({
          check: false,
          tsconfig: 'tsconfig.build.json',
          useTsconfigDeclarationDir: true,
          typescript: tsc
        }),
      pluginBabel.babel({
        babelHelpers: 'bundled',
        babelrc: false,
        exclude: 'node_modules/**', // only transpile our source code
        ...babelOptions,
        extensions: ['.tsx', '.ts', ...core.DEFAULT_EXTENSIONS]
      }),
      /**
       * Replace PACKAGE_VERSION constant with the current package version
       */
      replace({ PACKAGE_VERSION: `'${pkg.version}'`, preventAssignment: true }),
      /**
       * Remove comments from source files
       */
      cleanup({ extensions: ['js', 'jsx', 'ts', 'tsx'] }),
      /**
       * Only enforce matching size snapshot files in CI environments
       */
      // sizeSnapshot({
      //   matchSnapshot: !!process.env.CI,
      //   printInfo: !!process.env.CI || !!process.env.ANALYZE_BUNDLE
      // }),
      !!process.env.ANALYZE_BUNDLE && analyze({ summaryOnly: true })
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        interop: 'auto',
        banner: BANNER // Apply global Zendesk license
      },
      {
        dir: path.dirname(pkg.module),
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        banner: BANNER // Apply global Zendesk license
      }
    ]
  }
];

exports.default = rollup_config;
