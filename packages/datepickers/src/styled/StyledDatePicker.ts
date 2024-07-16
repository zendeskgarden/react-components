/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.datepicker';

interface IStyledDatePickerProps {
  $isCompact: boolean;
}

const sizeStyles = ({ $isCompact, theme }: IStyledDatePickerProps & ThemeProps<DefaultTheme>) => {
  let value = theme.space.base * 5;

  if ($isCompact) {
    value = theme.space.base * 4;
  }

  return css`
    margin: ${value}px;
  `;
};

const colorStyles = ({ theme }: IStyledDatePickerProps & ThemeProps<DefaultTheme>) => {
  return css`
    background-color: transparent;
    color: ${getColor({ variable: 'foreground.default', theme })};
  `;
};

export const StyledDatePicker = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<IStyledDatePickerProps>`
  direction: ${p => p.theme.rtl && 'rtl'};

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDatePicker.defaultProps = {
  theme: DEFAULT_THEME
};
