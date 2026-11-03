/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { WithTheme } from '../../types/views';

export const StyledSheetDescription = styled.div<WithTheme>`
  line-height: ${p => getLineHeight(p.theme.space.base * 4, p.theme.fontSizes.md)};
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};

  ${componentStyles};
`;
