/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');
var polished = require('polished');
var reactTheming = require('@zendeskgarden/react-theming');
var containerSchedule = require('@zendeskgarden/container-schedule');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);
var styled__default = /*#__PURE__*/_interopDefault(styled);

const dotOneKeyframes = styled.keyframes(["0%{transform:translate(0,5px);}3%{transform:translate(1px,-5px);}6%{transform:translate(3px,-15px);}8%{transform:translate(5px,-18px);}9%{transform:translate(7px,-21px);}11%{transform:translate(8px,-22px);}13%{transform:translate(9px,-23px);}16%{transform:translate(12px,-25px);}18%{transform:translate(13px,-26px);}23%{transform:translate(18px,-26px);}24%{transform:translate(19px,-25px);}28%{transform:translate(22px,-23px);}31%{transform:translate(24px,-21px);}33%{transform:translate(26px,-18px);}34%{transform:translate(28px,-14px);}36%{transform:translate(29px,-12px);}38%{transform:translate(30px,-5px);}39%{transform:translate(31px,5px);}54%{transform:translate(31px,3px);}59%{transform:translate(33px);}61%{transform:translate(43px);}63%{transform:translate(48px);}64%{transform:translate(51px);}66%{transform:translate(53px);}68%{transform:translate(55px);}69%{transform:translate(57px);}76%{transform:translate(60px);}81%{transform:translate(61px);}83%,100%{transform:translate(62px);}"]);
const dotTwoKeyframes = styled.keyframes(["4%{transform:translate(0);}6%{transform:translate(-1px);}8%{transform:translate(-2px);}9%{transform:translate(-5px);}11%{transform:translate(-7px);}13%{transform:translate(-12px);}14%{transform:translate(-17px);}16%{transform:translate(-19px);}18%{transform:translate(-22px);}19%{transform:translate(-25px);}21%{transform:translate(-26px);}23%{transform:translate(-27px);}24%{transform:translate(-28px);}26%{transform:translate(-29px);}29%{transform:translate(-30px);}33%,89%{transform:translate(-31px);}91%{transform:translate(-31px,1px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,3px);}99%{transform:translate(-31px,4px);}100%{transform:translate(-31px,5px);}"]);
const dotThreeKeyframes = styled.keyframes(["39%{transform:translate(0);}44%{transform:translate(0,1px);}46%{transform:translate(0,2px);}48%{transform:translate(0,3px);}49%{transform:translate(0,4px);}51%{transform:translate(0,5px);}53%{transform:translate(-1px,-6px);}54%{transform:translate(-2px,-13px);}56%{transform:translate(-3px,-15px);}58%{transform:translate(-5px,-19px);}59%{transform:translate(-7px,-21px);}61%{transform:translate(-8px,-22px);}63%{transform:translate(-9px,-24px);}64%{transform:translate(-11px,-25px);}66%{transform:translate(-12px,-26px);}74%{transform:translate(-19px,-26px);}76%{transform:translate(-20px,-25px);}78%{transform:translate(-22px,-24px);}81%{transform:translate(-24px,-21px);}83%{transform:translate(-26px,-19px);}84%{transform:translate(-28px,-15px);}86%{transform:translate(-29px,-13px);}88%{transform:translate(-30px,-6px);}89%{transform:translate(-31px,5px);}91%{transform:translate(-31px,4px);}93%{transform:translate(-31px,3px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,1px);}100%{transform:translate(-31px);}"]);
const delayedVisibilityKeyframes = styled.keyframes(["0%{visibility:hidden;}1%{visibility:visible;}100%{visibility:visible;}"]);

const StyledDotsCircle = styled__default.default.circle.attrs({
  cy: 36,
  r: 9
}).withConfig({
  displayName: "StyledDots__StyledDotsCircle",
  componentId: "sc-1ltah7e-0"
})([""]);
const animationStyles$1 = (animationName, props) => {
  return styled.css(["animation:", " ", "ms ", "ms linear infinite;"], animationName, props.$duration, props.$delay);
};
const StyledDotsCircleOne = styled__default.default(StyledDotsCircle).attrs({
  cx: 9
}).withConfig({
  displayName: "StyledDots__StyledDotsCircleOne",
  componentId: "sc-1ltah7e-1"
})(["", ";"], props => animationStyles$1(dotOneKeyframes, props));
const StyledDotsCircleTwo = styled__default.default(StyledDotsCircle).attrs(() => ({
  cx: 40
})).withConfig({
  displayName: "StyledDots__StyledDotsCircleTwo",
  componentId: "sc-1ltah7e-2"
})(["", ";"], props => animationStyles$1(dotTwoKeyframes, props));
const StyledDotsCircleThree = styled__default.default(StyledDotsCircle).attrs(() => ({
  cx: 71
})).withConfig({
  displayName: "StyledDots__StyledDotsCircleThree",
  componentId: "sc-1ltah7e-3"
})(["", ";"], props => animationStyles$1(dotThreeKeyframes, props));

