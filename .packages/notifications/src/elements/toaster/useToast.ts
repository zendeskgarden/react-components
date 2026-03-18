/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ReactElement, useCallback, useContext } from 'react';
import { uid } from 'react-uid';

import { Placement } from '../../types';
import { ToastContext } from './ToastContext';

export interface IToastOptions {
  /** Sets the toast ID, otherwise the ID is generated */
  id?: string;
  /** Determines whether to automatically dismiss the toast. Can be expressed in milliseconds. */
  autoDismiss: boolean | number;
  /** Adjusts the placement of the toast content */
  placement: Placement;
}

export type Content = ({ close }: { close: () => void }) => ReactElement;

export interface IToast {
  id: string;
  content: Content;
  options: IToastOptions;
}

const DEFAULT_TOAST_OPTIONS: IToastOptions = {
  autoDismiss: 5000,
  placement: 'top-end'
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('useToast() must be used within a "ToastProvider"');
  }

  const { dispatch, state } = context;

  const addToast = useCallback(
    (content: Content, options: Partial<IToastOptions> = {}) => {
      const mergedOptions = { ...DEFAULT_TOAST_OPTIONS, ...options };

      const newToast: IToast = {
        id: mergedOptions.id || uid(content),
        content,
        options: mergedOptions
      };

      dispatch({ type: 'ADD_TOAST', payload: newToast });

      return newToast.id;
    },
    [dispatch]
  );

  const removeToast = useCallback(
    (id: string) => {
      dispatch({ type: 'REMOVE_TOAST', payload: id });
    },
    [dispatch]
  );

  const updateToast = useCallback(
    (id: string, options: { content?: Content } & Partial<IToastOptions>) => {
      dispatch({ type: 'UPDATE_TOAST', payload: { id, options } });
    },
    [dispatch]
  );

  const removeAllToasts = useCallback(() => {
    dispatch({ type: 'REMOVE_ALL_TOASTS' });
  }, [dispatch]);

  return {
    addToast,
    removeToast,
    updateToast,
    removeAllToasts,
    toasts: state.toasts
  };
};
