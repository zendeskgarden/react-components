/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useMultiselectContext from '../utils/useMultiselectContext';

/**
 * TagItem component
 */
function TagItem({ children, value }) {
  const {
    firstTagRef,
    lastTagRef,
    selectionProps: { getItemProps }
  } = useMultiselectContext();
  const itemRef = useRef(null);

  if (!firstTagRef.current) {
    firstTagRef.current = value;
  }

  lastTagRef.current = value;

  return React.cloneElement(
    React.Children.only(children),
    getItemProps({
      item: value,
      innerRef: itemRef,
      focusRef: itemRef,
      onClick: e => {
        e.preventDefault();
        e.stopPropagation();
      }
    })
  );
}

TagItem.propTypes = {
  value: PropTypes.any.isRequired
};

export default TagItem;
