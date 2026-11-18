/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

import { SegmentedControl } from '../../src/index';
import { LONG_OPTIONS, MANY_OPTIONS, OPTIONS, type IOption } from './stories/data';

type Story = StoryObj<typeof SegmentedControl>;

const Segments = ({ options = OPTIONS }: { options?: IOption[] }) =>
  options.map(({ value, label }) => (
    <SegmentedControl.Segment key={value} value={value}>
      {label}
    </SegmentedControl.Segment>
  ));

export default {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  args: { 'aria-label': 'Time range' },
  argTypes: {
    children: { control: false }
  }
};

export const Uncontrolled: Story = {
  render: args => (
    <SegmentedControl {...args}>
      <Segments />
    </SegmentedControl>
  ),
  args: { defaultValue: 'week', onChange: fn() },
  argTypes: {
    value: { control: false }
  }
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (value: string) => updateArgs({ value });

    return (
      <SegmentedControl {...args} onChange={handleChange}>
        <Segments />
      </SegmentedControl>
    );
  },
  args: { value: 'week' },
  argTypes: {
    defaultValue: { control: false }
  }
};

export const Compact: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
      <SegmentedControl {...args} isCompact aria-label="Compact" defaultValue="week">
        <Segments />
      </SegmentedControl>
      <SegmentedControl {...args} isCompact={false} aria-label="Default" defaultValue="week">
        <Segments />
      </SegmentedControl>
    </div>
  ),
  argTypes: {
    isCompact: { control: false },
    value: { control: false },
    defaultValue: { control: false }
  }
};

export const FullWidth: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ width: 480 }}>
        <p>Fills its container</p>
        <SegmentedControl {...args} isFullWidth defaultValue="week">
          <Segments />
        </SegmentedControl>
      </div>
      {/* Narrower than the labels need; the control keeps its minimum width and overflows */}
      <div style={{ width: 120 }}>
        <p>Never shrinks below its labels</p>
        <SegmentedControl {...args} isFullWidth defaultValue="week">
          <Segments />
        </SegmentedControl>
      </div>
    </div>
  ),
  argTypes: {
    isFullWidth: { control: false },
    value: { control: false },
    defaultValue: { control: false }
  }
};

export const NoSelection: Story = {
  render: args => (
    <SegmentedControl {...args}>
      <Segments />
    </SegmentedControl>
  ),
  args: { onChange: fn() },
  argTypes: {
    value: { control: false },
    defaultValue: { control: false }
  }
};

export const LongLabels: Story = {
  render: args => (
    <SegmentedControl {...args}>
      <Segments options={LONG_OPTIONS} />
    </SegmentedControl>
  ),
  args: { defaultValue: 'history', 'aria-label': 'Section' },
  argTypes: {
    value: { control: false },
    defaultValue: { control: false }
  }
};

export const ManyOptions: Story = {
  render: args => (
    /* A 320px viewport is the reflow limit (WCAG 1.4.10); the control must stay usable inside it */
    <div style={{ width: 320, overflowX: 'auto' }}>
      <SegmentedControl {...args}>
        <Segments options={MANY_OPTIONS} />
      </SegmentedControl>
    </div>
  ),
  args: { defaultValue: 'march', 'aria-label': 'Month' },
  argTypes: {
    value: { control: false },
    defaultValue: { control: false }
  }
};
