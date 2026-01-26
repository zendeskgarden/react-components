/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor, componentStyles } from '@zendeskgarden/react-theming';
import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';

const COMPONENT_ID = 'typography.codeblock';

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColor({ theme, variable: 'background.recessed' });
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

export const StyledCodeBlock = styled.pre.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: table;
  margin: 0;
  padding: ${props => props.theme.space.base * 3}px;
  box-sizing: border-box;
  width: 100%;
  direction: ltr;
  white-space: pre;
  counter-reset: linenumber;

  ${colorStyles};

  ${componentStyles};
`;
