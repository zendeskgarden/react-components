/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledOptionIcon } from '../combobox/StyledOptionIcon';

const COMPONENT_ID = 'dropdowns.menu.item.icon';

export const StyledItemIcon = styled(StyledOptionIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${componentStyles};
`;
