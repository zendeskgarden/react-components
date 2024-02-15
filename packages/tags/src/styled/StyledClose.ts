/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tags.close';

/**
 * 1. <button> element reset
 * 2. text content reset
 */

export const StyledClose = styled.button.attrs<unknown>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s ease-in-out;
  opacity: 0.8;
  border: 0; /* [1] */
  background: transparent; /* [1] */
  cursor: pointer;
  padding: 0; /* [1] */
  color: inherit; /* [1] */
  font-size: 0; /* [2] */
  appearance: none; /* [1] */

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
