/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpicker.saturation.black';

export const StyledSaturationBlack = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* stylelint-disable-next-line color-function-notation */
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSaturationBlack.defaultProps = {
  theme: DEFAULT_THEME
};
