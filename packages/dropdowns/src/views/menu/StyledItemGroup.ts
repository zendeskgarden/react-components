/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledOptGroup } from '../combobox/StyledOptGroup';

const COMPONENT_ID = 'dropdowns.menu.item_group';

export const StyledItemGroup = styled(StyledOptGroup).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${componentStyles};
`;
