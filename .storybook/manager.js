/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { create } from 'storybook/theming/create';
import { addons } from 'storybook/manager-api';
import { DEFAULT_THEME } from '../packages/theming/src';

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    brandTitle: 'Zendesk Garden React Components',
    brandUrl: 'https://github.com/zendeskgarden/react-components',
    brandImage: null,
    colorSecondary: DEFAULT_THEME.palette.blue[600],
    fontBase: DEFAULT_THEME.fonts.system,
    fontCode: DEFAULT_THEME.fonts.mono
  })
});
