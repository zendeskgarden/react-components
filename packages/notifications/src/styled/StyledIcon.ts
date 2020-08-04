/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children } from 'react';
import styled from 'styled-components';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

export const StyledIcon = styled(({ children, ...props }) =>
  React.cloneElement(Children.only(children), props)
)`
  position: absolute;
  right: ${props => props.theme.rtl && `${props.theme.space.base * 4}px`};
  left: ${props => !props.theme.rtl && `${props.theme.space.base * 4}px`};
  margin-top: ${props => props.theme.space.base / 2}px;
  color: ${props =>
    props.hue && getColor(props.hue, props.hue === 'warningHue' ? 700 : 600, props.theme)};
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
