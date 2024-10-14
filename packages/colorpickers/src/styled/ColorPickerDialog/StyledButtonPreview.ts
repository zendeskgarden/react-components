/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { rgba } from 'polished';
import { retrieveComponentStyles, getCheckeredBackground } from '@zendeskgarden/react-theming';
import { IColorPickerDialogProps } from '../../types';

const COMPONENT_ID = 'colorpickers.colordialog_preview';

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

export const StyledButtonPreview = styled.span.attrs<IStyleButtonPreviewProps>(props => ({
  style: {
    background: getCheckeredBackground({
      theme: props.theme,
      size: 8,
      overlay: background(props)
    })
  },
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'dialog-preview'
}))<IStyleButtonPreviewProps>`
  display: inline-block;
  bottom: ${props => props.theme.space.base}px;
  border-radius: ${props => props.theme.borderRadii.sm};
  box-shadow: inset 0 0 0 ${props => props.theme.borderWidths.sm}
    ${props => rgba(props.theme.palette.black as string, 0.19)};
  width: ${props => props.theme.space.base * 5}px;
  height: ${props => props.theme.space.base * 5}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
