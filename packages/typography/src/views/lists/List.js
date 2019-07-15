/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { isRtl, retrieveTheme } from '@zendeskgarden/react-theming';
import Item from './Item';

const COMPONENT_ID = 'typography.list';

const TYPE_ORDERED = {
  DECIMAL: 'decimal',
  DECIMAL_LEADING_ZERO: 'decimal-leading-zero',
  LOWER_ALPHA: 'lower-alpha',
  LOWER_ROMAN: 'lower-roman',
  UPPER_ALPHA: 'upper-alpha',
  UPPER_ROMAN: 'upper-roman'
};

const TYPE_UNORDERED = {
  CIRCLE: 'circle',
  DISC: 'disc',
  SQUARE: 'square'
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const listAttributes = {
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
};

const listCSS = css`
  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};
  margin: 0;
  /* stylelint-disable-next-line property-no-unknown */
  margin-${props => (isRtl(props) ? 'right' : 'left')}: 24px;
  padding: 0;
  list-style-position: outside;

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

export const StyledOrderedList = styled.ol.attrs(listAttributes)`
  list-style-type: ${props => props.type};
  ${listCSS};
`;

export const StyledUnorderedList = styled.ul.attrs(listAttributes)`
  list-style-type: ${props => props.type};
  ${listCSS};
`;

export const ListContext = createContext();

/**
 * Accepts all `ul`/`ol` props
 */
const List = ({ ordered, size, type, children, ...other }) => {
  const isValidType = Object.values(ordered ? TYPE_ORDERED : TYPE_UNORDERED).indexOf(type) !== -1;

  return (
    <ListContext.Provider value={{ size }}>
      {ordered ? (
        <StyledOrderedList type={isValidType ? type : null} {...other}>
          {children}
        </StyledOrderedList>
      ) : (
        <StyledUnorderedList type={isValidType ? type : null} {...other}>
          {children}
        </StyledUnorderedList>
      )}
    </ListContext.Provider>
  );
};

List.propTypes = {
  children: PropTypes.node,
  ordered: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  type: PropTypes.oneOf([
    TYPE_UNORDERED.CIRCLE,
    TYPE_UNORDERED.DISC,
    TYPE_UNORDERED.SQUARE,
    TYPE_ORDERED.DECIMAL,
    TYPE_ORDERED.DECIMAL_LEADING_ZERO,
    TYPE_ORDERED.LOWER_ALPHA,
    TYPE_ORDERED.UPPER_ALPHA,
    TYPE_ORDERED.LOWER_ROMAN,
    TYPE_ORDERED.UPPER_ROMAN
  ])
};

List.defaultProps = {
  size: SIZE.MEDIUM
};

List.Item = Item;

/** @component */
export default List;
