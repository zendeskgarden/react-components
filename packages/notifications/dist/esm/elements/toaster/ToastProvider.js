/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useReducer, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { toasterReducer, getInitialState } from './reducer.js';
import { ToastContext } from './ToastContext.js';
import { ToastSlot } from './ToastSlot.js';

const ToastProvider = ({
  limit = 4,
  zIndex,
  placementProps = {},
  children
}) => {
  const [state, dispatch] = useReducer(toasterReducer, getInitialState());
  const contextValue = useMemo(() => ({
    state,
    dispatch
  }), [state, dispatch]);
  const toastsByPlacement = useCallback(placement => {
    let matchingToasts = state.toasts.filter(toast => toast.options.placement === placement);
    if (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') {
      matchingToasts = matchingToasts.reverse();
    }
    return React__default.createElement(ToastSlot, Object.assign({
      placement: placement,
      toasts: matchingToasts,
      zIndex: zIndex,
      limit: limit
    }, placementProps[placement]));
  }, [limit, state.toasts, zIndex, placementProps]);
  return React__default.createElement(ToastContext.Provider, {
    value: contextValue
  }, toastsByPlacement('top-start'), toastsByPlacement('top'), toastsByPlacement('top-end'), children, toastsByPlacement('bottom-start'), toastsByPlacement('bottom'), toastsByPlacement('bottom-end'));
};
ToastProvider.displayName = 'ToastProvider';
ToastProvider.propTypes = {
  limit: PropTypes.number,
  zIndex: PropTypes.number,
  placementProps: PropTypes.object
};

export { ToastProvider };
