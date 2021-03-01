/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IColor } from '../../utils/types';

const COMPONENT_ID = 'colorpickers.colordialog_preview';

export interface IStyleDialogPreviewProps extends ThemeProps<DefaultTheme> {
  backgroundColor?: string | IColor;
}

const background = (props: IStyleDialogPreviewProps) => {
  const { backgroundColor } = props;

  if (typeof backgroundColor === 'string') {
    return `background: ${backgroundColor}`;
  }

  if (backgroundColor === undefined) {
    return `background: rgba(255,255,255, 1)`;
  }

  const { red, green, blue, alpha = 1 } = backgroundColor;

  return `background: rgba(${red}, ${green}, ${blue}, ${alpha ? alpha / 100 : 0})`;
};

/**
 * 1. Adjust spacing in IE11 to match other browsers
 */
export const StyledDialogPreview = styled.span.attrs<IStyleDialogPreviewProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'dialog-preview'
})<IStyleDialogPreviewProps>`
  display: inline-block;
  position: relative;
  bottom: ${props => props.theme.space.base}px;
  z-index: 1;
  /* stylelint-disable-next-line color-function-notation */
  border: ${props =>
    `${props.theme.borders.sm} ${getColor(
      props.theme.palette.black,
      undefined,
      props.theme,
      0.25
    )}`};
  border-radius: ${props => props.theme.borderRadii.sm};
  width: ${props => props.theme.space.base * 4.5}px;
  height: ${props => props.theme.space.base * 4.5}px;

  /* stylelint-disable-next-line */
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    bottom: ${props => props.theme.space.base * 1.25}px; /* [1] */
  }

  ${background}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDialogPreview.defaultProps = {
  theme: DEFAULT_THEME
};
