/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import type { IStyledIcon } from '../../types/views';

const marginStyles = (props: IStyledIcon) => {
  const { $type, theme } = props;
  const margin = theme.space.base;

  if (theme.rtl) {
    return css`
      margin-${$type === 'last' || $type === 'next' ? 'right' : 'left'}: ${margin}px;
    `;
  }

  return css`
    margin-${$type === 'first' || $type === 'previous' ? 'right' : 'left'}: ${margin}px;
  `;
};

export const StyledIcon = styled(StyledBaseIcon)<IStyledIcon>`
  ${marginStyles}
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};
`;
