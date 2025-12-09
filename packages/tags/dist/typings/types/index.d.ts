/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { HTMLAttributes } from 'react';
export declare const SIZE: readonly ["small", "medium", "large"];
export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
    /** Adjusts font size and padding */
    size?: (typeof SIZE)[number];
    /**
     * Sets the color of the tag. Refer to theming
     * [colors](/components/theme-object#colors) or
     * [PALETTE](/components/palette#palette) for available colors. Use [primary
     * hues](/design/color#primary-colors) – `blue`, `green`, `grey`, `kale`,
     * `red`, `yellow` or `primaryHue`, `successHue`, `neutralHue`, `chromeHue`,
     * `dangerHue`, `warningHue`  – to apply color based on light/dark mode.
     * Accepts any hex value.
     */
    hue?: string;
    /** Applies pill styling */
    isPill?: boolean;
    /** Applies styles to round the tag */
    isRound?: boolean;
    /** Applies regular (non-bold) font weight */
    isRegular?: boolean;
}
