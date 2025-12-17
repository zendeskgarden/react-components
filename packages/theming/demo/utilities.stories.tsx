/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ArrowStylesStory } from './stories/ArrowStylesStory';
import { MenuStylesStory } from './stories/MenuStylesStory';
import { GetColorStory } from './stories/GetColorStory';
import { ARROW_POSITIONS, MENU_POSITIONS } from './stories/data';

export default {
  title: 'Packages/Theming/utilities'
};

export const ArrowStyles: StoryObj<typeof ArrowStylesStory> = {
  render: args => <ArrowStylesStory {...args} />,
  name: 'arrowStyles()',
  args: {
    position: 'bottom',
    hasBoxShadow: true,
    hasBorder: true,
    isAnimated: false,
    size: 6,
    inset: 0
  },
  argTypes: {
    position: {
      control: 'select',
      options: ARROW_POSITIONS
    },
    size: {
      control: {
        type: 'range',
        min: 2,
        max: 10,
        step: 1
      }
    },
    inset: {
      control: {
        type: 'range',
        min: -4,
        max: 4,
        step: 1
      }
    }
  }
};

export const GetColor: StoryObj<typeof GetColorStory> = {
  render: args => <GetColorStory {...args} />,
  name: 'getColor()',
  args: {
    theme: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      colors: (({ base, ...rest }) => rest)(DEFAULT_THEME.colors),
      opacity: DEFAULT_THEME.opacity,
      palette: DEFAULT_THEME.palette
    },
    variable: 'background.primaryEmphasis'
  },
  argTypes: {
    dark: { control: { type: 'object' } },
    hue: { control: { type: 'text' } },
    light: { control: { type: 'object' } },
    offset: { control: { type: 'number' } },
    shade: { control: { type: 'number' } },
    transparency: {
      control: {
        type: 'number',
        min: 100,
        max: 1200,
        step: 100
      }
    },
    variable: { control: { type: 'text' } },
    theme: { control: { type: 'object' } }
  }
};

export const MenuStyles: StoryObj<typeof MenuStylesStory> = {
  render: args => <MenuStylesStory {...args} />,
  name: 'menuStyles()',
  args: {
    position: 'bottom',
    isAnimated: true
  },
  argTypes: {
    position: {
      control: 'radio',
      options: MENU_POSITIONS
    }
  }
};
