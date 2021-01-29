/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IRGBColor } from '../../elements/ColorPicker/reducer';

const COMPONENT_ID = 'colorpicker.preview_box';

export interface IStyledPreviewBoxProps extends ThemeProps<DefaultTheme> {
  rgb: IRGBColor;
}

export const StyledPreview = styled.div.attrs<IStyledPreviewBoxProps>(props => ({
  style: {
    backgroundColor: `rgba(${props.rgb.red}, ${props.rgb.green}, ${props.rgb.blue}, ${
      props.rgb.alpha ? props.rgb.alpha / 100 : 0
    })`
  },
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'preview-box'
}))<IStyledPreviewBoxProps>`
  flex-shrink: 0;
  border-radius: ${props => props.theme.borderRadii.md};
  /* stylelint-disable-next-line color-function-notation */
  box-shadow: inset 0 0 0 1px
    ${props => getColor(props.theme.palette.black, 600, props.theme, 0.19)};
  width: ${props => props.theme.space.base * 8}px;
  height: ${props => props.theme.space.base * 8}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPreview.defaultProps = {
  theme: DEFAULT_THEME
};
