/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_close';

export const StyledSheetCloseButton = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<any>`
  display: block;
  position: absolute;
  top: ${props => props.theme.space.base * 3}px;
  ${props => (props.theme.rtl ? 'left' : 'right')}: ${props => `${props.theme.space.base * 3}px`};
  border: none;
  background: none;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetCloseButton.defaultProps = {
  theme: DEFAULT_THEME
};
