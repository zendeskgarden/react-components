/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
function getPopperPlacement(gardenPlacement) {
  switch (gardenPlacement) {
    case 'end':
      return 'right';
    case 'end-top':
      return 'right-start';
    case 'end-bottom':
      return 'right-end';
    case 'start':
      return 'left';
    case 'start-top':
      return 'left-start';
    case 'start-bottom':
      return 'left-end';
    default:
      return gardenPlacement;
  }
}
function getRtlPopperPlacement(gardenPlacement) {
  const popperPlacement = getPopperPlacement(gardenPlacement);
  switch (popperPlacement) {
    case 'left':
      return 'right';
    case 'left-start':
      return 'right-start';
    case 'left-end':
      return 'right-end';
    case 'top-start':
      return 'top-end';
    case 'top-end':
      return 'top-start';
    case 'right':
      return 'left';
    case 'right-start':
      return 'left-start';
    case 'right-end':
      return 'left-end';
    case 'bottom-start':
      return 'bottom-end';
    case 'bottom-end':
      return 'bottom-start';
    default:
      return popperPlacement;
  }
}
function getArrowPosition(popperPlacement) {
  const arrowPositionMappings = {
    auto: 'top',
    top: 'bottom',
    'top-start': 'bottom-left',
    'top-end': 'bottom-right',
    right: 'left',
    'right-start': 'left-top',
    'right-end': 'left-bottom',
    bottom: 'top',
    'bottom-start': 'top-left',
    'bottom-end': 'top-right',
    left: 'right',
    'left-start': 'right-top',
    'left-end': 'right-bottom'
  };
  return popperPlacement ? arrowPositionMappings[popperPlacement] : 'top';
}
function getMenuPosition(popperPlacement) {
  if (popperPlacement === 'auto') {
    return 'bottom';
  }
  return popperPlacement ? popperPlacement.split('-')[0] : 'bottom';
}

export { getArrowPosition, getMenuPosition, getPopperPlacement, getRtlPopperPlacement };
