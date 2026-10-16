/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

import { StyledOption } from '../combobox/StyledOption';
import { StyledItemTypeIcon } from './StyledItemTypeIcon';

const COMPONENT_ID = 'dropdowns.menu.item_anchor';

/*
 * 1. Ensure hover styling doesn't leak through
 */
export const StyledItemAnchor = styled(StyledOption).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'a'
})`
  text-decoration: none;
  color: unset;

  &&:hover {
    text-decoration: none; /* [1] */
    color: inherit; /* [1] */
  }

  &[aria-current='page'] > ${StyledItemTypeIcon} {
    opacity: 1;
  }

  ${componentStyles};
`;
