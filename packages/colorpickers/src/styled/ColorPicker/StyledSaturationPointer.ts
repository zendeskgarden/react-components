/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpicker.saturation.pointer';

interface IStyledSaturationPointerProps {
  top: number;
  left: number;
}

export const StyledSaturationPointer = styled.div.attrs<IStyledSaturationPointerProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'saturation-pointer-thumb',
  style: {
    top: `${props.top}%`,
    left: `${props.left}%`
  }
}))<IStyledSaturationPointerProps>`
  position: absolute;
  cursor: default;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSaturationPointer.defaultProps = {
  theme: DEFAULT_THEME
};
