/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { IRowProps } from '../types';
import { StyledRow } from '../styled';
import { useTableContext } from '../utils/useTableContext';

/**
 * @extends HTMLAttributes<HTMLTableRowElement>
 */

export const Row = forwardRef<HTMLTableRowElement, IRowProps>(
  ({ onFocus, onBlur, isFocused: focused, ...otherProps }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const { size, isReadOnly } = useTableContext();

    const computedFocused = useMemo(() => {
      if (typeof focused !== 'undefined') {
        return focused;
      }

      if (isReadOnly) {
        return false;
      }

      return isFocused;
    }, [focused, isFocused, isReadOnly]);
    const onFocusCallback = useMemo(
      () =>
        composeEventHandlers(onFocus, () => {
          setIsFocused(true);
        }),
      [onFocus, setIsFocused]
    );

    const onBlurCallback = useMemo(
      () =>
        composeEventHandlers(onBlur, () => {
          setIsFocused(false);
        }),
      [onBlur, setIsFocused]
    );

    return (
      <StyledRow
        onFocus={onFocusCallback}
        onBlur={onBlurCallback}
        size={size}
        isReadOnly={isReadOnly}
        isFocused={computedFocused}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

Row.displayName = 'Row';

Row.propTypes = {
  isStriped: PropTypes.bool,
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool,
  isSelected: PropTypes.bool
};
