/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
interface IPaneContext {
    id?: string;
    isVisible?: boolean;
    setId: (id: string) => void;
}
export declare const PaneContext: import("react").Context<IPaneContext>;
/**
 * Retrieve Splitter component context
 */
declare const usePaneContext: () => IPaneContext;
export default usePaneContext;
