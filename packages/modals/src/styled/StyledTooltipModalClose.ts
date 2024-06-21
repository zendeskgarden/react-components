/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledClose } from './StyledClose';

const COMPONENT_ID = 'modals.tooltip_modal.close';

export const StyledTooltipModalClose = styled(StyledClose).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  top: ${props => props.theme.space.base * 3.5}px;
  ${props => (props.theme.rtl ? 'left' : 'right')}: ${props => `${props.theme.space.base * 3}px`};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltipModalClose.defaultProps = {
  theme: DEFAULT_THEME
};
