/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { em } from 'polished';
import { getColor, StyledBaseIcon } from '@zendeskgarden/react-theming';

export const StyledChevronIcon = styled(StyledBaseIcon)`
  transform: ${p => p.theme.rtl && `rotate(180deg);`};
  margin: 0 ${p => em(p.theme.space.base, p.theme.fontSizes.md)};
  color: ${p => getColor({ variable: 'foreground.subtle', theme: p.theme })};
`;
