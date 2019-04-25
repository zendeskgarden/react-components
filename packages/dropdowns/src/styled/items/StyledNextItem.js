/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';

import StyledItem from './StyledItem';

const COMPONENT_ID = 'dropdowns.next_item';

/**
 * Accepts all `<li>` props
 */
const StyledNextItem = styled(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: MenuStyles['c-menu__item--next']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

StyledNextItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool
};

/** @component */
export default StyledNextItem;
