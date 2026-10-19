/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledItemTypeIcon } from './StyledItemTypeIcon';
import { StyledOption } from './StyledOption';
import { itemStyles } from './utils';

/*
 * 1. Ensure hover styling doesn't leak through
 */
export const StyledItemAnchor = styled(StyledOption)`
  text-decoration: none;
  color: unset;

  &&:hover {
    text-decoration: none; /* [1] */
    color: inherit; /* [1] */
  }

  &[aria-current='page'] > ${StyledItemTypeIcon} {
    opacity: 1;
  }

  ${itemStyles};

  ${componentStyles};
`;
