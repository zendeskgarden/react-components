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

const COMPONENT_ID = 'tables.sortable';

type SORT = 'asc' | 'desc';

export interface IStyledSortableButtonProps {
  sort?: SORT;
  isFocused?: boolean;
  isActive?: boolean;
  /** The width of the cell */
  width?: string | number;
}

/**
 * Accepts all `<button>` props
 */
export const StyledSortableButton = styled.button.attrs<IStyledSortableButtonProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'button',
  className: classNames(TableStyles['c-table__row__cell__sortable'], {
    // Sorting
    [TableStyles['is-ascending']]: props.sort === 'asc',
    [TableStyles['is-descending']]: props.sort === 'desc',

    // State
    [TableStyles['is-focused']]: props.isFocused,
    [TableStyles['is-active']]: props.isActive
  })
}))<IStyledSortableButtonProps>`
  width: ${({ width }) => width};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
