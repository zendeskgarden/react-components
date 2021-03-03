/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledRange, trackStyles } from '../common/StyledRange';
import { IRGBColor } from '../../utils/types';

const COMPONENT_ID = 'colorpickers.colorpicker_alpha';

export const StyledAlpha = styled(StyledRange as 'input').attrs<IRGBColor>(props => ({
  style: {
    backgroundImage: `linear-gradient(
      to ${props.theme.rtl ? 'left' : 'right'},
      rgba(${props.red},${props.green},
      ${props.blue}, 0) 0%,
      rgba(${props.red}, ${props.green}, ${props.blue}, 1) 100%
    )`
  },
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))<IRGBColor>`
  position: absolute;
  background-repeat: no-repeat;
  /* stylelint-disable-next-line declaration-no-important */
  background-size: 100% ${props => props.theme.space.base * 3}px !important;
  background-position-y: center;

  ${trackStyles(`
    background-image: none;
  `)}
`;

StyledAlpha.defaultProps = {
  theme: DEFAULT_THEME
};
