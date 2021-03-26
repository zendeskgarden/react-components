/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useDocument } from '@zendeskgarden/react-theming';
import { IToast, ToastPlacement } from './reducer';
import { Toast } from './Toast';
import { StyledFadeInTransition, StyledTransitionGroup, TRANSITION_CLASS } from './styled';

interface IToastSlotProps extends HTMLAttributes<HTMLDivElement> {
  toasts: IToast[];
  placement: ToastPlacement;
  limit: number;
  zIndex?: number;
}

export const ToastSlot: React.FC<IToastSlotProps> = ({
  toasts,
  placement,
  zIndex,
  limit,
  ...props
}) => {
  const [pauseTimers, setPauseTimers] = useState(false);
  const theme = useContext(ThemeContext);
  const environment = useDocument(theme);

  const handleVisibilityChange = useCallback((e: Event) => {
    if ((e.target as Document).visibilityState === 'visible') {
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

  const isHidden = useCallback(
    (index: number) => {
      if (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') {
        return index < toasts.length - limit;
      }

      return index >= limit;
    },
    [limit, placement, toasts.length]
  );

  return (
    <StyledTransitionGroup
      key={placement}
      $placement={placement}
      $zIndex={zIndex}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {toasts.map((toast, index) => {
        const transitionRef = React.createRef<HTMLDivElement>();

        return (
          <CSSTransition
            key={toast.id}
            timeout={{ enter: 400, exit: 550 }}
            unmountOnExit
            classNames={TRANSITION_CLASS}
            nodeRef={transitionRef}
          >
            <StyledFadeInTransition
              ref={transitionRef}
              placement={placement}
              isHidden={isHidden(index)}
            >
              <Toast toast={toast} pauseTimers={pauseTimers || isHidden(index)} />
            </StyledFadeInTransition>
          </CSSTransition>
        );
      })}
    </StyledTransitionGroup>
  );
};
