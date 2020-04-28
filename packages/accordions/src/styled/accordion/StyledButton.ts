/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  getLineHeight,
  getColor,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

export const COMPONENT_ID = 'accordions.button';

export interface IStyledButton {
  isCompact?: boolean;
  isHovered?: boolean;
  isCollapsible?: boolean;
  isExpanded?: boolean;
}

const colorStyles = (props: ThemeProps<DefaultTheme> & IStyledButton) => {
  const color = getColor('primaryHue', 600, props.theme);
  const showColor = props.isCollapsible || !props.isExpanded;

  return css`
    color: ${showColor && props.isHovered && color};

    &:hover {
      cursor: ${showColor && 'pointer'};
      color: ${showColor && color};
    }
  `;
};

/**
 * 1. Remove dotted outline from Firefox on focus.
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
    props.isCompact
      ? `${props.theme.space.base * 2}px ${props.theme.space.base * 3}px`
      : `${props.theme.space.base * 5}px`};
  width: 100%;
  text-align: ${props => (props.theme.rtl ? 'right' : 'left')};
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${colorStyles}

  &::-moz-focus-inner {
    border: 0; /* [1] */
  }

  &:hover {
    cursor: ${props => (props.isCollapsible || !props.isExpanded) && 'pointer'};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledButton.defaultProps = {
  theme: DEFAULT_THEME
};
