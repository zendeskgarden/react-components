/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { hideVisually } from 'polished';
import { styled } from 'styled-components';

import { Tag } from '../../elements/tag/Tag';
import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';

export const StyledTag = styled(Tag)`
  &[aria-disabled='true'] {
    color: ${props =>
      props.hue ? undefined : getColor({ theme: props.theme, variable: 'foreground.disabled' })};
  }

  &[hidden] {
    display: revert;
    ${hideVisually()}
  }

  ${componentStyles};
`;
