/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const TimelineContext = createContext(undefined);
const useTimelineContext = () => {
  const context = useContext(TimelineContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a Timeline component');
  }
  return context;
};

export { TimelineContext, useTimelineContext };
