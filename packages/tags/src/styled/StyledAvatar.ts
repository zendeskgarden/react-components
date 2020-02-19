/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import React, { Children } from 'react';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tags.avatar';

export const StyledAvatar = styled(({ children, ...props }) =>
  React.cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex-shrink: 0;
  font-size: 0; /* text content reset */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAvatar.defaultProps = {
  theme: DEFAULT_THEME
};
