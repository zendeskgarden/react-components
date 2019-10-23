/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { default as Tooltip } from './elements/Tooltip';
export { default as LightTooltip } from './views/LightTooltip';
export { default as TooltipView } from './views/TooltipView';
export { default as Title } from './views/content/Title';
export { default as Paragraph } from './views/content/Paragraph';
export {
  GARDEN_PLACEMENTS,
  POPPER_PLACEMENTS,
  getPopperPlacement,
  getRtlPopperPlacement
} from './utils/gardenPlacements';
