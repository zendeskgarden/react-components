import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import { AddItem as MenuAddItem } from '@zendesk/garden-react-menus';

import { version } from '../../../package.json';
const COMPONENT_ID = 'select.add_item';

/**
 * Accepts all `<li>` props
 */
const AddItem = MenuAddItem.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

AddItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool
};

/** @component */
export default AddItem;
