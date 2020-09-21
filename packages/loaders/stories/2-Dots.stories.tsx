/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { getColor } from '@zendeskgarden/react-theming';
import { Dots, IDotsProps } from '@zendeskgarden/react-loaders';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Loaders/Dots',
  component: Dots
} as Meta;

const StyledExampleWrapper = styled.div`
  color: ${p => getColor('primaryHue', 500, p.theme)};
  font-size: ${p => p.theme.space.base * 12}px;
`;

interface IDefaultStoryProps extends IDotsProps {
  size: number;
}

export const Default: Story<IDefaultStoryProps> = ({ color, delayMS, duration, size }) => {
  return (
    <StyledExampleWrapper>
      <Grid>
        <Row>
          <Col textAlign="center">
            <Dots color={color} delayMS={delayMS} duration={duration} size={`${size}px`} />
          </Col>
        </Row>
      </Grid>
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

Default.parameters = {
  docs: {
    description: {
      component: `
  The \`Dots\` component includes several accessibility
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
