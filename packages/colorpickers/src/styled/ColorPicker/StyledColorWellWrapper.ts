/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_colorwell_wrapper';

export const StyledColorWellWrapper = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: relative;
  margin-bottom: ${props => props.theme.space.base * 2}px;
  height: ${props => props.theme.space.base * 52}px;
  overflow: hidden;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledColorWellWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
