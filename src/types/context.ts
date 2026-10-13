/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IUseAccordionReturnValue } from '@zendeskgarden/container-accordion';
import type { IUseTabsReturnValue } from '@zendeskgarden/container-tabs';
import type { HTMLProps } from 'react';

import type { IAccordionProps, Size } from './elements';

export interface IAccordionContext<SectionValue>
  extends
    Omit<IUseAccordionReturnValue<SectionValue>, 'disabledSections'>,
    Pick<
      IAccordionProps<SectionValue>,
      'level' | 'isCompact' | 'isAnimated' | 'isBare' | 'isCollapsible'
    > {}

export type AccordionHeaderContext = HTMLProps<Element>;

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
