/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { boldedStyling } from './utils';

const COMPONENT_ID = 'datepickers.header_label';

const StyledHeaderLabel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<{ isSmall: boolean }>`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  ${boldedStyling};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderLabel.defaultProps = {
  theme: DEFAULT_THEME
};

export default StyledHeaderLabel;
