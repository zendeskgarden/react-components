/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import pkg from '../package.json' with { type: 'json' };

const BANNER = `/*!
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */`;

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {})
].map(value => new RegExp(`^${value}/?.*`, 'u'));

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external,
      output: {
        banner: BANNER
      }
    }
  },
  define: {
    PACKAGE_VERSION: JSON.stringify(pkg.version)
  },
  plugins: [react()]
});
