/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Table } from '../../src/index';
import { TABLE_DATA as DATA } from './stories/data';
import { StickyStripStory } from './stories/StickyStripStory';
import { TableStory } from './stories/TableStory';

export default {
  title: 'Components/Tables/Table',
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
    isReadOnly: { control: 'boolean' },
    hasOverflow: {
      control: 'boolean',
      table: { category: 'Table.Cell' }
    },
    isTruncated: {
      control: 'boolean',
      table: { category: 'Table.Cell' }
    },
    isHidden: {
      name: 'hidden',
      control: 'boolean',
      table: { category: 'Table.Cell' }
    },
    caption: {
      name: 'children',
      table: { category: 'Table.Caption' }
    },
    isBold: {
      control: 'boolean',
      table: { category: 'Table.GroupRow' }
    },
    isSticky: {
      control: 'boolean',
      table: { category: 'Table.Head' }
    },
    isStriped: {
      control: 'boolean',
      table: { category: 'Table.Row' }
    },
    isSelected: {
      control: 'boolean',
      table: { category: 'Table.Row' }
    },
    data: {
      name: 'Table.Row[]',
      table: { category: 'Story' }
    },
    widths: {
      name: 'Table.Cell[] widths',
      table: { category: 'Story' }
    },
    hasSelection: {
      control: 'boolean',
      table: { category: 'Story' }
    },
    isSortable: {
      name: 'Table.SortableCell',
      control: 'boolean',
      table: { category: 'Story' }
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

/**
 * A sticky `Table.Head` hides the rows that scroll under it with
 * background-colored box shadows. They extend 8px past the table edges, which
 * shows when the table sits on a non-default background inside a wider scroll
 * container.
 */
export const StickyStrip: StoryObj<typeof StickyStripStory> = {
  render: args => <StickyStripStory {...args} />,
  args: {
    caption: 'Scrollable growing conditions',
    data: [...DATA, ...DATA],
    isBold: true,
    isSticky: true,
    containerBackground: 'background.recessed'
  },
  argTypes: {
    containerBackground: {
      control: 'select',
      options: [
        'background.subtle',
        'background.recessed',
        'background.raised',
        'background.primaryEmphasis'
      ],
      table: { category: 'Story' }
    }
  },
  parameters: {
    controls: { include: ['containerBackground'] }
  }
};
