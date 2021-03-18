/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { Grid, Col, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Grid',
  component: Grid,
  subcomponents: { Grid, Col, Row }
} as Meta;

export { Default } from './examples/Default';
