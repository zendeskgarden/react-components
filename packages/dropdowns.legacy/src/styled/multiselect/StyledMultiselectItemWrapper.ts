/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'dropdowns.multiselect_item_wrapper';

export const StyledMultiselectItemWrapper = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-flex;
  align-items: center;
  margin: ${props => props.theme.space.base / 2}px;
  max-width: 100%;

  ${componentStyles};
`;
