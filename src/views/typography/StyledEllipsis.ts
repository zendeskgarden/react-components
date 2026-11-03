/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';

export const StyledEllipsis = styled.div<WithTheme>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};

  ${componentStyles};
`;
