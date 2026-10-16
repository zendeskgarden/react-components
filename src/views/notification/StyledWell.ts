/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledWellProps } from '../../types/views';
import { StyledBase } from './StyledBase';

const colorStyles = ({ theme, $isFloating, $isRecessed }: IStyledWellProps) => {
  let backgroundVariable;

  if ($isRecessed) {
    backgroundVariable = 'background.recessed';
  } else if ($isFloating) {
    backgroundVariable = 'background.raised';
  } else {
    backgroundVariable = 'background.default';
  }

  const foreground = getColor({ variable: 'foreground.subtle', theme });
  const background = getColor({ variable: backgroundVariable, theme });

  return css`
    background-color: ${background};
    color: ${foreground};
  `;
};

/**
 * Supports all `<div>` props
 */
export const StyledWell = styled(StyledBase)<IStyledWellProps>`
  ${colorStyles}

  ${componentStyles};
`;
