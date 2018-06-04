/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const webpack = require('webpack');
const packageManifest = require(path.resolve('package.json'));
const customStyleguideConfig = require(path.resolve('styleguide.config.js'));
const basePathName = path.basename(path.resolve('./'));
const googleTrackingId = 'UA-970836-25';
const capitalizePackageName = basePathName.charAt(0).toUpperCase() + basePathName.slice(1);

const defaultStyleguideConfig = {
  title: `${capitalizePackageName} / React Components / Zendesk Garden`,
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
        },
        {
          name: 'application-name',
          content: 'Zendesk Garden'
        },
        {
          name: 'description',
          content: packageManifest.description || ''
        }
      ],
      scripts: [
        {
          async: '',
          src: `//www.googletagmanager.com/gtag/js?id=${googleTrackingId}`
        }
      ],
      raw: `<script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleTrackingId}');
      </script>`
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

    return `import { ${name} } from '${packageManifest.name}'`;
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
          exclude: /@zendeskgarden\/css-/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.css$/,
          include: /@zendeskgarden\/css-/,
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
    plugins: [
      new webpack.DefinePlugin({
        BASE_PATH_NAME: JSON.stringify(basePathName),
        PACKAGE_VERSION: JSON.stringify(packageManifest.version)
      })
    ]
  }
};

defaultStyleguideConfig.sections = customStyleguideConfig.sections;
defaultStyleguideConfig.require = defaultStyleguideConfig.require.concat(
  customStyleguideConfig.require || []
);

module.exports = defaultStyleguideConfig;
