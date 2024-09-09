/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';

const COMPONENT_ID = 'chrome.sheet_close';

const positionStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const top = `${theme.space.base * 2.5}px`;
  const position = `${theme.space.base * 2}px`;

  return css`
    top: ${top};
    ${theme.rtl ? 'left' : 'right'}: ${position};
  `;
};

export const StyledSheetClose = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;

  ${positionStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
