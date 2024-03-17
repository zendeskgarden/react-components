/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColorV8, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_footer';

export interface IStyledSheetFooterProps {
  /** Sets the SheetFooter padding to half the standard and centers the elements  */
  isCompact?: boolean;
}

export const StyledSheetFooter = styled.footer.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSheetFooterProps & ThemeProps<DefaultTheme>>`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: ${props => (props.isCompact ? 'center' : 'flex-end')};
  border-top: ${props =>
    `${props.theme.borders.sm} ${getColorV8('neutralHue', 300, props.theme)}}`};
  padding: ${props => props.theme.space.base * (props.isCompact ? 2.5 : 5)}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetFooter.defaultProps = {
  theme: DEFAULT_THEME
};
