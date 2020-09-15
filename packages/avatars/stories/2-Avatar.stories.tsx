/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { Avatar } from '@zendeskgarden/react-avatars';

export default {
  title: 'Components/Avatars',
  subcomponents: { Avatar }
} as Meta;

export { Default } from './examples/Default';
export { ChromeUsage } from './examples/ChromeUsage';
export { MenuUsage } from './examples/MenuUsage';
