/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet';

export const StyledSheet = styled.aside.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  position: relative;
  flex-direction: column;
  order: 10; /* arbitrary number for now to set side position */

  transition: width 0.25s ease-in-out;
  will-change: width;

  border: 1px solid #d8dcde;

  width: 380px;
  min-height: 100%;

  & > * {
    transition: opacity 0.5s ease-in-out;
    will-change: opacity;
  }

  &.side-sheet-transition-enter {
    width: 0;

    & > * {
      opacity: 0;
    }
  }

  &.side-sheet-transition-enter-active {
    width: 380px;

    & > * {
      opacity: 100;
    }
  }

  &.side-sheet-transition-exit {
    width: 0;

    & > * {
      transition: opacity 0.125s ease-in-out;
      opacity: 0;
    }
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheet.defaultProps = {
  theme: DEFAULT_THEME
};
