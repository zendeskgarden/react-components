/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'loaders.loading_placeholder';

export const StyledLoadingPlaceholder = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'progressbar'
})<{ fontSize: string | number }>`
  display: inline;
  width: 1em;
  height: 0.9em;
  font-size: ${props => props.fontSize};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)}
`;

StyledLoadingPlaceholder.defaultProps = {
  theme: DEFAULT_THEME
};
