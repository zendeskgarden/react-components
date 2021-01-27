/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tag } from '@zendeskgarden/react-tags';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Span } from '@zendeskgarden/react-typography';

/**
 * https://github.com/storybookjs/storybook/issues/13362
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FontWeight: Story = ({ foo }) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Tag isRegular tabIndex={0}>
          <span>
            <b>Mixed</b> weight
          </span>
          <Tag.Close onClick={() => action('Delete tag')} />
        </Tag>
      </Col>
      <Col textAlign="center">
        <Tag isRegular hue="royal" tabIndex={0}>
          <Span>
            <Span isBold>Category</Span> item
          </Span>
          <Tag.Close onClick={() => action('Delete tag')} />
        </Tag>
      </Col>
    </Row>
  </Grid>
);

FontWeight.parameters = {
  docs: {
    description: {
      story: `
The following examples demonstrates using the \`isRegular\` prop combined with
mixed weight content. Check out the code for details.
      `
    }
  }
};
