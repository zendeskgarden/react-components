/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { ColorDialog } from '@zendeskgarden/react-colorpickers';

export default {
  title: 'Components/ColorPickers/ColorDialog',
  component: ColorDialog
} as Meta;

export { Uncontrolled } from './examples/ColorDialog/Uncontrolled';
export { Controlled } from './examples/ColorDialog/Controlled';
export { WithIconButton } from './examples/ColorDialog/WithIconButton';
export { WithFormInput } from './examples/ColorDialog/WithFormInput';
