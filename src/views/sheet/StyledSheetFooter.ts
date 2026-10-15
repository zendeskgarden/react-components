/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledSheetFooterProps } from '../../types/views';
import type { IStyledBaseProps } from '../../types/views';

const colorStyles = ({ theme }: IStyledBaseProps) => {
  const borderColor = getColor({ theme, variable: 'border.subtle' });

  return css`
    border-top-color: ${borderColor};
  `;
};

const sizeStyles = ({ theme, $isCompact }: IStyledSheetFooterProps) => {
  const border = theme.borders.sm;
  const padding = `${theme.space.base * ($isCompact ? 2.5 : 5)}px`;

  return css`
    border-top: ${border};
    padding: ${padding};
  `;
};

export const StyledSheetFooter = styled.footer<IStyledSheetFooterProps>`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: ${props => (props.$isCompact ? 'center' : 'flex-end')};

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
