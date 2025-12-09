/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export interface IHeaderContext {
    isHovered: boolean;
    otherTriggerProps: any;
}
export declare const HeaderContext: import("react").Context<IHeaderContext | undefined>;
export declare const useHeaderContext: () => IHeaderContext;
