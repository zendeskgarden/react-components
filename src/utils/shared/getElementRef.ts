/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { type ReactElement, type Ref, version } from 'react';

/*
 * React 19 moved the element `ref` to `element.props.ref` and warns in development when
 * `element.ref` is read. React 16 to 18 only expose `element.ref`, and warn when `props.ref`
 * is read. Choose by React version, not by whether a value exists.
 */
const IS_REACT_19 = parseInt(version, 10) >= 19;

/**
 * Read the `ref` of a React element without triggering a deprecation warning.
 *
 * @param element The element to read the `ref` from.
 *
 * @returns The element `ref`, or `undefined` if there is none.
 */
export const getElementRef = <T = unknown>(element: ReactElement): Ref<T> | undefined =>
  IS_REACT_19
    ? (element.props as { ref?: Ref<T> }).ref
    : (element as ReactElement & { ref?: Ref<T> }).ref;
