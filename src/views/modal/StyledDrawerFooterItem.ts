/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

import { StyledFooterItem } from './StyledFooterItem';

const COMPONENT_ID = 'modals.drawer_modal.footer_item';

export const StyledDrawerFooterItem = styled(StyledFooterItem as 'span').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${componentStyles};
`;
