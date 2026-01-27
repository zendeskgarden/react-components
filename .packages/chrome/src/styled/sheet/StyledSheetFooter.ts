/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';

const COMPONENT_ID = 'chrome.sheet_footer';

export interface IStyledSheetFooterProps {
  /** Sets the SheetFooter padding to half the standard and centers the elements  */
  $isCompact?: boolean;
}

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const borderColor = getColor({ theme, variable: 'border.subtle' });

  return css`
    border-top-color: ${borderColor};
  `;
};

const sizeStyles = ({ theme, $isCompact }: IStyledSheetFooterProps & ThemeProps<DefaultTheme>) => {
  const border = theme.borders.sm;
  const padding = `${theme.space.base * ($isCompact ? 2.5 : 5)}px`;

  return css`
    border-top: ${border};
    padding: ${padding};
  `;
};

export const StyledSheetFooter = styled.footer.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSheetFooterProps>`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: ${props => (props.$isCompact ? 'center' : 'flex-end')};

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
