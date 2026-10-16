/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { getCheckeredBackground } from '../../theming/utils/getCheckeredBackground';
import type { IStyledBaseProps, IStyledRangeProps } from '../../types/views';
import { getTrackHeight, getTrackMargin, StyledRange } from './StyledRange';
import { IRGBColorProps } from './types';

export const background = (props: IRGBColorProps & IStyledBaseProps) => {
  const direction = `to ${props.theme.rtl ? 'left' : 'right'}`;
  const fromColor = `rgba(${props.$red}, ${props.$green}, ${props.$blue}, 0)`;
  const toColor = `rgb(${props.$red}, ${props.$green}, ${props.$blue})`;
  const positionY = getTrackMargin(props);
  const height = getTrackHeight(props);
  const overlay = `linear-gradient(${direction}, ${fromColor}, ${toColor}) 0 ${positionY}px / 100% ${height}px no-repeat`;

  return getCheckeredBackground({
    theme: props.theme,
    size: height,
    positionY,
    repeat: 'repeat-x',
    overlay
  });
};

export const StyledAlphaRange = styled(StyledRange as 'input')<IRGBColorProps & IStyledRangeProps>`
  /* empty-source */
`;
