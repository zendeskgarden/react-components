/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import classNames from 'classnames';
import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';

import { StyledItem } from './StyledItem';

const COMPONENT_ID = 'dropdowns.add_item';

/**
 * Accepts all `<li>` props
 */
export const StyledAddItem = styled(StyledItem).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(props.className, MenuStyles['c-menu__item--add'])
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;
