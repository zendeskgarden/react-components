/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext, MutableRefObject } from 'react';
import { IUseTabsReturnValue } from '@zendeskgarden/container-tabs';

interface ITabsContext extends IUseTabsReturnValue<any> {
  tabIndexRef: MutableRefObject<number>;
  tabPanelIndexRef: MutableRefObject<number>;
}

export const TabsContext = createContext<ITabsContext | undefined>(undefined);

export const useTabsContext = () => {
  return useContext(TabsContext);
};
