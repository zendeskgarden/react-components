/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useEffect, useState } from 'react';

// Adapted from https://eprev.org/2017/01/05/how-to-detect-if-css-transforms-are-supported-on-svg/
export const useCSSSVGAnimation = () => {
  const [canAnimateSVG, setAnimateSVG] = useState(true);

  useEffect(() => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    svg.setAttribute('viewBox', '0 0 2 2');
    svg.setAttribute('style', 'position: fixed; top: 0; left: 0; width: 2px; height: 2px;');

    rect.setAttribute('style', 'transform: translate(1px, 1px);');
    rect.setAttribute('width', '1');
    rect.setAttribute('height', '1');

    svg.appendChild(rect);

    document.body.appendChild(svg);

    const result = document.elementFromPoint(1, 1) === svg;

    svg.parentNode.removeChild(svg);

    setAnimateSVG(result);
  }, []);

  return canAnimateSVG;
};
