/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledField } from '../../styled';
import useDropdownContext from '../../utils/useDropdownContext';
import { FieldContext } from '../../utils/useFieldContext';

interface IFieldProps extends HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
}

/**
 * Accepts all `<div>` props
 */
const Field: React.FunctionComponent<IFieldProps> = props => {
  const {
    downshift: { getRootProps }
  } = useDropdownContext();
  const [isLabelHovered, setIsLabelHovered] = useState<boolean>(false);

  return (
    <FieldContext.Provider value={{ isLabelHovered, setIsLabelHovered }}>
      <StyledField {...getRootProps({ ...props, refKey: 'ref' })} />
    </FieldContext.Provider>
  );
};

Field.propTypes = {
  inline: PropTypes.bool
};

export default Field;
