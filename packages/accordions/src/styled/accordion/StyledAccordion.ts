/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledPanel } from './StyledPanel';
import { StyledSection } from './StyledSection';

const COMPONENT_ID = 'accordions.accordion';

export const StyledAccordion = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  & ${StyledSection}:last-child ${StyledPanel} {
    border: none;
  }
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAccordion.defaultProps = {
  theme: DEFAULT_THEME
};
