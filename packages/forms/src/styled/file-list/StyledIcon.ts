/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children } from 'react';
import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

export const StyledIcon = styled(({ children, ...props }) =>
  React.cloneElement(Children.only(children), props)
)`
  min-width: ${props => props.theme.space.base * 4}px;
  /* stylelint-disable-next-line property-no-unknown */
  margin-${props => (props.theme.rtl ? 'left' : 'right')}: ${props => props.theme.space.base * 2}px;
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
