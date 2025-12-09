/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
interface IPaneProviderContextData {
    rowState: Record<string, number>;
    columnState: Record<string, number>;
    setRowValue: (isTop: boolean, id: string, value: number) => void;
    setColumnValue: (isStart: boolean, id: string, value: number) => void;
    getColumnValue: (splitterKey: string, isPixels?: boolean) => number;
    getRowValue: (splitterKey: string, isPixels?: boolean) => number;
    totalPanesHeight: number;
    totalPanesWidth: number;
    pixelsPerFr: {
        rows: number;
        columns: number;
    };
}
interface IPaneProviderContext {
    providerId?: string;
    contextData?: Record<string, IPaneProviderContextData>;
}
export declare const PaneProviderContext: import("react").Context<IPaneProviderContext>;
export declare const usePaneProviderContextData: (providerId?: string) => IPaneProviderContextData | undefined;
declare const usePaneProviderContext: () => IPaneProviderContext;
export default usePaneProviderContext;
