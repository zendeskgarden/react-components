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
    // prevents bundling of external files, similar to webpack-node-externals library
    IS_WEB &&
    external({
      modulesFromFile: true,
      whitelist: [/@zendeskgarden\/css/u, /\.css$/u]
    }),
  plugins: [
    // resolves node dependencies, including css and other file types, similar to webpack's resolve
    IS_WEB &&
      resolve({
        browser: true,
        preferBuiltins: false,
        extensions: ['.js', '.mjs', '.css', '.jsx']
      }),
    // since rollup only understands ES6 exports, this allows resolving of commonjs files
    commonjs({
      include: /node_modules/u
    }),
    // Replaces global variables with inline variables, similar to webpack's DefinePlugin
    replace({
      PACKAGE_VERSION: JSON.stringify(packageManifest.version)
    }),
    // postcss to handle css modules and autoprefixing
    IS_WEB &&
      postcss({
        // outputs to single styles.css file
        extract: path.join(OUTPUT_PATH, 'styles.css'),
        modules: {
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }),
    // handles loading svg as react components, similar to svgr-loader
    IS_WEB &&
      svgr({
        config: {
          plugins: { removeViewBox: false }
        }
      }),
    // handles transpiling ES6 to ES5
    babel({
      configFile: path.resolve(__dirname, '../../babel.config.js'),
      include: /packages\/[\w-]+\/(?!node_modules)/u
    }),
    // minifies files using terser, similar to uglifyjs
    IS_WEB && terser()
  ].filter(Boolean)
};
