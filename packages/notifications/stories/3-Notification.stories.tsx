/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Notification, Title, Paragraph, Close } from '@zendeskgarden/react-notifications';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Notifications/Notification',
  component: Notification
} as Meta;

export const Default: Story = ({ type, isRegular, isMultiLine }) => (
  <Grid>
    <Row>
      <Col>
        <Notification type={type}>
          <Title isRegular={isRegular}>Nori Grape Beet</Title>
          {isMultiLine ? (
            <Paragraph>
              Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
              Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea
              lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea
              sierra leone bologi leek soko chicory celtuce parsley jícama salsify black-eyed pea
              quandong.
            </Paragraph>
          ) : (
            `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon
           amaranth tatsoi tomatillo melon.`
          )}
          <Close aria-label="Close Notification" />
        </Notification>
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  type: undefined
};

Default.argTypes = {
  isRegular: {
    control: 'boolean'
  },
  type: {
    control: { type: 'select', options: [undefined, 'success', 'warning', 'error', 'info'] }
  },
  isMultiLine: {
    control: 'boolean'
  }
};
