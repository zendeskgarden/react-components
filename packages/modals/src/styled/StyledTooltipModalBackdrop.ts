/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.tooltip_modal.backdrop';

/**
 * 1. Smooth iOS scrolling.
 */
export const StyledTooltipModalBackdrop = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 400;
  overflow: hidden;
  -webkit-overflow-scrolling: touch; /* [1] */
  font-family: ${props => props.theme.fonts.system};
  direction: ${props => props.theme.rtl && 'rtl'};

  &.garden-tooltip-modal-transition-exit-active div {
    transition: opacity 200ms;
    opacity: 0;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltipModalBackdrop.defaultProps = {
  theme: DEFAULT_THEME
};
