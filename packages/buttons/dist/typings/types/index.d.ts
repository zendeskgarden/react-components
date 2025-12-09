/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { AnchorHTMLAttributes, ButtonHTMLAttributes, SVGAttributes } from 'react';
export declare const SIZE: readonly ["small", "medium", "large"];
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Applies danger styling */
    isDanger?: boolean;
    /** Specifies the button size */
    size?: (typeof SIZE)[number];
    /** Stretches the button fill to its container width */
    isStretched?: boolean;
    /** Applies neutral button styling */
    isNeutral?: boolean;
    /** Applies primary button styling */
    isPrimary?: boolean;
    /** Applies basic button styling */
    isBasic?: boolean;
    /** Applies link (anchor) button styling */
    isLink?: boolean;
    /** Applies pill button styling */
    isPill?: boolean;
    /** Applies inset `box-shadow` styling on focus */
    focusInset?: boolean;
}
export interface IToggleButtonProps extends IButtonProps {
    /**
     * Determines if the button is pressed. Use "mixed" to indicate that
     * the toggle controls other elements which do not share the same value.
     */
    isPressed?: boolean | 'mixed';
}
export interface IIconButtonProps extends Omit<IButtonProps, 'isStretched' | 'isLink'> {
    /** Rotates icon 180 degrees */
    isRotated?: boolean;
}
export interface IToggleIconButtonProps extends IIconButtonProps, Pick<IToggleButtonProps, 'isPressed'> {
}
export interface IButtonIconProps extends Pick<IIconButtonProps, 'isRotated'>, SVGAttributes<SVGElement> {
}
export interface IAnchorProps extends Pick<IButtonProps, 'isDanger'>, AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * Attaches `target="_blank"` and `rel="noopener noreferrer"` to an anchor that
     * navigates to an external resource. This ensures that the anchor is a
     * safe [cross-origin destination link](https://web.dev/external-anchors-use-rel-noopener/).
     **/
    isExternal?: boolean;
    /**
     * Allows a customized/translated text label to be passed to the external link icon,
     * making that icon accessible to assistive technology
     **/
    externalIconLabel?: string;
    /** Determines if the anchor has underline styling */
    isUnderlined?: boolean;
}
