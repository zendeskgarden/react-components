/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import stripUnit from 'polished/lib/helpers/stripUnit';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { POPPER_PLACEMENT } from '../utils/gardenPlacements';
import { StyledParagraph } from './StyledParagraph';
import { StyledTitle } from './StyledTitle';
import { arrowStyles } from './arrow-styles';

const COMPONENT_ID = 'tooltip.tooltip';

export type TOOLTIP_SIZE = 'small' | 'medium' | 'large' | 'extra-large';

export interface IStyledTooltipProps {
  hasArrow?: boolean;
  size?: TOOLTIP_SIZE;
  /** All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements) */
  placement?: POPPER_PLACEMENT;
  zIndex?: number | string;
}

const sizeStyles = ({ theme, size, hasArrow }: IStyledTooltipProps & ThemeProps<DefaultTheme>) => {
  let margin = `${theme.space.base * 1.5}px`;
  let borderRadius = theme.borderRadii.sm;
  let padding = '0 1em';
  let maxWidth;
  let overflowWrap;
  let whiteSpace = 'nowrap';
  let lineHeight = (theme.space.base * 5) / stripUnit(theme.fontSizes.sm);
  let fontSize = theme.fontSizes.sm;
  let titleDisplay;
  let paragraphMarginTop;
  let wordWrap;

  if (size !== 'small') {
    borderRadius = theme.borderRadii.md;
    overflowWrap = 'break-word';
    whiteSpace = 'normal';
    wordWrap = 'break-word';
  }

  if (size === 'extra-large') {
    padding = `${theme.space.base * 10}px`;
    maxWidth = `${theme.space.base * 115}px`;
    lineHeight = (theme.space.base * 5) / stripUnit(theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2.5}px`;
  } else if (size === 'large') {
    padding = `${theme.space.base * 5}px`;
    maxWidth = '270px';
    lineHeight = (theme.space.base * 5) / stripUnit(theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2}px`;
  } else if (size === 'medium') {
    padding = 'padding: 1em';
    maxWidth = `${theme.space.base * 3}px`;
    lineHeight = (theme.space.base * 4) / stripUnit(theme.fontSizes.sm);
  }

  if (size === 'extra-large' || size === 'large') {
    fontSize = theme.fontSizes.md;
    titleDisplay = 'block';
  }

  if (hasArrow) {
    if (size === 'large') {
      margin = `${theme.space.base * 2}px`;
    } else if (size === 'extra-large') {
      margin = `${theme.space.base * 3}px`;
    }
  }

  return css`
    margin: ${margin};
    border-radius: ${borderRadius};
    padding: ${padding};
    max-width: ${maxWidth};
    line-height: ${lineHeight};
    word-wrap: ${wordWrap};
    white-space: ${whiteSpace};
    /*  Manipulate arrow sizing (which is based on ems). */
    font-size: ${fontSize};
    overflow-wrap: ${overflowWrap};

    ${StyledParagraph} {
      margin-top: ${paragraphMarginTop};
    }

    ${StyledTitle} {
      display: ${titleDisplay};
    }
  `;
};

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const boxShadow = theme.shadows.lg(
    `${theme.space.base}px`,
    `${theme.space.base * 2}px`,
    getColor('chromeHue', 600, theme, 0.15)!
  );

  return css`
    box-shadow: ${boxShadow};
    background-color: ${getColor('chromeHue', 700, theme)};
    color: ${theme.colors.background};
  `;
};

/**
 * Accepts all `<div>` props
 */
export const StyledTooltip = styled.div.attrs<IStyledTooltipProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-placement': props.placement
}))<IStyledTooltipProps>`
  display: inline-block;
  box-sizing: border-box;
  direction: ${props => props.theme.rtl && 'rtl'};
  font-weight: ${props => props.theme.fontWeights.regular};

  ${sizeStyles};
  ${arrowStyles};

  &[aria-hidden='true'] {
    display: none;
  }

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltip.defaultProps = {
  hasArrow: true,
  size: 'small',
  theme: DEFAULT_THEME
};
