/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.datepicker';

interface IStyledDatePickerProps {
  $isCompact: boolean;
}

const sizeStyles = ({ $isCompact, theme }: IStyledDatePickerProps & ThemeProps<DefaultTheme>) => {
  const margin = theme.space.base * ($isCompact ? 4 : 5);

  return css`
    margin: ${margin}px;
  `;
};

const colorStyles = ({ theme }: IStyledDatePickerProps & ThemeProps<DefaultTheme>) => {
  const foreground = getColor({ variable: 'foreground.default', theme });

  return css`
    background-color: transparent;
    color: ${foreground};
  `;
};

export const StyledDatePicker = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDatePickerProps>`
  direction: ${p => p.theme.rtl && 'rtl'};

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
