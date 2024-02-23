/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { rgba } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { checkeredBackground } from '../common/checkeredBackground';
import { IColorPickerDialogProps } from '../../types';

const COMPONENT_ID = 'colorpickers.colordialog_preview';

export interface IStyleButtonPreviewProps extends ThemeProps<DefaultTheme> {
  backgroundColor?: IColorPickerDialogProps['color'];
}

const background = (props: IStyleButtonPreviewProps) => {
  const { backgroundColor } = props;
  let color;

  if (typeof backgroundColor === 'string') {
    color = backgroundColor;
  } else if (backgroundColor === undefined) {
    color = props.theme.palette.white;
  } else {
    const { red, green, blue, alpha = 1 } = backgroundColor;

    color = `rgba(${red}, ${green}, ${blue}, ${alpha ? alpha / 100 : 0})`;
  }

  return `linear-gradient(${color}, ${color})`;
};

export const StyledButtonPreview = styled.span.attrs<IStyleButtonPreviewProps>(props => ({
  style: {
    background: `${background(props)}, ${checkeredBackground(props.theme, 8)}`
  },
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'dialog-preview'
}))<IStyleButtonPreviewProps>`
  display: inline-block;
  bottom: ${props => props.theme.space.base}px;
  border-radius: ${props => props.theme.borderRadii.sm};
  /* stylelint-disable color-function-notation */
  box-shadow: inset 0 0 0 ${props => props.theme.borderWidths.sm}
    ${props => rgba(props.theme.palette.black as string, 0.19)};
  width: ${props => props.theme.space.base * 5}px;
  height: ${props => props.theme.space.base * 5}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledButtonPreview.defaultProps = {
  theme: DEFAULT_THEME
};
