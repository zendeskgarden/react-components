/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isRtl, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import useOrderedListContext from './useOrderedListContext';
import MD from '../MD';
import { listItemContentCSS } from './styles';

const COMPONENT_ID = 'typography.ordered_list_item';

const StyledOrderedListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable */
  margin-${props => (isRtl(props) ? 'right' : 'left')}: -4px;
  padding-${props => (isRtl(props) ? 'right' : 'left')}: 4px;
  /* stylelint-enable */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

const StyledOrderedListItemContent = styled(MD)`
  ${props => listItemContentCSS(props)};
`;

const OrderedListItem = ({ children }) => {
  const { size } = useOrderedListContext();

  return (
    <StyledOrderedListItem>
      <StyledOrderedListItemContent size={size}>{children}</StyledOrderedListItemContent>
    </StyledOrderedListItem>
  );
};

OrderedListItem.propTypes = {
  children: PropTypes.any
};

/** @component */
export default OrderedListItem;
