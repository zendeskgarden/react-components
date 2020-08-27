/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledFont } from './StyledFont';

const COMPONENT_ID = 'typography.codeblock_code';

export const StyledCodeBlockLine = styled(StyledFont).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'code',
  isMonospace: true
})`
  display: block;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCodeBlockLine.defaultProps = {
  theme: DEFAULT_THEME
};
