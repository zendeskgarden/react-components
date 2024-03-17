/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { DEFAULT_THEME, getColorV8, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.codeblock';

const colorStyles = (props: IStyledCodeBlockProps & ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColorV8('neutralHue', props.isLight ? 100 : 1000, props.theme);
  const foregroundColor = props.isLight
    ? props.theme.colors.foreground
    : getColorV8('neutralHue', 300, props.theme);

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

export interface IStyledCodeBlockProps {
  isLight?: boolean;
}

export const StyledCodeBlock = styled.pre.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledCodeBlockProps>`
  display: table;
  margin: 0;
  padding: ${props => props.theme.space.base * 3}px;
  box-sizing: border-box;
  width: 100%;
  direction: ltr;
  white-space: pre;
  counter-reset: linenumber;

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCodeBlock.defaultProps = {
  theme: DEFAULT_THEME
};
