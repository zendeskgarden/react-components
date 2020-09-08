/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { addons } from '@storybook/addons';
import { managerTheme } from './gardenTheme';

addons.setConfig({
  theme: managerTheme,
  /**
   * Show the controls addon by default
   */
  selectedPanel: 'controls'
});
