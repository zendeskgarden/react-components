import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import MenuStyles from '@zendesk/garden-css-menus';

import Item from '../Item';
import { version } from '../../../../package.json';
const COMPONENT_ID = 'menus.header_item';

/**
 * Accepts all `<li>` props
 */
const HeaderItem = styled(Item).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: MenuStyles['c-menu__item--header']
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
