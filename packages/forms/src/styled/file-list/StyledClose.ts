/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  retrieveComponentStyles,
  getColor,
  getLineHeight,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.file.close';

/**
 * 1. Reset for <button> element.
 * 2. Remove dotted outline from Firefox on focus.
 */
export const StyledClose = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<any>`
  display: block;
  transition: background-color 0.1s ease-in-out, color 0.25s ease-in-out;
  z-index: 1;
  border: none; /* [1] */
  border-radius: 50%;
  background-color: transparent; /* [1] */
  cursor: pointer;
  padding: 0;
  min-width: ${props => props.theme.space.base * 7}px;
  min-height: ${props => props.theme.space.base * 7}px;
  overflow: hidden;
  line-height: ${props => getLineHeight(props.theme.space.base * 3, props.theme.fontSizes.md)};
  color: ${props => getColor('neutralHue', 600, props.theme)};
  font-size: 0; /* [1] */
  user-select: none;

  &:hover {
    color: ${props => getColor('neutralHue', 800, props.theme)};
  }

  &:focus {
    outline: none;
  }

  &[data-garden-focus-visible] {
    background-color: ${props => getColor('primaryHue', 600, props.theme, 0.15)};
    color: ${props => getColor('primaryHue', 800, props.theme)};

    &::-moz-focus-inner {
      border: 0; /* [2] */
    }
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledClose.defaultProps = {
  theme: DEFAULT_THEME
};
