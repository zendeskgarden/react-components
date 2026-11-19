/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import type { IStyledWellProps, WithTheme } from '../../types/views';
import { StyledWell } from '../notification/StyledWell';

/*
 * `componentStyles` is inherited from `StyledWell`: it resolves the rendered
 * `data-garden-id` (`accordions.section`), so theme overrides keep working
 * and the notification `components` keys don't leak in.
 */
export const StyledWellSection = styled(StyledWell)<WithTheme<IStyledWellProps>>`
  transition: ${props =>
    /* attrs cannot provide this fallback: styled-components >= 6.3.12 preserves
     * explicitly passed undefined props, so `$isAnimated` may still be undefined here */
    (props.$isAnimated ?? true) && 'background-color 0.25s ease-in-out'};
  padding: 0;
`;
