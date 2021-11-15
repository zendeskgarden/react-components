/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet';

interface IStyledSheetProps {
  placement?: 'start' | 'end';
  isOpen?: boolean;
  isAnimated?: boolean;
  size?: string;
}

const sheetBorderStyle = ({
  theme,
  placement,
  isOpen
}: IStyledSheetProps & ThemeProps<DefaultTheme>) => {
  const borderColor = isOpen ? getColor('neutralHue', 300, theme) : 'transparent';
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

  return `border${borderSide}: ${theme.borders.sm} ${borderColor};`;
};

export const StyledSheet = styled.aside.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSheetProps>`
  display: flex;
  position: relative;
  order: 1;
  ${props =>
    css`
      transition: ${props.isAnimated ? 'width 0.5s ease-in-out, border 0.5s ease-in-out' : 'none'};
    `}
  background-color: ${props => props.theme.colors.background};
  width: ${props => (props.isOpen ? props.size : 0)};
  min-height: 100%;

  ${props => sheetBorderStyle(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheet.defaultProps = {
  theme: DEFAULT_THEME
};
