/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledIconProps {
  $isStart?: boolean;
}

const sizeStyles = (props: IStyledIconProps & IStyledBaseProps) => {
  const margin = props.$isStart && `${props.theme.space.base * 2}px`;
  const size = props.theme.iconSizes.md;

  return css`
    margin-${props.theme.rtl ? 'left' : 'right'}: ${margin};
    width: ${size};
    height: ${size};
  `;
};

export const StyledIcon = styled(StyledBaseIcon)<IStyledIconProps>`
  position: relative;
  top: -1px;
  vertical-align: middle;

  ${props => sizeStyles(props)};

  ${componentStyles};
`;
