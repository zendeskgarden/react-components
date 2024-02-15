/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledSubNavItem } from './StyledSubNavItem';

const PANEL_COMPONENT_ID = 'chrome.collapsible_sub_nav_item_panel';

interface IStyledSubNavPanelProps {
  isHidden?: boolean;
}

const hiddenStyling = css`
  visibility: hidden;
  max-height: 0 !important; /* stylelint-disable-line */
  overflow: hidden;
`;

/** Accepts all `<div>` props */
export const StyledSubNavPanel = styled.div.attrs<IStyledSubNavPanelProps>({
  'data-garden-id': PANEL_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSubNavPanelProps>`
  /* stylelint-disable-next-line max-line-length */
  transition: max-height 0.25s cubic-bezier(0.15, 0.85, 0.35, 1.2), 0.25s visibility 0s linear;
  height: auto;
  max-height: 100%;

  ${props => props.isHidden && hiddenStyling}

  ${StyledSubNavItem} {
    /* stylelint-disable-next-line property-no-unknown */
    padding-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
      `${props.theme.space.base * 5}px`};
  }

  ${props => retrieveComponentStyles(PANEL_COMPONENT_ID, props)};
`;

StyledSubNavPanel.defaultProps = {
  theme: DEFAULT_THEME
};
