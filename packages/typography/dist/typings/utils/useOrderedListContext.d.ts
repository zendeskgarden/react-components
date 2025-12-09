/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { Size } from '../types';
interface IOrderedListContext {
    size: Size;
}
export declare const OrderedListContext: import("react").Context<IOrderedListContext | undefined>;
/**
 * Retrieve OrderedList component context
 */
declare const useOrderedListContext: () => IOrderedListContext;
export default useOrderedListContext;
