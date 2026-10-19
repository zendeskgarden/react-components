/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledIconProps {
  $isRotated?: boolean;
  $position?: 'start' | 'end';
}

const sizeStyles = (props: IStyledIconProps & IStyledBaseProps) => {
  let marginProperty;

  if (props.$position === 'start') {
    marginProperty = `margin-${props.theme.rtl ? 'left' : 'right'}`;
  } else if (props.$position === 'end') {
    marginProperty = `margin-${props.theme.rtl ? 'right' : 'left'}`;
  }

  return (
    marginProperty &&
    css`
      ${marginProperty}: ${props.theme.space.base * 2}px;
    `
  );
};

export const StyledIcon = styled(StyledBaseIcon)<IStyledIconProps>`
  transform: ${props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  transition:
    transform 0.25s ease-in-out,
    color 0.25s ease-in-out;

  ${props => sizeStyles(props)};

  ${componentStyles};
`;
