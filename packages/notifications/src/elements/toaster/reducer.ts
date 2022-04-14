/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Content, IToast, IToastOptions } from './useToast';

export interface IToasterState {
  toasts: IToast[];
}

export type ToasterReducerAction =
  | {
      type: 'ADD_TOAST';
      payload: IToast;
    }
  | { type: 'REMOVE_TOAST'; payload: string }
  | {
      type: 'UPDATE_TOAST';
      payload: { id: string; options: { content?: Content } & Partial<IToastOptions> };
    }
  | { type: 'REMOVE_ALL_TOASTS' };

export const getInitialState = (): IToasterState => {
  return {
    toasts: []
  };
};

export const toasterReducer = (
  state: IToasterState,
  action: ToasterReducerAction
): IToasterState => {
  switch (action.type) {
    case 'ADD_TOAST': {
      return {
        ...state,
        toasts: [...state.toasts, action.payload]
      };
    }
    case 'REMOVE_TOAST': {
      const filteredToasts = state.toasts.filter(toast => toast.id !== action.payload);

      return {
        ...state,
        toasts: filteredToasts
      };
    }
    case 'UPDATE_TOAST': {
      const updatedToasts = state.toasts.map(toast => {
        if (toast.id !== action.payload.id) {
          return toast;
        }

        const updatedToast = toast;
        const { content, ...newOptions } = action.payload.options;

        if (content) {
          updatedToast.content = content;
        }

        updatedToast.options = {
          ...updatedToast.options,
          ...newOptions
        };

        return updatedToast;
      });

      return {
        ...state,
        toasts: updatedToasts
      };
    }
    case 'REMOVE_ALL_TOASTS': {
      return {
        ...state,
        toasts: []
      };
    }
    /* istanbul ignore next */
    default:
      throw new Error('Invalid toaster reducer action');
  }
};
