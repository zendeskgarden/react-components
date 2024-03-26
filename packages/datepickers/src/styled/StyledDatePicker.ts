/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.datepicker';

const retrievePadding = ({
  isCompact,
  theme
}: IStyledDatePickerProps & ThemeProps<DefaultTheme>) => {
  let value = theme.space.base * 5;

  if (isCompact) {
    value = theme.space.base * 4;
  }

  return `margin: ${value}px;`;
};

interface IStyledDatePickerProps {
  isCompact: boolean;
}

export const StyledDatePicker = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<IStyledDatePickerProps>`
  direction: ${props => props.theme.rtl && 'rtl'};

  ${retrievePadding}

  background-color: ${props => getColorV8('background', 600 /* default shade */, props.theme)};
  color: ${props => getColorV8('foreground', 600 /* default shade */, props.theme)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDatePicker.defaultProps = {
  theme: DEFAULT_THEME
};
