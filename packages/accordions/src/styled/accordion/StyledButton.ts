/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

export const COMPONENT_ID = 'accordions.button';

export interface IStyledButton {
  isCompact?: boolean;
  isHovered?: boolean;
}

/**
 * 1. Remove dotted outline from Firefox on focus.
 */
export const StyledButton = styled.button.attrs<IStyledButton>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledButton>`
  outline: none;
  border: none;
  background: transparent;
  padding: ${props =>
    props.isCompact
      ? `${props.theme.space.base * 1.5}px ${props.theme.space.base * 3}px`
      : `${props.theme.space.base * 5}px`};
  width: 100%;
  text-align: ${props => (props.theme.rtl ? 'right' : 'left')};
  color: ${props => props.isHovered && getColor('primaryHue', 600, props.theme)};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};

  &::-moz-focus-inner {
    border: 0; /* [1] */
  }

  &:hover {
    cursor: pointer;
    color: ${props => getColor('primaryHue', 600, props.theme)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledButton.defaultProps = {
  theme: DEFAULT_THEME
};
