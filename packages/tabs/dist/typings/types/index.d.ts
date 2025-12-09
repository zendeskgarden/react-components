/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { HTMLAttributes } from 'react';
export interface ITabProps extends HTMLAttributes<HTMLDivElement> {
    /** Indicates that the element is not interactive */
    disabled?: boolean;
    /** Defines a unique value to identify the tab. Provided to the `onChange` event in the [Tabs](#tabs) component. */
    item?: any;
}
export interface ITabPanelProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Defines a value used to match a tab panel with its associated tab
     */
    item?: any;
}
export interface ITabsProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Arranges the tabs vertically
     */
    isVertical?: boolean;
    /**
     * Specifies the currently selected tab
     */
    selectedItem?: any;
    /**
     * Handles tab selection
     *
     * @param {String} selectedItem The selected tab's `item` value
     */
    onChange?: (selectedItem: any) => void;
}
