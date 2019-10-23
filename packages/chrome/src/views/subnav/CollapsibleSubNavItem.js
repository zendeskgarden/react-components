/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendeskgarden/css-chrome';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { useAccordion } from '@zendeskgarden/container-accordion';
import { getControlledValue } from '@zendeskgarden/container-utilities';

import SubNavItem from './SubNavItem';

const COMPONENT_ID = 'chrome.collapsible_sub_nav_item';
const PANEL_COMPONENT_ID = 'chrome.collapsible_sub_nav_item_panel';

/** Accepts all `<div>` props */
export const StyledSubNavItemHeader = styled(SubNavItem).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__subnav__item--header'], {
    [ChromeStyles['is-expanded']]: props.expanded
  })
}))`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSubNavItemHeader.propTypes = {
  expanded: PropTypes.bool
};

/** Accepts all `<div>` props */
export const StyledSubNavPanel = styled.div.attrs(props => ({
  'data-garden-id': PANEL_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__subnav__panel'], {
    [ChromeStyles['is-hidden']]: props.isHidden
  })
}))`
  ${props => retrieveComponentStyles(PANEL_COMPONENT_ID, props)};
`;

StyledSubNavPanel.propTypes = {
  isHidden: PropTypes.bool
};

/**
 * Accepts all `<button>` props
 */
const CollapsibleSubNavItem = ({
  header,
  children,
  expanded: controlledExpanded,
  onChange,
  ...other
}) => {
  const panelRef = useRef(undefined);
  const [internalExpanded, setInternalExpanded] = useState(controlledExpanded);
  const expanded = getControlledValue(controlledExpanded, internalExpanded);

  const { getHeaderProps, getTriggerProps, getPanelProps } = useAccordion({
    expandedSections: expanded ? [0] : [],
    onChange: updatedSections => {
      const isExpanded = updatedSections.length !== 0;

      if (onChange) {
        onChange(isExpanded);
      } else {
        setInternalExpanded(isExpanded);
      }
    }
  });

  useEffect(() => {
    if (expanded && panelRef.current) {
      panelRef.current.style.maxHeight = `${panelRef.current.scrollHeight}px`;
    }
  }, [expanded]);

  return (
    <div>
      <div {...getHeaderProps({ ariaLevel: 2 })}>
        <StyledSubNavItemHeader
          {...getTriggerProps({
            expanded,
            index: 0,
            role: null,
            tabIndex: null,
            ...other
          })}
        >
          {header}
        </StyledSubNavItemHeader>
      </div>
      <StyledSubNavPanel
        {...getPanelProps({
          index: 0,
          isHidden: !expanded,
          ref: panelRef
        })}
      >
        {children}
      </StyledSubNavPanel>
    </div>
  );
};

CollapsibleSubNavItem.propTypes = {
  header: PropTypes.any,
  expanded: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node
};

/** @component */
export default CollapsibleSubNavItem;
