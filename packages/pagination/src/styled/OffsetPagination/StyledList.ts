/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'pagination.list';

/**
 * 1. List reset.
 * 2. Text truncation.
 */
export const StyledList = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  direction: ${props => props.theme.rtl && 'rtl'};
  display: flex;
  justify-content: center;
  margin: 0; /* [1] */
  padding: 0; /* [1] */
  list-style: none; /* [1] */
  white-space: nowrap; /* [2] */
  color: ${props => getColorV8('neutralHue', 600, props.theme)};

  :focus {
    outline: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledList.defaultProps = {
  theme: DEFAULT_THEME
};
