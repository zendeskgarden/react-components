/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';
import ChevronRightStrokeIcon from '@zendeskgarden/svg-icons/src/12/chevron-right-stroke.svg';

/**
 * Accepts all `<svg>` props
 */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const StyledChevronIcon = styled(({ children, theme, ...props }) => (
  <ChevronRightStrokeIcon {...props} />
)).attrs({
  role: 'presentation',
  'aria-hidden': 'true'
})`
  transform: ${props => props.theme.rtl && `rotate(180deg);`};
  margin: 0 ${props => em(props.theme.space.base, props.theme.fontSizes.md)};
  color: ${props => getColorV8('neutralHue', 600, props.theme)};
`;

StyledChevronIcon.defaultProps = {
  theme: DEFAULT_THEME
};
