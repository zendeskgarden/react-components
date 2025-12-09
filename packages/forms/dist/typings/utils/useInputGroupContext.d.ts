/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
interface IInputGroupContext {
    isCompact?: boolean;
}
export declare const InputGroupContext: import("react").Context<IInputGroupContext | undefined>;
/**
 * Retrieve InputGroup component context
 */
export declare const useInputGroupContext: () => IInputGroupContext | undefined;
export {};
