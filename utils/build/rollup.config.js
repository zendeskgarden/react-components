/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import path from 'node:path';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import _esbuild from 'rollup-plugin-esbuild';
import analyze from 'rollup-plugin-analyzer';
import del from 'rollup-plugin-delete';
import svgr from '@svgr/rollup';
import _dts from 'rollup-plugin-dts';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import { babel } from '@rollup/plugin-babel';

const pkg = require(path.resolve('./package.json'));
const svgoConfig = require(path.resolve('../../.svgo.config.js'));

const esbuild = _esbuild.default || _esbuild;
const dts = _dts.default || _dts;

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

export default [
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
      babel({
        babelHelpers: 'bundled',
        babelrc: false,
        exclude: 'node_modules/**',
        extensions: ['.tsx', '.ts', ...DEFAULT_EXTENSIONS],
        presets: [['@babel/preset-typescript', { onlyRemoveTypeImports: true }]],
        plugins: [
          'babel-plugin-styled-components',
          ['react-remove-properties', { properties: [/data-test/u] }]
        ]
      }),
      esbuild({
        include: /\.[jt]sx?$/u,
        exclude: /node_modules/u,
        target: 'es2021',
        tsconfig: 'tsconfig.build.json',
        loaders: {
          '.json': 'json'
        },
        define: {
          PACKAGE_VERSION: `'${pkg.version}'`
        },
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment'
      }),
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
  },
  // Generates *.d.ts files
  {
    input: pkg['zendeskgarden:src'],
    output: [
      {
        dir: path.dirname(pkg.types),
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    plugins: [dts()],
    external: externalPackages
  }
];
