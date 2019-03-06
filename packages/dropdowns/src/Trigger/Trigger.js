/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Reference } from 'react-popper';
import { StyledBareInput } from '../styled';
import useDropdownContext from '../utils/useDropdownContext';

const StyledWrapper = styled.div`
  display: inline-block;
`;

const Trigger = ({ children, ...props }) => {
  const {
    downshift: { getRootProps, getToggleButtonProps, getInputProps, isOpen }
  } = useDropdownContext();
  const hiddenInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      hiddenInputRef.current && hiddenInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Reference>
      {({ ref }) => (
        <StyledWrapper {...getRootProps({ refKey: 'innerRef', ...props })}>
          {children && children({ getTriggerProps: getToggleButtonProps, ref, isOpen })}
          <StyledBareInput
            {...getInputProps({
              readOnly: true,
              isHidden: true,
              tabIndex: -1,
              innerRef: hiddenInputRef,
              value: ''
            })}
          />
        </StyledWrapper>
      )}
    </Reference>
  );
};

Trigger.propTypes = {
  children: PropTypes.func
};

export default Trigger;
