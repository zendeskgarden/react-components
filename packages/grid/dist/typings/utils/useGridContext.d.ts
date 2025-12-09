/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { GridNumber, Space } from '../types';
interface IGridContext {
    columns?: GridNumber;
    gutters?: Space;
    debug?: boolean;
}
export declare const GridContext: import("react").Context<IGridContext>;
/**
 * Retrieve Grid component context
 */
declare const useGridContext: () => IGridContext;
export default useGridContext;
