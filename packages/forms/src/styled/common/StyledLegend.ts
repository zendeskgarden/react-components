/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledLabel } from './StyledLabel';

const COMPONENT_ID = 'forms.fieldset_legend';

interface IStyledLegend {
  isCompact?: boolean;
}

/**
 * 1. Reset for <legend>.
 */
export const StyledLegend = styled(StyledLabel as 'legend').attrs({
  as: 'legend',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledLegend>`
  padding: 0; /* [1] */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledLegend.defaultProps = {
  theme: DEFAULT_THEME
};
