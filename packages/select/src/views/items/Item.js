import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import { Item as MenuItem } from '@zendesk/garden-react-menus';

import { version } from '../../../package.json';
const COMPONENT_ID = 'select.item';

/**
 * Accepts all `<li>` props
 */
const Item = MenuItem.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Item.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};

/** @component */
export default Item;
