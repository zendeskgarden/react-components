/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export declare const ItemContext: import("react").Context<{
    isDisabled?: boolean;
} | undefined>;
declare const useItemContext: () => {
    isDisabled?: boolean;
};
export default useItemContext;
