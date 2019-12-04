/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendeskgarden/css-chrome';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const PANEL_COMPONENT_ID = 'chrome.collapsible_sub_nav_item_panel';

interface IStyledSubNavPanelProps {
  isHidden?: boolean;
}

/** Accepts all `<div>` props */
export const StyledSubNavPanel = styled.div.attrs<IStyledSubNavPanelProps>(props => ({
  'data-garden-id': PANEL_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__subnav__panel'], {
    [ChromeStyles['is-hidden']]: props.isHidden
  })
}))<IStyledSubNavPanelProps>`
  ${props => retrieveComponentStyles(PANEL_COMPONENT_ID, props)};
`;
