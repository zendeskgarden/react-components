/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import { Accordion, DEFAULT_THEME } from '../../src/index';
import { AccordionStory } from './stories/AccordionStory';
import { ACCORDION_SECTIONS as SECTIONS } from './stories/data';
type Story = StoryObj<typeof AccordionStory>;

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: {
    'Accordion.Actions': Accordion.Actions,
    'Accordion.Description': Accordion.Description,
    'Accordion.Header': Accordion.Header,
    'Accordion.Label': Accordion.Label,
    'Accordion.Panel': Accordion.Panel,
    'Accordion.Section': Accordion.Section
  },
  args: {
    isAnimated: true,
    isWell: false,
    level: 1,
    hasActions: false,
    hasDescription: false,
    hasIconButtons: false,
    sections: SECTIONS
  },
  argTypes: {
    hasActions: {
      name: 'Accordion.Actions',
      table: { category: 'Story' }
    },
    hasDescription: {
      name: 'Accordion.Description',
      table: { category: 'Story' }
    },
    hasIconButtons: {
      name: 'Accordion.Header icon buttons',
      table: { category: 'Story' }
    },
    sections: {
      name: 'Accordion.Section[]',
      table: { category: 'Story' }
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
    isMultiExpandable: { control: false }
  }
};

export const Well: Story = {
  render: args => <AccordionStory {...args} />,
  args: {
    isWell: true,
    isMultiExpandable: true,
    /* The first section expands by default; wells start collapsed. */
    defaultExpandedSections: [],
    hasDescription: true,
    hasActions: true,
    /* Wells have no built-in spacing: a flex gap is the recommended recipe. */
    style: { display: 'flex', flexDirection: 'column', gap: DEFAULT_THEME.space.xl }
  },
  argTypes: {
    expandedSections: { control: false }
  }
};
