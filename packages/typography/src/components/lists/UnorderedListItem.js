/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import useUnorderedListContext from '../../utils/useUnorderedListContext';
import { StyledUnorderedListItem, StyledUnorderedListItemContent } from '../../styled';

const UnorderedListItem = ({ children, ...other }) => {
  const { size } = useUnorderedListContext();

  return (
    <StyledUnorderedListItem {...other}>
      <StyledUnorderedListItemContent space={size}>{children}</StyledUnorderedListItemContent>
    </StyledUnorderedListItem>
  );
};

UnorderedListItem.propTypes = {
  children: PropTypes.any
};

/** @component */
export default UnorderedListItem;
