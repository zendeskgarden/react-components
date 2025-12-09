/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { ControllerStateAndHelpers } from 'downshift';
export type DROPDOWN_TYPE = '' | 'autocomplete' | 'combobox' | 'multiselect';
export interface IDropdownContext {
    itemIndexRef: React.MutableRefObject<number>;
    previousItemRef: React.MutableRefObject<any>;
    previousIndexRef: React.MutableRefObject<any>;
    nextItemsHashRef: React.MutableRefObject<Record<string, unknown>>;
    popperReferenceElementRef: React.MutableRefObject<any>;
    selectedItems?: any[];
    downshift: ControllerStateAndHelpers<any>;
    containsMultiselectRef: React.MutableRefObject<boolean>;
    hasMenuRef: React.MutableRefObject<boolean>;
    itemSearchRegistry: React.MutableRefObject<string[]>;
    setDropdownType: React.Dispatch<React.SetStateAction<DROPDOWN_TYPE>>;
}
export declare const DropdownContext: React.Context<IDropdownContext | undefined>;
/**
 * Retrieve Dropdown component context
 */
declare const useDropdownContext: () => IDropdownContext;
export default useDropdownContext;
