/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

import { StyledItem } from './StyledItem';
import { StyledItemIcon } from './StyledItemIcon';

const COMPONENT_ID = 'dropdowns.next_item';

/**
 * Accepts all `<li>` props
 */
export const StyledNextItem = styled(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${StyledItemIcon} {
    right: ${props => (props.theme.rtl ? 'auto' : `${props.theme.space.base * 3}px`)};
    left: ${props => (props.theme.rtl ? `${props.theme.space.base * 3}px` : 'auto')};
  }

  ${componentStyles};
`;
