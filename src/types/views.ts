/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IGardenTheme, MenuPosition } from '../theming/types';
import type { IListboxProps, OptionType, Size } from './elements';

//#region breadcrumb
export interface IStyledBreadcrumbItemProps {
  $isCurrent?: boolean;
}
//#endregion

//#region colorpicker
export interface IStyledRangeProps {
  $isOpaque?: boolean;
  hasLowerTrack?: boolean;
}
//#endregion

//#region dropdown
export interface IStyledFloatingListboxProps {
  $isHidden?: boolean;
  $position: MenuPosition;
  $zIndex?: IListboxProps['zIndex'];
}
export interface IStyledListboxProps {
  $isCompact?: boolean;
  $maxHeight?: IListboxProps['maxHeight'];
  $minHeight?: IListboxProps['minHeight'];
}
export interface IStyledOptGroupProps {
  $isCompact?: boolean;
}
export interface IStyledOptionProps {
  $isActive?: boolean;
  $isCompact?: boolean;
  $type?: OptionType | 'header' | 'group';
}
export interface IStyledOptionIconProps {
  $isDisabled?: boolean;
  $type?: OptionType;
}
export interface IStyledOptionMetaProps {
  $isDisabled?: boolean;
}
export interface IStyledOptionSelectionIconProps {
  $isCompact?: boolean;
}
export interface IStyledOptionTypeIconProps {
  $isCompact?: boolean;
  $type?: OptionType | 'header';
}
//#endregion

//#region form
export interface IStyledClearableInputProps {
  $isBare?: boolean;
}
export interface IStyledLabelProps {
  $isRegular?: boolean;
  $isRadio?: boolean;
}
export interface IStyledRadioInputProps {
  $isCompact?: boolean;
}
//#endregion

//#region modal
export interface IStyledBackdropProps {
  $isCentered?: boolean;
  $isAnimated?: boolean;
}
export interface IStyledHeaderProps {
  $isDanger?: boolean;
  $isCloseButtonPresent?: boolean;
}
export interface IStyledModalProps {
  $isLarge?: boolean;
  $isCentered?: boolean;
  $isAnimated?: boolean;
}
//#endregion

//#region notification
export interface IStyledTitleProps {
  $isRegular?: boolean;
}
export interface IStyledWellProps {
  $isRecessed?: boolean;
  $isFloating?: boolean;
}
//#endregion

//#region pagination
export interface IStyledIcon {
  $type: 'first' | 'next' | 'previous' | 'last';
}
//#endregion

//#region sheet
export interface IStyledSheetFooterProps {
  /** Sets the SheetFooter padding to half the standard and centers the elements  */
  $isCompact?: boolean;
}
export interface IStyledSheetHeaderProps {
  $isCloseButtonPresent?: boolean;
}
//#endregion

//#region table
export interface IStyledBaseRowProps {
  $isStriped?: boolean;
}
//#endregion

//#region typography
export interface IStyledFontProps {
  $isBold?: boolean;
  $isMonospace?: boolean;
  $size?: 'inherit' | Size | 'extralarge' | '2xlarge' | '3xlarge';
  $hue?: string;
}
//#endregion

export type WithTheme<P extends object = object> = P & { theme: IGardenTheme };
