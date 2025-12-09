/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { DefaultTheme } from 'styled-components';
declare const TYPOGRAPHY_SIZE: readonly ["small", "medium", "large", "extralarge", "2xlarge", "3xlarge"];
declare const FONT_SIZE: readonly ["inherit", "small", "medium", "large", "extralarge", "2xlarge", "3xlarge"];
type TypographySize = (typeof TYPOGRAPHY_SIZE)[number];
type ThemeSize = keyof DefaultTheme['lineHeights'];
export declare const THEME_SIZES: Record<TypographySize, ThemeSize>;
export interface IStyledFontProps {
    $isBold?: boolean;
    $isMonospace?: boolean;
    $size?: (typeof FONT_SIZE)[number];
    $hue?: string;
}
export declare const StyledFont: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, IStyledFontProps>, IStyledFontProps>> & string;
export {};
