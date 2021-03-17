/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { Menu } from '@zendeskgarden/react-dropdowns';

export default {
  title: 'Components/Dropdowns/Menu',
  component: Menu
} as Meta;

export { Default } from './examples/Menu/Default';
export { Icon } from './examples/Menu/Icon';
export { Advanced } from './examples/Menu/Advanced';
export { Tree } from './examples/Menu/Tree';
