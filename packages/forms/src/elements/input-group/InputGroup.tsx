/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement, useMemo } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@zendeskgarden/react-buttons';
import { IInputGroupProps } from '../../types';
import useFieldContext from '../../utils/useFieldContext';
import { InputGroupContext } from '../../utils/useInputGroupContext';
import { StyledInputGroup } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const InputGroup = React.forwardRef<HTMLDivElement, IInputGroupProps>(
  ({ isCompact, isSeamless, focusInset, children, ...other }, ref) => {
    const fieldContext = useFieldContext();
    const contextValue = useMemo(() => ({ isCompact, isSeamless }), [isCompact, isSeamless]);
    const labelId = fieldContext?.hasLabel ? fieldContext.getLabelProps({}).id : undefined;

    const mappedChildren = Children.map(children, child => {
      if (!isValidElement(child) || child.type !== IconButton) {
        return child;
      }

      const props = child.props as { focusInset?: boolean; size?: string };

      /*
       * neither is left to the consumer to override when isSeamless - the container's vertical
       * padding and edge-padding compensation are computed assuming an IconButton renders at
       * "small" with an inset ring, so any other size or an outward ring would break those
       * calculations
       */
      return cloneElement(child, {
        focusInset: isSeamless ? true : props.focusInset,
        size: isSeamless ? 'small' : props.size
      });
    });

    return (
      <InputGroupContext.Provider value={contextValue}>
        {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
        <StyledInputGroup
          aria-labelledby={labelId}
          ref={ref}
          $isCompact={isCompact}
          $isSeamless={isSeamless}
          $focusInset={focusInset}
          {...other}
          role="group"
        >
          {mappedChildren}
        </StyledInputGroup>
      </InputGroupContext.Provider>
    );
  }
);

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
  isCompact: PropTypes.bool,
  isSeamless: PropTypes.bool,
  focusInset: PropTypes.bool
};
