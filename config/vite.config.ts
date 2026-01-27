/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import react from '@vitejs/plugin-react';
import { dirname } from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import pkg from '../package.json' with { type: 'json' };

const banner = `/*!
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
      fileName: 'index'
    },
    rollupOptions: {
      external,
      output: [
        {
          banner,
          format: 'cjs'
        },
        {
          banner,
          dir: dirname(pkg.module),
          entryFileNames: '[name].js',
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src'
        }
      ]
    }
  },
  define: {
    PACKAGE_VERSION: JSON.stringify(pkg.version)
  },
  plugins: [react(), svgr()]
});
