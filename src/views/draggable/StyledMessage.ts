/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import getLineHeight from '../../theming/utils/getLineHeight';

export const StyledMessage = styled.p`
  margin: 0;
  line-height: ${p => getLineHeight(p.theme.space.base * 5, p.theme.fontSizes.md)};
  color: inherit;
  font-size: ${p => p.theme.fontSizes.md};
  font-weight: ${p => p.theme.fontWeights.regular};

  ${componentStyles};
`;
