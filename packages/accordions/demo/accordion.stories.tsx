/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Accordion } from '@zendeskgarden/react-accordions';
import React from 'react';
import { useArgs } from 'storybook/preview-api';

import { AccordionStory } from './stories/AccordionStory';
import { ACCORDION_SECTIONS as SECTIONS } from './stories/data';
type Story = StoryObj<typeof AccordionStory>;

export default {
  title: 'Packages/Accordions/Accordion',
  component: Accordion,
  subcomponents: {
    'Accordion.Header': Accordion.Header,
    'Accordion.Label': Accordion.Label,
    'Accordion.Panel': Accordion.Panel,
    'Accordion.Section': Accordion.Section
  },
  args: {
    isAnimated: true,
    level: 1,
    hasIconButtons: false,
    sections: SECTIONS
  },
  argTypes: {
    hasIconButtons: {
      name: 'Accordion.Header icon buttons',
      table: { category: 'Story' }
    },
    sections: {
      name: 'Accordion.Section[]',
      table: { category: 'Story' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A16471'
    }
  }
};

export const Uncontrolled: Story = {
  render: args => <AccordionStory {...args} />,
  args: { isCollapsible: true },
  argTypes: {
    expandedSections: { control: false }
  }
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (index: number) => {
      const expandedSections = args.expandedSections?.includes(index)
        ? args.expandedSections.filter((section: number) => section !== index)
        : [...(args.expandedSections || []), index];

      updateArgs({
        expandedSections
      });
    };

    return <AccordionStory {...args} onChange={handleChange} />;
  },
  args: { expandedSections: [2] },
  argTypes: {
    defaultExpandedSections: { control: false },
    isCollapsible: { control: false },
    isExpandable: { control: false }
  }
};
