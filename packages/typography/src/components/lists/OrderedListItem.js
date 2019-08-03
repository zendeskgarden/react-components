/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import useOrderedListContext from '../../utils/useOrderedListContext';
import { StyledOrderedListItem, StyledOrderedListItemContent } from '../../styled';

const OrderedListItem = ({ children, ...other }) => {
  const { size } = useOrderedListContext();

  return (
    <StyledOrderedListItem {...other}>
      <StyledOrderedListItemContent space={size}>{children}</StyledOrderedListItemContent>
    </StyledOrderedListItem>
  );
};

OrderedListItem.propTypes = {
  children: PropTypes.any
};

/** @component */
export default OrderedListItem;
