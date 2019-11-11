/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTab, StyledTabPanel } from '../styled';
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
      border-bottom-style: none;
      border-left-style: ${theme.borderStyles.solid};
      border-left-color: transparent;
      padding: ${theme.space.base}px ${theme.space.base * 2}px;
      text-align: left;

      &:last-of-type {
        margin-bottom: 0;
      }

      &[data-garden-focus-visible]::before {
        top: ${theme.space.base}px;
        right: ${theme.space.base}px;
        left: ${theme.space.base}px;
      }

      ${theme.rtl &&
        `
        margin-left: 0;
        border-left: 0;
        border-right-style: ${theme.borderStyles.solid};
        border-right-color: transparent;
        text-align: right;
      `}
    }

    ${StyledTabPanel} {
      margin-left: ${theme.space.base * 8}px;
      width: 100%;
      vertical-align: top;

      ${theme.rtl &&
        `
        margin-right: ${theme.space.base * 8}px;
      `}
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
