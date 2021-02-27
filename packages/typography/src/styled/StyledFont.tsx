/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { math } from 'polished';
import {
  DEFAULT_THEME,
  isRtl,
  retrieveComponentStyles,
  getColor
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.font';

const fontStyles = (props: IStyledFontProps & ThemeProps<DefaultTheme>) => {
  const monospace = props.isMonospace && ['sm', 'md', 'lg', 'inherit'].indexOf(props.size!) !== -1;
  const fontFamily = monospace && props.theme.fonts.mono;
  const direction = isRtl(props) ? 'rtl' : 'ltr';
  let fontSize;
  let fontWeight;
  let lineHeight;
  let color;

  if (monospace) {
    if (props.size === 'inherit') {
      fontSize = 'calc(1em - 1px)';
      lineHeight = 'normal';
    } else {
      fontSize = math(`${props.theme.fontSizes[props.size!]} - 1px`);
      lineHeight = math(`${props.theme.lineHeights[props.size!]} - 1px`);
    }
  } else if (props.size !== 'inherit') {
    fontSize = props.theme.fontSizes[props.size!];
    lineHeight = props.theme.lineHeights[props.size!];
  }

  if (props.isBold === true) {
    fontWeight = props.theme.fontWeights.semibold;
  } else if (props.isBold === false || props.size !== 'inherit') {
    fontWeight = props.theme.fontWeights.regular;
  }

  if (props.hue) {
    const shade = props.hue === 'yellow' ? 700 : 600;

    color = getColor(props.hue, shade, props.theme);
  }

  return css`
    line-height: ${lineHeight};
    color: ${color};
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    direction: ${direction};
  `;
};

export interface IStyledFontProps {
  isBold?: boolean;
  isMonospace?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'inherit';
  hue?: string;
}

export const StyledFont = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFontProps>`
  ${props => fontStyles(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFont.defaultProps = {
  theme: DEFAULT_THEME,
  size: 'inherit'
};
