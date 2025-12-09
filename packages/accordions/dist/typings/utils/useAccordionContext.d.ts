/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IUseAccordionReturnValue } from '@zendeskgarden/container-accordion';
import { IAccordionProps } from '../types';
export interface IAccordionContext<Value> extends Omit<IUseAccordionReturnValue<Value>, 'disabledSections'>, Pick<IAccordionProps<Value>, 'level' | 'isCompact' | 'isAnimated' | 'isBare' | 'isCollapsible'> {
}
export declare const AccordionContext: import("react").Context<IAccordionContext<any> | undefined>;
export declare const useAccordionContext: () => IAccordionContext<any>;
