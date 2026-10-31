/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { InputGroup } from '@zendeskgarden/react-forms';

export interface IStyledJoinedGroupProps {
  /** Which side of the joined control this group sits on */
  $joinSide: 'start' | 'end';
  /** Joins this group to its sibling: squares the abutting corners and shares one border */
  $isEdgeToEdge?: boolean;
}

/*
 * Joins two unified `InputGroup`s into one visual control, overriding only the group's
 * public root node. `&&` doubles this component's generated class, so these rules beat
 * StyledInputGroup's single-class unified rules regardless of stylesheet injection order.
 * (StyledInputGroup is private to `forms`, so the `&&${StyledInputGroup}` pattern from the
 * old StyledClearableInput is not available here; `&&` alone is sufficient.)
 * Overrides `forms/src/styled/input-group/StyledInputGroup.ts` `unifiedItemStyles` —
 * keep in sync with it.
 */
export const StyledJoinedGroup = styled(InputGroup)<IStyledJoinedGroupProps>`
  ${props => {
    if (!props.$isEdgeToEdge) {
      return undefined;
    }

    const squaredCorners =
      props.$joinSide === 'start'
        ? css`
            border-start-end-radius: 0;
            border-end-end-radius: 0;
          `
        : css`
            border-start-start-radius: 0;
            border-end-start-radius: 0;
            /* overlaps the preceding group's border, so the two share one visible line */
            margin-inline-start: -${props.theme.borderWidths.sm};
          `;

    return css`
      && {
        ${squaredCorners}
        /* a hovered or focused joined border paints over the abutting sibling */
        &:hover {
          z-index: 1;
        }

        &:focus-within {
          z-index: 2;
        }
      }
    `;
  }}
`;
