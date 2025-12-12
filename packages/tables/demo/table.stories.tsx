/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-webpack5';
import { Table } from '@zendeskgarden/react-tables';
import { TableStory } from './stories/TableStory';
import { TABLE_DATA as DATA } from './stories/data';

export default {
  title: 'Packages/Tables/Table',
  component: Table,

  subcomponents: {
    'Table.Body': Table.Body,
    'Table.Caption': Table.Caption,
    'Table.Cell': Table.Cell,
    'Table.GroupRow': Table.GroupRow,
    'Table.Head': Table.Head,
    'Table.HeaderCell': Table.HeaderCell,
    'Table.HeaderRow': Table.HeaderRow,
    'Table.OverflowButton': Table.OverflowButton,
    'Table.Row': Table.Row,
    'Table.SortableCell': Table.SortableCell
  }
};

export const Example: StoryObj<typeof TableStory> = {
  render: args => <TableStory {...args} />,
  name: 'Table',
  args: {
    caption: 'Caption',
    data: DATA,
    widths: [],
    isBold: true
  },

  argTypes: {
    isReadOnly: {
      control: 'boolean'
    },

    hasOverflow: {
      control: 'boolean',

      table: {
        category: 'Table.Cell'
      }
    },

    isTruncated: {
      control: 'boolean',

      table: {
        category: 'Table.Cell'
      }
    },

    isHidden: {
      name: 'hidden',
      control: 'boolean',

      table: {
        category: 'Table.Cell'
      }
    },

    caption: {
      name: 'children',

      table: {
        category: 'Table.Caption'
      }
    },

    isBold: {
      control: 'boolean',

      table: {
        category: 'Table.GroupRow'
      }
    },

    isSticky: {
      control: 'boolean',

      table: {
        category: 'Table.Head'
      }
    },

    isStriped: {
      control: 'boolean',

      table: {
        category: 'Table.Row'
      }
    },

    isSelected: {
      control: 'boolean',

      table: {
        category: 'Table.Row'
      }
    },

    data: {
      name: 'Table.Row[]',

      table: {
        category: 'Story'
      }
    },

    widths: {
      name: 'Table.Cell[] widths',

      table: {
        category: 'Story'
      }
    },

    hasSelection: {
      control: 'boolean',

      table: {
        category: 'Story'
      }
    },

    isSortable: {
      name: 'Table.SortableCell',
      control: 'boolean',

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A125'
    }
  }
};
