/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { hideVisually } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.sortable_label';

/**
 * Visually hidden text that conveys sortability and sort state to
 * assistive technology as part of the sortable button's accessible name.
 */
export const StyledSortableLabel = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${hideVisually()}

  ${componentStyles};
`;
