/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const webpack = require('webpack');
const { DEFAULT_THEME, PALETTE } = require(path.resolve('../../packages/theming'));
const packageManifest = require(path.resolve('package.json'));
const customStyleguideConfig = require(path.resolve('styleguide.config.js'));
const babelOptions = require(path.resolve('../../babel.config.js'));
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
      linkHover: PALETTE.blue[600],
      base: 'inherit',
      baseBackground: 'inherit',
      codeBackground: 'inherit',
      sidebarBackground: PALETTE.kale[100],
      name: PALETTE.kale[400],
      type: PALETTE.red[600]
    },
    fontFamily: {
      base: DEFAULT_THEME.fonts.system
    }
  },
  styles: {
    StyleGuide: {
      '@global body': {
        fontSize: DEFAULT_THEME.fontSizes.md
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
      ],
      links: [
        {
          rel: 'stylesheet',
          href: 'https://zendeskgarden.github.io/css-components/bedrock/index.css',
          disabled: true
        },
        {
          rel: 'stylesheet',
          href: 'https://zendeskgarden.github.io/css-components/utilities/index.css'
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
  require: ['core-js', path.resolve(__dirname, 'setup.js'), 'github-markdown-css'],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.(jsx?|tsx?)?$/u, '.example.md');
  },
  getComponentPathLine(componentPath) {
    if (componentPath.indexOf('.js') !== -1) {
      const name = path.basename(componentPath, '.js');

      return `import { ${name} } from '${packageManifest.name}'`;
    } else if (componentPath.indexOf('.tsx') !== -1) {
      const name = path.basename(componentPath, '.tsx');

      return `import { ${name} } from '${packageManifest.name}'`;
    } else if (componentPath.indexOf('.ts') !== -1) {
      const name = path.basename(componentPath, '.ts');

      return `import { ${name} } from '${packageManifest.name}'`;
    }

    return 'Unknown import';
  },
  styleguideComponents: {
    StyleGuideRenderer: path.resolve(__dirname, 'StyleGuideRenderer'),
    Wrapper: path.resolve(__dirname, 'Wrapper'),
    TableOfContentsRenderer: path.resolve(__dirname, 'TableOfContentsRenderer'),
    LogoRenderer: path.resolve(__dirname, 'LogoRenderer'),
    LinkRenderer: path.resolve(__dirname, 'LinkRenderer'),
    TableRenderer: path.resolve(__dirname, 'TableRenderer'),
    ArgumentsRenderer: path.resolve(__dirname, 'ArgumentsRenderer'),
    ExamplePlaceholderRenderer: path.resolve(__dirname, 'ExamplePlaceholderRenderer'),
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
          test: /\.tsx?$/u,
          loaders: [
            {
              loader: 'eslint-loader'
            }
          ],
          enforce: 'pre'
        },
        {
          test: /\.tsx?$/u,
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions
            },
            {
              loader: require.resolve('ts-loader'),
              options: {
                configFile: path.resolve(__dirname, 'tsconfig.styleguide.json')
              }
            }
          ]
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
        PACKAGE_VERSION: JSON.stringify(packageManifest.version)
      })
    ],
    resolve: {
      extensions: ['.svg', '.js', '.json', '.md', '.css', '.ts', '.tsx'],
      alias: {
        'package.json': path.resolve('package.json'),
        'CHANGELOG.md': path.resolve('CHANGELOG.md'),
        '@zendeskgarden/react-accordions': path.resolve('..', 'accordions'),
        '@zendeskgarden/react-avatars': path.resolve('..', 'avatars'),
        '@zendeskgarden/react-breadcrumbs': path.resolve('..', 'breadcrumbs'),
        '@zendeskgarden/react-buttons': path.resolve('..', 'buttons'),
        '@zendeskgarden/react-chrome': path.resolve('..', 'chrome'),
        '@zendeskgarden/react-datepickers': path.resolve('..', 'datepickers'),
        '@zendeskgarden/react-dropdowns': path.resolve('..', 'dropdowns'),
        '@zendeskgarden/react-forms': path.resolve('..', 'forms'),
        '@zendeskgarden/react-grid': path.resolve('..', 'grid'),
        '@zendeskgarden/react-loaders': path.resolve('..', 'loaders'),
        '@zendeskgarden/react-modals': path.resolve('..', 'modals'),
        '@zendeskgarden/react-notifications': path.resolve('..', 'notifications'),
        '@zendeskgarden/react-pagination': path.resolve('..', 'pagination'),
        '@zendeskgarden/react-tables': path.resolve('..', 'tables'),
        '@zendeskgarden/react-tabs': path.resolve('..', 'tabs'),
        '@zendeskgarden/react-tags': path.resolve('..', 'tags'),
        '@zendeskgarden/react-theming': path.resolve('..', 'theming'),
        '@zendeskgarden/react-tooltips': path.resolve('..', 'tooltips'),
        '@zendeskgarden/react-typography': path.resolve('..', 'typography'),
        '@zendeskgarden/react-utilities': path.resolve('..', 'utilities')
      }
    }
  }
};

defaultStyleguideConfig.propsParser = customStyleguideConfig.propsParser;
defaultStyleguideConfig.resolver = customStyleguideConfig.resolver;
defaultStyleguideConfig.sections = customStyleguideConfig.sections;
defaultStyleguideConfig.require = defaultStyleguideConfig.require.concat(
  customStyleguideConfig.require || []
);

module.exports = defaultStyleguideConfig;
