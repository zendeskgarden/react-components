/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { IStyledBaseProps } from '../../types/views';
import { StyledPageBase } from './StyledPageBase';

const sizeStyles = (props: IStyledBaseProps) => {
  const height = props.theme.space.base * 8;

  return css`
    min-width: ${height}px;
    max-width: ${height * 2}px;

    &[aria-current='true'] {
      max-width: none;
    }
  `;
};

export const StyledPage = styled(StyledPageBase)`
  ${props => sizeStyles(props)};

  /* prettier-ignore */
  &[aria-current="true"] {
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  ${componentStyles};
`;
