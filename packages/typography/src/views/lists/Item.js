/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isRtl, retrieveTheme } from '@zendeskgarden/react-theming';
import { ListContext, StyledOrderedList } from './List';
import { StyledMD } from '../MD';

const COMPONENT_ID = 'typography.list_item';

const StyledListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable */
  ${StyledOrderedList} > & {
    margin-${props => (isRtl(props) ? 'right' : 'left')}: -4px;
    padding-${props => (isRtl(props) ? 'right' : 'left')}: 4px;
  }
  /* stylelint-enable */

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

const StyledListItemContent = styled(StyledMD)`
  /* stylelint-disable-next-line declaration-colon-newline-after */
  padding: ${props => {
    switch (props.size) {
      case 'small':
        return '0';
      case 'large':
        return '4px 0';
      case 'medium':
      default:
        return '2px 0';
    }
  }};
`;

const Item = ({ children, ...props }) => {
  const size = useContext(ListContext);

  return (
    <StyledListItem>
      <StyledListItemContent size={size}>{children}</StyledListItemContent>
    </StyledListItem>
  );
};

Item.propTypes = {
  children: PropTypes.any
};

/** @component */
export default Item;
