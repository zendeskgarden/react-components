/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

import { StyledLabel } from './StyledLabel';

const COMPONENT_ID = 'forms.fieldset_legend';

/**
 * 1. Reset for <legend>.
 */
export const StyledLegend = styled(StyledLabel as 'legend').attrs({
  as: 'legend',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  padding: 0; /* [1] */

  ${componentStyles};
`;
