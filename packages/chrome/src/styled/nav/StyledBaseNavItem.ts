/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.base_nav_item';

export const StyledBaseNavItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  /* stylelint-disable-next-line value-list-comma-newline-after */
  transition: box-shadow 0.1s ease-in-out, background-color 0.1s ease-in-out,
    opacity 0.1s ease-in-out;
  border: none; /* [1] */
  box-sizing: border-box;
  background: transparent; /* [1] */
  padding: 13px 8.5px;
  min-height: ${props => props.theme.space.base * 13}px;
  text-decoration: none; /* [2] */
  color: inherit; /* [2] */
  font-size: inherit; /* [1] */
`;

StyledBaseNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
