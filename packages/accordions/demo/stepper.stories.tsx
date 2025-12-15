/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Stepper } from '@zendeskgarden/react-accordions';
import { StepperStory } from './stories/StepperStory';
import { STEPPER_STEPS as STEPS } from './stories/data';

export default {
  title: 'Packages/Accordions/Stepper',
  component: Stepper,
  subcomponents: {
    'Stepper.Content': Stepper.Content,
    'Stepper.Label': Stepper.Label,
    'Stepper.Step': Stepper.Step
  }
};

export const Example: StoryObj<typeof StepperStory> = {
  render: args => <StepperStory {...args} />,
  name: 'Stepper',
  args: {
    hasIcon: false,
    isLabelHidden: false,
    steps: STEPS,
    iconProps: {
      role: 'img',
      'aria-label': 'checked',
      'aria-hidden': undefined
    }
  },
  argTypes: {
    hasIcon: {
      name: 'icon',
      table: { category: 'Stepper.Label' }
    },
    isLabelHidden: {
      name: 'isHidden',
      table: { category: 'Stepper.Label' }
    },
    steps: {
      name: 'Stepper.Step[]',
      table: { category: 'Story' }
    },
    iconProps: {
      name: 'iconProps',
      table: { category: 'Stepper.Label' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=171%3A12818'
    }
  }
};
