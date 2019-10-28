/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.datepicker';

const retrievePadding = ({
  isCompact,
  theme
}: IStyledDatepickerProps & ThemeProps<DefaultTheme>) => {
  if (isCompact) {
    return `${theme.space.base * 4}px`;
  }

  return `${theme.space.base * 5}px`;
};

interface IStyledDatepickerProps {
  isCompact: boolean;
}

export const StyledDatepicker = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<IStyledDatepickerProps>`
  background-color: ${props => props.theme.colors.background};
  padding: ${retrievePadding};
  color: ${props => props.theme.colors.foreground};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDatepicker.defaultProps = {
  theme: DEFAULT_THEME
};
