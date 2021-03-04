/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { Colorpicker } from '@zendeskgarden/react-colorpickers';

export default {
  title: 'Components/Colorpickers/Colorpicker',
  component: Colorpicker
} as Meta;

export { Uncontrolled } from './examples/Colorpicker/Uncontrolled';
export { Controlled } from './examples/Colorpicker/Controlled';
