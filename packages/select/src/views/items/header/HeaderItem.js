import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import { HeaderItem as MenuHeaderItem } from '@zendesk/garden-react-menus';

import { version } from '../../../../package.json';
const COMPONENT_ID = 'select.header_item';

/**
 * Accepts all `<li>` props
 */
const HeaderItem = MenuHeaderItem.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

HeaderItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};

/** @component */
export default HeaderItem;
