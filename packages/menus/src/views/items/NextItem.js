import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import MenuStyles from '@zendesk/garden-css-menus';

import Item from './Item';
import { version } from '../../../package.json';
const COMPONENT_ID = 'menus.next_item';

/**
 * Accepts all `<li>` props
 */
const NextItem = styled(Item).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: MenuStyles['c-menu__item--next']
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
