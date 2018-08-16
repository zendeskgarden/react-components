/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const webpack = require('webpack');
const {
  zdColorBlue600,
  zdColorGrey100,
  zdColorKale400,
  zdColorRed600
} = require('@zendeskgarden/css-variables');
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
  usageMode: 'expand',
  theme: {
    color: {
      link: zdColorBlue600,
      linkHover: zdColorBlue600,
      codeBackground: zdColorGrey100,
      sidebarBackground: zdColorGrey100,
      name: zdColorKale400,
      type: zdColorRed600
    }
  },
  template: {
    lang: 'en',
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
          src: `https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`
        },
        {
          async: '',
          src:
            'https://static-staging.zdassets.com/customer_analytics_integration/garden_dev/cai.min.js'
        }
      ],
      raw: [
        `<script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleTrackingId}');
        </script>`,
        `<script>
          (function() {
            window.analytics = window.analytics || [];
            window.deferredAnalytics = window.deferredAnalytics || [];
            if (!analytics.initialized && !analytics.invoked) {
              analytics.invoked = true;
              analytics.methods = ['trackSubmit', 'trackClick', 'trackLink', 'trackForm', 'pageview', 'identify', 'reset', 'group', 'track', 'ready', 'alias', 'debug', 'page', 'once', 'off', 'on'];
              analytics.factory = function(method) {
                return function() {
                  var args = Array.prototype.slice.call(arguments);
                  args.unshift(method);
                  deferredAnalytics.push(args);
                  return analytics;
                };
              };
              for (var i = 0; i < analytics.methods.length; i++) {
                var method = analytics.methods[i];
                analytics[method] = analytics.factory(method);
              }
              analytics.SNIPPET_VERSION = '4.1.0';
              analytics.page();
              analytics.identify();
              analytics.group();
            }
          })();
        </script>`
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
    path.resolve(__dirname, 'styles.css'),
    'github-markdown-css'
  ],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/u, '.example.md');
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');

    return `import { ${name} } from '${packageManifest.name}'`;
  },
  styleguideComponents: {
    Wrapper: path.resolve(__dirname, 'Wrapper'),
    TableOfContentsRenderer: path.resolve(__dirname, 'TableOfContentsRenderer'),
    LogoRenderer: path.resolve(__dirname, 'LogoRenderer'),
    TableRenderer: path.resolve(__dirname, 'TableRenderer'),
    ArgumentsRenderer: path.resolve(__dirname, 'ArgumentsRenderer')
  },
  webpackConfig: {
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/u,
          exclude: /node_modules/u,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/u,
          exclude: /@zendeskgarden\/css-/u,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.css$/u,
          include: /@zendeskgarden\/css-/u,
          loader:
            'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        },
        {
          test: /\.svg$/u,
          exclude: /node_modules/u,
          loader: 'svg-react-loader'
        },
        {
          test: /\.md$/u,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdown-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        BASE_PATH_NAME: JSON.stringify(basePathName),
        PACKAGE_VERSION: JSON.stringify(packageManifest.version)
      })
    ],
    resolve: {
      alias: {
        'package.json': path.resolve('package.json'),
        'CHANGELOG.md': path.resolve('CHANGELOG.md'),
        '@zendeskgarden/react-autocomplete': path.resolve('..', 'autocomplete', 'src'),
        '@zendeskgarden/react-avatars': path.resolve('..', 'avatars', 'src'),
        '@zendeskgarden/react-buttons': path.resolve('..', 'buttons', 'src'),
        '@zendeskgarden/react-checkboxes': path.resolve('..', 'checkboxes', 'src'),
        '@zendeskgarden/react-chrome': path.resolve('..', 'chrome', 'src'),
        '@zendeskgarden/react-grid': path.resolve('..', 'grid', 'src'),
        '@zendeskgarden/react-loaders': path.resolve('..', 'loaders', 'src'),
        '@zendeskgarden/react-menus': path.resolve('..', 'menus', 'src'),
        '@zendeskgarden/react-modals': path.resolve('..', 'modals', 'src'),
        '@zendeskgarden/react-notifications': path.resolve('..', 'notifications', 'src'),
        '@zendeskgarden/react-pagination': path.resolve('..', 'pagination', 'src'),
        '@zendeskgarden/react-radios': path.resolve('..', 'radios', 'src'),
        '@zendeskgarden/react-ranges': path.resolve('..', 'ranges', 'src'),
        '@zendeskgarden/react-select': path.resolve('..', 'select', 'src'),
        '@zendeskgarden/react-selection': path.resolve('..', 'selection', 'src'),
        '@zendeskgarden/react-tables': path.resolve('..', 'tables', 'src'),
        '@zendeskgarden/react-tabs': path.resolve('..', 'tabs', 'src'),
        '@zendeskgarden/react-tags': path.resolve('..', 'tags', 'src'),
        '@zendeskgarden/react-testing': path.resolve('..', 'testing', 'src'),
        '@zendeskgarden/react-textfields': path.resolve('..', 'textfields', 'src'),
        '@zendeskgarden/react-theming': path.resolve('..', 'theming', 'src'),
        '@zendeskgarden/react-toggles': path.resolve('..', 'toggles', 'src'),
        '@zendeskgarden/react-tooltips': path.resolve('..', 'tooltips', 'src'),
        '@zendeskgarden/react-utilities': path.resolve('..', 'utilities', 'src')
      }
    }
  }
};

defaultStyleguideConfig.sections = customStyleguideConfig.sections;
defaultStyleguideConfig.require = defaultStyleguideConfig.require.concat(
  customStyleguideConfig.require || []
);

module.exports = defaultStyleguideConfig;
