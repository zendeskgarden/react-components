/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext, createContext } from 'react';
import { IDatepickerState, DatepickerAction } from './datepicker-reducer';

export interface IDatepickerContext {
  state: IDatepickerState;
  dispatch: React.Dispatch<DatepickerAction>;
}

export const DatepickerContext = createContext<IDatepickerContext | undefined>(undefined);

/**
 * Retrieve Dropdown component context
 */
const useDatepickerContext = () => {
  return useContext<IDatepickerContext>(DatepickerContext as any);
};

export default useDatepickerContext;
