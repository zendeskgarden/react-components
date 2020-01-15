/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';

const COMPONENT_ID = 'dropdowns.item';

export interface IStyledItemProps {
  isActive?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  disabled?: boolean;
  checked?: boolean;
}

/**
 * Accepts all `<li>` props
 */
export const StyledItem = styled.li.attrs<IStyledItemProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(MenuStyles['c-menu__item'], {
    // State
    [MenuStyles['is-active']]: props.isActive,
    [MenuStyles['is-focused']]: props.isFocused,
    [MenuStyles['is-hovered']]: props.isHovered,
    [MenuStyles['is-disabled']]: props.disabled,
    [MenuStyles['is-checked']]: props.checked
  })
}))<IStyledItemProps>`
  /* stylelint-disable */
  ${props =>
    !props.isFocused &&
    `&&&:hover {
      background-color: inherit;
    }
  `};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
  /* stylelint-enable */
`;

StyledItem.defaultProps = {
  theme: DEFAULT_THEME
};
