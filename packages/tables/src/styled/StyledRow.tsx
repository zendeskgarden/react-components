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

const COMPONENT_ID = 'tables.row';

export interface IStyledRowProps {
  /** Applies striped styling */
  isStriped?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  isSelected?: boolean;
}

export const StyledRow = styled.tr.attrs<IStyledRowProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  tabIndex: -1,
  className: classNames(TableStyles['c-table__row'], {
    [TableStyles['c-table__row--stripe']]: props.isStriped,

    [TableStyles['is-focused']]: props.isFocused,
    [TableStyles['is-hovered']]: props.isHovered,
    [TableStyles['is-selected']]: props.isSelected
  })
}))<IStyledRowProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
