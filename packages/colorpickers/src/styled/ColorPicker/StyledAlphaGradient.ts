/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IRGBColor } from '../../utils/types';

const COMPONENT_ID = 'colorpickers.colorpicker_alpha_gradient';

export const StyledAlphaGradient = styled.div.attrs<IRGBColor>(props => ({
  style: {
    background: `linear-gradient(
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
  z-index: 0;
  background-size: ${props => `${props.theme.space.base * 3}px ${props.theme.space.base * 3}px`};
  width: 100%;
  height: ${props => props.theme.space.base * 3}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAlphaGradient.defaultProps = {
  theme: DEFAULT_THEME
};
