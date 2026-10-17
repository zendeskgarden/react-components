/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { DefaultTheme } from 'styled-components';

import type { IGardenTheme, MenuPosition } from '../theming/types';
import type { IListboxProps, OptionType, Size } from './elements';

//#region breadcrumb
export interface IStyledBreadcrumbItemProps extends IStyledBaseProps {
  $isCurrent?: boolean;
}
//#endregion

//#region colorpicker
export interface IStyledRangeProps extends IStyledBaseProps {
  $isOpaque?: boolean;
  hasLowerTrack?: boolean;
}
//#endregion

//#region dropdown
export interface IStyledFloatingListboxProps extends IStyledBaseProps {
  $isHidden?: boolean;
  $position: MenuPosition;
  $zIndex?: IListboxProps['zIndex'];
}
export interface IStyledListboxProps extends IStyledBaseProps {
  $isCompact?: boolean;
  $maxHeight?: IListboxProps['maxHeight'];
  $minHeight?: IListboxProps['minHeight'];
}
export interface IStyledOptGroupProps extends IStyledBaseProps {
  $isCompact?: boolean;
}
export interface IStyledOptionProps extends IStyledBaseProps {
  $isActive?: boolean;
  $isCompact?: boolean;
  $type?: OptionType | 'header' | 'group';
}
export interface IStyledOptionIconProps extends IStyledBaseProps {
  $isDisabled?: boolean;
  $type?: OptionType;
}
export interface IStyledOptionMetaProps extends IStyledBaseProps {
  $isDisabled?: boolean;
}
export interface IStyledOptionSelectionIconProps extends IStyledBaseProps {
  $isCompact?: boolean;
}
export interface IStyledOptionTypeIconProps extends IStyledBaseProps {
  $isCompact?: boolean;
  $type?: OptionType | 'header';
}
//#endregion

//#region form
export interface IStyledClearableInputProps extends IStyledBaseProps {
  $isBare?: boolean;
}
export interface IStyledLabelProps extends IStyledBaseProps {
  $isRegular?: boolean;
  $isRadio?: boolean;
}
export interface IStyledRadioInputProps extends IStyledBaseProps {
  $isCompact?: boolean;
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

//#region notification
export interface IStyledTitleProps extends IStyledBaseProps {
  $isRegular?: boolean;
}
export interface IStyledWellProps extends IStyledBaseProps {
  $isRecessed?: boolean;
  $isFloating?: boolean;
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
