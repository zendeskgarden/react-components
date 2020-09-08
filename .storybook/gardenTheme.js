/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { create } from '@storybook/theming/create';
import { DEFAULT_THEME, PALETTE } from '../packages/theming/src';

export const managerTheme = create({
  base: 'light',
  fontBase: DEFAULT_THEME.fonts.system,
  fontCode: DEFAULT_THEME.fonts.mono,
  brandTitle: 'React Components / Zendesk Garden',
  brandUrl: 'https://zendeskgarden.github.io/react-components/storybook',
  brandImage: './images/garden.svg'
});

export const previewTheme = create({
  base: 'light',
  fontBase: DEFAULT_THEME.fonts.system,
  fontCode: DEFAULT_THEME.fonts.mono
});
