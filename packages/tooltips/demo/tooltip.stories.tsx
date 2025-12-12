/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { TooltipStory } from './stories/TooltipStory';
import { TOOLTIP_CONTENT as CONTENT } from './stories/data';
import { PLACEMENT } from '../src/types';

export default {
  title: 'Packages/Tooltips/Tooltip',
  component: Tooltip,

  subcomponents: {
    'Tooltip.Paragraph': Tooltip.Paragraph,
    'Tooltip.Title': Tooltip.Title
  }
};

export const Default: StoryObj<typeof TooltipStory> = {
  render: (args: any) => <TooltipStory {...args} />,
  name: 'Tooltip',
  args: {
    content: CONTENT,
    delayMS: 500,
    hasArrow: true
  },

  argTypes: {
    isVisible: {
      control: 'boolean'
    },

    appendToNode: {
      control: false
    },

    fallbackPlacements: {
      control: 'multi-select',
      options: PLACEMENT.filter(p => p !== 'auto')
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A25293'
    }
  }
};
