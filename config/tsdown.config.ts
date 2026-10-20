/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, type UserConfig } from 'tsdown';
import svgr from 'vite-plugin-svgr';

import pkg from '../package.json' with { type: 'json' };
import svgrConfig from './svgr.config.json' with { type: 'json' };

const BANNER = `/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/`;

const neverBundle = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {})
].map(value => new RegExp(`^${value}(/.*)?$`, 'u'));

const comments = { annotation: true, jsdoc: false, legal: false };

/* Bundled third-party modules (SVG icons) land in `_vendor/` instead of `node_modules/.pnpm/…` */
const VENDOR_PATH = /^.*?node_modules\/(?:\.pnpm\/[^/]+\/node_modules\/)?/u;

const esmOutput: UserConfig['outputOptions'] = {
  comments,
  entryFileNames: chunk =>
    chunk.name.includes('node_modules')
      ? `_vendor/${chunk.name.replace(VENDOR_PATH, '')}.js`
      : '[name].js'
};

/* Builds drop coverage hints (`istanbul ignore`), as v9's output had no comments except the banner */
const removeCoverageHints = {
  name: 'garden:remove-coverage-hints',
  transform: {
    filter: { id: /[\\/]src[\\/].*\.tsx?$/u, code: 'istanbul ignore' },
    handler(code: string) {
      const retVal = code.replace(/\/\*\s*istanbul ignore[^*]*\*\//gu, '');

      return retVal === code ? null : { code: retVal, map: null };
    }
  }
};

/* Production builds drop `data-test-*` JSX attributes, as v9's Babel config did */
const removeDataTestAttributes = {
  name: 'garden:remove-data-test-attributes',
  transform: {
    filter: { id: /[\\/]src[\\/].*\.tsx$/u, code: 'data-test' },
    handler(this: { parse: (code: string, options: { lang: 'tsx' }) => unknown }, code: string) {
      const ranges: [number, number][] = [];
      const visit = (node: any) => {
        if (node?.type === 'JSXAttribute' && node.name?.name?.startsWith?.('data-test')) {
          ranges.push([node.start, node.end]);
        } else if (node && typeof node === 'object') {
          for (const value of Object.values(node)) {
            if (Array.isArray(value)) {
              value.forEach(visit);
            } else if (value && typeof value === 'object') {
              visit(value);
            }
          }
        }
      };

      visit(this.parse(code, { lang: 'tsx' }));

      if (ranges.length === 0) {
        return null;
      }

      let retVal = code;

      for (const [start, end] of ranges.sort((a, b) => b[0] - a[0])) {
        retVal = retVal.slice(0, start) + retVal.slice(end);
      }

      return { code: retVal, map: null };
    }
  }
};

const ROOT = fileURLToPath(new URL('..', import.meta.url));

/* The styled-components transform hashes the file content into each `componentId`, so any edit
   to a file renames its classes. Hash the package name, the source path and the display name
   instead: a class name then changes only when its file moves or its component is renamed. */
const stableComponentIds = {
  name: 'garden:stable-component-ids',
  renderChunk(code: string, chunk: { modules: Record<string, { code: string | null }> }) {
    const ids = new Map<string, string>();

    for (const [id, module] of Object.entries(chunk.modules)) {
      const file = path.relative(ROOT, id).split(path.sep).join('/');

      if (!module.code || !file.startsWith('src/')) {
        continue;
      }

      const pairs = [
        ...module.code.matchAll(/displayName: "(?<name>[^"]+)",\s*componentId: "(?<old>[^"]+)"/gu)
      ];

      if (pairs.length !== (module.code.match(/componentId: "/gu) || []).length) {
        throw new Error(`${file}: a \`componentId\` without a \`displayName\``);
      }

      for (const { groups } of pairs) {
        const { name, old } = groups as { name: string; old: string };
        const hash = createHash('sha256')
          .update(`${pkg.name} ${file} ${name}`)
          .digest()
          .readUInt32BE(0)
          .toString(36);

        if (ids.has(old)) {
          throw new Error(`${file}: \`componentId\` "${old}" is not unique`);
        }

        ids.set(old, `sc-${hash}-0`);
      }
    }

    if (ids.size === 0) {
      return null;
    }

    return {
      code: code.replace(
        /componentId: "(?<old>[^"]+)"/gu,
        (_match, old: string) => `componentId: "${ids.get(old) ?? old}"`
      ),
      map: null
    };
  }
};

export default defineConfig({
  attw: { level: 'error', profile: 'strict' },
  banner: BANNER,
  define: { PACKAGE_VERSION: JSON.stringify(pkg.version) },
  deps: { neverBundle, onlyBundle: false },
  entry: '../src/index.ts',
  format: {
    cjs: { outputOptions: { comments }, unbundle: false },
    esm: { outputOptions: esmOutput, unbundle: true }
  },
  inputOptions: {
    experimental: { attachDebugInfo: 'none' },
    transform: {
      inject: { React: 'react' },
      jsx: { development: false, runtime: 'classic' },
      plugins: {
        styledComponents: {
          displayName: true,
          fileName: true,
          minify: true,
          pure: false,
          ssr: true,
          transpileTemplateLiterals: true
        }
      }
    }
  },
  outDir: '../dist',
  /* `browser` would replace `process.env.NODE_ENV` at build time. `neutral` leaves it for the consumer's bundler, as in v9 */
  platform: 'neutral',
  plugins: [
    svgr({ ...(svgrConfig as any), oxcOptions: { jsx: { runtime: 'classic' } } }),
    removeCoverageHints,
    removeDataTestAttributes,
    stableComponentIds
  ],
  publint: true,
  target: 'es2022'
});
