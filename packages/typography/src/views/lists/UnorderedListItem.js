/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import useUnorderedListContext from './useUnorderedListContext';
import MD from '../MD';
import { listItemContentCSS } from './styles';

const COMPONENT_ID = 'typography.unordered_list_item';

const StyledUnorderedListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

const StyledUnorderedListItemContent = styled(MD)`
  ${props => listItemContentCSS(props)};
`;

const UnorderedListItem = ({ children, ...props }) => {
  const { size } = useUnorderedListContext();

  return (
    <StyledUnorderedListItem>
      <StyledUnorderedListItemContent size={size}>{children}</StyledUnorderedListItemContent>
    </StyledUnorderedListItem>
  );
};

UnorderedListItem.propTypes = {
  children: PropTypes.any
};

/** @component */
export default UnorderedListItem;
