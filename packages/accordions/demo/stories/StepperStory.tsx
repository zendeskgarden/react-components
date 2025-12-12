/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { SVGAttributes } from 'react';
import { StoryFn } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/12/clipboard-list-stroke.svg';
import { Stepper, IStepperProps } from '@zendeskgarden/react-accordions';
import { IStepperStep } from './types';

interface IArgs extends IStepperProps {
  hasIcon: boolean;
  isLabelHidden: boolean;
  steps: IStepperStep[];
  iconProps: SVGAttributes<SVGElement>;
}

export const StepperStory: StoryFn<IArgs> = ({ steps, ...args }) => (
  <Stepper {...args}>
    {steps.map((step, index) => (
      <Stepper.Step key={index}>
        <Stepper.Label
          icon={args.hasIcon ? <Icon /> : undefined}
          isHidden={args.isLabelHidden}
          iconProps={args.iconProps}
        >
          {step.label}
        </Stepper.Label>
        <Stepper.Content>{step.content}</Stepper.Content>
      </Stepper.Step>
    ))}
  </Stepper>
);
