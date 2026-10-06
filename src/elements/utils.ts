/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { version } from 'react';

const componentIds = [
  'accordions.accordion',
  'accordions.button',
  'accordions.header',
  'accordions.panel',
  'accordions.rotate_icon',
  'accordions.section',
  'accordions.step_inner_panel'
] as const;

type ComponentId = (typeof componentIds)[number];

/**
 * Registry of every `data-garden-id` rendered by the package, keyed by id so
 * that a typo or a missing id fails `tsc`.
 */
export const COMPONENT_IDS = Object.fromEntries(componentIds.map(id => [id, id])) as Record<
  ComponentId,
  ComponentId
>;

const IS_REACT_19 = version.startsWith('19');

/**
 * Value for the `inert` attribute: React 19 renders it from a boolean, while
 * earlier versions require an empty string. The package supports both, so the
 * value is chosen at runtime from the consumer's React version.
 */
export const getInertValue = (applies: boolean): boolean | undefined =>
  applies ? ((IS_REACT_19 ? true : '') as unknown as boolean) : undefined;
