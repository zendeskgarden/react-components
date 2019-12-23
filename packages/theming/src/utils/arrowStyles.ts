/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css } from 'styled-components';
import math from 'polished/lib/math/math';

type POSITION =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'right'
  | 'right-top'
  | 'right-bottom'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'left-top'
  | 'left-bottom';

const positionStyles = (size: string, position: POSITION) => {
  const offset = math(`${size} / -2`);
  let clipPath;
  let positionCss;
  let propertyRadius: string;

  if (position.startsWith('top')) {
    propertyRadius = 'border-bottom-right-radius';
    clipPath = 'polygon(100% 0, 100% 1px, 1px 100%, 0 100%, 0 0)';
    positionCss = css`
      top: ${offset};
      right: ${position === 'top-right' && size};
      left: ${position === 'top' ? '50%' : position === 'top-left' && size};
      margin-left: ${position === 'top' && offset};
    `;
  } else if (position.startsWith('right')) {
    propertyRadius = 'border-bottom-left-radius';
    clipPath = 'polygon(100% 0, 100% 100%, calc(100% - 1px) 100%, 0 1px, 0 0)';
    positionCss = css`
      top: ${position === 'right' ? '50%' : position === 'right-top' && size};
      right: ${offset};
      bottom: ${position === 'right-bottom' && size};
      margin-top: ${position === 'right' && offset};
    `;
  } else if (position.startsWith('bottom')) {
    propertyRadius = 'border-top-left-radius';
    clipPath = 'polygon(100% 0, calc(100% - 1px) 0, 0 calc(100% - 1px), 0 100%, 100% 100%)';
    positionCss = css`
      right: ${position === 'bottom-right' && size};
      bottom: ${offset};
      left: ${position === 'bottom' ? '50%' : position === 'bottom-left' && size};
      margin-left: ${position === 'bottom' && offset};
    `;
  } else if (position.startsWith('left')) {
    propertyRadius = 'border-top-right-radius';
    clipPath = 'polygon(0 100%, 100% 100%, 100% calc(100% - 1px), 1px 0, 0 0)';
    positionCss = css`
      top: ${position === 'left' ? '50%' : position === 'left-top' && size};
      bottom: ${size};
      left: ${offset};
      margin-top: ${position === 'left' && offset};
    `;
  }

  /**
   * 1. Round-off portion of the foreground square opposite the arrow tip
   *    (improved layout for IE which doesn't support 'clip-path').
   * 2. Clip portion of the foreground square opposite the arrow tip so that it
   *    doesn't interfere with container content.
   * 3. Arrow positioning on the base element.
   */
  return css`
    &::before {
      ${propertyRadius!}: 100%; /* [1] */
      clip-path: ${clipPath}; /* [2] */
    }

    &::before,
    &::after {
      ${positionCss} /* [3] */;
    }
  `;
};

const arrowStyles = (size: string, position: POSITION) => {
  /**
   * 1. Set base positioning for an element with an arrow.
   * 2. Allow any border inherited by `::after` to show through.
   * 3. Styling and z-index positioning for arrow ::after. Border styling and
   *    box-shadow will be automatically inherited from the parent element.
   * 4. Apply shared offset and sizing properties to ::before and ::after.
   */
  return css`
    position: relative; /* [1] */

    &::before {
      /* [2] */
      border-width: inherit;
      border-style: inherit;
      border-color: transparent;
      background-clip: content-box;
    }

    &::after {
      /* [3] */
      z-index: -1;
      border: inherit;
      box-shadow: inherit;
    }

    &::before,
    &::after {
      /* [4] */
      position: absolute;
      transform: rotate(45deg);
      background-color: inherit;
      box-sizing: inherit;
      width: ${size};
      height: ${size};
      content: '';
    }

    ${positionStyles(size, position)};
  `;
};

export default arrowStyles;
