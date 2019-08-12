/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import UnorderedListItem from './UnorderedListItem';
import { UnorderedListContext } from '../../utils/useUnorderedListContext';
import { StyledUnorderedList } from '../../styled';

const TYPE = {
  CIRCLE: 'circle',
  DISC: 'disc',
  SQUARE: 'square'
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

/**
 * Accepts all `ul` props
 */
const UnorderedList = React.forwardRef(({ size, children, ...other }, ref) => (
  <UnorderedListContext.Provider value={{ size }}>
    <StyledUnorderedList ref={ref} {...other}>
      {children}
    </StyledUnorderedList>
  </UnorderedListContext.Provider>
));

UnorderedList.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  type: PropTypes.oneOf([TYPE.CIRCLE, TYPE.DISC, TYPE.SQUARE])
};

UnorderedList.defaultProps = {
  size: SIZE.MEDIUM
};

UnorderedList.Item = UnorderedListItem;

/** @component */
export default UnorderedList;
