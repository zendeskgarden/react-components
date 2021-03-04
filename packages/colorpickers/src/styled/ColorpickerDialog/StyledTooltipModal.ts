/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { TooltipModal } from '@zendeskgarden/react-modals';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { COLORPICKER_WIDTH } from '../Colorpicker/StyledColorPicker';

const COMPONENT_ID = 'colorpickers.colordialog_tooltipmodal';

export const StyledTooltipModal = styled(TooltipModal as any).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  width: ${props => COLORPICKER_WIDTH + props.theme.space.base * 10}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltipModal.defaultProps = {
  theme: DEFAULT_THEME
};
