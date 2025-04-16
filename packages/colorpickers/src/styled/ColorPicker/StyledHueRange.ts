/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  getTrackHeight,
  getTrackMargin,
  StyledRange,
  IStyledRangeProps
} from '../common/StyledRange';

const COMPONENT_ID = 'colorpickers.colorpicker_hue';

export const StyledHueRange = styled(StyledRange as 'input').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledRangeProps>`
  background: linear-gradient(
      to ${props => (props.theme.rtl ? 'left' : 'right')},
      #f00 0%,
      #ff0 17%,
      #0f0 33%,
      #0ff 50%,
      #00f 67%,
      #f0f 83%,
      #f00 100%
    )
    no-repeat;
  background-position: ${props => !props.$isOpaque && `0 ${getTrackMargin(props)}px`};
  background-size: 100% ${props => getTrackHeight(props)}px;
`;
