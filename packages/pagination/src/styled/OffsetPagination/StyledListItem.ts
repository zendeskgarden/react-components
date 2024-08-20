/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'pagination.list_item';

export const StyledListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  box-sizing: border-box;
  margin-left: ${props => `${props.theme.space.base}px`};
  user-select: none;

  &${props => (props.theme.rtl ? ':last-of-type' : ':first-of-type')} {
    margin-left: 0;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledListItem.defaultProps = {
  theme: DEFAULT_THEME
};
