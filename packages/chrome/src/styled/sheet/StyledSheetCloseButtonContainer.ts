/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_close';

const placementStyles = (props: ThemeProps<DefaultTheme>) => {
  const placement = props.theme.rtl ? 'left' : 'right';

  return css`
    top: ${props.theme.space.base * 3}px;
    ${placement}: ${props.theme.space.base * 1}px;
  `;
};

export const StyledSheetCloseButtonContainer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  position: absolute;
  ${props => placementStyles(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetCloseButtonContainer.defaultProps = {
  theme: DEFAULT_THEME
};
