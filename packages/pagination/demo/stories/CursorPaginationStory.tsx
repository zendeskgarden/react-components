/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { CursorPagination, IPaginationProps } from '@zendeskgarden/react-pagination';

interface IArgs extends IPaginationProps {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export const CursorPaginationStory: Story<IArgs> = ({
  currentPage,
  totalPages,
  onChange,
  first,
  previous,
  next,
  last,
  ...args
}) => (
  <CursorPagination {...args}>
    <CursorPagination.First
      onClick={() => onChange!(0)}
      disabled={totalPages <= 2 || currentPage === 0}
    >
      {first}
    </CursorPagination.First>
    <CursorPagination.Previous
      onClick={() => currentPage > 0 && onChange!(currentPage - 1)}
      disabled={currentPage === 0}
    >
      {previous}
    </CursorPagination.Previous>
    <CursorPagination.Next
      onClick={() => currentPage < totalPages - 1 && onChange!(currentPage + 1)}
      disabled={currentPage >= totalPages - 1}
    >
      {next}
    </CursorPagination.Next>
    <CursorPagination.Last
      onClick={() => onChange!(totalPages - 1)}
      disabled={totalPages <= 2 || currentPage >= totalPages - 1}
    >
      {last}
    </CursorPagination.Last>
  </CursorPagination>
);
