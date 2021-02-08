/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IColor } from '../../utils/types';

const COMPONENT_ID = 'colorpickers.colordialog.preview';

export interface IStyleDialogPreviewProps extends ThemeProps<DefaultTheme> {
  backgroundColor?: string | IColor;
}

const background = (props: IStyleDialogPreviewProps) => {
  const { backgroundColor } = props;

  if (typeof backgroundColor === 'string') {
    return `background: ${backgroundColor}`;
  }

  if (backgroundColor === undefined) {
    return `backround: rgb(255,255,255)`;
  }

  const { red, green, blue, alpha } = backgroundColor;

  return `background: rgba(${red}, ${green}, ${blue}, ${alpha ? alpha / 100 : 0})`;
};

export const StyledDialogPreview = styled.div.attrs<IStyleDialogPreviewProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'dialog-preview'
})<IStyleDialogPreviewProps>`
  display: inline-block;
  /* stylelint-disable-next-line color-function-notation */
  border: ${props =>
    `${props.theme.borders.sm} ${getColor(
      props.theme.palette.black,
      undefined,
      props.theme,
      0.25
    )}`};
  border-radius: ${props => props.theme.borderRadii.sm};
  width: ${props => props.theme.space.base * 5}px;
  height: ${props => props.theme.space.base * 5}px;

  ${background}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDialogPreview.defaultProps = {
  theme: DEFAULT_THEME
};
