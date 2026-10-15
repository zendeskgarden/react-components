/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'modals.footer_item';

export const StyledFooterItem = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base * 5}px;
  min-width: 0;

  &:first-child {
    margin-${props => (props.theme.rtl ? 'right' : 'left')}: 0;
  }

  ${componentStyles};
`;
