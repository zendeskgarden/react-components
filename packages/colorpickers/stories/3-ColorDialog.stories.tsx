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

export { Default } from './examples/ColorDialog';
export { WithIconButton } from './examples/WithIconButton';
