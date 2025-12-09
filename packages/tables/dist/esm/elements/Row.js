/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import '../styled/StyledBody.js';
import '../styled/StyledCaption.js';
import '../styled/StyledHeaderRow.js';
import '../styled/StyledHead.js';
import '../styled/StyledCell.js';
import '../styled/StyledGroupRow.js';
import '../styled/StyledTable.js';
import '../styled/StyledHeaderCell.js';
import '../styled/StyledHiddenCell.js';
import '../styled/StyledSortableButton.js';
import '../styled/StyledOverflowButton.js';
import { StyledRow } from '../styled/StyledRow.js';
import { useTableContext } from '../utils/useTableContext.js';

const Row = forwardRef((_ref, ref) => {
  let {
    onFocus,
    onBlur,
    isSelected,
    isStriped,
    isHovered,
    isFocused: focused,
    ...otherProps
  } = _ref;
  const [isFocused, setIsFocused] = useState(false);
  const {
    size,
    isReadOnly
  } = useTableContext();
  const computedFocused = useMemo(() => {
    if (typeof focused !== 'undefined') {
      return focused;
    }
    if (isReadOnly) {
      return false;
    }
    return isFocused;
  }, [focused, isFocused, isReadOnly]);
  const onFocusCallback = useMemo(() => composeEventHandlers(onFocus, () => {
    setIsFocused(true);
  }), [onFocus, setIsFocused]);
  const onBlurCallback = useMemo(() => composeEventHandlers(onBlur, () => {
    setIsFocused(false);
  }), [onBlur, setIsFocused]);
  return React__default.createElement(StyledRow, Object.assign({
    onFocus: onFocusCallback,
    onBlur: onBlurCallback,
    ref: ref,
    $size: size,
    $isReadOnly: isReadOnly,
    $isFocused: computedFocused,
    $isHovered: isHovered,
    $isStriped: isStriped,
    $isSelected: isSelected
  }, otherProps, {
    tabIndex: isReadOnly ? undefined : -1
  }));
});
Row.displayName = 'Table.Row';
Row.propTypes = {
  isStriped: PropTypes.bool,
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool,
  isSelected: PropTypes.bool
};

export { Row };
