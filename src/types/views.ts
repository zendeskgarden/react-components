/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IGardenTheme } from '@zendeskgarden/react-theming';
import type { DefaultTheme } from 'styled-components';

export interface IStyledBaseProps<T extends DefaultTheme = IGardenTheme> {
  theme: T;
}

export interface IStyledAccordion extends IStyledBaseProps {
  $isAnimated?: boolean;
  $isBare?: boolean;
  $isCollapsible?: boolean;
  $isCompact?: boolean;
  $isExpanded?: boolean;
  $isHovered?: boolean;
  $isRotated?: boolean;
}
