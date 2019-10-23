/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import TabStyles from '@zendeskgarden/css-tabs';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tabpanel';

/**
 * Accepts all `<div>` props
 */
const TabPanel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: TabStyles['c-tab__panel']
})`
  :focus {
    outline: none;
  }

  ${props => retrieveComponentStyles('tabs.tab_panel', props)};
`;

/** @component */
export default TabPanel;
