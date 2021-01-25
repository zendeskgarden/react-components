/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import {
  Table,
  Head,
  HeaderCell,
  HeaderRow,
  GroupRow,
  Caption,
  Body,
  Cell,
  SortableCell,
  OverflowButton,
  Row
} from '@zendeskgarden/react-tables';

export default {
  title: 'Components/Tables',
  subcomponents: {
    Table,
    Head,
    HeaderCell,
    HeaderRow,
    Caption,
    Body,
    Row,
    GroupRow,
    Cell,
    SortableCell,
    OverflowButton
  }
} as Meta;

export { Default } from './examples/Default';
export { Sortable } from './examples/Sortable';
export { Selectable } from './examples/Selectable';
export { Draggable } from './examples/Draggable';
export { Scrollable } from './examples/Scrollable';
export { Paginated } from './examples/Paginated';
export { OverflowMenu } from './examples/OverflowMenu';
export { VirtualScrolling } from './examples/VirtualScrolling';
