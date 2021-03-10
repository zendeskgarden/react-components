/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DefaultTheme } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';

export const checkeredBackground = (
  theme: DefaultTheme,
  size: number,
  positionY = 0,
  repeat = 'repeat'
) => {
  const color = getColor('neutralHue', 400, theme);
  const dimensions = `${size}px ${size}px`;
  const positionX1 = theme.rtl ? '100%' : '0';
  const positionX2 = theme.rtl ? `calc(100% - ${size / 2}px)` : `${size / 2}px`;
  const position1 = `${positionX1} ${positionY}px`;
  const position2 = `${positionX2} ${size / 2 + positionY}px`;
  const position3 = `${positionX2} ${positionY}px`;
  const position4 = `${positionX1} ${size / -2 + positionY}px`;

  return `
    linear-gradient(45deg, ${color} 25%, transparent 25%) ${position1} / ${dimensions} ${repeat},
    linear-gradient(45deg, transparent 75%, ${color} 75%) ${position2} / ${dimensions} ${repeat},
    linear-gradient(135deg, ${color} 25%, transparent 25%) ${position3} / ${dimensions} ${repeat},
    linear-gradient(135deg, transparent 75%, ${color} 75%) ${position4} / ${dimensions} ${repeat}
  `;
};
