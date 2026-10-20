/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledBaseProps } from '../../types/views';

const colorStyles = ({ theme }: IStyledBaseProps) => {
  const backgroundColor = getColor({ theme, variable: 'border.subtle' });

  return css`
    background-color: ${backgroundColor};
  `;
};

const sizeStyles = (props: IStyledBaseProps) => {
  const margin = `${props.theme.space.base}px`;
  const height = props.theme.borderWidths.sm;

  return css`
    margin: ${margin} 0;
    height: ${height};
  `;
};

export const StyledListboxSeparator = styled.li`
  cursor: default;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
