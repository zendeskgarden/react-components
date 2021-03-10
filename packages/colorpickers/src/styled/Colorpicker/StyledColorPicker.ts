/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker';

export const COLORPICKER_WIDTH = 312;

export const StyledColorPicker = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  width: ${COLORPICKER_WIDTH}px;
  min-width: ${COLORPICKER_WIDTH}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledColorPicker.defaultProps = {
  theme: DEFAULT_THEME
};
