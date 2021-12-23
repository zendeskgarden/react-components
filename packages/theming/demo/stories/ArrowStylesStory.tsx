/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import { arrowStyles, getColor, DEFAULT_THEME, ARROW_POSITION } from '@zendeskgarden/react-theming';

interface IArgs {
  position: ARROW_POSITION;
  hasBoxShadow: boolean;
  hasBorder: boolean;
  isAnimated: boolean;
  size: number;
  inset: number;
}

const StyledDiv = styled.div<Omit<IArgs, 'isAnimated'>>`
  border: ${props => props.hasBorder && `${DEFAULT_THEME.borders.sm} ${getColor('primaryHue')}`};
  box-shadow: ${props =>
    props.hasBoxShadow &&
    DEFAULT_THEME.shadows.lg('8px', '12px', getColor('chromeHue', 600, DEFAULT_THEME, 0.15)!)};
  background-color: ${getColor('primaryHue', 200)};
  padding: ${p => p.theme.space.xxl};

  ${props =>
    arrowStyles(props.position, {
      size: `${props.size}px`,
      inset: `${props.inset}px`,
      animationModifier: '[data-garden-animate="true"]'
    })};
`;

export const ArrowStylesStory: Story<IArgs> = ({ isAnimated, ...args }) => (
  <div style={{ position: 'relative', zIndex: 0 }}>
    <StyledDiv data-garden-animate={isAnimated} {...args} />
  </div>
);
