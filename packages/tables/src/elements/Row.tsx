/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { StyledRow, IStyledRowProps } from '../styled';
import { useTableContext } from '../utils/useTableContext';

/**
 * Accepts all `<tr>` props
 */
export const Row = React.forwardRef<
  HTMLTableRowElement,
  Omit<IStyledRowProps, 'size'> & HTMLAttributes<HTMLTableRowElement>
>(({ onFocus, onBlur, isFocused: focused, ...otherProps }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const { size } = useTableContext();

  return (
    <StyledRow
      onFocus={composeEventHandlers(onFocus, () => {
        setIsFocused(true);
      })}
      onBlur={composeEventHandlers(onBlur, () => {
        setIsFocused(false);
      })}
      size={size}
      isFocused={typeof focused === 'undefined' ? isFocused : focused}
      ref={ref}
      {...otherProps}
    />
  );
});

Row.displayName = 'Row';

Row.propTypes = {
  isStriped: PropTypes.bool,
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool,
  isSelected: PropTypes.bool
};
