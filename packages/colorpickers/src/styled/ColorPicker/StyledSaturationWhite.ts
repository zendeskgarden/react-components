/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpicker.saturation_white';

export const StyledSaturationWhite = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* stylelint-disable */
  background: linear-gradient(
    to ${props => (props.theme.rtl ? 'left' : 'right')},
    #fff,
    rgba(255, 255, 255, 0)
  );
  /* stylelint-enable */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSaturationWhite.defaultProps = {
  theme: DEFAULT_THEME
};
