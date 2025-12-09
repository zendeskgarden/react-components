/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { DefaultTheme, ThemeProps } from 'styled-components';
export interface IStyledDropzoneProps extends ThemeProps<DefaultTheme> {
    isActive?: boolean;
    isVertical?: boolean;
    isDanger?: boolean;
    isDisabled?: boolean;
    isHighlighted?: boolean;
    hasMessage?: boolean;
    hasIcon?: boolean;
}
/**
 * 1. Reset margin, e.g. when alternative tag includes native margin
 */
export declare const StyledDropzone: import("styled-components").StyledComponent<"div", DefaultTheme, {
    'data-garden-id': string;
    'data-garden-version': string;
} & IStyledDropzoneProps, "data-garden-id" | "data-garden-version">;
