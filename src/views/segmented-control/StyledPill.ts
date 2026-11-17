/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';

interface IStyledPillProps {
  $isReady?: boolean;
}

const colorStyles = ({ theme }: WithTheme<IStyledPillProps>) => {
  const backgroundColor = getColor({ theme, variable: 'background.default' });
  /* The design's centered shadow is near-black: 16% in light mode, 88% in dark mode */
  const shadowColor = getColor({
    theme,
    hue: 'neutralHue',
    shade: 1200,
    transparency: theme.colors.base === 'dark' ? theme.opacity[1100] : theme.opacity[200]
  });
  const boxShadow = theme.shadows.lg('0', theme.space.xxs, shadowColor);
  /*
   * The shadow alone separates the pill from the translucent track, as in the
   * design. That is 1.11:1 (light) and 1.25:1 (dark), below the 3:1 that WCAG
   * 1.4.11 (non-text contrast) asks for.
   */

  return css`
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
  `;
};

const sizeStyles = ({ theme }: WithTheme<IStyledPillProps>) => css`
  border-radius: ${theme.borderRadii.full};
`;

/*
 * Decorative selection indicator. Its `top`, `height`, `width` and `transform`
 * are set directly on the element, frame by frame, by `useSelectionPill`.
 * It stays hidden until it has been measured.
 */
export const StyledPill = styled.span<WithTheme<IStyledPillProps>>`
  position: absolute;
  left: 0; /* physical, so measured offsets work in both directions */
  visibility: ${props => (props.$isReady ? 'visible' : 'hidden')};
  pointer-events: none;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
