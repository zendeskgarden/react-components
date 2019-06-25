/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const webpack = require('webpack');
const {
  zdColorKale100,
  zdColorKale400,
  zdColorRed600,
  zdFontSizeMd
} = require('@zendeskgarden/css-variables');
const packageManifest = require(path.resolve('package.json'));
const customStyleguideConfig = require(path.resolve('styleguide.config.js'));
const babelOptions = require(path.resolve('../../babel.config.js'));
const exec = require('child_process').execSync;

const COMPONENT_IDS = exec('"../../utils/scripts/get-cids.sh"', (error, stdout) => {
  if (error !== null) {
    throw new Error(`exec error: ${error}`);
  }

  return stdout;
});
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
      base: 'inherit',
      baseBackground: 'inherit',
      codeBackground: 'inherit',
      sidebarBackground: zdColorKale100,
      name: zdColorKale400,
      type: zdColorRed600
    }
  },
  styles: {
    StyleGuide: {
      '@global body': {
        fontSize: zdFontSizeMd
      }
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
    'core-js',
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
    StyleGuideRenderer: path.resolve(__dirname, 'StyleGuideRenderer'),
    Wrapper: path.resolve(__dirname, 'Wrapper'),
    TableOfContentsRenderer: path.resolve(__dirname, 'TableOfContentsRenderer'),
    LogoRenderer: path.resolve(__dirname, 'LogoRenderer'),
    LinkRenderer: path.resolve(__dirname, 'LinkRenderer'),
    TableRenderer: path.resolve(__dirname, 'TableRenderer'),
    ArgumentsRenderer: path.resolve(__dirname, 'ArgumentsRenderer'),
    'Markdown/Pre': path.resolve(__dirname, 'Pre'),
    'slots/CodeTabButton': path.resolve(__dirname, 'CodeTabButton')
  },
  webpackConfig: {
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/u,
          exclude: /node_modules/u,
          loader: 'babel-loader',
          options: babelOptions
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
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                externalConfig: path.resolve('../../.svgo.yml')
              }
            }
          ]
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
        PACKAGE_VERSION: JSON.stringify(packageManifest.version),
        COMPONENT_IDS: JSON.stringify(COMPONENT_IDS.toString('utf8'))
      })
    ],
    resolve: {
      alias: {
        'package.json': path.resolve('package.json'),
        'CHANGELOG.md': path.resolve('CHANGELOG.md'),
        '@zendeskgarden/react-autocomplete': path.resolve('..', 'autocomplete'),
        '@zendeskgarden/react-avatars': path.resolve('..', 'avatars'),
        '@zendeskgarden/react-breadcrumbs': path.resolve('..', 'breadcrumbs'),
        '@zendeskgarden/react-buttons': path.resolve('..', 'buttons'),
        '@zendeskgarden/react-checkboxes': path.resolve('..', 'checkboxes'),
        '@zendeskgarden/react-chrome': path.resolve('..', 'chrome'),
        '@zendeskgarden/react-dropdowns': path.resolve('..', 'dropdowns'),
        '@zendeskgarden/react-forms': path.resolve('..', 'forms'),
        '@zendeskgarden/react-grid': path.resolve('..', 'grid'),
        '@zendeskgarden/react-loaders': path.resolve('..', 'loaders'),
        '@zendeskgarden/react-menus': path.resolve('..', 'menus'),
        '@zendeskgarden/react-modals': path.resolve('..', 'modals'),
        '@zendeskgarden/react-notifications': path.resolve('..', 'notifications'),
        '@zendeskgarden/react-pagination': path.resolve('..', 'pagination'),
        '@zendeskgarden/react-radios': path.resolve('..', 'radios'),
        '@zendeskgarden/react-ranges': path.resolve('..', 'ranges'),
        '@zendeskgarden/react-select': path.resolve('..', 'select'),
        '@zendeskgarden/react-selection': path.resolve('..', 'selection'),
        '@zendeskgarden/react-tables': path.resolve('..', 'tables'),
        '@zendeskgarden/react-tabs': path.resolve('..', 'tabs'),
        '@zendeskgarden/react-tags': path.resolve('..', 'tags'),
        '@zendeskgarden/react-testing': path.resolve('..', 'testing'),
        '@zendeskgarden/react-textfields': path.resolve('..', 'textfields'),
        '@zendeskgarden/react-theming': path.resolve('..', 'theming'),
        '@zendeskgarden/react-toggles': path.resolve('..', 'toggles'),
        '@zendeskgarden/react-tooltips': path.resolve('..', 'tooltips'),
        '@zendeskgarden/react-typography': path.resolve('..', 'typography'),
        '@zendeskgarden/react-utilities': path.resolve('..', 'utilities')
      }
    }
  }
};

defaultStyleguideConfig.sections = customStyleguideConfig.sections;
defaultStyleguideConfig.require = defaultStyleguideConfig.require.concat(
  customStyleguideConfig.require || []
);

module.exports = defaultStyleguideConfig;
