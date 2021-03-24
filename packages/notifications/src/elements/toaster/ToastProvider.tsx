/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  createContext,
  useReducer,
  Dispatch,
  useCallback,
  useMemo,
  HTMLAttributes
} from 'react';
import PropTypes from 'prop-types';

import {
  toasterReducer,
  getInitialState,
  IToasterState,
  ToasterReducerAction,
  ToastPlacement
} from './reducer';
import { ToastSlot } from './ToastSlot';

export const ToastContext = createContext<
  { state: IToasterState; dispatch: Dispatch<ToasterReducerAction> } | undefined
>(undefined);

export interface IToastProviderProps {
  /**
   * Limits the number of visible toasts
   */
  limit?: number;
  /**
   * Sets the `z-index` of the toast
   */
  zIndex?: number;
  /**
   * Passes placement-based customization props to the toast's parent element
   */
  placementProps?: Partial<Record<ToastPlacement, HTMLAttributes<HTMLDivElement>>>;
}

export const ToastProvider: React.FC<IToastProviderProps> = ({
  limit,
  zIndex,
  placementProps = {},
  children
}) => {
  const [state, dispatch] = useReducer(toasterReducer, getInitialState());

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const toastsByPlacement = useCallback(
    (placement: ToastPlacement) => {
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

ToastProvider.defaultProps = {
  limit: 4
};

ToastProvider.propTypes = {
  limit: PropTypes.number,
  zIndex: PropTypes.number
};
