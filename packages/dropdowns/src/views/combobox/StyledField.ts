/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'dropdowns.combobox.field';

/*
 * 1. Prevent grid or other container alignment from impacting Combobox label
 *    and value alignemnt.
 */
export const StyledField = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};
  text-align: start; /* [1] */

  ${componentStyles};
`;
