/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { DefaultTheme, ThemeProps } from 'styled-components';
export interface IStyledItemProps extends ThemeProps<DefaultTheme> {
    isHorizontal?: boolean;
}
export declare const StyledItem: import("styled-components").StyledComponent<"li", DefaultTheme, {
    'data-garden-id': string;
    'data-garden-version': string;
} & IStyledItemProps, "data-garden-id" | "data-garden-version">;
