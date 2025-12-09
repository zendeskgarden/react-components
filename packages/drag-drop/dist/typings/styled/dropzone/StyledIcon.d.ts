/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { DefaultTheme, ThemeProps } from 'styled-components';
interface IStyledIconProps extends ThemeProps<DefaultTheme> {
    isVertical?: boolean;
    hasMessage?: boolean;
}
/**
 * 1. Corrects the vertical text alignment of the icon within a dropzone message.
 */
export declare const StyledIcon: import("styled-components").StyledComponent<"div", DefaultTheme, {
    'data-garden-id': string;
    'data-garden-version': string;
} & IStyledIconProps, "data-garden-id" | "data-garden-version">;
export {};
