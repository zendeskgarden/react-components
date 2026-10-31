/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';
import { StyledValue } from './StyledValue';

interface IStyledTagsButtonProps {
  $isCompact?: boolean;
}

const colorStyles = ({ theme }: WithTheme<IStyledTagsButtonProps>) => {
  const color = getColor({ theme, variable: 'foreground.primary' });

  return css`
    color: ${color};

    &:disabled {
      color: inherit;
    }
  `;
};

/*
 * 1. StyledValue override.
 * 2. Button reset.
 */
export const StyledTagsButton = styled(StyledValue as 'button')<WithTheme<IStyledTagsButtonProps>>`
  display: inline-flex;
  flex: 0 1 auto; /* [1] */
  align-items: center;
  border: none; /* [2] */
  background-color: transparent; /* [2] */
  cursor: pointer;
  min-width: auto; /* [1] */
  font-family: inherit; /* [2] */

  &:hover {
    text-decoration: underline;
  }

  ${colorStyles};

  &:disabled {
    cursor: default;
    text-decoration: none;
  }

  ${componentStyles};
`;
