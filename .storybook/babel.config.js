/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const storybookBabelConfig = require('@storybook/core/dist/server/common/babel');

module.exports = {
  sourceType: 'unambiguous',
  presets: [...storybookBabelConfig.presets],
  plugins: [
    ...storybookBabelConfig.plugins,
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        root: ['../'],
        alias: {
          '@zendeskgarden/react-accordions': './packages/accordions/src',
          '@zendeskgarden/react-avatars': './packages/avatars/src',
          '@zendeskgarden/react-breadcrumbs': './packages/breadcrumbs/src',
          '@zendeskgarden/react-buttons': './packages/buttons/src',
          '@zendeskgarden/react-chrome': './packages/chrome/src',
          '@zendeskgarden/react-datepickers': './packages/datepickers/src',
          '@zendeskgarden/react-dropdowns': './packages/dropdowns/src',
          '@zendeskgarden/react-forms': './packages/forms/src',
          '@zendeskgarden/react-grid': './packages/grid/src',
          '@zendeskgarden/react-loaders': './packages/loaders/src',
          '@zendeskgarden/react-modals': './packages/modals/src',
          '@zendeskgarden/react-notifications': './packages/notifications/src',
          '@zendeskgarden/react-pagination': './packages/pagination/src',
          '@zendeskgarden/react-tables': './packages/tables/src',
          '@zendeskgarden/react-tabs': './packages/tabs/src',
          '@zendeskgarden/react-tags': './packages/tags/src',
          '@zendeskgarden/react-theming': './packages/theming/src',
          '@zendeskgarden/react-tooltips': './packages/tooltips/src',
          '@zendeskgarden/react-typography': './packages/typography/src',
          '@zendeskgarden/react-utilities': './packages/utilities/src'
        }
      }
    ]
  ],
  env: {
    production: {
      plugins: [['react-remove-properties', { properties: [/data-test/u] }]]
    }
  }
};
