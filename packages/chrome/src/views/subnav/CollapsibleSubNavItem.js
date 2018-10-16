/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendeskgarden/css-chrome';
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.collapsible_sub_nav_item';
const PANEL_COMPONENT_ID = 'chrome.collapsible_sub_nav_item_panel';
const SUB_NAV_ITEM_HEIGHT_PX = 38;

import SubNavItem from './SubNavItem';

/** Accepts all `<div>` props */
const StyledSubNavItemHeader = styled(SubNavItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-expanded': props => props.expanded,
  className: props =>
    classNames(ChromeStyles['c-chrome__subnav__item--header'], {
      [ChromeStyles['is-expanded']]: props.expanded
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

StyledSubNavItemHeader.propTypes = {
  expanded: PropTypes.bool
};

/** Accepts all `<div>` props */
const StyledSubNavPanel = styled.div.attrs({
  'data-garden-id': PANEL_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-hidden': props => props.hidden,
  className: props =>
    classNames(ChromeStyles['c-chrome__subnav__panel'], {
      [ChromeStyles['is-hidden']]: props.hidden
    })
})`
  ${props => retrieveTheme(PANEL_COMPONENT_ID, props)};
`;

StyledSubNavPanel.propTypes = {
  hidden: PropTypes.bool
};

/**
 * Accepts all `<button>` props
 */
const CollapsibleSubNavItem = ({ header, children, expanded, ...other }) => {
  const panelMaxHeight = Children.count(children) * SUB_NAV_ITEM_HEIGHT_PX;

  return (
    <div>
      <StyledSubNavItemHeader expanded={expanded} {...other}>
        {header}
      </StyledSubNavItemHeader>
      <StyledSubNavPanel hidden={!expanded} style={{ maxHeight: panelMaxHeight }}>
        {children}
      </StyledSubNavPanel>
    </div>
  );
};

CollapsibleSubNavItem.propTypes = {
  header: PropTypes.any,
  expanded: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool
};

/** @component */
export default CollapsibleSubNavItem;
