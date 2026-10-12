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

const colorStyles = ({ theme }: IStyledBaseProps) => {
  const backgroundColor = getColor({ theme, variable: 'background.recessed' });
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

export const StyledCodeBlock = styled.pre`
  display: table;
  margin: 0;
  padding: ${props => props.theme.space.base * 3}px;
  box-sizing: border-box;
  width: 100%;
  direction: ltr;
  white-space: pre;
  counter-reset: linenumber;

  ${colorStyles};

  ${componentStyles};
`;
