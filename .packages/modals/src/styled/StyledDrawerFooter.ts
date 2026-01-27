/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor, componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'modals.drawer_modal.footer';

export const StyledDrawerFooter = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  border-top: ${({ theme }) =>
    `${theme.borders.sm} ${getColor({ theme, variable: 'border.subtle' })}`};
  padding: ${props => props.theme.space.base * 5}px;

  ${componentStyles};
`;
