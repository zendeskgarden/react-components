/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

import svgrConfig from './svgr.config.json' with { type: 'json' };

const PACKAGE_VERSION = JSON.stringify('version');

export default defineConfig({
  define: { PACKAGE_VERSION },
  plugins: [svgr(svgrConfig as any)],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.ts?(x)'],
    setupFiles: ['config/vitest.setup.ts']
  }
});
