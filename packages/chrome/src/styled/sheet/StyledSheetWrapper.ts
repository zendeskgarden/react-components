/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_wrapper';

interface IStyledSheetWrapperProps {
  size?: string;
}

export const StyledSheetWrapper = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSheetWrapperProps & ThemeProps<DefaultTheme>>`
  display: flex;
  position: relative;
  flex-direction: column;
  transition: opacity 0.5s ease-in-out;
  min-width: ${props => props.size};

  &.side-sheet-transition-enter {
    opacity: 0;
  }

  &.side-sheet-transition-enter-active {
    opacity: 1;
  }

  &.side-sheet-transition-exit {
    opacity: 1;
  }

  &.side-sheet-transition-exit-active {
    opacity: 0;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
