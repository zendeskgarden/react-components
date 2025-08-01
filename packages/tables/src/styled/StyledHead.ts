/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledHeaderRow } from './StyledHeaderRow';
import { StyledHeaderCell } from './StyledHeaderCell';

const COMPONENT_ID = 'tables.head';

interface IStyledHeadProps {
  $isSticky?: boolean;
}

/*
 * 1. Replace header row border with a box-shadow that maintains position
 */
const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const borderColor = getColor({ variable: 'border.default', theme });
  const backgroundColor = getColor({ variable: 'background.default', theme });

  return css`
    background-color: ${backgroundColor};

    & > ${StyledHeaderRow}:last-child {
      border-bottom-color: transparent; /* [1] */

      & > ${StyledHeaderCell} {
        box-shadow: inset 0 -${theme.borderWidths.sm} 0 ${borderColor}; /* [1] */
      }
    }
  `;
};

/*
 * 1. Prevent <Checkbox> or <OverflowButton> from leaking over the sticky header
 */
const stickyStyles = () => {
  return css`
    position: sticky;
    top: 0;
    z-index: 1; /* [1] */
  `;
};

export const StyledHead = styled.thead.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeadProps>`
  ${props => props.$isSticky && stickyStyles()}

  ${colorStyles}

  ${componentStyles};
`;
