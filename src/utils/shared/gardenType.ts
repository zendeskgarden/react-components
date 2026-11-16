/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ReactNode, isValidElement } from 'react';

/*
 * A global symbol is shared by every copy of this package in a bundle, so
 * a marker set by one copy is read by another.
 */
const GARDEN_TYPE = Symbol.for('zendeskgarden.type');

type Wrapper = {
  [GARDEN_TYPE]?: string;
  /* `styled()` */
  target?: unknown;
  /* `memo()` */
  type?: unknown;
  /* `forwardRef()` */
  render?: unknown;
};

/**
 * Marks a component with a Garden type id, so a parent can identify it among
 * its `children` before render.
 *
 * @param component The component to mark.
 * @param id The Garden type id (e.g. `tabs.tablist`).
 *
 * @returns The same component.
 */
export const withGardenType = <T extends object>(component: T, id: string): T =>
  Object.assign(component, { [GARDEN_TYPE]: id });

/**
 * Resolves the Garden type id of an element type, looking through `styled()`,
 * `memo()` and `forwardRef()` wrappers.
 *
 * @param type An element `type`.
 *
 * @returns The Garden type id, or `undefined` for an unmarked component.
 */
export const getGardenType = (type: unknown): string | undefined => {
  let current = type as Wrapper | null | undefined;
  /* A guard against a cyclic wrapper chain. */
  let depth = 0;

  while ((typeof current === 'function' || typeof current === 'object') && current) {
    if (current[GARDEN_TYPE]) {
      return current[GARDEN_TYPE];
    }

    current = (current.target ?? current.type ?? current.render) as Wrapper | undefined;

    if (++depth > 10) {
      break;
    }
  }

  return undefined;
};

/**
 * Determines whether a child is an element of the given Garden type.
 *
 * @param child A `children` node.
 * @param id The Garden type id.
 */
export const isGardenType = (child: ReactNode, id: string) =>
  isValidElement(child) && getGardenType(child.type) === id;
