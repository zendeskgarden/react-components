/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { ColorSwatch } from '@zendeskgarden/react-colorpickers';

export default {
  title: 'Components/Colorpickers/ColorSwatch',
  component: ColorSwatch
} as Meta;

export { Uncontrolled } from './examples/ColorSwatch/Uncontrolled';
export { Controlled } from './examples/ColorSwatch/Controlled';
