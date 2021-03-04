/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { ColorpickerDialog } from '@zendeskgarden/react-colorpickers';

export default {
  title: 'Components/Colorpickers/ColorpickerDialog',
  component: ColorpickerDialog
} as Meta;

export { Uncontrolled } from './examples/ColorpickerDialog/Uncontrolled';
export { Controlled } from './examples/ColorpickerDialog/Controlled';
export { WithIconButton } from './examples/ColorpickerDialog/WithIconButton';
export { WithFormInput } from './examples/ColorpickerDialog/WithFormInput';
