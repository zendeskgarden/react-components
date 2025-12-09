/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ThemeProps, DefaultTheme } from 'styled-components';
export interface IStyledDropIndicatorProps extends ThemeProps<DefaultTheme> {
    isHorizontal?: boolean;
}
export declare const StyledDropIndicator: import("styled-components").StyledComponent<"li", DefaultTheme, {
    'data-garden-id': string;
    'data-garden-version': string;
} & IStyledDropIndicatorProps, "data-garden-id" | "data-garden-version">;
