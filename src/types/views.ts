/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { DefaultTheme } from 'styled-components';

import type { IGardenTheme } from '../theming/types';

//#region typography
interface IStyledFontProps extends IStyledBaseProps {
  $isBold?: boolean;
  $isMonospace?: boolean;
  $size?: (typeof FONT_SIZE)[number];
  $hue?: string;
}
//#endregion

export interface IStyledBaseProps<T extends DefaultTheme = IGardenTheme> {
  theme: T;
}

export interface IStyledAccordion extends IStyledBaseProps {
  $isAnimated?: boolean;
  $isBare?: boolean;
  $isCollapsible?: boolean;
  $isCompact?: boolean;
}
