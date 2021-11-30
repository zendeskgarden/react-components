/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet';

interface IStyledSheetProps {
  placement?: 'start' | 'end';
  isOpen?: boolean;
  isAnimated?: boolean;
  size?: string;
}

const borderStyle = ({
  theme,
  placement,
  isOpen
}: IStyledSheetProps & ThemeProps<DefaultTheme>) => {
  const borderColor = isOpen ? getColor('neutralHue', 300, theme) : 'transparent';
  const borderSides = ['-left', '-right'];
  let borderSide = '';

  if (theme.rtl) {
    borderSides.reverse();
  }

  if (placement === 'end') {
    borderSide = borderSides[0];
  } else if (placement === 'start') {
    borderSide = borderSides[1];
  }

  return `border${borderSide}: ${theme.borders.sm} ${borderColor};`;
};

export const StyledSheet = styled.aside.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSheetProps>`
  display: flex;
  order: 1;
  transition: ${props => props.isAnimated && 'width 250ms ease-in-out'};
  background-color: ${props => props.theme.colors.background};
  width: ${props => (props.isOpen ? props.size : '0px')};
  height: 100%;
  overflow: hidden;
  font-size: ${props => props.theme.fontSizes.md};

  &:focus {
    outline: none;
  }

  ${props => borderStyle(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheet.defaultProps = {
  theme: DEFAULT_THEME
};
