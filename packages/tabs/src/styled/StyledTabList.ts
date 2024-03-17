/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tablist';

/**
 * 1. List element reset.
 */
export const StyledTabList = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: block;
  margin-top: 0; /* [1] */
  margin-bottom: ${props => props.theme.space.base * 5}px;
  border-bottom: ${props => props.theme.borderWidths.sm} ${props => props.theme.borderStyles.solid}
    ${props => getColorV8('neutralHue', 300, props.theme)};
  padding: 0; /* [1] */
  line-height: ${props => props.theme.space.base * 5}px;
  white-space: nowrap;
  color: ${props => getColorV8('neutralHue', 600, props.theme)};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTabList.defaultProps = {
  theme: DEFAULT_THEME
};
