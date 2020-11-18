/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { create } from '@storybook/theming/create';
import { DEFAULT_THEME } from '../packages/theming/src';

const theme = {
  fontBase: DEFAULT_THEME.fonts.system,
  fontCode: DEFAULT_THEME.fonts.mono
};

export const managerTheme = create({
  brandTitle: 'React Components / Zendesk Garden',
  brandUrl: 'https://zendeskgarden.github.io/react-components/storybook',
  brandImage: './images/garden.svg',
  ...theme
});

export const previewTheme = create({
  base: DEFAULT_THEME.colors.base,
  ...theme
});
