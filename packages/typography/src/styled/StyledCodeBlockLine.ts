/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledFont } from './StyledFont';

const COMPONENT_ID = 'typography.codeblock_code';

const lineNumberStyles = (props: IStyledCodeBlockLineProps & ThemeProps<DefaultTheme>) => {
  const padding = `${props.theme.space.base * 6}px`;
  const color = getColor('neutralHue', props.isLight ? 600 : 500, props.theme);

  return css`
    &::before {
      display: table-cell;
      padding-right: ${padding};
      text-align: right;
      color: ${color};
      content: counter(linenumber);
      counter-increment: linenumber;
    }
  `;
};

export interface IStyledCodeBlockLineProps {
  isLight?: boolean;
  isNumbered?: boolean;
}

export const StyledCodeBlockLine = styled(StyledFont).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'code',
  isMonospace: true
})<IStyledCodeBlockLineProps>`
  display: ${props => (props.isNumbered ? 'table-row' : 'block')};

  ${props => props.isNumbered && lineNumberStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCodeBlockLine.defaultProps = {
  theme: DEFAULT_THEME
};
