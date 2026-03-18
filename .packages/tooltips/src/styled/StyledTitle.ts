/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'tooltip.title';

/**
 * Accepts all `<div>` props
 */
export const StyledTitle = styled.strong.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: none;
  margin: 0;
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${componentStyles};
`;
