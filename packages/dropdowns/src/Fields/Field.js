/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledField } from '../styled';
import useDropdownContext from '../utils/useDropdownContext';

export const FieldContext = createContext(undefined);

/**
 * Accepts all `<div>` props
 */
function Field(props) {
  const {
    downshift: { getRootProps }
  } = useDropdownContext();
  const [isLabelHovered, setIsLabelHovered] = useState(false);

  return (
    <FieldContext.Provider value={{ isLabelHovered, setIsLabelHovered }}>
      <StyledField {...getRootProps({ ...props })} />
    </FieldContext.Provider>
  );
}

Field.propTypes = {
  inline: PropTypes.bool
};

export default Field;
