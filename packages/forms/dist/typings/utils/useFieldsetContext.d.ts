/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
interface IFieldsetContext {
    isCompact?: boolean;
}
export declare const FieldsetContext: import("react").Context<IFieldsetContext | undefined>;
/**
 * Retrieve Fieldset component context
 */
declare const useFieldsetContext: () => IFieldsetContext | undefined;
export default useFieldsetContext;
