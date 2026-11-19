/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';

interface IStyledAccordionProps {
  $isWell?: boolean;
}

/* Well sections are separated by a built-in 40px gap. */
const wellStyles = ({ theme }: WithTheme<IStyledAccordionProps>) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.xl};
`;

export const StyledAccordion = styled.div<WithTheme<IStyledAccordionProps>>`
  ${props => props.$isWell && wellStyles(props)}

  ${componentStyles};
`;
