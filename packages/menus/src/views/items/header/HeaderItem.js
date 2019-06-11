/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import className from 'classnames';
import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';

import Item from '../Item';

const COMPONENT_ID = 'menus.header_item';

/**
 * Accepts all `<li>` props
 */
const HeaderItem = styled(Item).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: className(props.className, MenuStyles['c-menu__item--header'], {
    [MenuStyles['c-menu__item--header--icon']]: props.containsIcon
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

HeaderItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  /** Applies icon styling */
  containsIcon: PropTypes.bool
};

HeaderItem.hasType = () => HeaderItem;

/** @component */
export default HeaderItem;
