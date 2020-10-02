/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.drawer_modal.footer';

export const StyledDrawerModalFooter = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  border-top: ${props => `${props.theme.borders.sm} ${getColor('neutralHue', 200, props.theme)}`};
  padding: ${props => props.theme.space.base * 5}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDrawerModalFooter.defaultProps = {
  theme: DEFAULT_THEME
};
