/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';

export interface IStyledItemProps {
  $isHorizontal?: boolean;
}

const sizeStyles = (props: WithTheme<IStyledItemProps>) => {
  const {
    $isHorizontal,
    theme: { space }
  } = props;

  return css`
    padding: ${$isHorizontal ? `0 ${space.xxs}` : `${space.xxs} 0`};
  `;
};

export const StyledItem = styled.li<WithTheme<IStyledItemProps>>`
  display: flex;

  ${sizeStyles}

  ${componentStyles};
`;
