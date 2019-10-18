/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import useFieldContext from '../utils/useFieldContext';
import { RadioContext } from '../utils/useRadioContext';
import { StyledRadioInput } from '../styled';

/**
 * Accepts all `<input type="radio" />` props
 */
const Radio = React.forwardRef(({ children, ...props }, ref) => {
  const { getInputProps, ...fieldContext } = useFieldContext();

  return (
    <RadioContext.Provider value={fieldContext}>
      <StyledRadioInput
        {...getInputProps({
          ref,
          ...props
        })}
      />
      {children}
    </RadioContext.Provider>
  );
});

Radio.propTypes = {
  children: PropTypes.node
};

export default Radio;
