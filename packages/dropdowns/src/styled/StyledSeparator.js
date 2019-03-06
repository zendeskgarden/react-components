/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';

const COMPONENT_ID = 'dropdowns.separator';

/**
 * Accepts all `<li>` props
 */
const StyledSeparator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'separator',
  className: MenuStyles['c-menu__separator']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default StyledSeparator;
