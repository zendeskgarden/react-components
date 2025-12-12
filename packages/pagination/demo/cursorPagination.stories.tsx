/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from 'storybook/preview-api';
import { CursorPagination } from '@zendeskgarden/react-pagination';
import { CursorPaginationStory } from './stories/CursorPaginationStory';

export default {
  title: 'Packages/Pagination/CursorPagination',
  component: CursorPagination,

  subcomponents: {
    'CursorPagination.First': CursorPagination.First,
    'CursorPagination.Last': CursorPagination.Last,
    'CursorPagination.Next': CursorPagination.Next,
    'CursorPagination.Previous': CursorPagination.Previous
  }
};

export const Example: StoryObj<typeof CursorPaginationStory> = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = (currentPage: any) =>
      updateArgs({
        currentPage
      });

    return <CursorPaginationStory {...args} onChange={handleChange} />;
  },
  name: 'CursorPagination',
  args: {
    currentPage: 0,
    totalPages: 4,
    first: 'First',
    previous: 'Previous',
    next: 'Next',
    last: 'Last'
  },

  argTypes: {
    currentPage: {
      table: {
        category: 'Story'
      }
    },

    totalPages: {
      table: {
        category: 'Story'
      }
    },

    first: {
      name: 'children',

      table: {
        category: 'CursorPagination.First'
      }
    },

    previous: {
      name: 'children',

      table: {
        category: 'CursorPagination.Previous'
      }
    },

    next: {
      name: 'children',

      table: {
        category: 'CursorPagination.Next'
      }
    },

    last: {
      name: 'children',

      table: {
        category: 'CursorPagination.Last'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=172%3A13038'
    }
  }
};
