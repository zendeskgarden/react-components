/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { hideVisually } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.sortable_status';

/**
 * Visually hidden live region. `<output>` has an implicit `status` role. Use
 * `hideVisually()` rather than the `hidden` attribute; `display: none` removes
 * the element from the accessibility tree, so changes to its text would never
 * be announced.
 */
export const StyledSortableStatus = styled.output.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${hideVisually()}

  ${componentStyles};
`;
