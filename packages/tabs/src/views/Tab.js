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
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tab';

/**
 * Accepts all `<div>` props
 */
const Tab = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TabStyles['c-tab__list__item'], {
    // Visual states
    [TabStyles['is-hovered']]: props.hovered,
    [TabStyles['is-focused']]: props.focused,
    [TabStyles['is-active']]: props.active,
    [TabStyles['is-disabled']]: props.disabled,
    [TabStyles['is-selected']]: props.selected
  })
}))`
  ${props => retrieveTheme('tabs.tab', props)};
`;

Tab.propTypes = {
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  selected: PropTypes.bool
};

/** @component */
export default Tab;
