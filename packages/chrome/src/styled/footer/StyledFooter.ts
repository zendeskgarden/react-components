/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.footer';

/**
 * Accepts all `<footer>` props. _Remember to set the_ `hasFooter` _prop on the parent_ `<Body>`.
 */
export const StyledFooter = styled.footer.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  border-top: ${props => `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}`};
  background-color: ${props => props.theme.colors.background};
  padding: 0 ${props => props.theme.space.base * 9}px;
  height: ${props => props.theme.space.base * 20}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFooter.defaultProps = {
  theme: DEFAULT_THEME
};
