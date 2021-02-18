/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useDocument } from '@zendeskgarden/react-theming';
import { IToast, ToastPlacement } from './reducer';
import { Toast } from './Toast';
import { StyledFadeInTransition, StyledTransitionGroup, TRANSITION_CLASS } from './styled';

interface IToastSlotProps {
  toasts: IToast[];
  placement: ToastPlacement;
  zIndex?: number;
}

export const ToastSlot: React.FC<IToastSlotProps> = ({ toasts, placement, zIndex }) => {
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

  return (
    <StyledTransitionGroup
      key={placement}
      placement={placement}
      zIndex={zIndex}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {toasts.map(toast => (
        <CSSTransition key={toast.id} timeout={400} classNames={TRANSITION_CLASS}>
          <StyledFadeInTransition placement={placement}>
            <Toast toast={toast} pauseTimers={pauseTimers} />
          </StyledFadeInTransition>
        </CSSTransition>
      ))}
    </StyledTransitionGroup>
  );
};
