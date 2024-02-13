/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import {
  arrowStyles,
  retrieveComponentStyles,
  getColor,
  DEFAULT_THEME,
  getLineHeight,
  getArrowPosition
} from '@zendeskgarden/react-theming';
import { Placement } from '@floating-ui/react-dom';
import { ITooltipProps } from '../types';
import { StyledParagraph } from './StyledParagraph';
import { StyledTitle } from './StyledTitle';

const COMPONENT_ID = 'tooltip.tooltip';

interface IStyledTooltipProps extends Pick<ITooltipProps, 'hasArrow' | 'size' | 'zIndex'> {
  placement: Placement;
  type: NonNullable<ITooltipProps['type']>;
}

const sizeStyles = ({
  theme,
  size,
  type,
  placement,
  hasArrow
}: IStyledTooltipProps & ThemeProps<DefaultTheme>) => {
  let margin = `${theme.space.base * 1.5}px`;
  let borderRadius = theme.borderRadii.sm;
  let padding = '0 1em';
  let maxWidth;
  let overflowWrap;
  let whiteSpace = 'nowrap';
  let lineHeight = getLineHeight(theme.space.base * 5, theme.fontSizes.sm);
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
    maxWidth = `460px`;
    lineHeight = getLineHeight(theme.space.base * 5, theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2.5}px`;
  } else if (size === 'large') {
    padding = `${theme.space.base * 5}px`;
    maxWidth = `270px`;
    lineHeight = getLineHeight(theme.space.base * 5, theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2}px`;
  } else if (size === 'medium') {
    padding = '1em';
    maxWidth = `140px`;
    lineHeight = getLineHeight(theme.space.base * 4, theme.fontSizes.sm);
  }

  if (size === 'extra-large' || size === 'large') {
    fontSize = theme.fontSizes.md;
    titleDisplay = 'block';
  }

  let arrowSize;
  let arrowInset;

  if (hasArrow) {
    if (size === 'small' || size === 'medium') {
      arrowSize = margin;
      arrowInset = type === 'dark' ? '1px' : '0';
    } else {
      arrowInset = type === 'dark' ? '2px' : '1px';

      if (size === 'large') {
        margin = `${theme.space.base * 2}px`;
        arrowSize = margin;
      } else if (size === 'extra-large') {
        margin = `${theme.space.base * 3}px`;
        arrowSize = `${theme.space.base * 2.5}px`;
      }
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
    font-size: ${fontSize};
    overflow-wrap: ${overflowWrap};

    ${hasArrow &&
    arrowStyles(getArrowPosition(theme, placement), {
      size: arrowSize,
      inset: arrowInset
    })};

    ${StyledParagraph} {
      margin-top: ${paragraphMarginTop};
    }

    ${StyledTitle} {
      display: ${titleDisplay};
    }
  `;
};

const colorStyles = ({ theme, type }: IStyledTooltipProps & ThemeProps<DefaultTheme>) => {
  let border;
  let boxShadow = theme.shadows.lg(
    `${theme.space.base}px`,
    `${theme.space.base * 2}px`,
    getColor('chromeHue', 600, theme, 0.15)!
  );
  let backgroundColor = getColor('chromeHue', 700, theme);
  let color = theme.colors.background;
  let titleColor;

  if (type === 'light') {
    boxShadow = theme.shadows.lg(
      `${theme.space.base * 3}px`,
      `${theme.space.base * 5}px`,
      getColor('chromeHue', 600, theme, 0.15)!
    );
    border = `${theme.borders.sm} ${getColor('neutralHue', 300, theme)}`;
    backgroundColor = theme.colors.background;
    color = getColor('neutralHue', 700, theme)!;
    titleColor = theme.colors.foreground;
  }

  return css`
    border: ${border};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    color: ${color};

    ${StyledTitle} {
      color: ${titleColor};
    }
  `;
};

/**
 * Accepts all `<div>` props
 */
export const StyledTooltip = styled.div.attrs<IStyledTooltipProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTooltipProps>`
  display: inline-block;
  box-sizing: border-box;
  direction: ${props => props.theme.rtl && 'rtl'};
  text-align: ${props => (props.theme.rtl ? 'right' : 'left')};
  font-weight: ${props => props.theme.fontWeights.regular};

  ${props => sizeStyles(props)};

  &[aria-hidden='true'] {
    display: none;
  }

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltip.defaultProps = {
  theme: DEFAULT_THEME
};
