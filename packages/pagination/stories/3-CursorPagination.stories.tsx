/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CursorPagination } from '@zendeskgarden/react-pagination';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Pagination/CursorPagination',
  component: CursorPagination
} as Meta;

export const Default: Story = ({ disabled }) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <CursorPagination aria-label="Cursor pagination">
          <CursorPagination.First onClick={action('onClick')} disabled={disabled}>
            First
          </CursorPagination.First>
          <CursorPagination.Previous onClick={action('onClick')} disabled={disabled}>
            Previous
          </CursorPagination.Previous>
          <CursorPagination.Next onClick={action('onClick')} disabled={disabled}>
            Next
          </CursorPagination.Next>
          <CursorPagination.Last onClick={action('onclick')} disabled={disabled}>
            Last
          </CursorPagination.Last>
        </CursorPagination>
      </Col>
    </Row>
  </Grid>
);

Default.argTypes = {
  disabled: {
    control: { type: 'boolean' }
  }
};
