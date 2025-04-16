/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'timeline';

/**
 * 1. <ol> reset.
 */
export const StyledTimeline = styled.ol.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  margin: 0; /* [1] */
  padding: 0; /* [1] */
  list-style: none; /* [1] */
  ${componentStyles};
`;
