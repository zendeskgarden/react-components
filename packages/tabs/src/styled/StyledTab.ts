/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import TabStyles from '@zendeskgarden/css-tabs';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tab';

interface IStyledTabProps {
  isHovered?: boolean;
  isFocused?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  isSelected?: boolean;
}

/**
 * Accepts all `<div>` props
 */
export const StyledTab = styled.div.attrs<IStyledTabProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TabStyles['c-tab__list__item'], {
    // Visual states
    [TabStyles['is-hovered']]: props.isHovered,
    [TabStyles['is-focused']]: props.isFocused,
    [TabStyles['is-active']]: props.isActive,
    [TabStyles['is-disabled']]: props.disabled,
    [TabStyles['is-selected']]: props.isSelected
  })
}))<IStyledTabProps>`
  /** This removes focus styling when not needed. Mimics :focus-visible */
  &&& {
    ${props =>
      !props.isFocused &&
      `
      :before {
        box-shadow: none;
      }
    `}
  }

  ${props => retrieveComponentStyles('tabs.tab', props)};
`;

StyledTab.propTypes = {
  isHovered: PropTypes.bool,
  isFocused: PropTypes.bool,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool
};
