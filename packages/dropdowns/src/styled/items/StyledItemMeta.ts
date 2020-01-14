/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';

const COMPONENT_ID = 'dropdowns.item_meta';

/**
 * Accepts all `<span>` props
 */
export const StyledItemMeta = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: MenuStyles['c-menu__item__meta']
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledItemMeta.defaultProps = {
  theme: DEFAULT_THEME
};
