/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { ColorSwatchDialog } from '@zendeskgarden/react-colorpickers';

export default {
  title: 'Components/Colorpickers/ColorSwatchDialog',
  component: ColorSwatchDialog
} as Meta;

export { Uncontrolled } from './examples/ColorSwatchDialog/Uncontrolled';
export { Controlled } from './examples/ColorSwatchDialog/Controlled';
export { WithIconButton } from './examples/ColorSwatchDialog/WithIconButton';