const COMPONENT_ID$5 = 'loaders.loading_placeholder';
const sizeStyles$1 = _ref => {
  let {
    $width = '1em',
    $height = '0.9em',
    $fontSize
  } = _ref;
  const [value, unit] = polished.getValueAndUnit($fontSize);
  let fontSize;
  if (unit === undefined) {
    fontSize = $fontSize;
  } else {
    fontSize = `${value}${unit === '' ? 'px' : unit}`;
  }
  return styled.css(["width:", ";height:", ";font-size:", ";"], $width, $height, fontSize);
};
const StyledLoadingPlaceholder = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3',
  role: 'progressbar'
}).withConfig({
  displayName: "StyledLoadingPlaceholder",
  componentId: "sc-x3bwsx-0"
})(["display:inline-block;", ";", ""], sizeStyles$1, reactTheming.componentStyles);

const sizeToHeight = ($size, theme) => {
  switch ($size) {
    case 'small':
      return theme.space.base / 2;
    case 'medium':
      return theme.space.base * 1.5;
    default:
      return theme.space.base * 3;
  }
};
const sizeToBorderRadius = ($size, theme) => sizeToHeight($size, theme) / 2;
const PROGRESS_BACKGROUND_COMPONENT_ID = 'loaders.progress_background';
const colorStyles$2 = _ref => {
  let {
    theme,
    $color
  } = _ref;
  const backgroundColor = reactTheming.getColor({
    theme,
    transparency: theme.opacity[200],
    light: {
      hue: 'neutralHue',
      shade: 700
    },
    dark: {
      hue: 'white'
    }
  });
  let options;
  if ($color) {
    options = $color.includes('.') ? {
      variable: $color,
      theme
    } : {
      hue: $color,
      theme
    };
  } else {
    options = {
      variable: 'border.successEmphasis',
      theme
    };
  }
  const foregroundColor = reactTheming.getColor(options);
  return styled.css(["background-color:", ";color:", ";"], backgroundColor, foregroundColor);
};
const StyledProgressBackground = styled__default.default.div.attrs({
  'data-garden-id': PROGRESS_BACKGROUND_COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledProgress__StyledProgressBackground",
  componentId: "sc-2g8w4s-0"
})(["margin:", "px 0;border-radius:", "px;", ";", ""], props => props.theme.space.base * 2, props => sizeToBorderRadius(props.$size, props.theme), colorStyles$2, reactTheming.componentStyles);
const PROGESS_INDICATOR_COMPONENT_ID = 'loaders.progress_indicator';
const StyledProgressIndicator = styled__default.default.div.attrs({
  'data-garden-id': PROGESS_INDICATOR_COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledProgress__StyledProgressIndicator",
  componentId: "sc-2g8w4s-1"
})(["transition:width 0.1s ease-in-out;border-radius:", "px;background:currentcolor;width:", "%;height:", "px;", ""], props => sizeToBorderRadius(props.$size, props.theme), props => props.$value, props => sizeToHeight(props.$size, props.theme), reactTheming.componentStyles);

