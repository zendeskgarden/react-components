/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { rgba } from 'polished';

const COMPONENT_ID = 'dropdowns.item';

export interface IStyledItemProps {
  isFocused?: boolean;
  isCompact?: boolean;
  isDanger?: boolean;
  disabled?: boolean;
  checked?: boolean;
}

export const getItemPaddingVertical = (props: IStyledItemProps & ThemeProps<DefaultTheme>) => {
  if (props.isCompact) {
    return `${props.theme.space.base}px`;
  }

  return `${props.theme.space.base * 2}px`;
};

const getColorStyles = (props: IStyledItemProps & ThemeProps<DefaultTheme>) => {
  let foregroundColor;
  let backgroundColor;

  if (props.disabled) {
    foregroundColor = getColor('neutralHue', 400, props.theme);
  } else if (props.isDanger) {
    foregroundColor = getColor('dangerHue', 600, props.theme);
    backgroundColor = props.isFocused ? rgba(foregroundColor as string, 0.08) : 'inherit';
  } else {
    foregroundColor = props.theme.colors.foreground;
    backgroundColor = props.isFocused ? getColor('primaryHue', 600, props.theme, 0.08) : 'inherit';
  }

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    & a,
    & a:hover,
    & a:focus,
    & a:active {
      color: inherit;
    }
  `;
};

/**
 * 1. Allows an item to contain a positioned sub-menu.
 * 2. Reset stacking context for sub-menu css-arrows.
 **/
export const StyledItem = styled.li.attrs<IStyledItemProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-disabled': props.disabled
}))<IStyledItemProps>`
  display: block;
  position: relative; /* [1] */
  z-index: 0; /* [2] */
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  padding: ${props => getItemPaddingVertical(props)} ${props => props.theme.space.base * 9}px;
  text-decoration: none;
  line-height: ${props => props.theme.space.base * 5}px;
  word-wrap: break-word;
  user-select: none;

  &:first-child {
    margin-top: ${props => props.theme.space.base}px;
  }

  &:last-child {
    margin-bottom: ${props => props.theme.space.base}px;
  }

  &:focus {
    outline: none;
  }

  /* stylelint-disable no-descending-specificity */
  & a,
  & a:hover,
  & a:focus,
  & a:active {
    text-decoration: none;
  }

  ${props => getColorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledItem.defaultProps = {
  theme: DEFAULT_THEME
};
