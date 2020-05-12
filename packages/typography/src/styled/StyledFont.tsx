/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { math } from 'polished';
import { DEFAULT_THEME, isRtl, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.font';

const fontStyles = (props: IStyledFontProps & ThemeProps<DefaultTheme>) => {
  const lineHeight = props.size !== 'inherit' && props.theme.lineHeights[props.size!];
  const monospace = props.isMonospace && ['sm', 'md', 'lg', 'inherit'].indexOf(props.size!) !== -1;
  const fontFamily = monospace && props.theme.fonts.mono;
  const fontSize =
    props.size !== 'inherit' &&
    (monospace
      ? math(`${props.theme.fontSizes[props.size!]} - 1px`)
      : props.theme.fontSizes[props.size!]);
  const fontWeight = props.isBold
    ? props.theme.fontWeights.semibold
    : props.size !== 'inherit' && props.theme.fontWeights.regular;
  const direction = isRtl(props) ? 'rtl' : 'ltr';

  return css`
    line-height: ${lineHeight};
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
  size: 'md'
};
