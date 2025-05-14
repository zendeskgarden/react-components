/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledItemTypeIcon } from './StyledItemTypeIcon';
import { StyledOption } from '../combobox/StyledOption';

const COMPONENT_ID = 'dropdowns.menu.item_anchor';

export const StyledItemAnchor = styled(StyledOption).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'a'
})`
  text-decoration: none;
  color: unset;

  &[aria-current='page'] > ${StyledItemTypeIcon} {
    opacity: 1;
  }

  ${componentStyles};
`;
