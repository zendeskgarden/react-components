/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { Select } from '@zendeskgarden/react-dropdowns';

export default {
  title: 'Components/Dropdowns/Select',
  component: Select
} as Meta;

export { Default } from './examples/Select/Default';
export { Advanced } from './examples/Select/Advanced';
