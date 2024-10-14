/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { rgba } from 'polished';
import { retrieveComponentStyles, getCheckeredBackground } from '@zendeskgarden/react-theming';
import { IRGBColorProps } from '../types';

const COMPONENT_ID = 'colorpickers.colorpicker_preview_box';

interface IStyledColorPreviewProps extends IRGBColorProps {
  $isOpaque?: boolean;
}

const background = (props: IStyledColorPreviewProps & ThemeProps<DefaultTheme>) => {
  const alpha = props.$alpha ? props.$alpha / 100 : 0;
  let retVal = `rgba(${props.$red}, ${props.$green}, ${props.$blue}, ${alpha})`;

  if (!props.$isOpaque) {
    retVal = getCheckeredBackground({
      theme: props.theme,
      size: 13,
      overlay: retVal
    });
  }

  return retVal;
};

export const StyledPreview = styled.div.attrs<IStyledColorPreviewProps>(props => ({
  style: {
    background: background(props)
  },
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'preview-box'
}))<IStyledColorPreviewProps>`
  flex-shrink: 0;
  border-radius: ${props => props.theme.borderRadii.md};
  box-shadow: inset 0 0 0 ${props => props.theme.borderWidths.sm}
    ${props => rgba(props.theme.palette.black as string, 0.19)};
  width: ${props => props.theme.space.base * (props.$isOpaque ? 6 : 8)}px;
  height: ${props => props.theme.space.base * (props.$isOpaque ? 6 : 8)}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
