/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { Alert } from './elements/Alert';
export { Notification } from './elements/Notification';
export { Well } from './elements/Well';
export { Close } from './elements/content/Close';
export { Paragraph } from './elements/content/Paragraph';
export { Title } from './elements/content/Title';
export { ToastProvider } from './elements/toaster/ToastProvider';
export { useToast } from './elements/toaster/useToast';
export { GlobalAlert } from './elements/global-alert/GlobalAlert';

export type {
  IAlertProps,
  INotificationProps,
  IWellProps,
  ITitleProps,
  IToastProviderProps,
  IGlobalAlertProps,
  IGlobalAlertButtonProps,
  IGlobalAlertTitleProps,
  /** @deprecated can be dereferenced via IToastOptions['placement'] */
  Placement as ToastPlacement
} from './types';

export type {
  IToastOptions,
  IToast,
  /** @deprecated can be dereferenced via IToast['content'] */
  Content as ToastContent
} from './elements/toaster/useToast';
