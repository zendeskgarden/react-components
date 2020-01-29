/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.close';

export interface IStyledCloseProps {
  hovered?: boolean;
}

/**
 * 1. Remove dotted outline from Firefox on focus.
 */
export const StyledClose = styled.button.attrs<IStyledCloseProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledCloseProps>`
  display: block;
  position: absolute;
  top: ${props => props.theme.space.base * 2.5}px;
  ${props => (props.theme.rtl ? 'left' : 'right')}: ${props => `${props.theme.space.base * 5}px`};
  transition: background-color 0.1s ease-in-out;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  width: ${props => props.theme.space.base * 10}px;
  height: ${props => props.theme.space.base * 10}px;
  overflow: hidden;
  text-decoration: none;
  color: ${props => getColor('neutralHue', 600, props.theme)};
  font-size: 0;
  user-select: none;

  &[data-garden-focus-visible] {
    background-color: ${props => getColor('neutralHue', 600, props.theme, 0.15)};
  }

  &::-moz-focus-inner {
    border: 0; /* [1] */
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${props => getColor('neutralHue', 800, props.theme)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledClose.defaultProps = {
  theme: DEFAULT_THEME
};
