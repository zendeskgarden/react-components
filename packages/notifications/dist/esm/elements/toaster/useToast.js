/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { useContext, useCallback } from 'react';
import { uid } from 'react-uid';
import { ToastContext } from './ToastContext.js';

const DEFAULT_TOAST_OPTIONS = {
  autoDismiss: 5000,
  placement: 'top-end'
};
const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast() must be used within a "ToastProvider"');
  }
  const {
    dispatch,
    state
  } = context;
  const addToast = useCallback(function (content) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const mergedOptions = {
      ...DEFAULT_TOAST_OPTIONS,
      ...options
    };
    const newToast = {
      id: mergedOptions.id || uid(content),
      content,
      options: mergedOptions
    };
    dispatch({
      type: 'ADD_TOAST',
      payload: newToast
    });
    return newToast.id;
  }, [dispatch]);
  const removeToast = useCallback(id => {
    dispatch({
      type: 'REMOVE_TOAST',
      payload: id
    });
  }, [dispatch]);
  const updateToast = useCallback((id, options) => {
    dispatch({
      type: 'UPDATE_TOAST',
      payload: {
        id,
        options
      }
    });
  }, [dispatch]);
  const removeAllToasts = useCallback(() => {
    dispatch({
      type: 'REMOVE_ALL_TOASTS'
    });
  }, [dispatch]);
  return {
    addToast,
    removeToast,
    updateToast,
    removeAllToasts,
    toasts: state.toasts
  };
};

export { useToast };
