/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isRtl, retrieveTheme } from '@zendeskgarden/react-theming';
import { StyledOrderedList } from './List';

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

const Item = ({ children, ...props }) => <StyledListItem>{children}</StyledListItem>;

/** @component */
export default Item;
