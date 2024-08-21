/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.color_swatch';

/**
 * 1. Override Bedrock CSS
 */
export const StyledColorSwatch = styled.table.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  border-collapse: collapse;
  line-height: normal; /* [1] */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledColorSwatch.defaultProps = {
  theme: DEFAULT_THEME
};
