/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const _ = require('lodash');
const packageManifest = require(path.resolve('package.json'));
const customStyleguideConfig = require(path.resolve('styleguide.config.js'));
const basePathName = path.basename(path.resolve('./'));

const defaultStyleguideConfig = {
  title: 'Zendesk Garden',
  assetsDir: path.resolve(__dirname, 'public'),
  skipComponentsWithoutExample: false,
  serverPort: 5000,
  styleguideDir: `../../demo/${basePathName}`,
  showUsage: true,
  template: {
    head: {
      meta: [
        {
          name: 'google',
          content: 'notranslate'
        }
      ]
    }
  },
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true
    },
    objectAssign: 'Object.assign'
  },
  require: [
    'babel-polyfill',
    path.resolve(__dirname, 'setup.js'),
    path.resolve(__dirname, 'styles.css')
  ],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.example.md');
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');

    return `import ${name} from '${packageManifest.name}/${name}'`;
  },
  styleguideComponents: {
    Wrapper: path.resolve(__dirname, 'Wrapper'),
    TableOfContentsRenderer: path.resolve(__dirname, 'TableOfContentsRenderer'),
    LogoRenderer: path.resolve(__dirname, 'LogoRenderer')
  },
  webpackConfig: {
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader:
            'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          loader: 'svg-react-loader'
        }
      ]
    },
    resolve: {
      alias: {
        'styled-components': path.resolve(
          __dirname,
          '..',
          '..',
          'node_modules',
          'styled-components'
        ),
        'package.json': path.resolve('package.json')
      }
    }
  }
};

module.exports = _.extend(defaultStyleguideConfig, customStyleguideConfig);
