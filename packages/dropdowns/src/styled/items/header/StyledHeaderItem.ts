/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import className from 'classnames';
import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';

import { StyledItem } from '../../';

const COMPONENT_ID = 'dropdowns.header_item';

export interface IStyledHeaderItemProps {
  containsIcon?: boolean;
}

/**
 * Accepts all `<li>` props
 */
export const StyledHeaderItem = styled(StyledItem).attrs<IStyledHeaderItemProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: className(props.className, MenuStyles['c-menu__item--header'], {
    [MenuStyles['c-menu__item--header--icon']]: props.containsIcon
  })
}))<IStyledHeaderItemProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
