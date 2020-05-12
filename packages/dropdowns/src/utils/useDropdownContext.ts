/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';
import { ControllerStateAndHelpers } from 'downshift';

export interface IDropdownContext {
  itemIndexRef: React.MutableRefObject<number>;
  previousItemRef: React.MutableRefObject<any>;
  previousIndexRef: React.MutableRefObject<any>;
  nextItemsHashRef: React.MutableRefObject<object>;
  popperReferenceElementRef: React.MutableRefObject<any>;
  selectedItems?: any[];
  downshift: ControllerStateAndHelpers<any>;
  containsMultiselectRef: React.MutableRefObject<boolean>;
  hasMenuRef: React.MutableRefObject<boolean>;
}

export const DropdownContext = React.createContext<IDropdownContext | undefined>(undefined);

/**
 * Retrieve Dropdown component context
 */
const useDropdownContext = () => {
  const dropdownContext = useContext<IDropdownContext | undefined>(DropdownContext);

  if (!dropdownContext) {
    throw new Error('This component must be rendered within a `Dropdown` component.');
  }

  return dropdownContext;
};

export default useDropdownContext;
