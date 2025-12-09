/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ReactNode } from 'react';
export interface ITimelineItemContext {
    icon?: ReactNode;
    surfaceColor?: string;
}
export declare const TimelineItemContext: import("react").Context<ITimelineItemContext | undefined>;
export declare const useTimelineItemContext: () => ITimelineItemContext;
