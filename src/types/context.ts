/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IUseAccordionReturnValue } from '@zendeskgarden/container-accordion';
import type { HTMLProps } from 'react';

import type { IAccordionProps } from './elements';

export interface IAccordionContext<SectionValue>
  extends
    Omit<IUseAccordionReturnValue<SectionValue>, 'disabledSections'>,
    Pick<
      IAccordionProps<SectionValue>,
      'level' | 'isCompact' | 'isAnimated' | 'isBare' | 'isCollapsible'
    > {}

export interface IAccordionHeaderContext extends HTMLProps<Element> {
  isHovered: boolean;
}
