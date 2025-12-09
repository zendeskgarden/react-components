/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ReactNode } from 'react';
/**
 * Converts an array of `Tab` children to a valid `tabs` data structure for `useTabs`.
 *
 * @param children The `children` prop from `Tabs`.
 *
 * @returns A valid `IUseTabsProps['tabs']` data structure.
 */
export declare const toTabs: (children: ReactNode) => import("@zendeskgarden/container-tabs").ITab<any>[];