const COMPONENT_ID$4 = 'loaders.skeleton';
const fadeInAnimation = styled.keyframes(["0%,60%{opacity:0;}100%{opacity:1;}"]);
const skeletonAnimation = styled.keyframes(["0%{transform:translateX(-100%);}100%{transform:translateX(100%);}"]);
const skeletonRtlAnimation = styled.keyframes(["0%{transform:translateX(100%);}100%{transform:translateX(-100%)}"]);
const getBackgroundColor = _ref => {
  let {
    theme,
    $isLight
  } = _ref;
  let backgroundColor;
  if ($isLight) {
    backgroundColor = reactTheming.getColor({
      theme,
      hue: 'white',
      transparency: theme.opacity[200]
    });
  } else {
    backgroundColor = reactTheming.getColor({
      theme,
      transparency: theme.opacity[200],
      light: {
        hue: 'neutralHue',
        shade: 700
      },
      dark: {
        hue: 'white'
      }
    });
  }
  return backgroundColor;
};
const animationStyles = _ref2 => {
  let {
    theme
  } = _ref2;
  if (theme.rtl) {
    return styled.css(["animation:", " 1.5s ease-in-out 300ms infinite;"], skeletonRtlAnimation);
  }
  return styled.css(["animation:", " 1.5s ease-in-out 300ms infinite;"], skeletonAnimation);
};
const gradientStyles = props => {
  return styled.css(["background-image:linear-gradient( ", ",transparent,", ",transparent );"], props.theme.rtl ? '-45deg' : '45deg', getBackgroundColor);
};
const StyledSkeleton = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSkeleton",
  componentId: "sc-1raozze-0"
})(["display:inline-block;position:relative;animation:", " 750ms linear;border-radius:", ";background-color:", ";width:", ";height:", ";overflow:hidden;line-height:", ";&::before{position:absolute;top:0;width:1000px;height:100%;content:'';", " ", "}", ";"], fadeInAnimation, props => props.theme.borderRadii.md, getBackgroundColor, props => props.$width, props => props.$height, props => reactTheming.getLineHeight(props.theme.fontSizes.sm, props.theme.space.base * 5), animationStyles, gradientStyles, reactTheming.componentStyles);

const StyledSpinnerCircle = styled__default.default.circle.attrs(props => ({
  cx: 40,
  cy: 40,
  r: 34,
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeWidth: props.$strokeWidthValue,
  strokeDasharray: `${props.$dasharrayValue} 250`,
  transform: props.transform
})).withConfig({
  displayName: "StyledSpinnerCircle",
  componentId: "sc-o4kd70-0"
})([""]);

const colorStyles$1 = _ref => {
  let {
    theme,
    $color = 'inherit'
  } = _ref;
  const options = $color.includes('.') ? {
    variable: $color,
    theme
  } : {
    hue: $color,
    theme
  };
  return styled.css(["color:", ";"], reactTheming.getColor(options));
};
const sizeStyles = _ref2 => {
  let {
    $containerWidth = '1em',
    $containerHeight = '0.9em',
    $fontSize = 'inherit'
  } = _ref2;
  const [value, unit] = polished.getValueAndUnit($fontSize);
  let fontSize;
  if (unit === undefined) {
    fontSize = $fontSize;
  } else {
    fontSize = `${value}${unit === '' ? 'px' : unit}`;
  }
  return styled.css(["width:", ";height:", ";font-size:", ";"], $containerWidth, $containerHeight, fontSize);
};
const delayedVisibilityStyles = _ref3 => {
  let {
    $delayShow
  } = _ref3;
  if ($delayShow && $delayShow !== 0) {
    return styled.css(["animation:", " 1ms ", "ms linear 1 forwards;visibility:hidden;"], delayedVisibilityKeyframes, $delayShow);
  }
  return undefined;
};
const StyledSVG = styled__default.default.svg.attrs(props => ({
  'data-garden-version': '9.12.3',
  xmlns: 'http://www.w3.org/2000/svg',
  focusable: 'false',
  viewBox: `0 0 ${props.$width} ${props.$height}`,
  role: 'img'
})).withConfig({
  displayName: "StyledSVG",
  componentId: "sc-1xtc3kx-0"
})(["", ";", ";", ";", ";"], sizeStyles, colorStyles$1, reactTheming.componentStyles, delayedVisibilityStyles);

