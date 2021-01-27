/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { Datepicker } from '@zendeskgarden/react-datepickers';

export default {
  title: 'Components/Datepickers/Datepicker',
  subcomponents: { Datepicker }
} as Meta;

export { Default } from './examples/Default';
export { CustomFormat } from './examples/CustomFormat';
