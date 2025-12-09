/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export interface ISectionContext {
    sectionIndex: number;
}
export declare const SectionContext: import("react").Context<number | undefined>;
export declare const useSectionContext: () => number;
