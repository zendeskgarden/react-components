/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpicker.saturation';

interface IStyledSaturationProps {
  hue: number;
}

export const StyledSaturation = styled.div.attrs<IStyledSaturationProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'saturation-block'
})<IStyledSaturationProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${props => `hsl(${props.hue}, 100%, 50%)`};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSaturation.defaultProps = {
  theme: DEFAULT_THEME
};
