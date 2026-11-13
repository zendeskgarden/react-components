/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';

/*
 * The native radio is the real control. It is invisible but stays focusable
 * and covers the full segment, keeping the whole visual target available to
 * pointer and touch exploration. It must precede `StyledSegment` in the DOM;
 * sibling selectors (`input:checked + span`) drive the visual state.
 *
 * Chromium's default stylesheet gives radios `border-radius: 50%` and hit-tests
 * them as an ellipse, so the corners of each segment would reach the label
 * instead of the input. `appearance: none` and a square radius make the whole
 * segment the input's hit area in every browser.
 */
export const StyledSegmentInput = styled.input<WithTheme>`
  appearance: none;
  position: absolute;
  inset: 0;
  opacity: 0;
  z-index: 2;
  margin: 0;
  border-radius: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;

  ${componentStyles};
`;
