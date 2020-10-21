/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext, useState, HTMLProps } from 'react';
import PropTypes from 'prop-types';
import { StyledField } from '../styled';
import useDropdownContext from '../utils/useDropdownContext';

export interface IFieldContext {
  isLabelHovered: boolean;
  setIsLabelHovered: (isHovered: boolean) => void;
}

export const FieldContext = createContext<IFieldContext | undefined>(undefined);

interface IFieldProps extends HTMLProps<HTMLDivElement> {
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

  /**
   * Only apply `rootRef` to allow correct screen-reader navigation in Safari
   */
  const { ref } = getRootProps();

  return (
    <FieldContext.Provider value={{ isLabelHovered, setIsLabelHovered }}>
      <StyledField ref={ref} {...(props as any)} />
    </FieldContext.Provider>
  );
};

Field.propTypes = {
  inline: PropTypes.bool
};

export default Field;
