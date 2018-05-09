/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';

import { version } from '../../../package.json';
const COMPONENT_ID = 'menus.item_meta';

/**
 * Accepts all `<span>` props
 */
const ItemMeta = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: MenuStyles['c-menu__item__meta']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default ItemMeta;
