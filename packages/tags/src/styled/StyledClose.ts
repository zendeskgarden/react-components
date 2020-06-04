/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tags.close';

export const StyledClose = styled.div.attrs<unknown>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-label': 'Press delete to remove'
})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s ease-in-out;
  opacity: 0.8;
  border: 0; /* <button> element reset */
  cursor: pointer;
  padding: 0; /* <button> element reset */
  font-size: 0; /* text content reset */

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledClose.defaultProps = {
  theme: DEFAULT_THEME
};
