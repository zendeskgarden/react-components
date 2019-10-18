/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import useFieldContext from '../utils/useFieldContext';
import { ToggleContext } from '../utils/useToggleContext';
import { StyledToggleInput } from '../styled';

/**
 * Accepts all `<input type="checkbox" />` props
 */
const Toggle = React.forwardRef(({ children, ...props }, ref) => {
  const { getInputProps, ...fieldContext } = useFieldContext();

  return (
    <ToggleContext.Provider value={fieldContext}>
      <StyledToggleInput
        {...getInputProps({
          ref,
          ...props
        })}
      />
      {children}
    </ToggleContext.Provider>
  );
});

Toggle.propTypes = {
  children: PropTypes.node
};

export default Toggle;
