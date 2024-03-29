/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';

interface IBodyContext {
  hasFooter: boolean;
  setHasFooter: (footerPresent: boolean) => void;
}

export const BodyContext = React.createContext<IBodyContext | undefined>(undefined);

export const useBodyContext = () => {
  return useContext(BodyContext);
};
