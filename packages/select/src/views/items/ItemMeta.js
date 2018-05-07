import { retrieveTheme } from '@zendesk/garden-react-theming';
import { ItemMeta as MenuItemMeta } from '@zendesk/garden-react-menus';

import { version } from '../../../package.json';
const COMPONENT_ID = 'select.item_meta';

/**
 * Accepts all `<span>` props
 */
const ItemMeta = MenuItemMeta.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default ItemMeta;
