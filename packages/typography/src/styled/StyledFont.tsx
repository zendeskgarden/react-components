/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { hideVisually, math } from 'polished';
import { DEFAULT_THEME, retrieveComponentStyles, getColorV8 } from '@zendeskgarden/react-theming';
import { SIZE } from '../types';

const COMPONENT_ID = 'typography.font';

const TYPOGRAPHY_SIZE = [...SIZE, 'extralarge', '2xlarge', '3xlarge'] as const;

const FONT_SIZE = ['inherit', ...TYPOGRAPHY_SIZE] as const;

type TypographySize = (typeof TYPOGRAPHY_SIZE)[number];

type ThemeSize = keyof DefaultTheme['lineHeights'];

export const THEME_SIZES: Record<TypographySize, ThemeSize> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extralarge: 'xl',
  '2xlarge': 'xxl',
  '3xlarge': 'xxxl'
};

const fontStyles = (props: IStyledFontProps & ThemeProps<DefaultTheme>) => {
  const monospace =
    props.isMonospace && ['inherit', 'small', 'medium', 'large'].indexOf(props.size!) !== -1;
  const fontFamily = monospace && props.theme.fonts.mono;
  const direction = props.theme.rtl ? 'rtl' : 'ltr';
  let fontSize;
  let fontWeight;
  let lineHeight;
  let color;

  if (monospace) {
    if (props.size === 'inherit') {
      fontSize = 'calc(1em - 1px)';
      lineHeight = 'normal';
    } else {
      const themeSize = THEME_SIZES[props.size!];

      fontSize = math(`${props.theme.fontSizes[themeSize]} - 1px`);
      lineHeight = math(`${props.theme.lineHeights[themeSize]} - 1px`);
    }
  } else if (props.size !== 'inherit') {
    const themeSize = THEME_SIZES[props.size!];

    fontSize = props.theme.fontSizes[themeSize];
    lineHeight = props.theme.lineHeights[themeSize];
  }

  if (props.isBold === true) {
    fontWeight = props.theme.fontWeights.semibold;
  } else if (props.isBold === false || props.size !== 'inherit') {
    fontWeight = props.theme.fontWeights.regular;
  }

  if (props.hue) {
    const shade = props.hue === 'yellow' ? 700 : 600;

    color = getColorV8(props.hue, shade, props.theme);
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
  size?: (typeof FONT_SIZE)[number];
  hue?: string;
}

export const StyledFont = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFontProps>`
  ${props => !props.hidden && fontStyles(props)};

  &[hidden] {
    display: inline;
    ${hideVisually()};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFont.defaultProps = {
  theme: DEFAULT_THEME,
  size: 'inherit'
};
