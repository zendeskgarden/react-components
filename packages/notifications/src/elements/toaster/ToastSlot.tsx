/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDocument } from '@zendeskgarden/react-theming';
import { Placement } from '../../types';
import { Toast } from './Toast';
import { StyledFadeInTransition, StyledTransitionContainer, TRANSITION_CLASS } from './styled';
import { IToast } from './useToast';

interface IToastSlotProps extends HTMLAttributes<HTMLDivElement> {
  toasts: IToast[];
  placement: Placement;
  limit: number;
  zIndex?: number;
}

export const ToastSlot = ({ toasts, placement, zIndex, limit, ...props }: IToastSlotProps) => {
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
    <StyledTransitionContainer
      key={placement}
      toastPlacement={placement}
      toastZIndex={zIndex}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <TransitionGroup>
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
      </TransitionGroup>
    </StyledTransitionContainer>
  );
};
