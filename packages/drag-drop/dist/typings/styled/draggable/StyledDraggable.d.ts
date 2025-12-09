/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ThemeProps, DefaultTheme } from 'styled-components';
import { IGardenTheme } from '@zendeskgarden/react-theming';
export interface IStyledDraggableProps extends ThemeProps<DefaultTheme> {
    focusInset?: boolean;
    isBare?: boolean;
    isCompact?: boolean;
    isDisabled?: boolean;
    isGrabbed?: boolean;
    isPlaceholder?: boolean;
}
export declare function getDragShadow(theme: IGardenTheme): string;
export declare const StyledDraggable: import("styled-components").StyledComponent<"div", DefaultTheme, {
    'data-garden-id': string;
    'data-garden-version': string;
} & IStyledDraggableProps, "data-garden-id" | "data-garden-version">;
