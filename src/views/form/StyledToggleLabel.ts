/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { IStyledBaseProps } from '../../types/views';
import { StyledCheckLabel } from './StyledCheckLabel';

const sizeStyles = (props: IStyledBaseProps) => {
  const size = props.theme.space.base * 10; /* from StyledToggleInput */
  const padding = size + props.theme.space.base * 2;

  return css`
    padding-${props.theme.rtl ? 'right' : 'left'}: ${padding}px;

    &[hidden] {
      padding-${props.theme.rtl ? 'right' : 'left'}: ${size}px;
    }
  `;
};

export const StyledToggleLabel = styled(StyledCheckLabel)`
  ${props => sizeStyles(props)};

  ${componentStyles};
`;
