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

import Item from './StyledItem';

const COMPONENT_ID = 'dropdowns.media_item';

/**
 * Accepts all `<li>` props
 */
const StyledMediaItem = styled(Item).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: MenuStyles['c-menu__item--media']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

StyledMediaItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};

/** @component */
export default StyledMediaItem;
