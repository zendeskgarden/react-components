/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useState, useMemo } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { Field as Field$1 } from '@zendeskgarden/react-forms';
import useDropdownContext from '../../utils/useDropdownContext.js';
import { FieldContext } from '../../utils/useFieldContext.js';

const Field = forwardRef((props, fieldRef) => {
  const {
    downshift: {
      getRootProps
    }
  } = useDropdownContext();
  const [isLabelHovered, setIsLabelHovered] = useState(false);
  const {
    ref
  } = getRootProps();
  const value = useMemo(() => ({
    isLabelHovered,
    setIsLabelHovered
  }), [isLabelHovered, setIsLabelHovered]);
  return React__default.createElement(FieldContext.Provider, {
    value: value
  }, React__default.createElement(Field$1, Object.assign({
    ref: mergeRefs([ref, fieldRef])
  }, props)));
});
Field.displayName = 'Field';

export { Field };
