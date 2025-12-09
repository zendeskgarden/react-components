/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useContext } from 'react';

const DropdownContext = React__default.createContext(undefined);
const useDropdownContext = () => {
  const dropdownContext = useContext(DropdownContext);
  if (!dropdownContext) {
    throw new Error('This component must be rendered within a `Dropdown` component.');
  }
  return dropdownContext;
};

export { DropdownContext, useDropdownContext as default };
