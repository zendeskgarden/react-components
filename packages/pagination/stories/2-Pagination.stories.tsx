/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Pagination/Pagination',
  component: Pagination
} as Meta;

export const Default: Story = ({ totalPages, pagePadding, pageGap }) => {
  const [page, setPage] = useState(1);

  return (
    <Grid>
      <Row>
        <Col textAlign="center">
          <Pagination
            totalPages={totalPages}
            pagePadding={pagePadding}
            pageGap={pageGap}
            currentPage={page}
            onChange={setPage}
          />
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  totalPages: 11,
  pagePadding: 2,
  pageGap: 2
};

Default.argTypes = {
  currentPage: {
    control: { disable: true }
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
