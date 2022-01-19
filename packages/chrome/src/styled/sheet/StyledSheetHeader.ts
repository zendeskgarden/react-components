/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_header';

export interface IStyledSheetHeaderProps {
  isCloseButtonPresent?: boolean;
}

export const StyledSheetHeader = styled.header.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSheetHeaderProps & ThemeProps<DefaultTheme>>`
  border-bottom: ${props =>
    `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}}`};
  padding: ${props => props.theme.space.base * 5}px;
  ${props =>
    props.isCloseButtonPresent &&
    // the padding size accounts for 40px (10 bse units) size of the button,
    // 8px additional padding and 8px padding for the button position from a given side.
    `padding-${props.theme.rtl ? 'left' : 'right'}: ${props.theme.space.base * 14}px;`}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetHeader.defaultProps = {
  theme: DEFAULT_THEME
};
