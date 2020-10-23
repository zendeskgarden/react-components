/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Pagination/Pagination',
  component: Pagination
} as Meta;

export const Default: Story = ({ currentPage, totalPages, pagePadding, pageGap }) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Pagination
          totalPages={totalPages}
          pagePadding={pagePadding}
          pageGap={pageGap}
          currentPage={currentPage}
          onChange={action('onChange')}
        />
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  currentPage: 1,
  totalPages: 11,
  pagePadding: 2,
  pageGap: 2
};

Default.argTypes = {
  currentPage: {
    control: { type: 'number' }
  },
  totalPages: {
    control: {
      type: 'select',
      options: [0, 3, 5, 7, 9, 10, 11, 25, 50, 100, 1000, 100000, 1000000]
    }
  },
  pagePadding: {
    control: {
      type: 'select',
      options: [0, 1, 2, 3, 4, 5]
    }
  },
  pageGap: {
    control: {
      type: 'select',
      options: [0, 1, 2, 3]
    }
  }
};
