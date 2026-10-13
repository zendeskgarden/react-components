/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import IconFill from 'svg-icons-legacy/src/16/star-fill.svg';
import IconStroke from 'svg-icons-legacy/src/16/star-stroke.svg';

import { ToggleIconButton } from '../../src/index';

export default {
  title: 'Components/Buttons/ToggleIconButton',
  component: ToggleIconButton
};

export const Example: StoryObj<typeof ToggleIconButton> = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleClick = () => updateArgs({ isPressed: !args.isPressed });

    return (
      <ToggleIconButton {...args} onClick={handleClick}>
        {args.isPressed === true ? <IconFill /> : <IconStroke />}
      </ToggleIconButton>
    );
  },
  name: 'ToggleIconButton',
  args: {
    'aria-label': 'Label',
    isBasic: true,
    isPill: true
  },
  argTypes: {
    disabled: { control: 'boolean' },
    isPressed: {
      control: 'radio',
      options: [false, true, 'mixed']
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A41375'
    }
  }
};
