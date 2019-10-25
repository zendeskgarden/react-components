/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { boldedStyling } from './utils';

const COMPONENT_ID = 'datepickers.day_label';

const StyledDayLabel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<{ isSmall: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${boldedStyling};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDayLabel.defaultProps = {
  theme: DEFAULT_THEME
};

export default StyledDayLabel;
