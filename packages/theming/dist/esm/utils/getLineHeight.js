/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { getValueAndUnit } from 'polished';

function getLineHeight(height, fontSize) {
  const [heightValue, heightUnit] = getValueAndUnit(height.toString());
  const [fontSizeValue, fontSizeUnit] = getValueAndUnit(fontSize.toString());
  const PIXELS = 'px';
  if (heightUnit && heightUnit !== PIXELS) {
    throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`);
  }
  if (fontSizeUnit && fontSizeUnit !== PIXELS) {
    throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`);
  }
  return heightValue / fontSizeValue;
}

export { getLineHeight as default };
