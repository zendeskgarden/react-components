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
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tabs_view';

interface IStyledTabsProps {
  /**
   * Displays vertical TabList styling
   */
  isVertical?: boolean;
}

/**
 * Accepts all `<div>` props
 */
export const StyledTabs = styled.div.attrs<IStyledTabsProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TabStyles['c-tab'], {
    // Vertical layout
    [TabStyles['c-tab--block']]: props.isVertical,

    // RTL
    [TabStyles['is-rtl']]: props.theme.rtl
  })
}))<IStyledTabsProps>`
  ${props => retrieveComponentStyles('tabs.tabs', props)};
`;

StyledTabs.propTypes = {
  isVertical: PropTypes.bool
};

StyledTabs.defaultProps = {
  theme: DEFAULT_THEME
};
