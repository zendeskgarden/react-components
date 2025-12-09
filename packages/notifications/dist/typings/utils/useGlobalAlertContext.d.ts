/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IGlobalAlertProps } from '../types';
export type GlobalAlertContextProps = Pick<IGlobalAlertProps, 'type'>;
export declare const GlobalAlertContext: import("react").Context<GlobalAlertContextProps>;
export declare const useGlobalAlertContext: () => GlobalAlertContextProps;
