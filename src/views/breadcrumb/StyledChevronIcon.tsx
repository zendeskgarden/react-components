/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { em } from 'polished';
import { styled } from 'styled-components';

import { getColor } from '../../theming/utils/getColor';
import { getIconRenderSize } from '../../theming/utils/getIconRenderSize';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import type { WithTheme } from '../../types/views';

export const StyledChevronIcon = styled(StyledBaseIcon)<WithTheme>`
  transform: ${p => p.theme.rtl && `rotate(180deg);`};
  margin: 0 ${p => em(p.theme.space.base, p.theme.fontSizes.md)};
  width: ${p => getIconRenderSize(p.theme, true)};
  height: ${p => getIconRenderSize(p.theme, true)};
  color: ${p => getColor({ variable: 'foreground.subtle', theme: p.theme })};
`;
