/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.codeblock';

export const StyledCodeBlock = styled.pre.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  margin: 0;
  overflow: auto;
  padding: ${props => props.theme.space.base * 3}px;
  background-color: #151c21;
  background-color: ${props => getColor('neutralHue', 1000, props.theme)};
  white-space: pre;
  color: ${props => getColor('neutralHue', 300, props.theme)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCodeBlock.defaultProps = {
  theme: DEFAULT_THEME
};
