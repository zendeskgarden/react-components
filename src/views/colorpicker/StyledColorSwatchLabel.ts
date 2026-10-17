/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { parseToRgb, readableColor } from 'polished';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles } from '../../theming/utils/focusStyles';
import { getColor } from '../../theming/utils/getColor';
import { IRGBColor } from '../../types/elements';
import { StyledButtonPreview } from './StyledButtonPreview';

interface IStyledColorSwatchLabelProps extends ThemeProps<DefaultTheme> {
  $backgroundColor: string;
}

const colorStyles = ({ $backgroundColor, theme }: IStyledColorSwatchLabelProps) => {
  const { alpha } = parseToRgb($backgroundColor) as IRGBColor;

  const returnIfLightColor = getColor({ theme, hue: 'neutralHue', shade: 900 });

  let foregroundColor = returnIfLightColor;

  if (alpha === undefined || alpha >= 0.4) {
    const returnIfDarkColor = getColor({ theme, hue: 'white' });

    foregroundColor = readableColor(
      $backgroundColor,
      returnIfLightColor,
      returnIfDarkColor,
      false /* turn off strict mode to prevent black */
    );
  }

  return `
    color: ${foregroundColor};
  `;
};

export const StyledColorSwatchLabel = styled(StyledButtonPreview)<IStyledColorSwatchLabelProps>`
  position: relative;
  top: 0;
  border-radius: ${props => props.theme.borderRadii.md};

  ${colorStyles};

  ${props => focusStyles({ theme: props.theme, selector: '&:has(:focus-visible)' })}

  ${componentStyles};
`;
