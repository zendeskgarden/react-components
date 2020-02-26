/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { rgba } from 'polished';

export const StyledTileInput = styled.input`
  position: absolute;
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

StyledTileInput.defaultProps = {
  theme: DEFAULT_THEME
};

const COMPONENT_ID = 'forms.tile';

interface IStyledTileProps {
  isDisabled?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
}

const colorStyles = (props: IStyledTileProps & ThemeProps<DefaultTheme>) => {
  let color = getColor('neutralHue', 600, props.theme);
  let activeBackgroundColor = getColor('primaryHue', 600, props.theme, 0.2);
  let hoverBackgroundColor = getColor('primaryHue', 600, props.theme, 0.08);
  let hoverColor = getColor('primaryHue', 700, props.theme);
  let hoverBorderColor = hoverColor;
  let backgroundColor;
  let borderColor;
  let boxShadow;

  if (props.isFocused) {
    borderColor = getColor('primaryHue', 600, props.theme);
    boxShadow = props.theme.shadows.md(rgba(getColor('primaryHue', 600, props.theme)!, 0.35));
  }

  if (props.isSelected) {
    color = props.theme.colors.background;
    backgroundColor = getColor('primaryHue', 600, props.theme);
    borderColor = backgroundColor;
    activeBackgroundColor = getColor('primaryHue', 800, props.theme);
    hoverBackgroundColor = undefined;
    hoverColor = undefined;
    hoverBorderColor = getColor('primaryHue', 600, props.theme);
  }

  if (props.isDisabled) {
    color = getColor('neutralHue', 400, props.theme);
    borderColor = getColor('neutralHue', 300, props.theme);

    if (props.isSelected) {
      backgroundColor = getColor('neutralHue', 200, props.theme);
      borderColor = backgroundColor;
    }
  }

  return css`
    border: ${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)};
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    color: ${color};

    &:focus {
      outline: none;
    }

    &:hover:not([aria-disabled='true']) {
      border-color: ${hoverBorderColor};
      background-color: ${hoverBackgroundColor};
      color: ${hoverColor};
    }

    &:active:not([aria-disabled='true']) {
      border-color: ${getColor('primaryHue', 800, props.theme)};
      background-color: ${activeBackgroundColor};
    }
  `;
};

export const StyledTile = styled.label.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTileProps>`
  display: block;
  position: relative;
  border-radius: ${props => props.theme.borderRadii.md};
  padding: ${props => props.theme.space.base * 5}px;
  direction: ${props => props.theme.rtl && 'rtl'};

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTile.defaultProps = {
  theme: DEFAULT_THEME
};
