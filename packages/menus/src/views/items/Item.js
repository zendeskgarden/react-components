/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';

const COMPONENT_ID = 'menus.item';

/**
 * Accepts all `<li>` props
 */
const Item = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props =>
    classNames(MenuStyles['c-menu__item'], {
      // State
      [MenuStyles['is-active']]: props.active,
      [MenuStyles['is-focused']]: props.focused,
      [MenuStyles['is-hovered']]: props.hovered,
      [MenuStyles['is-disabled']]: props.disabled,
      [MenuStyles['is-checked']]: props.checked
    })
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
