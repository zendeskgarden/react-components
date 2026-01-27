/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'colorpickers.colorpicker_slider_group';

export const StyledSliderGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space.base * 2}px;

  ${componentStyles};
`;
