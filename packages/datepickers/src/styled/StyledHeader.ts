/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import math from 'polished/lib/math/math';

import { retrieveSpacing } from './utils';

const COMPONENT_ID = 'datepickers.header';

const StyledHeader = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<{ isSmall: boolean }>`
  display: flex;
  width: ${props => math(`${retrieveSpacing(props)} * 7`)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};

export default StyledHeader;
