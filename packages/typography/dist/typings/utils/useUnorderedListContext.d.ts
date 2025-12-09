/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { Size } from '../types';
interface IUnorderedListContext {
    size: Size;
}
export declare const UnorderedListContext: import("react").Context<IUnorderedListContext | undefined>;
/**
 * Retrieve UnorderedList component context
 */
declare const useUnorderedListContext: () => IUnorderedListContext;
export default useUnorderedListContext;
