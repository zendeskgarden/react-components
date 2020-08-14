/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledFooterItem } from './StyledFooterItem';

const COMPONENT_ID = 'modals.tooltip_modal.footer_item';

export const StyledTooltipModalFooterItem = styled(StyledFooterItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltipModalFooterItem.defaultProps = {
  theme: DEFAULT_THEME
};
