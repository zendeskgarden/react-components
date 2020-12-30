/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, css, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { SIZE } from './StyledTable';
import { getRowHeight } from './style-utils';

const COMPONENT_ID = 'tables.overflow_button';

export interface IStyledOverflowButtonProps {
  /** Applies hover styling */
  isHovered?: boolean;
  /** Applies active styling */
  isActive?: boolean;
  /** Applies focus styling */
  isFocused?: boolean;
  /** Sets the size */
  size: SIZE;
}

const OVERFLOW_BUTTON_SIZE = '2em';

const colorStyles = (props: IStyledOverflowButtonProps & ThemeProps<DefaultTheme>) => {
  const boxShadow = props.theme.shadows.md(getColor('primaryHue', 600, props.theme, 0.35)!);
  const hoverBackgroundColor = getColor('primaryHue', 600, props.theme, 0.08);
  const hoverForegroundColor = getColor('neutralHue', 700, props.theme);
  const activeBackgroundColor = getColor('primaryHue', 600, props.theme, 0.2);
  const activeForegroundColor = getColor('neutralHue', 800, props.theme);
  let foregroundColor;

  if (props.isHovered) {
    foregroundColor = hoverForegroundColor;
  } else if (props.isActive) {
    foregroundColor = activeForegroundColor;
  } else {
    foregroundColor = getColor('neutralHue', 600, props.theme);
  }

  return css`
    color: ${foregroundColor};

    &:hover {
      background-color: ${hoverBackgroundColor};
      color: ${hoverForegroundColor};
    }

    &:active {
      background-color: ${activeBackgroundColor};
      color: ${activeForegroundColor};
    }

    &:focus {
      outline: none;
    }

    &[data-garden-focus-visible] {
      box-shadow: inset ${boxShadow};
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
  margin-top: calc(${props => math(`${getRowHeight(props)} / 2`)} - 1em);
  border: none; /* [1] */
  border-radius: 50%;
  background-color: transparent; /* [1] */
  cursor: pointer;
  padding: 0; /* [1] */
  width: 100%;
  height: ${OVERFLOW_BUTTON_SIZE};
  text-decoration: none; /* [2] */
  font-size: inherit; /* [1] */

  ${props => colorStyles(props)}

  &[aria-expanded='true'] {
    opacity: 1;
  }

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

  width: ${OVERFLOW_BUTTON_SIZE};
  height: ${OVERFLOW_BUTTON_SIZE};

  &:hover {
    opacity: 1;
  }
`;

StyledOverflowButtonIconWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
