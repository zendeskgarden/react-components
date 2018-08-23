/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { ItemMeta as MenuItemMeta } from '@zendeskgarden/react-menus';

const COMPONENT_ID = 'select.item_meta';

/**
 * Accepts all `<span>` props
 */
const ItemMeta = styled(MenuItemMeta).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default ItemMeta;
