/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import OrderedListItem from './OrderedListItem';
import { listCSS } from './styles';

const COMPONENT_ID = 'typography.ordered_list';

const TYPE = {
  DECIMAL: 'decimal',
  DECIMAL_LEADING_ZERO: 'decimal-leading-zero',
  LOWER_ALPHA: 'lower-alpha',
  LOWER_ROMAN: 'lower-roman',
  UPPER_ALPHA: 'upper-alpha',
  UPPER_ROMAN: 'upper-roman'
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const StyledOrderedList = styled.ol.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => listCSS(props)};
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

export const OrderedListContext = createContext();

/**
 * Accepts all `ol` props
 */
const OrderedList = ({ size, children, ...other }) => (
  <OrderedListContext.Provider value={{ size }}>
    <StyledOrderedList {...other}>{children}</StyledOrderedList>
  </OrderedListContext.Provider>
);

OrderedList.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  type: PropTypes.oneOf([
    TYPE.DECIMAL,
    TYPE.DECIMAL_LEADING_ZERO,
    TYPE.LOWER_ALPHA,
    TYPE.UPPER_ALPHA,
    TYPE.LOWER_ROMAN,
    TYPE.UPPER_ROMAN
  ])
};

OrderedList.defaultProps = {
  size: SIZE.MEDIUM
};

OrderedList.Item = OrderedListItem;

/** @component */
export default OrderedList;
