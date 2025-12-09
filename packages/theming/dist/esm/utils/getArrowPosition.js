/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
const POSITION_MAP = {
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
const RTL_POSITION_MAP = {
  'bottom-left': 'bottom-right',
  'bottom-right': 'bottom-left',
  'top-left': 'top-right',
  'top-right': 'top-left'
};
const getArrowPosition = (theme, placement) => {
  let retVal = POSITION_MAP[placement];
  if (theme.rtl) {
    retVal = RTL_POSITION_MAP[retVal] || retVal;
  }
  return retVal;
};

export { POSITION_MAP, RTL_POSITION_MAP, getArrowPosition };
