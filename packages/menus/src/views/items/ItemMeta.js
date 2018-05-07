import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import MenuStyles from '@zendesk/garden-css-menus';

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
