/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ColorpickerDialog, IColorpickerDialogProps } from '@zendeskgarden/react-colorpickers';

export const ColorpickerDialogStory: Story<IColorpickerDialogProps> = args => (
  <Grid>
    <Row style={{ height: 'calc(100vh - 80px)' }}>
      <Col textAlign="center" alignSelf="center">
        <ColorpickerDialog {...args} />
      </Col>
    </Row>
  </Grid>
);
