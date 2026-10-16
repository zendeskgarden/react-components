/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { useState, useMemo, forwardRef } from 'react';

import { useTableContext } from '../../hooks/table/useTableContext';
import { ITableRowProps } from '../../types/elements';
import { StyledRow } from '../../views/table/StyledRow';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Table.Row` instead
 *
 * @extends HTMLAttributes<HTMLTableRowElement>
 */

export const Row = forwardRef<HTMLTableRowElement, ITableRowProps>(
  (
    { onFocus, onBlur, isSelected, isStriped, isHovered, isFocused: focused, ...otherProps },
    ref
  ) => {
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
        ref={ref}
        $size={size}
        $isReadOnly={isReadOnly}
        $isFocused={computedFocused}
        $isHovered={isHovered}
        $isStriped={isStriped}
        $isSelected={isSelected}
        {...otherProps}
        data-garden-id={COMPONENT_IDS['tables.row']}
        data-garden-version={PACKAGE_VERSION}
        tabIndex={isReadOnly ? undefined : -1}
      />
    );
  }
);

Row.displayName = 'Table.Row';

Row.propTypes = {
  isStriped: PropTypes.bool,
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool,
  isSelected: PropTypes.bool
};
