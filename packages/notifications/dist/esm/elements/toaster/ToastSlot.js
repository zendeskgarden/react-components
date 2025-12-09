/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useState, useContext, useCallback, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useDocument } from '@zendeskgarden/react-theming';
import { Toast } from './Toast.js';
import { StyledTransitionContainer, TRANSITION_CLASS, StyledFadeInTransition } from './styled.js';

const ToastSlot = _ref => {
  let {
    toasts,
    placement,
    zIndex,
    limit,
    ...props
  } = _ref;
  const [pauseTimers, setPauseTimers] = useState(false);
  const theme = useContext(ThemeContext);
  const environment = useDocument(theme);
  const handleVisibilityChange = useCallback(e => {
    if (e.target.visibilityState === 'visible') {
      setPauseTimers(false);
    } else {
      setPauseTimers(true);
    }
  }, []);
  useEffect(() => {
    if (environment) {
      environment.addEventListener('visibilitychange', handleVisibilityChange);
    }
    return () => {
      if (environment) {
        environment.removeEventListener('visibilitychange', handleVisibilityChange);
      }
    };
  }, [environment, handleVisibilityChange]);
  const handleMouseEnter = useCallback(() => {
    setPauseTimers(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setPauseTimers(false);
  }, []);
  const isHidden = useCallback(index => {
    if (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') {
      return index < toasts.length - limit;
    }
    return index >= limit;
  }, [limit, placement, toasts.length]);
  return React__default.createElement(StyledTransitionContainer, Object.assign({
    key: placement,
    $toastPlacement: placement,
    $toastZIndex: zIndex,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, props), React__default.createElement(TransitionGroup, null, toasts.map((toast, index) => {
    const transitionRef = React__default.createRef();
    return React__default.createElement(CSSTransition, {
      key: toast.id,
      timeout: {
        enter: 400,
        exit: 550
      },
      unmountOnExit: true,
      classNames: TRANSITION_CLASS,
      nodeRef: transitionRef
    }, React__default.createElement(StyledFadeInTransition, {
      ref: transitionRef,
      $placement: placement,
      $isHidden: isHidden(index)
    }, React__default.createElement(Toast, {
      toast: toast,
      pauseTimers: pauseTimers || isHidden(index)
    })));
  })));
};

export { ToastSlot };
