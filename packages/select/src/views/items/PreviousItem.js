import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import { PreviousItem as MenuPreviousItem } from '@zendesk/garden-react-menus';

import { version } from '../../../package.json';
const COMPONENT_ID = 'select.previous_item';

/**
 * Accepts all `<li>` props
 */
const PreviousItem = MenuPreviousItem.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

PreviousItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool
};

/** @component */
export default PreviousItem;
