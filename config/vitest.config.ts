/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

import svgrConfig from './svgr.config.json' with { type: 'json' };

const coverage = { reportsDirectory: '.cache/coverage' };
const define = { PACKAGE_VERSION: JSON.stringify('version') };
const plugins = [svgr(svgrConfig as any), vanillaExtractPlugin()];

export default defineConfig({
  define,
  plugins,
  test: {
    coverage,
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.ts?(x)'],
    setupFiles: ['config/vitest.setup.ts']
  }
});
