/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { rgba } from 'polished';
import { styled, ThemeProps, DefaultTheme } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getCheckeredBackground } from '../../theming/utils/getCheckeredBackground';
import { IColorPickerDialogProps } from '../../types/elements';

export interface IStyleButtonPreviewProps extends ThemeProps<DefaultTheme> {
  $backgroundColor?: IColorPickerDialogProps['color'];
}

const background = ({ $backgroundColor, theme }: IStyleButtonPreviewProps) => {
  let retVal;

  if (typeof $backgroundColor === 'string') {
    retVal = $backgroundColor;
  } else if ($backgroundColor === undefined) {
    retVal = theme.palette.white as string;
  } else {
    const { red, green, blue, alpha = 1 } = $backgroundColor;

    retVal = `rgba(${red}, ${green}, ${blue}, ${alpha ? alpha / 100 : 0})`;
  }

  return retVal;
};

export const getBackground = (props: IStyleButtonPreviewProps) =>
  getCheckeredBackground({
    theme: props.theme,
    size: 8,
    overlay: background(props)
  });

export const StyledButtonPreview = styled.span<IStyleButtonPreviewProps>`
  display: inline-block;
  bottom: ${props => props.theme.space.base}px;
  border-radius: ${props => props.theme.borderRadii.sm};
  box-shadow: inset 0 0 0 ${props => props.theme.borderWidths.sm}
    /* stylelint-disable-next-line color-function-alias-notation */
    ${props => rgba(props.theme.palette.black as string, 0.19)};
  width: ${props => props.theme.space.base * 5}px;
  height: ${props => props.theme.space.base * 5}px;

  ${componentStyles};
`;
