/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet';
const SHEET_WIDTH = 380;

interface IStyledSheetProps {
  placement?: 'start' | 'end';
}

// todo: add rtl support
const sheetSmartBorderStyle = ({
  theme,
  placement
}: IStyledSheetProps & ThemeProps<DefaultTheme>) => {
  let borderSide = '';

  // todo: clean up
  if (placement === 'end') {
    if (theme.rtl) {
      borderSide = '-right';
    } else {
      borderSide = '-left';
    }
  } else if (placement === 'start') {
    if (theme.rtl) {
      borderSide = '-left';
    } else {
      borderSide = '-right';
    }
  }

  return `border${borderSide}: ${theme.borders.sm} ${theme.palette.grey[300]};`;
};

export const StyledSheet = styled.aside.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSheetProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  order: 1;
  transition: width 0.25s ease-in-out;
  background-color: ${props => props.theme.colors.background};
  width: ${SHEET_WIDTH}px;
  min-height: 100%;

  & > * {
    transition: opacity 0.5s ease-in-out;
  }

  &.side-sheet-transition-enter {
    width: 0;

    & > * {
      opacity: 0;
    }
  }

  &.side-sheet-transition-enter-active {
    width: ${SHEET_WIDTH}px;

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

  ${props => sheetSmartBorderStyle(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheet.defaultProps = {
  theme: DEFAULT_THEME,
  placement: 'end'
};
