/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { ICodeProps } from '../../types/elements';
import type { IStyledBaseProps, IStyledFontProps } from '../../types/views';
import { StyledFont } from './StyledFont';

const colorStyles = ({ $hue, theme }: IStyledCodeProps & IStyledBaseProps) => {
  const bgColorArgs: Parameters<typeof getColor>[0] = {
    theme,
    light: { offset: 100 },
    dark: { offset: -100 }
  };
  const fgColorArgs: Parameters<typeof getColor>[0] = { theme };

  switch ($hue) {
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
      bgColorArgs.variable = 'background.subtle';
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
  $hue?: ICodeProps['hue'];
  $size?: ICodeProps['size'];
}

export const StyledCode = styled(StyledFont as 'code')<IStyledCodeProps>`
  border-radius: ${props => props.theme.borderRadii.sm};
  padding: 1.5px;

  ${props => colorStyles(props)};

  ${componentStyles};
`;
