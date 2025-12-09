/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
type INPUT_CONTEXT_VALUE = 'checkbox' | 'radio' | 'toggle' | undefined;
export declare const InputContext: import("react").Context<INPUT_CONTEXT_VALUE>;
/**
 * Retrieve input component context
 */
declare const useInputContext: () => INPUT_CONTEXT_VALUE;
export default useInputContext;
