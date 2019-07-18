/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { listCSS } from './styles';
import UnorderedListItem from './UnorderedListItem';

const COMPONENT_ID = 'typography.unordered_list';

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

const StyledUnorderedList = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => listCSS(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

export const UnorderedListContext = createContext();

/**
 * Accepts all `ul` props
 */
const UnorderedList = ({ size, children, ...other }) => (
  <UnorderedListContext.Provider value={{ size }}>
    <StyledUnorderedList {...other}>{children}</StyledUnorderedList>
  </UnorderedListContext.Provider>
);

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
