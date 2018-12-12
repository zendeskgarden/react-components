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
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tabs_view';

/**
 * Accepts all `<div>` props
 */
const TabsView = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TabStyles['c-tab'], {
    // Vertical layout
    [TabStyles['c-tab--block']]: props.vertical,

    // RTL
    [TabStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme('tabs.tabs', props)};
`;

TabsView.propTypes = {
  /**
   * Displays vertical TabList styling
   */
  vertical: PropTypes.bool
};

/** @component */
export default TabsView;
