/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.table';

export type SIZE = 'small' | 'medium' | 'large';

export interface IStyledTableProps {
  size?: SIZE;
}

/**
 * 1. <table> reset
 * 2. <th> reset
 */
export const StyledTable = styled.table.attrs<IStyledTableProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTableProps>`
  display: table;
  border: none; /* [1] */
  width: 100%; /* [1] */
  table-layout: fixed; /* [1] */
  border-collapse: collapse; /* [1] */
  border-spacing: 0; /* [1] */
  line-height: ${props => props.theme.space.base * 5}px;
  font-size: ${props => props.theme.fontSizes.md};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTable.defaultProps = {
  theme: DEFAULT_THEME
};
