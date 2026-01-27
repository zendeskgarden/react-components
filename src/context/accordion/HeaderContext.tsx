/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useMemo, type PropsWithChildren } from 'react';

import type { IAccordionHeaderContext } from '../../types/context';

export const HeaderContext = createContext<IAccordionHeaderContext | undefined>(undefined);

export const HeaderProvider = ({
  children,
  isHovered,
  ...other
}: PropsWithChildren<IAccordionHeaderContext>) => {
  const value = useMemo(
    () => ({
      isHovered,
      ...other
    }),
    [isHovered, other]
  );

  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
};
