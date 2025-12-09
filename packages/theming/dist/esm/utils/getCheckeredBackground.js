/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { getColor } from './getColor.js';

const getCheckeredBackground = ({
  theme,
  size,
  overlay,
  positionY = 0,
  repeat = 'repeat'
}) => {
  const color = getColor({
    theme,
    variable: 'border.default'
  });
  const dimensions = `${size}px ${size}px`;
  const positionX1 = theme.rtl ? '100%' : '0';
  const positionX2 = theme.rtl ? `calc(100% - ${size / 2}px)` : `${size / 2}px`;
  const position1 = `${positionX1} ${positionY}px`;
  const position2 = `${positionX2} ${size / 2 + positionY}px`;
  const position3 = `${positionX2} ${positionY}px`;
  const position4 = `${positionX1} ${size / -2 + positionY}px`;
  let retVal = `
    linear-gradient(45deg, ${color} 25%, transparent 25%) ${position1} / ${dimensions} ${repeat},
    linear-gradient(45deg, transparent 75%, ${color} 75%) ${position2} / ${dimensions} ${repeat},
    linear-gradient(135deg, ${color} 25%, transparent 25%) ${position3} / ${dimensions} ${repeat},
    linear-gradient(135deg, transparent 75%, ${color} 75%) ${position4} / ${dimensions} ${repeat}
  `;
  if (overlay) {
    retVal = overlay.startsWith('linear-gradient') ? `${overlay}, ${retVal}` : `linear-gradient(${overlay}, ${overlay}), ${retVal}`;
  }
  return retVal;
};

export { getCheckeredBackground };
