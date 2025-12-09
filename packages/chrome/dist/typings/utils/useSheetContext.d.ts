/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export interface ISheetContext {
    titleId?: string;
    descriptionId?: string;
    isCloseButtonPresent?: boolean;
    setIsCloseButtonPresent: (isPresent: boolean) => void;
}
export declare const SheetContext: import("react").Context<ISheetContext>;
export declare const useSheetContext: () => ISheetContext;
