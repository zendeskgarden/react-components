/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { hideVisually } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.tooltip_dialog.backdrop';

export interface IStyledTooltipDialogBackdropProps {
  $isHidden?: boolean;
}

/**
 * 1. Smooth iOS scrolling.
 */
export const StyledTooltipDialogBackdrop = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTooltipDialogBackdropProps>`
  position: fixed;
  inset: 0;
  z-index: 400;
  overflow: hidden;
  -webkit-overflow-scrolling: touch; /* [1] */
  font-family: ${props => props.theme.fonts.system};
  direction: ${props => props.theme.rtl && 'rtl'};

  &.garden-tooltip-modal-transition-exit-active {
    pointer-events: none;
  }

  &.garden-tooltip-modal-transition-exit-active div {
    transition: opacity 200ms;
    opacity: 0;
  }

  ${props => props.$isHidden && hideVisually()}

  ${componentStyles};
`;
