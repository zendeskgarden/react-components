/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sidebar';

export const StyledSidebar = styled.aside.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex-shrink: 0;
  order: 0;
  box-sizing: border-box;
  /* stylelint-disable-next-line property-no-unknown */
  border-${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
    `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}`};
  width: 330px;
  overflow: auto;

  &:focus {
    outline: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSidebar.defaultProps = {
  theme: DEFAULT_THEME
};
