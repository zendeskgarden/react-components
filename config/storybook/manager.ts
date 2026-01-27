/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

addons.setConfig({
  panelPosition: 'right',
  // @ts-expect-error - Storybook types don't match implementation; omitting `base` allows OS theme inheritance
  theme: create({
    brandTitle: 'Zendesk Garden React Components',
    brandUrl: 'https://github.com/zendeskgarden/react-components'
  })
});
