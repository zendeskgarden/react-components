/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { checkeredBackground } from '../common/checkeredBackground';
import { IColor } from '../../utils/types';

const COMPONENT_ID = 'colorpickers.colordialog_preview';

export interface IStyleDialogPreviewProps extends ThemeProps<DefaultTheme> {
  backgroundColor?: string | IColor;
}

const background = (props: IStyleDialogPreviewProps) => {
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

export const StyledDialogPreview = styled.span.attrs<IStyleDialogPreviewProps>(props => ({
  style: {
    background: `${background(props)}, ${checkeredBackground(props.theme, 8)}`
  },
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'dialog-preview'
}))<IStyleDialogPreviewProps>`
  display: inline-block;
  bottom: ${props => props.theme.space.base}px;
  border-radius: ${props => props.theme.borderRadii.sm};
  /* stylelint-disable-next-line color-function-notation */
  box-shadow: inset 0 0 0 ${props => props.theme.borderWidths.sm}
    ${props => getColor(props.theme.palette.black, 600, props.theme, 0.19)};
  width: ${props => props.theme.space.base * 5}px;
  height: ${props => props.theme.space.base * 5}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDialogPreview.defaultProps = {
  theme: DEFAULT_THEME
};
