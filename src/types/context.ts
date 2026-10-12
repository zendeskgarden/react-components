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
import type { IAccordionProps, Size } from './elements';

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
