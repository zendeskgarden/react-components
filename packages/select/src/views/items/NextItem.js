import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import { NextItem as MenuNextItem } from '@zendesk/garden-react-menus';

import { version } from '../../../package.json';
const COMPONENT_ID = 'select.next_item';

/**
 * Accepts all `<li>` props
 */
const NextItem = MenuNextItem.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

NextItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool
};

/** @component */
export default NextItem;
