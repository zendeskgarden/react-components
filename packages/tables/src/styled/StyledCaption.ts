/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import TableStyles from '@zendeskgarden/css-tables';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.caption';

export const StyledCaption = styled.caption.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: TableStyles['c-table__caption']
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
