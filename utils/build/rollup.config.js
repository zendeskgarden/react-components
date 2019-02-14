/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const postcss = require('rollup-plugin-postcss');
const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');
const svgr = require('@svgr/rollup').default;
const external = require('@yelo/rollup-node-external');
const packageManifest = require(path.resolve('package.json'));

const IS_WEB = process.env.TARGET === 'web';
// const IS_NODE = process.env.TARGET === 'node';

const OUTPUT_PATH = path.resolve('dist');
const BANNER = `
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

`.trimLeft();

/**
 * Creates an output configuration with defaults
 * @param {Object} options
 */
function getOutput(options) {
  return {
    dir: OUTPUT_PATH,
    banner: BANNER,
    sourcemap: true,
    ...options
  };
}

module.exports = {
  input: path.resolve('src', 'index.js'),
  output: [
    getOutput({
      entryFileNames: 'index.js',
      format: 'cjs'
    }),
    IS_WEB &&
      getOutput({
        entryFileNames: 'index.mjs',
        format: 'esm'
      }),
    IS_WEB &&
      getOutput({
        name: packageManifest['zendeskgarden:library'],
        entryFileNames: 'bundle.js',
        format: 'umd'
      })
  ].filter(Boolean),
  external:
    IS_WEB &&
    external({
      modulesFromFile: true,
      whitelist: [/@zendeskgarden\/css/u, /\.css$/u]
    }),
  plugins: [
    IS_WEB &&
      resolve({
        browser: true,
        preferBuiltins: false,
        extensions: ['.js', '.mjs', '.css', '.jsx']
      }),
    commonjs({
      include: /node_modules/u
    }),
    replace({
      PACKAGE_VERSION: JSON.stringify(packageManifest.version)
    }),
    IS_WEB &&
      postcss({
        extract: path.join(OUTPUT_PATH, 'styles.css'),
        modules: {
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }),
    IS_WEB &&
      svgr({
        config: {
          plugins: { removeViewBox: false }
        }
      }),
    babel({
      configFile: path.resolve(__dirname, '../../babel.config.js'),
      include: /packages\/[\w-]+\/(?!node_modules)/u
    }),
    IS_WEB && terser()
  ].filter(Boolean)
};
