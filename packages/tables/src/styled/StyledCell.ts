/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import TableStyles from '@zendeskgarden/css-tables';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.cell';

export interface IStyledCellProps {
  /** Applies minimum size styling */
  isMinimum?: boolean;
  /** Applies truncated text styling */
  isTruncated?: boolean;
  /** Applies overflow styling */
  hasOverflow?: boolean;
  /** The width of the cell */
  width?: string | number;
}

export const StyledCell = styled.td.attrs<IStyledCellProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TableStyles['c-table__row__cell'], {
    [TableStyles['c-table__row__cell--min']]: props.isMinimum,
    [TableStyles['c-table__row__cell--truncate']]: props.isTruncated,
    [TableStyles['c-table__row__cell--overflow']]: props.hasOverflow
  })
}))<IStyledCellProps>`
  width: ${({ width }) => width};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
