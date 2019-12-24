/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledSubNavItem } from './StyledSubNavItem';

const COMPONENT_ID = 'chrome.subnav';

export const StyledSubNav = styled.nav.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex-direction: column;
  order: 0;
  background-color: ${props => getColor('chromeHue', 800, props.theme)};
  padding: ${props => `${props.theme.space.base * 6}px ${props.theme.space.base * 5}px`};
  min-width: 220px;
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.fontSizes.md};

  & > ${StyledSubNavItem}:first-child {
    margin-top: 0;
  }

  ${props => retrieveComponentStyles('chrome.subnav', props)};
`;

StyledSubNav.defaultProps = {
  theme: DEFAULT_THEME
};
