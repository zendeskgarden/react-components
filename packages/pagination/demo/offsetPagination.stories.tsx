/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';

import { useArgs } from 'storybook/preview-api';
import { IPaginationProps, OffsetPagination } from '@zendeskgarden/react-pagination';

type IArgs = IPaginationProps & {
  gap?: string;
  page?: string;
  next?: string;
  previous?: string;
};

export default {
  title: 'Packages/Pagination/OffsetPagination',
  component: OffsetPagination
};

export const Example: StoryObj<IArgs> = {
  render: args => {
    const labels = {
      renderPage: (n: number) => `${args.page} ${n}`,
      gap: args.gap || '',
      next: args.next || '',
      previous: args.previous || ''
    };

    const updateArgs = useArgs()[1];

    const handleChange = (currentPage: number) =>
      updateArgs({
        currentPage
      });

    return <OffsetPagination {...args} labels={labels} onChange={handleChange} />;
  },
  name: 'OffsetPagination',
  args: {
    currentPage: 1,
    totalPages: 11,
    'aria-label': 'Pagination',
    gap: 'Ellipsis indicating non-visible pages',
    page: 'Page',
    next: 'Next page',
    previous: 'Previous page'
  },
  argTypes: {
    gap: { table: { category: 'Label' } },
    page: { table: { category: 'Label' } },
    next: { table: { category: 'Label' } },
    previous: { table: { category: 'Label' } }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=172%3A13037'
    }
  }
};
