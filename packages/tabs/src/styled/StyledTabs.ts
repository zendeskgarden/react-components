/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTab } from './StyledTab';
import { StyledTabPanel } from './StyledTabPanel';
import { StyledTabList } from './StyledTabList';

const COMPONENT_ID = 'tabs.tabs';

interface IStyledTabsProps {
  /**
   * Displays vertical TabList styling
   */
  isVertical?: boolean;
}

const verticalStyling = ({ theme }: ThemeProps<DefaultTheme>) => {
  return css`
    display: table;

    ${StyledTabList} {
      display: table-cell;
      margin-bottom: 0;
      border-bottom: none;
      vertical-align: top;
    }

    ${StyledTab} {
      display: block;
      margin-bottom: ${theme.space.base * 5}px;
      margin-left: ${theme.rtl && '0'};
      border-left: ${theme.rtl && '0'};
      border-bottom-style: none;
      /* stylelint-disable property-case, property-no-unknown */
      border-${theme.rtl ? 'right' : 'left'}-style: ${theme.borderStyles.solid};
      border-${theme.rtl ? 'right' : 'left'}-color: transparent;
      /* stylelint-enable property-case, property-no-unknown */
      padding: ${theme.space.base}px ${theme.space.base * 2}px;
      text-align: ${theme.rtl ? 'right' : 'left'};

      &:last-of-type {
        margin-bottom: 0;
      }

      &:focus-visible::before,
      &[data-garden-focus-visible]::before {
        top: ${theme.space.base}px;
        right: ${theme.space.base}px;
        left: ${theme.space.base}px;
      }
    }

    ${StyledTabPanel} {
      /* stylelint-disable-next-line property-no-unknown */
      margin-${theme.rtl ? 'right' : 'left'}: ${theme.space.base * 8}px;
      vertical-align: top;
    }
  `;
};

/**
 * Accepts all `<div>` props
 */
export const StyledTabs = styled.div.attrs<IStyledTabsProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTabsProps>`
  display: block;
  overflow: hidden;
  direction: ${props => props.theme.rtl && 'rtl'};

  ${props => props.isVertical && verticalStyling(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTabs.defaultProps = {
  theme: DEFAULT_THEME
};
