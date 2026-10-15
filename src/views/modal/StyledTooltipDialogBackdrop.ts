/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { hideVisually } from 'polished';
import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

/**
 * 1. Smooth iOS scrolling.
 */
export const StyledTooltipDialogBackdrop = styled.div`
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

  ${props => props['aria-hidden'] && hideVisually()}

  ${componentStyles};
`;
