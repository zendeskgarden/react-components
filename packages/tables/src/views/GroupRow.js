/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import TableStyles from '@zendeskgarden/css-tables';
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.group_row';

const GroupRow = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'row',
  className: classNames(TableStyles['c-table__row'], TableStyles['c-table__row--group'])
})`
  && {
    display: flex;
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

export default GroupRow;
