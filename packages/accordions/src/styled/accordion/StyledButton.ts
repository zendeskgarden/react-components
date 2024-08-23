/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  getLineHeight,
  retrieveComponentStyles,
  getColor
} from '@zendeskgarden/react-theming';

export const COMPONENT_ID = 'accordions.button';

interface IStyledButton {
  $isCompact?: boolean;
  $isHovered?: boolean;
  $isCollapsible?: boolean;
  $isExpanded?: boolean;
}

const colorStyles = ({
  $isCollapsible,
  $isExpanded,
  $isHovered,
  theme
}: ThemeProps<DefaultTheme> & IStyledButton) => {
  const showColor = $isCollapsible || !$isExpanded;
  const color = getColor({
    theme,
    variable: showColor && $isHovered ? 'foreground.primary' : 'foreground.default'
  });

  return css`
    color: ${color};

    &:hover {
      cursor: ${showColor && 'pointer'};
      color: ${showColor && color};
    }
  `;
};

/**
 * 1. <button> override.
 * 2. Remove dotted outline from Firefox on focus.
 */
export const StyledButton = styled.button.attrs<IStyledButton>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledButton>`
  transition: color 0.1s ease-in-out;
  outline: none;
  border: none;
  background: transparent;
  padding: ${props =>
    props.$isCompact
      ? `${props.theme.space.base * 2}px ${props.theme.space.base * 3}px`
      : `${props.theme.space.base * 5}px`};
  width: 100%;
  text-align: ${props => (props.theme.rtl ? 'right' : 'left')};
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  font-family: inherit; /* [1] */
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${colorStyles}

  &::-moz-focus-inner {
    border: 0; /* [2] */
  }

  &:hover {
    cursor: ${props => (props.$isCollapsible || !props.$isExpanded) && 'pointer'};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
