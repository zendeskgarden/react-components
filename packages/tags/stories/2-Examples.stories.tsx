/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { Tag } from '@zendeskgarden/react-tags';

export default {
  title: 'Components/Tags',
  subcomponents: { Tag, 'Tag.Avatar': Tag.Avatar, 'Tag.Close': Tag.Close }
} as Meta;

export { Default } from './examples/Default';
export { Advanced } from './examples/Advanced';
export { CustomHue } from './examples/CustomHue';
export { FontWeight } from './examples/FontWeight';
