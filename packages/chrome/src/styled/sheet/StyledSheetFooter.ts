/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_footer';

export interface IStyledSheetFooterProps {
  isCompact?: boolean;
}

export const StyledSheetFooter = styled.footer.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSheetFooterProps & ThemeProps<DefaultTheme>>`
  display: flex;
  flex-flow: ${props => (props.theme.rtl ? 'row-reverse' : 'row')} wrap;
  align-items: center;
  justify-content: ${props => (props.isCompact ? 'center' : 'flex-end')};
  border-top: 1px solid ${props => props.theme.palette.grey[300]};
  padding: ${props => (props.isCompact ? '10px' : '20px')};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetFooter.defaultProps = {
  theme: DEFAULT_THEME
};
