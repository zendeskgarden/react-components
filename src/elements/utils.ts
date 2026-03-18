/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const componentIds = new Set([
  'accordions.accordion',
  'accordions.button',
  'accordions.header',
  'accordions.panel',
  'accordions.rotate_icon',
  'accordions.section',
  'accordions.step_inner_panel'
]);

export const COMPONENT_IDS = Object.fromEntries(componentIds.entries());
