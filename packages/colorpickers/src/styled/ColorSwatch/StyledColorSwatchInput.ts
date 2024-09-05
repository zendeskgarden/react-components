/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.color_swatch_input';

/**
 * Accessibly hidden checkbox with support for tooltip hover
 */
export const StyledColorSwatchInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
