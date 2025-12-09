/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { ITabsProps } from '../types';
import { Tab } from './Tab';
import { TabList } from './TabList';
import { TabPanel } from './TabPanel';
export declare const TabsComponent: React.ForwardRefExoticComponent<ITabsProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Tabs: typeof TabsComponent & {
    Tab: typeof Tab;
    TabList: typeof TabList;
    TabPanel: typeof TabPanel;
};