const COMPONENT_ID$3 = 'loaders.inline';
const colorStyles = _ref => {
  let {
    theme,
    $color
  } = _ref;
  const options = $color.includes('.') ? {
    variable: $color,
    theme
  } : {
    hue: $color,
    theme
  };
  return styled.css(["color:", ";"], reactTheming.getColor(options));
};
const retrieveAnimation = _ref2 => {
  let {
    theme
  } = _ref2;
  return styled.keyframes(["0%,100%{opacity:", ";}50%{opacity:", ";}"], theme.opacity[200], theme.opacity[600]);
};
const StyledCircle = styled__default.default.circle.attrs({
  fill: 'currentColor',
  cy: 2,
  r: 2
}).withConfig({
  displayName: "StyledInline__StyledCircle",
  componentId: "sc-fxsb9l-0"
})([""]);
const StyledInline = styled__default.default.svg.attrs(props => ({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3',
  viewBox: '0 0 16 4',
  width: props.$size,
  height: props.$size * 0.25
})).withConfig({
  displayName: "StyledInline",
  componentId: "sc-fxsb9l-1"
})(["", ";", "{opacity:0.2;&:nth-child(1){animation:", " 1s infinite;animation-delay:", ";}&:nth-child(2){animation:", " 1s infinite;animation-delay:0.2s;}&:nth-child(3){animation:", " 1s infinite;animation-delay:", ";}}", ""], colorStyles, StyledCircle, retrieveAnimation, props => props.theme.rtl ? 'unset' : '0.4s', retrieveAnimation, retrieveAnimation, props => props.theme.rtl ? '0.4s' : 'unset', reactTheming.componentStyles);

const COMPONENT_ID$2 = 'loaders.dots';
const Dots = React.forwardRef((_ref, ref) => {
  let {
    size = 'inherit',
    color = 'inherit',
    duration = 1250,
    delayMS = 750,
    ...other
  } = _ref;
  return React__default.default.createElement(StyledSVG, Object.assign({
    "data-garden-id": COMPONENT_ID$2,
    ref: ref,
    $fontSize: size,
    $color: color,
    $width: "80",
    $height: "72",
    $delayShow: delayMS
  }, other), React__default.default.createElement("g", {
    fill: "currentColor"
  }, React__default.default.createElement(StyledDotsCircleOne, {
    $duration: duration,
    $delay: delayMS
  }), React__default.default.createElement(StyledDotsCircleTwo, {
    $duration: duration,
    $delay: delayMS
  }), React__default.default.createElement(StyledDotsCircleThree, {
    $duration: duration,
    $delay: delayMS
  })));
});
Dots.displayName = 'Dots';
Dots.propTypes = {
  size: PropTypes__default.default.any,
  duration: PropTypes__default.default.number,
  color: PropTypes__default.default.string,
  delayMS: PropTypes__default.default.number
};

const SIZE = ['small', 'medium', 'large'];

const COMPONENT_ID$1 = 'loaders.progress';
const Progress = React__default.default.forwardRef((_ref, ref) => {
  let {
    color,
    value = 0,
    size = 'medium',
    'aria-label': label,
    ...other
  } = _ref;
  const percentage = Math.max(0, Math.min(100, value));
  const ariaLabel = reactTheming.useText(Progress, {
    'aria-label': label
  }, 'aria-label', 'Progress');
  return (
    React__default.default.createElement(StyledProgressBackground, Object.assign({
      "data-garden-id": COMPONENT_ID$1,
      "data-garden-version": '9.12.3',
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": percentage,
      role: "progressbar",
      $size: size,
      $color: color,
      ref: ref,
      "aria-label": ariaLabel
    }, other), React__default.default.createElement(StyledProgressIndicator, {
      $value: percentage,
      $size: size
    }))
  );
});
Progress.displayName = 'Progress';
Progress.propTypes = {
  color: PropTypes__default.default.string,
  value: PropTypes__default.default.number.isRequired,
  size: PropTypes__default.default.oneOf(SIZE)
};

const Skeleton = React.forwardRef((_ref, ref) => {
  let {
    width = '100%',
    height = '100%',
    isLight,
    ...other
  } = _ref;
  return React__default.default.createElement(StyledSkeleton, Object.assign({
    ref: ref,
    $isLight: isLight,
    $width: width,
    $height: height
  }, other), "\xA0");
});
Skeleton.displayName = 'Skeleton';
Skeleton.propTypes = {
  width: PropTypes__default.default.string,
  height: PropTypes__default.default.string,
  isLight: PropTypes__default.default.bool
};

const STROKE_WIDTH_FRAMES = {
  0: 6,
  14: 5,
  26: 4,
  36: 3,
  46: 2,
  58: 3,
  70: 4,
  80: 5,
  91: 6
};
const ROTATION_FRAMES = {
  0: -90,
  8: -81,
  36: -30,
  41: -18,
  44: -8,
  48: 0,
  55: 22,
  63: 53,
  64: 62,
  66: 67,
  68: 78,
  69: 90,
  71: 99,
  73: 112,
  74: 129,
  76: 138,
  78: 159,
  79: 180,
  81: 190,
  83: 207,
  84: 221,
  86: 226,
  88: 235,
  90: 243,
  99: 270
};
const DASHARRAY_FRAMES = {
  0: 0,
  13: 2,
  26: 13,
  53: 86,
  58: 90,
  63: 89,
  64: 88,
  66: 86,
  68: 83,
  69: 81,
  71: 76,
  73: 70,
  74: 62,
  76: 58,
  78: 47,
  79: 37,
  81: 31,
  83: 23,
  84: 16,
  88: 10,
  89: 7,
  98: 1,
  99: 0
};

