/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ThemeProps, DefaultTheme } from 'styled-components';
export interface IStyledDraggableListProps extends ThemeProps<DefaultTheme> {
    isHorizontal?: boolean;
}
/**
 * 1. <ul> reset.
 */
export declare const StyledDraggableList: import("styled-components").StyledComponent<"ul", DefaultTheme, {
    'data-garden-id': string;
    'data-garden-version': string;
} & IStyledDraggableListProps & ThemeProps<DefaultTheme>, "data-garden-id" | "data-garden-version">;
