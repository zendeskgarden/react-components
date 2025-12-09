/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ISplitterProps, Orientation } from '../types';
interface IPaneSplitterContext {
    orientation?: Orientation;
    min: ISplitterProps['min'];
    max: ISplitterProps['max'];
    layoutKey: ISplitterProps['layoutKey'];
    valueNow?: number;
    size?: number;
    isRow: boolean;
    providerId?: ISplitterProps['providerId'];
}
export declare const PaneSplitterContext: import("react").Context<IPaneSplitterContext>;
/**
 * Retrieve Pane Splitter component context
 */
declare const usePaneSplitterContext: () => IPaneSplitterContext;
export default usePaneSplitterContext;
