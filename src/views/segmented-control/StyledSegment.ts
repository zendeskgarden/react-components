/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles } from '../../theming/utils/focusStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';
import { getOverlayColor } from './getOverlayColor';
import { StyledSegmentInput } from './StyledSegmentInput';

interface IStyledSegmentProps {
  $hasPill?: boolean;
  $isCompact?: boolean;
  $isSelected?: boolean;
}

/* Garden has no motion tokens; these match the design */
const TRANSITION_DURATION = '150ms';
const TRANSITION_DURATION_HOVER = '100ms';
const TRANSITION_TIMING = 'ease-out';

/*
 * 1. The selected segment only paints its own background until the pill has
 *    been measured and positioned. Selection never waits on measurement.
 * 2. A pressed segment is darker than a hovered one. An unselected segment is
 *    tinted only while it is not already checked. `:active` also applies while
 *    Space is held, and while the button is held after the pointer leaves.
 * 3. Forced colors drop backgrounds and shadows, so selection and focus are
 *    drawn with outlines instead.
 */
const colorStyles = ({ theme, $hasPill, $isSelected }: WithTheme<IStyledSegmentProps>) => {
  /* [1] */
  const backgroundColor =
    $isSelected && !$hasPill ? getColor({ theme, variable: 'background.default' }) : 'transparent';
  const hoverBackgroundColor = getOverlayColor(theme, theme.opacity[100]);
  const pressedBackgroundColor = getOverlayColor(theme, theme.opacity[200]);

  return css`
    background-color: ${backgroundColor};
    color: inherit;

    /* [2] */
    ${StyledSegmentInput}:hover:not(:checked) + & {
      background-color: ${hoverBackgroundColor};
    }

    ${StyledSegmentInput}:active:not(:checked) + & {
      background-color: ${pressedBackgroundColor};
    }

    ${focusStyles({
      theme,
      selector: `${StyledSegmentInput}:focus-visible + &`,
      inset: $isSelected,
      shadowWidth: 'md',
      spacerWidth: 'xs'
    })}

    /* [3] */
    @media (forced-colors: active) {
      ${StyledSegmentInput}:checked + & {
        outline: ${theme.borderWidths.sm} solid;
      }

      ${StyledSegmentInput}:focus-visible + & {
        outline: ${theme.borderWidths.md} solid;
        outline-offset: ${
          $isSelected
            ? `calc(-${theme.borderWidths.md} - ${theme.shadowWidths.xs})`
            : theme.shadowWidths.xs
        };
      }
    }
  `;
};

/*
 * A concrete radius (half the height) lets the inset focus shadow follow the
 * pill's inner curve.
 */
const sizeStyles = ({ theme, $isCompact }: WithTheme<IStyledSegmentProps>) => {
  const minHeight = theme.space.base * ($isCompact ? 7 : 9);
  const borderRadius = minHeight / 2;
  const paddingVertical = theme.space.base * ($isCompact ? 1.5 : 2);
  const paddingHorizontal = theme.space.base * ($isCompact ? 2.5 : 3);
  const fontSize = $isCompact ? theme.fontSizes.sm : theme.fontSizes.md;
  const lineHeight = $isCompact ? theme.lineHeights.sm : theme.lineHeights.md;

  return css`
    border-radius: ${borderRadius}px;
    padding: ${paddingVertical}px ${paddingHorizontal}px;
    min-height: ${minHeight}px;
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledSegment = styled.span<WithTheme<IStyledSegmentProps>>`
  display: block;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  cursor: pointer;
  min-width: 0;
  text-align: center;
  white-space: nowrap;
  font-weight: ${props => props.theme.fontWeights.regular};
  -webkit-tap-highlight-color: transparent;

  ${sizeStyles};

  ${colorStyles};

  @media (prefers-reduced-motion: no-preference) {
    transition: background-color ${TRANSITION_DURATION} ${TRANSITION_TIMING};

    ${StyledSegmentInput}:hover + & {
      transition-duration: ${TRANSITION_DURATION_HOVER};
    }

    ${StyledSegmentInput}:active + & {
      transition-duration: 0ms;
    }
  }

  ${componentStyles};
`;
