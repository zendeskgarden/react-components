/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { TooltipModal } from '@zendeskgarden/react-modals';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colordialog.tooltipmodal.body';

export const StyledTooltipBody = styled(TooltipModal.Body).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  padding: 0;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltipBody.defaultProps = {
  theme: DEFAULT_THEME
};
