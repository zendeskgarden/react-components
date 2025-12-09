/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IUseFieldReturnValue } from '@zendeskgarden/container-field';
interface IFieldContext extends IUseFieldReturnValue {
    getMessageProps: (messageProps: any) => any;
    isLabelActive: boolean;
    isLabelHovered: boolean;
    setIsLabelHovered: (isLabelHovered: boolean) => void;
    setIsLabelActive: (isLabelActive: boolean) => void;
    setHasHint: (hintPresent: boolean) => void;
    hasHint: boolean;
    setHasMessage: (messagePresent: boolean) => void;
    hasMessage: boolean;
}
export declare const FieldContext: import("react").Context<IFieldContext | undefined>;
/**
 * Retrieve Field component context
 */
declare const useFieldContext: () => IFieldContext | undefined;
export default useFieldContext;
