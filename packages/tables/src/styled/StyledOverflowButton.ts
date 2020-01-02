/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, css, DefaultTheme } from 'styled-components';
import stripUnit from 'polished/lib/helpers/stripUnit';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { getRowHeight } from './StyledRow';
import { SIZE } from './StyledTable';

const COMPONENT_ID = 'tables.overflow_button';

export interface IStyledOverflowButtonProps {
  isHovered?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
  size: SIZE;
}

const getOverflowButtonSize = () => {
  return '2em';
};

const colorStyles = (props: IStyledOverflowButtonProps & ThemeProps<DefaultTheme>) => {
  const baseColor =
    props.isHovered || props.isActive || props.isFocused
      ? getColor('neutralHue', 800, props.theme)
      : getColor('neutralHue', 600, props.theme);

  return css`
    color: ${baseColor};

    &:focus {
      outline: none;
    }

    &:active,
    &:hover {
      opacity: 1;
      color: ${getColor('neutralHue', 800, props.theme)};
    }

    &[data-garden-focus-visible] {
      background-color: ${getColor('neutralHue', 600, props.theme, 0.35)};
    }
  `;
};

/**
 * 1. Reset for <button> element
 * 2. Reset for <a>nchor element
 */
export const StyledOverflowButton = styled.button.attrs<IStyledOverflowButtonProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'button'
})<IStyledOverflowButtonProps>`
  display: block;
  transition: opacity 0.25s ease-in-out, background-color 0.1s ease-in-out;
  opacity: ${props => (props.isHovered || props.isFocused || props.isActive ? '1' : '0')};
  z-index: ${props => (props.isActive ? '1' : '0')};
  margin-top: calc(${props => stripUnit(getRowHeight(props)) / 2} - 1em);
  border: none; /* [1] */
  border-radius: 50%;
  background-color: transparent; /* [1] */
  cursor: pointer;
  padding: 0; /* [1] */
  width: 100%;
  height: ${getOverflowButtonSize};
  text-decoration: none; /* [2] */
  font-size: inherit; /* [1] */

  ${props => colorStyles(props)}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledOverflowButton.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledOverflowButtonIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  transition: opacity 0.25s ease-in-out, background-color 0.1s ease-in-out;

  width: ${getOverflowButtonSize};
  height: ${getOverflowButtonSize};

  &:hover {
    opacity: 1;
  }
`;

StyledOverflowButtonIconWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
