/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const makeWebpackConfig = require('./playroom/makeWebpackConfig');

module.exports = {
  title: 'Garden',
  outputPath: './playroom/dist',
  components: './playroom/components.ts',
  themes: './playroom/themes.js',
  frameComponent: './playroom/FrameComponents.tsx',
  // typeScriptFiles: [
  //     "packages/accordions/src/index.ts",
  // "packages/avatars/src/index.ts",
  // "packages/breadcrumbs/src/index.ts",
  // "packages/buttons/src/index.ts",
  // "packages/chrome/src/index.ts",
  // "packages/colorpickers/src/index.ts",
  // "packages/datepickers/src/index.ts",
  // "packages/dropdowns/src/index.ts",
  // "packages/forms/src/index.ts",
  // "packages/grid/src/index.ts",
  // "packages/loaders/src/index.ts",
  // "packages/modals/src/index.ts",
  // "packages/notifications/src/index.ts",
  // "packages/pagination/src/index.ts",
  // "packages/tables/src/index.ts",
  // "packages/tabs/src/index.ts",
  // "packages/tags/src/elements/Tag.tsx",
  // "packages/theming/src/index.ts",
  // "packages/tooltips/src/index.ts",
  // "packages/typography/src/index.ts",
  // "packages/utilities/src/index.ts",
  // '!**/node_modules'
  // ],
  widths: [320, 1024],
  webpackConfig: () => makeWebpackConfig()
};
