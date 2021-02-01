/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IRGBColor } from '../../elements/ColorPicker/reducer';

const COMPONENT_ID = 'colorpickers.colordialog.preview';

export interface IStyleDialogPreviewProps {
  backgroundColor: string | IRGBColor;
}

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
  background: ${props =>
    typeof props.backgroundColor === 'string'
      ? props.backgroundColor
      : `rgba(${props.backgroundColor.red}, ${props.backgroundColor.green}, ${
          props.backgroundColor.blue
        }, ${props.backgroundColor.alpha ? props.backgroundColor.alpha / 100 : 0})`};
  width: ${props => props.theme.space.base * 5}px;
  height: ${props => props.theme.space.base * 5}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDialogPreview.defaultProps = {
  theme: DEFAULT_THEME
};
