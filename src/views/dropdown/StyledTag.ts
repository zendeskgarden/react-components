/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { hideVisually } from 'polished';
import { styled } from 'styled-components';

import { getColor } from '../../theming/utils/getColor';
import { StyledTag as StyledTagView } from '../tag/StyledTag';

/*
 * Wraps the tag view directly, rather than the `Tag` element, so the
 * `data-garden-id` set on it reaches the DOM. The tag view provides the
 * sizing, coloring and `theme.components` rules.
 */
export const StyledTag = styled(StyledTagView)`
  &[aria-disabled='true'] {
    color: ${props =>
      props.$hue ? undefined : getColor({ theme: props.theme, variable: 'foreground.disabled' })};
  }

  &[hidden] {
    display: revert;
    ${hideVisually()}
  }
`;
