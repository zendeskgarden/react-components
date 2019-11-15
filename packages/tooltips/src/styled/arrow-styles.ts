/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import stripUnit from 'polished/lib/helpers/stripUnit';
import { IStyledTooltipProps } from './StyledTooltip';

export const arrowStyles = ({
  theme,
  hasArrow,
  size
}: IStyledTooltipProps & ThemeProps<DefaultTheme>) => {
  if (!hasArrow) {
    return '';
  }

  const arrowSize = `${stripUnit(theme.fontSizes.sm) / stripUnit(theme.fontSizes.md)}em`;
  const arrowTransform = 'rotate(45deg)';
  const arrowPosition = math(`${arrowSize} / -2`);
  const bottomClipPath =
    'polygon(100% 0, calc(100% - 1px) 0, 0 calc(100% - 1px), 0 100%, 100% 100%)';
  const leftClipPath = 'polygon(0 100%, 100% 100%, 100% calc(100% - 1px), 1px 0, 0 0)';
  const rightClipPath = 'polygon(100% 0, 100% 100%, calc(100% - 1px) 100%, 0 1px, 0 0)';
  const topClipPath = 'polygon(100% 0, 100% 1px, 1px 100%, 0 100%, 0 0)';

  let arrowFontSize = `${theme.space.base * 1.75}px`;

  if (size === 'extra-large') {
    arrowFontSize = `${theme.space.base * 4}px`;
  } else if (size === 'large') {
    arrowFontSize = theme.fontSizes.sm;
  }

  return css`
    /* Set base positioning for an arrow */
    position: relative;

    /* Allow any border inherited by ::after to show through */
    &::before {
      border-width: inherit;
      border-style: inherit;
      border-color: transparent;
      background-clip: content-box;
    }

    /**
     * Styling and z-space positioning for arrow ::after.
     * Border styling and box-shadow will be automatically
     * inherited from the parent element
     **/
    &::after {
      z-index: -1;
      border: inherit;
      box-shadow: inherit;
    }

    /**
     * Apply shared position and sizing properties to ::before
     * and ::after
     **/
    &::before,
    &::after {
      position: absolute;
      transform: ${arrowTransform};
      background-color: inherit;
      box-sizing: inherit;
      width: ${arrowSize};
      height: ${arrowSize};
      font-size: ${arrowFontSize};
      content: '';
    }

    /**
     * 1. Round-off portion of the foreground square opposite the arrow
     * tip (improved layout for IE which doesn't support 'clip-path').
     * 2. Clip portion of the foreground square opposite the arrow tip so
     * that it doesn't interfere with container content.
     **/

    &[data-placement^='bottom']::before {
      border-bottom-right-radius: 100%; /* [1] */
      clip-path: ${topClipPath}; /* [2] */
    }

    /* Positions an arrow at the top(v) center(h) of the parent element */
    &[data-placement='bottom']::before,
    &[data-placement='bottom']::after {
      top: ${arrowPosition};
      left: 50%;
      margin-left: ${arrowPosition};
    }

    /* Positions an arrow at the top(v) left(h) of the parent element */
    &[data-placement='bottom-start']::before,
    &[data-placement='bottom-start']::after {
      top: ${arrowPosition};
      left: ${arrowSize};
    }

    /* Positions an arrow at the top(v) right(h) of the parent element */
    &[data-placement='bottom-end']::before,
    &[data-placement='bottom-end']::after {
      top: ${arrowPosition};
      right: ${arrowSize};
    }

    &[data-placement^='left']::before {
      border-bottom-left-radius: 100%; /* [1] */
      clip-path: ${rightClipPath}; /* [2] */
    }

    /* Positions an arrow at the center(v) right(h) of the parent element */
    &[data-placement='left']::before,
    &[data-placement='left']::after {
      top: 50%;
      right: ${arrowPosition};
      margin-top: ${arrowPosition};
    }

    /* Positions an arrow at the right(h) top(v) of the parent element */
    &[data-placement='left-start']::before,
    &[data-placement='left-start']::after {
      top: ${arrowSize};
      right: ${arrowPosition};
    }

    /* Positions an arrow at the right(h) bottom(v) of the parent element */
    &[data-placement='left-end']::before,
    &[data-placement='left-end']::after {
      right: ${arrowPosition};
      bottom: ${arrowSize};
    }

    &[data-placement^='right']::before {
      border-top-right-radius: 100%; /* [1] */
      clip-path: ${leftClipPath}; /* [2] */
    }

    /* Positions an arrow at the center(v) left(h) of the parent element */
    &[data-placement='right']::before,
    &[data-placement='right']::after {
      top: 50%;
      left: ${arrowPosition};
      margin-top: ${arrowPosition};
    }

    /* Positions an arrow at the left(h) top(v) of the parent element */
    &[data-placement='right-start']::before,
    &[data-placement='right-start']::after {
      top: ${arrowSize};
      left: ${arrowPosition};
    }

    /* Positions an arrow at the left(h) bottom(v) of the parent element */
    &[data-placement='right-end']::before,
    &[data-placement='right-end']::after {
      bottom: ${arrowSize};
      left: ${arrowPosition};
    }

    &[data-placement^='top']::before {
      border-top-left-radius: 100%; /* [1] */
      clip-path: ${bottomClipPath}; /* [2] */
    }

    /* Positions an arrow at the bottom(v) center(h) of the parent element */
    &[data-placement='top']::before,
    &[data-placement='top']::after {
      bottom: ${arrowPosition};
      left: 50%;
      margin-left: ${arrowPosition};
    }

    /* Positions an arrow at the bottom(v) left(h) of the parent element */
    &[data-placement='top-start']::before,
    &[data-placement='top-start']::after {
      bottom: ${arrowPosition};
      left: ${arrowSize};
    }

    /* Positions an arrow at the bottom(v) right(h) of the parent element */
    &[data-placement='top-end']::before,
    &[data-placement='top-end']::after {
      right: ${arrowSize};
      bottom: ${arrowPosition};
    }
  `;
};
