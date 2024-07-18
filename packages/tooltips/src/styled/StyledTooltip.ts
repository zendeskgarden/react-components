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
  DEFAULT_THEME,
  getLineHeight,
  getArrowPosition,
  getColor
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
      arrowInset = type === 'dark' ? '0px' : '1px';
    } else {
      arrowInset = type === 'dark' ? '0px' : '1px';

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
  let borderColor;
  let boxShadow;
  let backgroundColor;
  let color;
  let titleColor;

  if (type === 'light') {
    borderColor = getColor({ theme, variable: 'border.default' });
    boxShadow = theme.shadows.lg(
      `${theme.space.base * (theme.colors.base === 'dark' ? 4 : 5)}px`,
      `${theme.space.base * (theme.colors.base === 'dark' ? 6 : 7)}px`,
      getColor({
        theme,
        hue: 'neutralHue',
        shade: 1200,
        light: { transparency: theme.opacity[200] },
        dark: { transparency: theme.opacity[800] }
      })
    );
    backgroundColor = getColor({ theme, variable: 'background.raised' });
    color = getColor({ theme, variable: 'foreground.subtle' });
    titleColor = getColor({ theme, variable: 'foreground.default' });
  } else {
    borderColor = 'transparent';
    boxShadow = theme.shadows.lg(
      `${theme.space.base}px`,
      `${theme.space.base * 2}px`,
      getColor({
        theme,
        hue: 'neutralHue',
        shade: 1200,
        light: { transparency: theme.opacity[200] },
        dark: { transparency: theme.opacity[1100] }
      })
    );
    backgroundColor = getColor({
      theme,
      hue: 'neutralHue',
      light: { shade: 900 },
      dark: { shade: 700 }
    });
    color = getColor({ theme, hue: 'white' });
  }

  return css`
    border-color: ${borderColor};
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
  border: ${props => props.theme.borders.sm};
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
