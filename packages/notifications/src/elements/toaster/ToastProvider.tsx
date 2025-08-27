/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useReducer, useCallback, useMemo, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { IToastProviderProps, Placement } from '../../types';
import { toasterReducer, getInitialState } from './reducer';
import { ToastContext } from './ToastContext';
import { ToastSlot } from './ToastSlot';

export const ToastProvider = ({
  limit = 4,
  zIndex,
  placementProps = {},
  children
}: PropsWithChildren<IToastProviderProps>) => {
  const [state, dispatch] = useReducer(toasterReducer, getInitialState());

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const toastsByPlacement = useCallback(
    (placement: Placement) => {
      let matchingToasts = state.toasts.filter(toast => toast.options.placement === placement);

      if (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') {
        matchingToasts = matchingToasts.reverse();
      }

      return (
        <ToastSlot
          placement={placement}
          toasts={matchingToasts}
          zIndex={zIndex}
          limit={limit!}
          {...placementProps[placement]}
        />
      );
    },
    [limit, state.toasts, zIndex, placementProps]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {toastsByPlacement('top-start')}
      {toastsByPlacement('top')}
      {toastsByPlacement('top-end')}
      {children}
      {toastsByPlacement('bottom-start')}
      {toastsByPlacement('bottom')}
      {toastsByPlacement('bottom-end')}
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = 'ToastProvider';

ToastProvider.propTypes = {
  limit: PropTypes.number,
  zIndex: PropTypes.number,
  placementProps: PropTypes.object
};
