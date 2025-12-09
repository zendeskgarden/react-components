/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ITilesProps } from '../types';
export declare const TilesContext: import("react").Context<Pick<ITilesProps, "value" | "onChange" | "name" | "isCentered"> | undefined>;
export declare const useTilesContext: () => Pick<ITilesProps, "value" | "onChange" | "name" | "isCentered"> | undefined;
