/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, css, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColorV8,
  focusStyles
} from '@zendeskgarden/react-theming';
import { ITableProps } from '../types';
import { getRowHeight } from './style-utils';

const COMPONENT_ID = 'tables.overflow_button';

interface IStyledOverflowButtonProps {
  isHovered?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
  size?: ITableProps['size'];
}

const OVERFLOW_BUTTON_SIZE = '2em';

const colorStyles = (props: IStyledOverflowButtonProps & ThemeProps<DefaultTheme>) => {
  const hoverBackgroundColor = getColorV8('primaryHue', 600, props.theme, 0.08);
  const hoverForegroundColor = getColorV8('neutralHue', 700, props.theme);
  const activeBackgroundColor = getColorV8('primaryHue', 600, props.theme, 0.2);
  const activeForegroundColor = getColorV8('neutralHue', 800, props.theme);
  let foregroundColor;

  if (props.isHovered) {
    foregroundColor = hoverForegroundColor;
  } else if (props.isActive) {
    foregroundColor = activeForegroundColor;
  } else {
    foregroundColor = getColorV8('neutralHue', 600, props.theme);
  }

  return css`
    color: ${foregroundColor};

    &:hover {
      background-color: ${hoverBackgroundColor};
      color: ${hoverForegroundColor};
    }

    ${focusStyles({
      theme: props.theme,
      inset: true
    })}

    &:active {
      background-color: ${activeBackgroundColor};
      color: ${activeForegroundColor};
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
  /* prettier-ignore */
  transition:
    background-color 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out;
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
  transition: background-color 0.1s ease-in-out;

  width: ${OVERFLOW_BUTTON_SIZE};
  height: ${OVERFLOW_BUTTON_SIZE};
`;

StyledOverflowButtonIconWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
