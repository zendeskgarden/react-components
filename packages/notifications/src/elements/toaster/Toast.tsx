/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IToast } from './reducer';
import { useToast } from './useToast';

interface IToastProps {
  toast: IToast;
  pauseTimers: boolean;
}

export const Toast: React.FC<IToastProps> = ({ toast, pauseTimers }) => {
  const { removeToast } = useToast();
  const { id } = toast;
  const { autoDismiss } = toast.options;

  const [remainingTime, setRemainingTime] = useState(NaN);
  const startTimeRef = useRef(Date.now());
  const previousRemainingTimeRef = useRef(remainingTime);

  /**
   * Reset timer if `autoDimiss` option is updated
   */
  useEffect(() => {
    if (typeof autoDismiss === 'number') {
      setRemainingTime(autoDismiss);
    } else {
      setRemainingTime(NaN);
    }
  }, [autoDismiss]);

  /**
   * Store remaining time when `pauseTimers` is provided
   */
  useEffect(() => {
    if (pauseTimers && !isNaN(remainingTime)) {
      previousRemainingTimeRef.current = remainingTime - (Date.now() - startTimeRef.current);

      setRemainingTime(NaN);
    } else if (!pauseTimers && isNaN(remainingTime) && !isNaN(previousRemainingTimeRef.current)) {
      setRemainingTime(previousRemainingTimeRef.current);
    }
  }, [pauseTimers, remainingTime]);

  useEffect(() => {
    let timeout: any;

    if (!isNaN(remainingTime)) {
      startTimeRef.current = Date.now();

      timeout = setTimeout(() => {
        removeToast(id);
      }, remainingTime);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [id, pauseTimers, remainingTime, removeToast]);

  const close = useCallback(() => {
    removeToast(toast.id);
  }, [removeToast, toast.id]);

  return toast.content({ close });
};
