/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { Spinner, ISpinnerProps } from '@zendeskgarden/react-loaders';
import { PALETTE } from '@zendeskgarden/react-theming';

export default {
  title: 'Components/Loaders/Spinner',
  component: Spinner
} as Meta;

const StyledExampleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IDefaultStoryProps extends Omit<ISpinnerProps, 'size'> {
  size: number;
}

export const Default: Story<IDefaultStoryProps> = ({ color, size, delayMS, duration }) => {
  return (
    <StyledExampleWrapper>
      <Spinner color={color} size={`${size}px`} delayMS={delayMS} duration={duration} />
    </StyledExampleWrapper>
  );
};

Default.argTypes = {
  size: {
    control: { type: 'range', min: 30, max: 250, step: 1 }
  },
  duration: {
    control: { type: 'range', min: 625, max: 2500, step: 10 }
  },
  color: { control: 'color' }
};

Default.args = {
  size: 48,
  duration: 1250,
  color: PALETTE.blue[500]
};

Default.parameters = {
  docs: {
    description: {
      component: `
  The \`Spinner\` component includes several accessibility
  and usability features:

  - Inherits the \`font-size\` and \`color\` properties
    from it's parent element and additionally allows local overrides
  - Delays the initial render of the component to reduce UI shifting
    in normal loading conditions
  - Includes accessibility attributes to identify as an \`indeterminate progress bar\`
`
    }
  }
};
