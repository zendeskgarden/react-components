/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

import { BASE_MULTIPLIERS } from './StyledDrawerClose';
import { StyledHeader } from './StyledHeader';

const COMPONENT_ID = 'modals.drawer_modal.header';

/**
 * 1. the padding added to the Header is based on the close button size and spacing,
 *    with additional padding (+ 2) between the Header content and Close button
 */
export const StyledDrawerHeader = styled(StyledHeader).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  padding: ${props => props.theme.space.base * 5}px;
  ${props =>
    props.$isCloseButtonPresent &&
    `padding-${props.theme.rtl ? 'left' : 'right'}: ${
      props.theme.space.base * (BASE_MULTIPLIERS.size + BASE_MULTIPLIERS.side + 2)
    }px;`} /* [1] */

  ${componentStyles};
`;
