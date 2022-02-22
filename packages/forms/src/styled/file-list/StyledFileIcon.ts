/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children } from 'react';
import styled from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.file.icon';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const StyledFileIcon = styled(({ children, isCompact, theme, ...props }) =>
  React.cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex-shrink: 0;
  width: ${props => (props.isCompact ? props.theme.iconSizes.sm : props.theme.iconSizes.md)};
  /* stylelint-disable-next-line property-no-unknown */
  margin-${props => (props.theme.rtl ? 'left' : 'right')}: ${props => props.theme.space.base * 2}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFileIcon.defaultProps = {
  theme: DEFAULT_THEME
};
