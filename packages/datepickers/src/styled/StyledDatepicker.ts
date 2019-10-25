/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.datepicker';

const StyledDatepicker = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<{
  isSmall: boolean;
}>`
  background-color: ${props => props.theme.colors.background};
  padding: ${props =>
    `${props.isSmall ? props.theme.space.base * 4 : props.theme.space.base * 5}px`};
  color: ${props => getColor('neutralHue', 600, props.theme)};

  direction: ${props => props.theme.rtl && 'rtl'};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDatepicker.defaultProps = {
  theme: DEFAULT_THEME
};

export default StyledDatepicker;
