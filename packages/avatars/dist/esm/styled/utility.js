/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { getColor } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import { SIZE } from '../types/index.js';

const [xxs$1, xs$1, s$1, m$1, l$1] = SIZE;
const TRANSITION_DURATION = 0.25;
const StatusColorParams = {
  active: {
    hue: 'crimson',
    light: {
      shade: 700
    },
    dark: {
      shade: 600
    }
  },
  available: {
    hue: 'mint',
    light: {
      shade: 500
    },
    dark: {
      shade: 400
    }
  },
  away: {
    hue: 'orange',
    light: {
      shade: 500
    },
    dark: {
      shade: 400
    }
  },
  transfers: {
    hue: 'azure',
    light: {
      shade: 500
    },
    dark: {
      shade: 400
    }
  },
  offline: {
    hue: 'grey',
    light: {
      shade: 500
    },
    dark: {
      shade: 400
    }
  }
};
function getStatusColor(theme, type) {
  if (type === undefined) {
    return 'transparent';
  }
  const colorArgs = StatusColorParams[type];
  return colorArgs ? getColor({
    ...colorArgs,
    theme
  }) : 'transparent';
}
function getStatusBorderOffset(props) {
  return props.$size === xxs$1 ? math(`${props.theme.shadowWidths.sm} - 1`) : props.theme.shadowWidths.sm;
}
function getStatusSize(props, offset) {
  const isActive = props.$type === 'active';
  switch (props.$size) {
    case xxs$1:
      return math(`${props.theme.space.base}px - ${offset}`);
    case xs$1:
      return math(`${props.theme.space.base * 2}px - (${offset} * 2)`);
    case s$1:
      return math(`${props.theme.space.base * 3}px ${isActive ? '' : `- (${offset} * 2)`}`);
    case m$1:
    case l$1:
      return math(`${props.theme.space.base * 4}px ${isActive ? '' : `- (${offset} * 2)`}`);
    default:
      return '0';
  }
}
function includes(array, element) {
  return array.includes(element);
}

export { TRANSITION_DURATION, getStatusBorderOffset, getStatusColor, getStatusSize, includes };
