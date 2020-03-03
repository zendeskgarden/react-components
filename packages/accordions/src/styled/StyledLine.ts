/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

export const StyledLine = styled.div`
  display: block;
  position: absolute;
  top: ${props => props.theme.space.base * 3}px;
  right: ${props => `calc(50% + ${props.theme.space.base * 4}px)`};
  left: ${props => `calc(-50% + ${props.theme.space.base * 4}px)`};
  flex: 1;
  border-top: ${props => props.theme.borders.sm};
  border-color: ${props => getColor('neutralHue', 300, props.theme)};
`;

StyledLine.defaultProps = {
  theme: DEFAULT_THEME
};
