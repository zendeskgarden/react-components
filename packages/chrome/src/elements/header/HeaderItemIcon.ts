/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children } from 'react';
import styled from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.header_item_icon';

/**
 * Applies styling directly to child component
 **/
export const HeaderItemIcon = styled(({ children, ...props }) =>
  React.cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transition: transform 0.25s ease-in-out;
  margin: 0 ${props => math(`${props.theme.borderRadii.md} - 1`)};
  width: ${props => props.theme.iconSizes.md};
  min-width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