const COMPONENT_ID = 'loaders.spinner';
const TOTAL_FRAMES = 100;
const computeFrames = (frames, duration) => {
  return Object.entries(frames).reduce((acc, item, index, arr) => {
    const [frame, value] = item;
    const [nextFrame, nextValue] = arr[index + 1] || [TOTAL_FRAMES, arr[0][1]];
    const diff = parseInt(nextFrame, 10) - parseInt(frame, 10);
    const frameHz = 1000 / 60;
    let subDuration = duration / (TOTAL_FRAMES - 1) * diff;
    let lastValue = value;
    acc[frame] = value;
    for (let idx = 0; idx < diff; idx++) {
      lastValue = lastValue + (nextValue - lastValue) * (frameHz / subDuration);
      subDuration = duration / (TOTAL_FRAMES - 1) * (diff - idx);
      acc[parseInt(frame, 10) + idx + 1] = lastValue;
    }
    acc[nextFrame] = nextValue;
    return acc;
  }, {});
};
const Spinner = React.forwardRef((_ref, ref) => {
  let {
    size = 'inherit',
    duration = 1250,
    color = 'inherit',
    delayMS = 750,
    ...other
  } = _ref;
  const strokeWidthValues = computeFrames(STROKE_WIDTH_FRAMES, duration);
  const rotationValues = computeFrames(ROTATION_FRAMES, duration);
  const dasharrayValues = computeFrames(DASHARRAY_FRAMES, duration);
  const {
    elapsed,
    delayComplete
  } = containerSchedule.useSchedule({
    duration,
    delayMS
  });
  const frame = (elapsed * 100).toFixed(0);
  const strokeWidthValue = strokeWidthValues[frame];
  const rotationValue = rotationValues[frame];
  const dasharrayValue = dasharrayValues[frame];
  const WIDTH = 80;
  const HEIGHT = 80;
  if (!delayComplete && delayMS !== 0) {
    return React__default.default.createElement(StyledLoadingPlaceholder, {
      $width: "1em",
      $height: "1em",
      $fontSize: size
    }, "\xA0");
  }
  return React__default.default.createElement(StyledSVG, Object.assign({
    $color: color,
    $containerHeight: "1em",
    $containerWidth: "1em",
    $fontSize: size,
    "data-garden-id": COMPONENT_ID,
    $height: HEIGHT,
    ref: ref,
    $width: WIDTH
  }, other), React__default.default.createElement(StyledSpinnerCircle, {
    $dasharrayValue: dasharrayValue,
    $strokeWidthValue: strokeWidthValue,
    transform: `rotate(${rotationValue}, ${WIDTH / 2}, ${HEIGHT / 2})`
  }));
});
Spinner.displayName = 'Spinner';
Spinner.propTypes = {
  size: PropTypes__default.default.any,
  duration: PropTypes__default.default.number,
  color: PropTypes__default.default.string,
  delayMS: PropTypes__default.default.number
};

const Inline = React.forwardRef((_ref, ref) => {
  let {
    size = 16,
    color = 'inherit',
    ...other
  } = _ref;
  const ariaLabel = reactTheming.useText(Inline, other, 'aria-label', 'loading');
  return (
    React__default.default.createElement(StyledInline, Object.assign({
      ref: ref,
      $size: size,
      $color: color,
      "aria-label": ariaLabel,
      role: "img"
    }, other), React__default.default.createElement(StyledCircle, {
      cx: "14"
    }), React__default.default.createElement(StyledCircle, {
      cx: "8"
    }), React__default.default.createElement(StyledCircle, {
      cx: "2"
    }))
  );
});
Inline.displayName = 'Inline';
Inline.propTypes = {
  size: PropTypes__default.default.number,
  color: PropTypes__default.default.string
};

exports.Dots = Dots;
exports.Inline = Inline;
exports.Progress = Progress;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
