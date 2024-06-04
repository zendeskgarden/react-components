/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledFont, IStyledFontProps } from './StyledFont';
import { ICodeProps } from '../types';

const COMPONENT_ID = 'typography.code';

const colorStyles = ({ hue, theme }: IStyledCodeProps & ThemeProps<DefaultTheme>) => {
  const bgColorArgs: Parameters<typeof getColor>[0] = { theme };
  const fgColorArgs: Parameters<typeof getColor>[0] = { theme };

  switch (hue) {
    case 'green':
      bgColorArgs.variable = 'background.success';
      fgColorArgs.variable = 'foreground.successEmphasis';
      break;
    case 'red':
      bgColorArgs.variable = 'background.danger';
      fgColorArgs.variable = 'foreground.dangerEmphasis';
      break;
    case 'yellow':
      bgColorArgs.variable = 'background.warning';
      fgColorArgs.variable = 'foreground.warningEmphasis';
      break;
    // includes grey
    default:
      fgColorArgs.variable = 'foreground.default';
      bgColorArgs.hue = 'neutralHue';
      bgColorArgs.dark = { shade: 900 };
      bgColorArgs.light = { shade: 200 };
      break;
  }

  const backgroundColor = getColor(bgColorArgs);
  const foregroundColor = getColor(fgColorArgs);

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    a & {
      color: inherit;
    }
  `;
};

interface IStyledCodeProps extends Omit<IStyledFontProps, 'size'> {
  hue?: ICodeProps['hue'];
  size?: ICodeProps['size'];
}

export const StyledCode = styled(StyledFont as 'code').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'code',
  isMonospace: true
})<IStyledCodeProps>`
  border-radius: ${props => props.theme.borderRadii.sm};
  padding: 1.5px;

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCode.defaultProps = {
  theme: DEFAULT_THEME,
  hue: 'grey',
  size: 'inherit'
};
