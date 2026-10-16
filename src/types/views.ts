/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { DefaultTheme } from 'styled-components';

import type { IGardenTheme } from '../theming/types';
import type { Size } from './elements';

//#region breadcrumb
export interface IStyledBreadcrumbItemProps extends IStyledBaseProps {
  $isCurrent?: boolean;
}
//#endregion

//#region modal
export interface IStyledBackdropProps extends IStyledBaseProps {
  $isCentered?: boolean;
  $isAnimated?: boolean;
}
export interface IStyledHeaderProps extends IStyledBaseProps {
  $isDanger?: boolean;
  $isCloseButtonPresent?: boolean;
}
export interface IStyledModalProps extends IStyledBaseProps {
  $isLarge?: boolean;
  $isCentered?: boolean;
  $isAnimated?: boolean;
}
//#endregion

//#region pagination
export interface IStyledIcon extends IStyledBaseProps {
  $type: 'first' | 'next' | 'previous' | 'last';
}
//#endregion

//#region sheet
export interface IStyledSheetFooterProps extends IStyledBaseProps {
  /** Sets the SheetFooter padding to half the standard and centers the elements  */
  $isCompact?: boolean;
}
export interface IStyledSheetHeaderProps extends IStyledBaseProps {
  $isCloseButtonPresent?: boolean;
}
//#endregion

//#region table
export interface IStyledBaseRowProps extends IStyledBaseProps {
  $isStriped?: boolean;
}
//#endregion

//#region typography
export interface IStyledFontProps extends IStyledBaseProps {
  $isBold?: boolean;
  $isMonospace?: boolean;
  $size?: 'inherit' | Size | 'extralarge' | '2xlarge' | '3xlarge';
  $hue?: string;
}
//#endregion

export interface IStyledBaseProps<T extends DefaultTheme = IGardenTheme> {
  theme: T;
}
