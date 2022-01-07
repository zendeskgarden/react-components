/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ColorSwatchDialog, IColorSwatchDialogProps } from '@zendeskgarden/react-colorpickers';

export const ColorSwatchDialogStory: Story<IColorSwatchDialogProps> = args => (
  <Grid>
    <Row style={{ height: 'calc(100vh - 80px)' }}>
      <Col textAlign="center" alignSelf="center">
        <ColorSwatchDialog {...args} />
      </Col>
    </Row>
  </Grid>
);
