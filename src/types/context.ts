/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IUseAccordionReturnValue } from '@zendeskgarden/container-accordion';
import type { IUseTabsReturnValue } from '@zendeskgarden/container-tabs';
import type { Dispatch, HTMLProps, MutableRefObject } from 'react';

import type {
  DatePickerRangeAction,
  IDatePickerRangeState
} from '../elements/datepicker/date-picker-range-reducer';
import type {
  DatePickerAction,
  IDatePickerState
} from '../elements/datepicker/date-picker-reducer';
import type { DateFnsIndex } from '../utils/datepicker/calendar-utils';
import type {
  GridNumber,
  IAccordionProps,
  ISplitterProps,
  Orientation,
  Size,
  Space
} from './elements';

export interface IAccordionContext<SectionValue>
  extends
    Omit<IUseAccordionReturnValue<SectionValue>, 'disabledSections'>,
    Pick<
      IAccordionProps<SectionValue>,
      'level' | 'isCompact' | 'isAnimated' | 'isBare' | 'isCollapsible'
    > {}

export type AccordionHeaderContext = HTMLProps<Element>;

//#region datepicker
export interface IDatePickerContext {
  state: IDatePickerState;
  dispatch: Dispatch<DatePickerAction>;
}

export interface IDatePickerRangeContext {
  state: IDatePickerRangeState;
  dispatch: Dispatch<DatePickerRangeAction>;
  locale?: string;
  weekStartsOn?: DateFnsIndex;
  isCompact?: boolean;
  minValue?: Date;
  maxValue?: Date;
  startValue?: Date;
  endValue?: Date;
  onChange?: (values: { startValue?: Date; endValue?: Date }) => void;
  startInputRef: MutableRefObject<HTMLInputElement | undefined>;
  endInputRef: MutableRefObject<HTMLInputElement | undefined>;
  customParseDate?: (inputValue?: string) => Date;
}
//#endregion

//#region draggable
export interface IDraggableListContext {
  isHorizontal?: boolean;
}

export interface IDropzoneContext {
  isVertical?: boolean;
  isDanger?: boolean;
  hasIcon?: boolean;
  setHasIcon?: (hasIcon: boolean) => void;
  hasMessage?: boolean;
  setHasMessage?: (hasMessage: boolean) => void;
}
//#endregion

//#region grid
export interface IGridContext {
  columns?: GridNumber;
  gutters?: Space;
  debug?: boolean;
}

export interface IPaneContext {
  id?: string;
  isVisible?: boolean;
  setId: (id: string) => void;
}

export interface IPaneProviderContextData {
  rowState: Record<string, number>;
  columnState: Record<string, number>;
  setRowValue: (isTop: boolean, id: string, value: number) => void;
  setColumnValue: (isStart: boolean, id: string, value: number) => void;
  getColumnValue: (splitterKey: string, isPixels?: boolean) => number;
  getRowValue: (splitterKey: string, isPixels?: boolean) => number;
  totalPanesHeight: number;
  totalPanesWidth: number;
  pixelsPerFr: { rows: number; columns: number };
}

export interface IPaneProviderContext {
  providerId?: string;
  contextData?: Record<string, IPaneProviderContextData>;
}

export interface IPaneSplitterContext {
  orientation?: Orientation;
  min: ISplitterProps['min'];
  max: ISplitterProps['max'];
  layoutKey: ISplitterProps['layoutKey'];
  valueNow?: number;
  size?: number;
  isRow: boolean;
  providerId?: ISplitterProps['providerId'];
}
//#endregion

//#region tab
export interface ITabsContext extends IUseTabsReturnValue<any> {
  isVertical?: boolean;
}
//#endregion

//#region typography
export interface IOrderedListContext {
  size: Size;
}

export interface IUnorderedListContext {
  size: Size;
}
//#endregion
