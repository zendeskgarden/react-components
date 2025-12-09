/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
const getSaturationLightness = (element, x, y, rtl) => {
  const {
    width,
    height
  } = element.getBoundingClientRect();
  let left = x - (element.getBoundingClientRect().left + window.pageXOffset);
  let top = y - (element.getBoundingClientRect().top + window.pageYOffset);
  if (left < 0) {
    left = 0;
  } else if (left > width) {
    left = width;
  }
  if (top < 0) {
    top = 0;
  } else if (top > height) {
    top = height;
  }
  if (rtl) {
    left = width - left;
  }
  const saturation = left / width;
  const bright = 1 - top / height;
  return {
    saturation,
    bright
  };
};
function getNextHsv(e, hue, container, rtl) {
  const {
    saturation,
    bright
  } = getSaturationLightness(container, e.pageX, e.pageY, rtl);
  return {
    h: hue,
    s: saturation,
    v: bright
  };
}
const getThumbPosition = (x, y, rtl, container) => {
  if (container.current) {
    const {
      saturation,
      bright
    } = getSaturationLightness(container.current, x, y, rtl);
    const topFromMouse = (1 - bright) * 100;
    const leftFromMouse = rtl ? 100 - saturation * 100 : saturation * 100;
    return {
      topFromMouse,
      leftFromMouse
    };
  }
  return {
    topFromMouse: 0,
    leftFromMouse: 0
  };
};

export { getNextHsv, getThumbPosition };
