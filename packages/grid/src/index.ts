/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { Col } from './elements/Col';
export { Grid } from './elements/Grid';
export { Row } from './elements/Row';

export {
  ALIGN_ITEMS as ARRAY_ALIGN_ITEMS,
  ALIGN_SELF as ARRAY_ALIGN_SELF,
  DIRECTION as ARRAY_DIRECTION,
  JUSTIFY_CONTENT as ARRAY_JUSTIFY_CONTENT,
  TEXT_ALIGN as ARRAY_TEXT_ALIGN,
  SPACE as ARRAY_SPACE,
  WRAP as ARRAY_WRAP
} from './types';

export type {
  IColProps,
  IGridProps,
  IRowProps,
  /* @deprecated */
  AlignItems as ALIGN_ITEMS,
  AlignSelf as ALIGN_SELF,
  Direction as DIRECTION,
  JustifyContent as JUSTIFY_CONTENT,
  TextAlign as TEXT_ALIGN,
  GridNumber as GRID_NUMBER,
  Breakpoint as BREAKPOINT,
  Space as SPACE,
  Wrap as WRAP
} from './types';
