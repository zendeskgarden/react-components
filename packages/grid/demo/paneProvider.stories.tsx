/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { PaneProvider, Pane } from '@zendeskgarden/react-grid';
import { useArgs } from '@storybook/preview-api';
import { PaneProviderStory } from './stories/PaneProviderStory';
import { PANES } from './stories/data';
type Story = StoryObj<typeof PaneProviderStory>;

export default {
  title: 'Packages/Grid/PaneProvider',
  component: PaneProvider,

  subcomponents: {
    Pane,
    'Pane.Content': Pane.Content,
    'Pane.Splitter': Pane.Splitter,
    'Pane.SplitterButton': Pane.SplitterButton
  },

  args: {
    panes: PANES,
    totalPanesWidth: 600,
    totalPanesHeight: 600
  },

  argTypes: {
    panes: {
      name: 'Pane[]',

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=8807%3A33252'
    }
  }
};

export const Uncontrolled: Story = {
  render: args => <PaneProviderStory {...args} />,
  name: 'Uncontrolled',

  args: {
    defaultColumnValues: {
      'column-a': 1,
      'column-b': 1
    },

    defaultRowValues: {
      'row-1': 1,
      'row-2': 1
    }
  },

  argTypes: {
    columnValues: {
      control: false
    },

    rowValues: {
      control: false
    }
  }
};

export const Controlled: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = (rowValues: any, columnValues: any) =>
      updateArgs({
        rowValues,
        columnValues
      });

    return <PaneProviderStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    columnValues: {
      'column-a': 1,
      'column-b': 1
    },

    rowValues: {
      'row-1': 1,
      'row-2': 1
    }
  },

  argTypes: {
    defaultColumnValues: {
      control: false
    },

    defaultRowValues: {
      control: false
    }
  }
};
