/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

import { type ISegmentedControlProps, SegmentedControl } from '../../src/index';
import { LONG_OPTIONS, OPTIONS } from './stories/data';

type Story = StoryObj<typeof SegmentedControl>;

/*
 * Storybook args are one flat object, so they can't express "`value` or
 * `defaultValue`, never both". Merge the story's own props and cast once here.
 */
const getProps = (args: Story['args'], props: Partial<ISegmentedControlProps>) =>
  ({ ...args, ...props }) as ISegmentedControlProps;

export default {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  args: { options: OPTIONS, 'aria-label': 'Time range' },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/design/Xf6gtTse5Ek2CXeAgZ3Zo8/Flora-Core?node-id=62882-10705'
    }
  }
};

export const Uncontrolled: Story = {
  render: args => <SegmentedControl {...args} />,
  args: { defaultValue: 'week', onChange: fn() },
  argTypes: {
    value: { control: false }
  }
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (value: string) => updateArgs({ value });

    return <SegmentedControl {...args} onChange={handleChange} />;
  },
  args: { value: 'week' },
  argTypes: {
    defaultValue: { control: false }
  }
};

export const Sizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
      <SegmentedControl
        {...getProps(args, { size: 'small', 'aria-label': 'Small', defaultValue: 'week' })}
      />
      <SegmentedControl
        {...getProps(args, { size: 'medium', 'aria-label': 'Medium', defaultValue: 'week' })}
      />
    </div>
  ),
  argTypes: {
    size: { control: false },
    value: { control: false },
    defaultValue: { control: false }
  }
};

export const FullWidth: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ width: 480 }}>
        <p>Fills its container</p>
        <SegmentedControl {...getProps(args, { isFullWidth: true, defaultValue: 'week' })} />
      </div>
      {/* Narrower than the labels need; the control keeps its minimum width and overflows */}
      <div style={{ width: 120 }}>
        <p>Never shrinks below its labels</p>
        <SegmentedControl {...getProps(args, { isFullWidth: true, defaultValue: 'week' })} />
      </div>
    </div>
  ),
  argTypes: {
    isFullWidth: { control: false },
    value: { control: false },
    defaultValue: { control: false }
  }
};

export const LongLabels: Story = {
  render: args => <SegmentedControl {...getProps(args, { defaultValue: 'history' })} />,
  args: { options: LONG_OPTIONS, 'aria-label': 'Section' },
  argTypes: {
    value: { control: false },
    defaultValue: { control: false }
  }
};
