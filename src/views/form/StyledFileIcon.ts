/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { getIconRenderSize } from '../../theming/utils/getIconRenderSize';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import { FileValidation } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';

export interface IStyledFileIconProps {
  $isCompact?: boolean;
  $validation?: FileValidation;
}

const colorStyles = ({ theme, $validation }: IStyledFileIconProps & IStyledBaseProps) => {
  const color = $validation ? undefined : getColor({ theme, variable: 'foreground.subtle' });

  return css`
    color: ${color};
  `;
};

const sizeStyles = ({ $isCompact, theme }: IStyledFileIconProps & IStyledBaseProps) => {
  const size = getIconRenderSize(theme, $isCompact);
  const margin = `${theme.space.base * 2}px`;

  return css`
    width: ${size};
    height: ${size};
    margin-${theme.rtl ? 'left' : 'right'}: ${margin};
  `;
};

export const StyledFileIcon = styled(StyledBaseIcon)<IStyledFileIconProps>`
  flex-shrink: 0;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
