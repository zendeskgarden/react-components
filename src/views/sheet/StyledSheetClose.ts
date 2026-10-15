/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { IStyledBaseProps } from '../../types/views';
import { StyledIconButton } from '../button/StyledIconButton';

const positionStyles = ({ theme }: IStyledBaseProps) => {
  const top = `${theme.space.base * 2.5}px`;
  const position = `${theme.space.base * 2}px`;

  return css`
    top: ${top};
    ${theme.rtl ? 'left' : 'right'}: ${position};
  `;
};

export const StyledSheetClose = styled(StyledIconButton)`
  position: absolute;

  ${positionStyles};

  ${componentStyles};
`;
