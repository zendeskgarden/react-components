/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getValueAndUnit } from 'polished';

/**
 * Get unitless line height based on the given pixel-valued height and font size.
 *
 * @param {string|number} height Desired line height in pixels.
 * @param {string|number} fontSize Font size (in pixels) of text contained within the line.
 *
 * @component
 */
export default function getLineHeight(height: string | number, fontSize: string | number) {
  const [heightValue, heightUnit] = getValueAndUnit(height.toString());
  const [fontSizeValue, fontSizeUnit] = getValueAndUnit(fontSize.toString());
  const PIXELS = 'px';

  if (heightUnit && heightUnit !== PIXELS) {
    throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`);
  }

  if (fontSizeUnit && fontSizeUnit !== PIXELS) {
    throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`);
  }

  return (heightValue as number) / (fontSizeValue as number);
}
