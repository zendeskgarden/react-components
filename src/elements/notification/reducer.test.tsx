/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IToast } from '../../types/elements';
import { getInitialState, toasterReducer, ToasterReducerAction } from './reducer';

const toast: IToast = {
  id: 'one',
  content: () => <div>one</div>,
  options: { autoDismiss: false, placement: 'top-end' }
};

describe('toasterReducer', () => {
  it('throws given an invalid action', () => {
    expect(() =>
      toasterReducer(getInitialState(), { type: 'INVALID' } as unknown as ToasterReducerAction)
    ).toThrow('Invalid toaster reducer action');
  });

  it('adds, updates and removes toasts', () => {
    let state = toasterReducer(getInitialState(), { type: 'ADD_TOAST', payload: toast });

    expect(state.toasts).toHaveLength(1);

    state = toasterReducer(state, {
      type: 'UPDATE_TOAST',
      payload: { id: 'one', options: { placement: 'bottom' } }
    });
    expect(state.toasts[0]!.options.placement).toBe('bottom');

    state = toasterReducer(state, { type: 'REMOVE_TOAST', payload: 'one' });
    expect(state.toasts).toHaveLength(0);
  });
});
