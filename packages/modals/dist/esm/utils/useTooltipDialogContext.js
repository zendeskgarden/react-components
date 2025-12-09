/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const TooltipDialogContext = createContext(undefined);
const useTooltipDialogContext = () => {
  const context = useContext(TooltipDialogContext);
  if (context === undefined) {
    throw new Error('Element must be used within a TooltipDialog component.');
  }
  return context;
};

export { TooltipDialogContext, useTooltipDialogContext };
