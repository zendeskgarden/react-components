/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Well, Title, Paragraph } from '@zendeskgarden/react-notifications';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Notifications/Well',
  component: Well
} as Meta;

export const Default: Story = ({ isFloating, isRecessed }) => (
  <Grid>
    <Row>
      <Col>
        <Well isFloating={isFloating} isRecessed={isRecessed}>
          <Title>Nori Grape Beet</Title>
          <Paragraph>
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
            Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce
            lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra
            leone bologi leek soko chicory celtuce parsley jícama salsify black-eyed pea quandong.
          </Paragraph>
        </Well>
      </Col>
    </Row>
  </Grid>
);

Default.argTypes = {
  isFloating: {
    control: 'boolean'
  },
  isRecessed: {
    control: 'boolean'
  }
};
