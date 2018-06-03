/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { NextItem as MenuNextItem } from '@zendeskgarden/react-menus';

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

NextItem.hasType = () => NextItem;

/** @component */
export default NextItem;
