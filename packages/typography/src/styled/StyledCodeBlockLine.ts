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

const colorStyles = (props: IStyledCodeBlockLineProps & ThemeProps<DefaultTheme>) => {
  let backgroundColor;

  if (props.isHunk) {
    backgroundColor = getColor('royal', 400, props.theme, 0.4);
  } else if (props.isChanged) {
    backgroundColor = getColor('lemon', 400, props.theme, 0.4);
  } else if (props.isDeleted) {
    backgroundColor = getColor('crimson', 400, props.theme, 0.4);
  } else if (props.isAdded) {
    backgroundColor = getColor('lime', 400, props.theme, 0.4);
  } else if (props.isHighlighted) {
    const hue = props.isLight ? props.theme.palette.black : props.theme.palette.white;

    backgroundColor = getColor(hue, 600, props.theme, 0.1);
  }

  return css`
    background-color: ${backgroundColor};
  `;
};

const lineNumberStyles = (props: IStyledCodeBlockLineProps & ThemeProps<DefaultTheme>) => {
  const padding = `${props.theme.space.base * 6}px`;
  const color = getColor('neutralHue', props.isLight ? 600 : 500, props.theme);

  return `
    &::before {
      display: table-cell;
      padding-right: ${padding};
      width: 1px;
      text-align: right;
      color: ${color};
      content: counter(linenumber);
      counter-increment: linenumber;
    }
  `;
};

export interface IStyledCodeBlockLineProps {
  isHighlighted?: boolean;
  isHunk?: boolean;
  isDeleted?: boolean;
  isAdded?: boolean;
  isChanged?: boolean;
  isLight?: boolean;
  isNumbered?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * 1. Fix line display for mobile.
 * 2. Match parent padding for overflow scroll.
 */
export const StyledCodeBlockLine = styled(StyledFont as 'code').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'code',
  isMonospace: true
})<IStyledCodeBlockLineProps>`
  display: table-row;
  height: ${props => props.theme.lineHeights[props.size!]}; /* [1] */
  direction: ltr;

  ${props => colorStyles(props)};

  ${props => props.isNumbered && lineNumberStyles(props)};

  &::after {
    display: inline-block;
    width: ${props => props.theme.space.base * 3}px; /* [2] */
    content: '';
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCodeBlockLine.defaultProps = {
  size: 'md',
  theme: DEFAULT_THEME
};
