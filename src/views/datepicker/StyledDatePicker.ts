/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledDatePickerProps {
  $isCompact: boolean;
}

const sizeStyles = ({ $isCompact, theme }: IStyledDatePickerProps & IStyledBaseProps) => {
  const margin = theme.space.base * ($isCompact ? 4 : 5);

  return css`
    margin: ${margin}px;
  `;
};

const colorStyles = ({ theme }: IStyledDatePickerProps & IStyledBaseProps) => {
  const foreground = getColor({ variable: 'foreground.default', theme });

  return css`
    background-color: transparent;
    color: ${foreground};
  `;
};

export const StyledDatePicker = styled.div<IStyledDatePickerProps>`
  direction: ${p => p.theme.rtl && 'rtl'};

  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;
