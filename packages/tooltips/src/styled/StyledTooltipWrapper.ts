/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

/*
 * This wrapper allows the StyledTooltip to retain it's relative positioning.
 * Without this container Floating-UI would apply absolute positioning directly
 * to the StyledTooltip which impacts arrow styling.
 *
 * 1. Expected to use https://floating-ui.com/docs/misc#subpixel-and-accelerated-positioning
 * 2. This wrapper also includes an opacity transition. It allows Floating-UI to
 * reposition the tooltip without having a visible shift. The transition
 * is fast enough that it should not be perceptible.
 */
export const StyledTooltipWrapper = styled.div<{ zIndex?: number | string }>`
  position: absolute;
  top: 0; /* [1] */
  left: 0; /* [1] */
  /* stylelint-disable-next-line time-min-milliseconds */
  transition: opacity 10ms; /* [2] */
  opacity: 1;
  z-index: ${props => props.zIndex};

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
  }
`;

StyledTooltipWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
