/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColorV8, DEFAULT_THEME, StyledBaseIcon } from '@zendeskgarden/react-theming';

export const StyledIcon = styled(StyledBaseIcon)`
  position: absolute;
  right: ${props => props.theme.rtl && `${props.theme.space.base * 4}px`};
  left: ${props => !props.theme.rtl && `${props.theme.space.base * 4}px`};
  margin-top: ${props => props.theme.space.base / 2}px;
  color: ${props =>
    props.$hue && getColorV8(props.$hue, props.$hue === 'warningHue' ? 700 : 600, props.theme)};
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
