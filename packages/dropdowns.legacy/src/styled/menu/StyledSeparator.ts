/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.separator';

/**
 * Accepts all `<li>` props
 */
export const StyledSeparator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'separator'
} as any)`
  display: block;
  margin: ${props => props.theme.space.base}px 0;
  border-bottom: ${props =>
    `${props.theme.borders.sm} ${getColorV8('neutralHue', 200, props.theme)}`};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSeparator.defaultProps = {
  theme: DEFAULT_THEME
};
