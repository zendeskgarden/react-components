/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useMemo, type PropsWithChildren } from 'react';

import type { AccordionHeaderContext } from '../../types/context';

export const HeaderContext = createContext<AccordionHeaderContext | undefined>(undefined);

export const HeaderProvider = ({
  children,
  ...other
}: PropsWithChildren<AccordionHeaderContext>) => {
  const value = useMemo(() => other, [other]);

  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
};
