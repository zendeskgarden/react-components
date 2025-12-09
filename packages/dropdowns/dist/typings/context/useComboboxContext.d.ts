/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IUseComboboxReturnValue } from '@zendeskgarden/container-combobox';
export declare const ComboboxContext: import("react").Context<{
    activeValue: IUseComboboxReturnValue["activeValue"];
    getOptionProps: IUseComboboxReturnValue["getOptionProps"];
    getOptGroupProps: IUseComboboxReturnValue["getOptGroupProps"];
    getTagProps: IUseComboboxReturnValue["getTagProps"];
    isCompact?: boolean;
    removeSelection: IUseComboboxReturnValue["removeSelection"];
} | undefined>;
declare const useComboboxContext: () => {
    activeValue: IUseComboboxReturnValue["activeValue"];
    getOptionProps: IUseComboboxReturnValue["getOptionProps"];
    getOptGroupProps: IUseComboboxReturnValue["getOptGroupProps"];
    getTagProps: IUseComboboxReturnValue["getTagProps"];
    isCompact?: boolean;
    removeSelection: IUseComboboxReturnValue["removeSelection"];
};
export default useComboboxContext;
