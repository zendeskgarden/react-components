/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'colorpickers.colorpicker';

interface IStyledColorPickerProps {
  $isOpaque?: boolean;
}

export const getColorPickerWidth = (props: IStyledColorPickerProps) => {
  return props.$isOpaque ? 268 : 312;
};

export const StyledColorPicker = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledColorPickerProps>`
  width: ${getColorPickerWidth}px;
  min-width: ${getColorPickerWidth}px;

  ${componentStyles};
`;
