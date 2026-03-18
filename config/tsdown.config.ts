/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { defineConfig } from 'tsdown';
import svgr from 'vite-plugin-svgr';

import pkg from '../package.json' with { type: 'json' };
import svgrConfig from './svgr.config.json' with { type: 'json' };

const define = { PACKAGE_VERSION: JSON.stringify(pkg.version) };

const neverBundle = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {})
].map(value => new RegExp(`^${value}/?.*`, 'u'));

const plugins = [svgr(svgrConfig as any), vanillaExtractPlugin()];

export default defineConfig({
  deps: {
    neverBundle,
    onlyBundle: false
  },
  define,
  entry: '../src/index.ts',
  format: ['cjs', 'esm'],
  outDir: '../dist',
  platform: 'browser',
  plugins,
  publint: true,
  target: 'es2022',
  unbundle: true
});
