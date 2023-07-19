/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { Col } from './elements/Col';
export { Grid } from './elements/Grid';
export { Row } from './elements/Row';

export { PaneProvider } from './elements/pane/PaneProvider';
export { Pane } from './elements/pane/Pane';

export {
  ALIGN_ITEMS as ARRAY_ALIGN_ITEMS,
  ALIGN_SELF as ARRAY_ALIGN_SELF,
  DIRECTION as ARRAY_DIRECTION,
  JUSTIFY_CONTENT as ARRAY_JUSTIFY_CONTENT,
  TEXT_ALIGN as ARRAY_TEXT_ALIGN,
  SPACE as ARRAY_SPACE,
  WRAP as ARRAY_WRAP,
  type IPaneProviderProps,
  type ISplitterProps,
  type ISplitterButtonProps,
  type IColProps,
  type IGridProps,
  type IRowProps,
  /* @deprecated these types can be dereferenced on the exported interfaces */
  type AlignItems as ALIGN_ITEMS,
  type AlignSelf as ALIGN_SELF,
  type Direction as DIRECTION,
  type JustifyContent as JUSTIFY_CONTENT,
  type TextAlign as TEXT_ALIGN,
  type GridNumber as GRID_NUMBER,
  type Breakpoint as BREAKPOINT,
  type Space as SPACE,
  type Wrap as WRAP
} from './types';
