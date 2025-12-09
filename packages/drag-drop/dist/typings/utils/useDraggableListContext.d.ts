/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
/// <reference types="react" />
export interface IDraggableListContext {
    isHorizontal?: boolean;
}
export declare const DraggableListContext: import("react").Context<IDraggableListContext | undefined>;
export declare const useDraggableListContext: () => IDraggableListContext;
