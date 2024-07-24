/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { StoryFn } from '@storybook/react';
import { arrowStyles, getColor, ArrowPosition } from '@zendeskgarden/react-theming';

interface IArgs {
  position: ArrowPosition;
  hasBoxShadow: boolean;
  hasBorder: boolean;
  isAnimated: boolean;
  size: number;
  inset: number;
}

const StyledDiv = styled.div<Omit<IArgs, 'isAnimated'>>`
  border: ${p =>
    p.hasBorder &&
    `${p.theme.borders.sm} ${getColor({ theme: p.theme, variable: 'border.primaryEmphasis' })}`};
  box-shadow: ${p =>
    p.hasBoxShadow &&
    p.theme.shadows.lg(
      `${p.theme.space.base * (p.theme.colors.base === 'dark' ? 4 : 5)}px`,
      `${p.theme.space.base * (p.theme.colors.base === 'dark' ? 5 : 6)}px`,
      getColor({ variable: 'shadow.medium', theme: p.theme })
    )};
  background-color: ${p => getColor({ theme: p.theme, variable: 'background.primary' })};
  padding: ${p => p.theme.space.xxl};

  ${p =>
    arrowStyles(p.position, {
      size: `${p.size}px`,
      inset: `${p.inset}px`,
      animationModifier: '[data-garden-animate="true"]'
    })};
`;

export const ArrowStylesStory: StoryFn<IArgs> = ({ isAnimated, ...args }) => (
  <div style={{ position: 'relative', zIndex: 0 }}>
    <StyledDiv data-garden-animate={isAnimated} {...args} />
  </div>
);
