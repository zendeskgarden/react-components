/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { FC } from 'react';
/**
 * Provides default text for a11y (i.e. aria-label) or other critical attribute
 * strings. If necessary, a development mode console warning prompts the
 * consumer to provide customized, translated text.
 *
 * @param component The React component to which the `props` belong
 * @param props The component props to check for `name`
 * @param name The name of the component prop to set default text on
 * @param text The default text to apply if the value of `props[name]` is undefined
 * @param condition An optional condition that can be used to prevent evaluation
 */
export declare const useText: (component: Pick<FC, "displayName">, props: Record<string, any>, name: string, text: string, condition?: boolean) => string | undefined;
