/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { Language } from 'prism-react-renderer';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { Diff, Size } from '../types';
import { StyledFont, THEME_SIZES } from './StyledFont';

const COMPONENT_ID = 'typography.codeblock_code';

export interface IStyledCodeBlockLineProps {
  $language?: Language;
  $isHighlighted?: boolean;
  $isNumbered?: boolean;
  $diff?: Diff;
  $size?: Size;
}

const colorStyles = ({
  theme,
  $diff,
  $isHighlighted
}: IStyledCodeBlockLineProps & ThemeProps<DefaultTheme>) => {
  let backgroundColor;

  if ($diff) {
    const hues = {
      hunk: 'royal',
      add: 'lime',
      delete: 'crimson',
      change: 'lemon'
    };

    backgroundColor = getColor({
      theme,
      hue: hues[$diff],
      dark: { shade: 600 },
      light: { shade: 400 },
      transparency: theme.opacity[300]
    });
  } else if ($isHighlighted) {
    backgroundColor = getColor({
      theme,
      dark: { hue: 'white' },
      light: { hue: 'neutralHue', shade: 700 },
      transparency: theme.opacity[100]
    });
  }

  return css`
    background-color: ${backgroundColor};
  `;
};

const lineNumberStyles = ({
  theme,
  $language,
  $size
}: IStyledCodeBlockLineProps & ThemeProps<DefaultTheme>) => {
  const color = getColor({ theme, variable: 'foreground.subtle', light: { offset: -100 } });
  let padding;

  if ($language && $language === 'diff') {
    padding = 0;
  } else if ($size === 'small') {
    padding = theme.space.base * 4;
  } else if ($size === 'large') {
    padding = theme.space.base * 7;
  } else {
    padding = theme.space.base * 6;
  }

  return `
    &::before {
      display: table-cell;
      padding-right: ${padding}px;
      width: 1px;
      text-align: right;
      color: ${color};
      content: counter(linenumber);
      counter-increment: linenumber;
    }
  `;
};

/*
 * 1. Fix line display for mobile.
 * 2. Match parent padding for overflow scroll.
 */
export const StyledCodeBlockLine = styled(StyledFont as 'code').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'code',
  $isMonospace: true
})<IStyledCodeBlockLineProps>`
  display: table-row;
  height: ${props => props.theme.lineHeights[THEME_SIZES[props.$size!]]}; /* [1] */
  direction: ltr;

  ${colorStyles};

  ${props => props.$isNumbered && lineNumberStyles(props)};

  &::after {
    display: inline-block;
    width: ${props => props.theme.space.base * 3}px; /* [2] */
    content: '';
  }

  ${componentStyles};
`;
