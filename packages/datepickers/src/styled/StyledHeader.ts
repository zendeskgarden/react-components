/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.header';

export const StyledHeader = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<{ isCompact: boolean }>`
  display: flex;
  width: ${props =>
    props.isCompact ? props.theme.space.base * 56 : props.theme.space.base * 70}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
