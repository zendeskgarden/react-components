/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { StyledBreadcrumbItem } from './StyledBreadcrumbItem';

export const StyledCenteredBreadcrumbItem = styled(StyledBreadcrumbItem).attrs({
  'aria-hidden': true
})`
  display: flex;
  align-items: center;
`;
