/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendeskgarden/css-chrome';
import { retrieveTheme } from '@zendeskgarden/react-theming';

import AccordionContainer from '../../containers/AccordionContainer';
import SubNavItem from './SubNavItem';

const COMPONENT_ID = 'chrome.collapsible_sub_nav_item';
const PANEL_COMPONENT_ID = 'chrome.collapsible_sub_nav_item_panel';

/** Accepts all `<div>` props */
const StyledSubNavItemHeader = styled(SubNavItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
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
const CollapsibleSubNavItem = ({ header, children, expanded, onChange, ...other }) => (
  <AccordionContainer
    expanded={expanded}
    onStateChange={newState => {
      onChange && onChange(newState.expanded);
    }}
  >
    {({ getHeadingProps, getHeadingButtonProps, getPanelProps }) => (
      <div>
        <div {...getHeadingProps()}>
          <StyledSubNavItemHeader
            {...getHeadingButtonProps({
              expanded,
              ...other
            })}
          >
            {header}
          </StyledSubNavItemHeader>
        </div>
        <StyledSubNavPanel
          {...getPanelProps({
            hidden: !expanded
          })}
        >
          {children}
        </StyledSubNavPanel>
      </div>
    )}
  </AccordionContainer>
);

CollapsibleSubNavItem.propTypes = {
  header: PropTypes.any,
  expanded: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  onChange: PropTypes.func
};

export default CollapsibleSubNavItem;
