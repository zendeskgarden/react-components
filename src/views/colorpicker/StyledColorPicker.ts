/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';

interface IStyledColorPickerProps {
  $isOpaque?: boolean;
}

export const getColorPickerWidth = (props: IStyledColorPickerProps) => {
  return props.$isOpaque ? 268 : 312;
};

export const StyledColorPicker = styled.div<WithTheme<IStyledColorPickerProps>>`
  width: ${getColorPickerWidth}px;
  min-width: ${getColorPickerWidth}px;

  ${componentStyles};
`;
