/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var reactForms = require('@zendeskgarden/react-forms');
var throttle = require('lodash.throttle');
var styled = require('styled-components');
var reactTheming = require('@zendeskgarden/react-theming');
var polished = require('polished');
var reactButtons = require('@zendeskgarden/react-buttons');
var reactModals = require('@zendeskgarden/react-modals');
var isEqual = require('lodash.isequal');
var containerUtilities = require('@zendeskgarden/container-utilities');
var reactMergeRefs = require('react-merge-refs');
var containerGrid = require('@zendeskgarden/container-grid');
var reactTooltips = require('@zendeskgarden/react-tooltips');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);
var throttle__default = /*#__PURE__*/_interopDefault(throttle);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var isEqual__default = /*#__PURE__*/_interopDefault(isEqual);

function hslToHsv(h, s, l) {
  let saturation = s;
  saturation *= (l < 50 ? l : 100 - l) / 100;
  const v = l + saturation;
  return {
    h,
    s: v === 0 ? 0 : 2 * saturation / v * 100,
    v
  };
}
function hsvToHsl(h, s, v) {
  let saturation = s;
  let value = v;
  saturation /= 100;
  value /= 100;
  let l = (2 - saturation) * value;
  let sl = saturation * value;
  sl /= l <= 1 ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return {
    h,
    s: sl * 100,
    l: l * 100
  };
}

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

const COMPONENT_ID$l = 'colorpickers.colorpicker';
const getColorPickerWidth = props => {
  return props.$isOpaque ? 268 : 312;
};
const StyledColorPicker = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$l,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledColorPicker",
  componentId: "sc-gspq4q-0"
})(["width:", "px;min-width:", "px;", ";"], getColorPickerWidth, getColorPickerWidth, reactTheming.componentStyles);

const COMPONENT_ID$k = 'colorpickers.colorpicker_range';
const thumbStyles = (styles, modifier = '') => {
  return `
    &${modifier}::-moz-range-thumb {
      ${styles}
    }

    &${modifier}::-ms-thumb {
      ${styles}
    }

    &${modifier}::-webkit-slider-thumb {
      ${styles}
    }
  `;
};
const trackStyles = (styles, modifier = '') => {
  return `
    &${modifier}::-moz-range-track {
      ${styles}
    }

    &${modifier}::-ms-track {
      ${styles}
    }

    &${modifier}::-webkit-slider-runnable-track {
      ${styles}
    }
  `;
};
const trackLowerStyles = (styles, modifier = '') => {
  return `
    &${modifier}::-moz-range-progress {
      ${styles}
    }

    &${modifier}::-ms-fill-lower {
      ${styles}
    }
  `;
};
const colorStyles$2 = ({
  theme
}) => {
  const thumbBackgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.default'
  });
  const thumbBorderColor = reactTheming.getColor({
    theme,
    variable: 'border.default',
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  });
  const thumbActiveBackgroundColor = thumbBackgroundColor;
  const thumbActiveBorderColor = reactTheming.getColor({
    theme,
    variable: 'border.primaryEmphasis'
  });
  const thumbFocusBorderColor = thumbActiveBorderColor;
  const thumbHoverBackgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.subtle'
  });
  const thumbHoverBorderColor = thumbActiveBorderColor;
  return `
    ${trackStyles(`
      background-color: transparent;
    `)}

    ${thumbStyles(`
      border-color: ${thumbBorderColor};
      background-color: ${thumbBackgroundColor};
    `)}

    ${trackLowerStyles(`
      background-color: transparent;
    `)}

    ${thumbStyles(`
        border-color: ${thumbHoverBorderColor};
        background-color: ${thumbHoverBackgroundColor};
      `, ':hover')}

    ${thumbStyles(`
        background-color: ${thumbBackgroundColor};
        border-color: ${thumbFocusBorderColor};
      `, ':focus-visible')}

    ${thumbStyles(`
        border-color: ${thumbActiveBorderColor};
        background-color: ${thumbActiveBackgroundColor}
      `, ':active')}
  `;
};
const getThumbSize = props => props.theme.space.base * (props.$isOpaque ? 6 : 4);
const getTrackHeight = props => props.theme.space.base * (props.$isOpaque ? 6 : 3);
const getTrackMargin = props => (getThumbSize(props) - getTrackHeight(props)) / 2 + polished.stripUnit(props.theme.shadowWidths.md);
const sizeStyles$3 = props => {
  const thumbSize = getThumbSize(props);
  const trackHeight = getTrackHeight(props);
  const trackMargin = getTrackMargin(props);
  const thumbMargin = (trackHeight - thumbSize) / 2;
  const trackOffset = props.theme.space.base * (props.$isOpaque ? -2 : -1);
  const height = props.$isOpaque ? trackHeight : trackMargin * 2 + trackHeight;
  return `
    /* stylelint-disable-next-line declaration-no-important */
    margin-top: 0 !important;
    height: ${height}px; /* [1] */
    box-sizing: content-box; /* [2] */
    border-radius: ${props.$isOpaque && props.theme.borderRadii.md};

    ${trackStyles(`
      margin: ${trackMargin}px ${trackOffset}px;
      height: ${trackHeight}px;
    `)}

    ${thumbStyles(`
      margin: ${thumbMargin}px 0;
      border-width: ${props.theme.borderWidths.sm};
      height: ${thumbSize}px;
      width: ${thumbSize}px;
    `)};
  `;
};
const StyledRange = styled__default.default(reactForms.Range).attrs({
  'data-garden-id': COMPONENT_ID$k,
  'data-garden-version': '9.12.3',
  hasLowerTrack: false
}).withConfig({
  displayName: "StyledRange",
  componentId: "sc-ug3wi9-0"
})(["", ";", " ", ";", ";"], sizeStyles$3, trackStyles(`
    border-radius: 0;
  `), colorStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$j = 'colorpickers.colorpicker_hue';
const StyledHueRange = styled__default.default(StyledRange).attrs({
  'data-garden-id': COMPONENT_ID$j,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHueRange",
  componentId: "sc-1gdhww1-0"
})(["background:linear-gradient( to ", ",#f00 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,#f00 100% ) no-repeat;background-position:", ";background-size:100% ", "px;"], props => props.theme.rtl ? 'left' : 'right', props => !props.$isOpaque && `0 ${getTrackMargin(props)}px`, props => getTrackHeight(props));

const COMPONENT_ID$i = 'colorpickers.colorpicker_alpha';
const background$3 = props => {
  const direction = `to ${props.theme.rtl ? 'left' : 'right'}`;
  const fromColor = `rgba(${props.$red}, ${props.$green}, ${props.$blue}, 0)`;
  const toColor = `rgb(${props.$red}, ${props.$green}, ${props.$blue})`;
  const positionY = getTrackMargin(props);
  const height = getTrackHeight(props);
  const overlay = `linear-gradient(${direction}, ${fromColor}, ${toColor}) 0 ${positionY}px / 100% ${height}px no-repeat`;
  return reactTheming.getCheckeredBackground({
    theme: props.theme,
    size: height,
    positionY,
    repeat: 'repeat-x',
    overlay
  });
};
const StyledAlphaRange = styled__default.default(StyledRange).attrs(props => ({
  style: {
    backgroundSize: 'auto',
    background: background$3(props)
  },
  'data-garden-id': COMPONENT_ID$i,
  'data-garden-version': '9.12.3'
})).withConfig({
  displayName: "StyledAlphaRange",
  componentId: "sc-1f6hp2j-0"
})([""]);

const COMPONENT_ID$h = 'colorpickers.colorpicker_preview_box';
const background$2 = props => {
  const alpha = props.$alpha ? props.$alpha / 100 : 0;
  let retVal = `rgba(${props.$red}, ${props.$green}, ${props.$blue}, ${alpha})`;
  if (!props.$isOpaque) {
    retVal = reactTheming.getCheckeredBackground({
      theme: props.theme,
      size: 13,
      overlay: retVal
    });
  }
  return retVal;
};
const StyledPreview = styled__default.default.div.attrs(props => ({
  style: {
    background: background$2(props)
  },
  'data-garden-id': COMPONENT_ID$h,
  'data-garden-version': '9.12.3',
  'data-test-id': 'preview-box'
})).withConfig({
  displayName: "StyledPreview",
  componentId: "sc-1z5nh7-0"
})(["flex-shrink:0;border-radius:", ";box-shadow:inset 0 0 0 ", " ", ";width:", "px;height:", "px;", ";"], props => props.theme.borderRadii.md, props => props.theme.borderWidths.sm, props => polished.rgba(props.theme.palette.black, 0.19), props => props.theme.space.base * (props.$isOpaque ? 6 : 8), props => props.theme.space.base * (props.$isOpaque ? 6 : 8), reactTheming.componentStyles);

const COMPONENT_ID$g = 'colorpickers.colorpicker_colorwell';
const background$1 = props => {
  const blackAlpha = polished.rgba(props.theme.palette.black, 0.9);
  const black = `linear-gradient(0deg, ${props.theme.palette.black}, ${blackAlpha} 1%, transparent 99%)`;
  const whiteAngle = `${props.theme.rtl ? -90 : 90}deg`;
  const white = `linear-gradient(${whiteAngle}, ${props.theme.palette.white} 1%, transparent)`;
  const colorValue = polished.hsl(props.$hue, 1, 0.5);
  const color = `linear-gradient(${colorValue}, ${colorValue})`;
  return `${black}, ${white}, ${color}`;
};
const StyledColorWell = styled__default.default.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$g,
  'data-garden-version': '9.12.3',
  'data-test-id': 'colorwell',
  style: {
    background: background$1(props)
  }
})).withConfig({
  displayName: "StyledColorWell",
  componentId: "sc-1gg9z8m-0"
})(["position:relative;margin-bottom:", "px;cursor:pointer;height:208px;overflow:hidden;", ";"], props => props.theme.space.base * 2, reactTheming.componentStyles);

const COMPONENT_ID$f = 'colorpickers.colorpicker_colorwell_thumb';
const colorStyles$1 = ({
  theme
}) => {
  const borderColor = reactTheming.getColor({
    theme,
    hue: 'white'
  });
  const boxShadow = `${theme.shadows.xs(reactTheming.getColor({
    theme,
    hue: 'black'
  }))}`;
  return styled.css(["border-color:", ";box-shadow:", ";"], borderColor, boxShadow);
};
const sizeStyles$2 = ({
  theme
}) => {
  const borderWidth = polished.stripUnit(theme.borderWidths.sm) * 2;
  const size = theme.space.base * 5;
  const translateValue = size / -2;
  return styled.css(["transform:translate(", "px,", "px);box-sizing:border-box;border-width:", "px;width:", "px;height:", "px;"], translateValue, translateValue, borderWidth, size, size);
};
const StyledColorWellThumb = styled__default.default.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '9.12.3',
  'data-test-id': 'colorwell-thumb',
  style: {
    top: `${props.$top}%`,
    left: `${props.$left}%`
  }
})).withConfig({
  displayName: "StyledColorWellThumb",
  componentId: "sc-1npyab0-0"
})(["position:absolute;border:", ";border-radius:50%;", " ", " ", ";"], props => props.theme.borders.sm, sizeStyles$2, colorStyles$1, reactTheming.componentStyles);

const COMPONENT_ID$e = 'colorpickers.colorpicker_slider_group';
const StyledSliderGroup = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$e,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSliderGroup",
  componentId: "sc-tigkzg-0"
})(["display:flex;justify-content:space-between;margin-bottom:", "px;", ";"], props => props.theme.space.base * 2, reactTheming.componentStyles);

const COMPONENT_ID$d = 'colorpickers.colorpicker_hex_field';
const StyledHexField = styled__default.default(reactForms.Field).attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3',
  spellCheck: false
}).withConfig({
  displayName: "StyledHexField",
  componentId: "sc-ijq1c-0"
})(["display:flex;flex-basis:0;flex-direction:column;flex-grow:1;width:auto;text-align:center;input{direction:ltr;}", ";"], reactTheming.componentStyles);

const COMPONENT_ID$c = 'colorpickers.colorpicker_label';
const StyledLabel = styled__default.default(reactForms.Label).attrs({
  'data-garden-id': COMPONENT_ID$c,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLabel",
  componentId: "sc-1vxt3m9-0"
})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$b = 'colorpickers.colorpicker_input';
const StyledInput = styled__default.default(reactForms.Input).attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3',
  focusInset: false
}).withConfig({
  displayName: "StyledInput",
  componentId: "sc-1uzlutt-0"
})(["text-align:center;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$a = 'colorpickers.colorpicker_input_group';
const StyledInputGroup = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInputGroup",
  componentId: "sc-1m9g2wg-0"
})(["display:flex;justify-content:space-between;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$9 = 'colorpickers.colorpicker_rgb_field';
const sizeStyles$1 = theme => {
  const margin = `${theme.space.base * 1.5}px`;
  const width = `${theme.space.base * 12.75}px`;
  return `
    margin-${theme.rtl ? 'right' : 'left'}: ${margin};
    width: ${width};
    min-width: ${width};
  `;
};
const StyledRGBAField = styled__default.default(reactForms.Field).attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRGBAField",
  componentId: "sc-13266k8-0"
})(["display:flex;flex-direction:column;text-align:center;", ";", ";"], props => sizeStyles$1(props.theme), reactTheming.componentStyles);

const COMPONENT_ID$8 = 'colorpickers.colorpicker_sliders';
const sizeStyles = props => {
  if (props.$isOpaque) {
    return undefined;
  }
  const trackHeight = getTrackHeight(props);
  const trackMargin = getTrackMargin(props);
  return `
    & > * {
      position: absolute;
      width: 100%;
      height: ${trackMargin * 2 + trackHeight}px;
    }

    & > :first-child {
      top: -${trackMargin}px;
    }

    & > :last-child {
      bottom: -${trackMargin}px;
    }
  `;
};
const StyledSliders = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSliders",
  componentId: "sc-1lgr50m-0"
})(["position:relative;margin-", ":", "px;width:100%;", " ", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 2, sizeStyles, reactTheming.componentStyles);

const StyledButton = styled__default.default(reactButtons.Button).attrs({
  isNeutral: true,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledButton",
  componentId: "sc-1dlijfv-0"
})(["padding:0;width:", "px;max-width:", "px;&:last-of-type:not(:first-child){border-top-", "-radius:", " !important;border-bottom-", "-radius:", " !important;}"], props => props.theme.space.base * 17, props => props.theme.space.base * 17, props => props.theme.rtl ? 'left' : 'right', props => props.theme.borderRadii.md, props => props.theme.rtl ? 'left' : 'right', props => props.theme.borderRadii.md);

const COMPONENT_ID$7 = 'colorpickers.colordialog_preview';
const background = ({
  $backgroundColor,
  theme
}) => {
  let retVal;
  if (typeof $backgroundColor === 'string') {
    retVal = $backgroundColor;
  } else if ($backgroundColor === undefined) {
    retVal = theme.palette.white;
  } else {
    const {
      red,
      green,
      blue,
      alpha = 1
    } = $backgroundColor;
    retVal = `rgba(${red}, ${green}, ${blue}, ${alpha ? alpha / 100 : 0})`;
  }
  return retVal;
};
const StyledButtonPreview = styled__default.default.span.attrs(props => ({
  style: {
    background: reactTheming.getCheckeredBackground({
      theme: props.theme,
      size: 8,
      overlay: background(props)
    })
  },
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3',
  'data-test-id': 'dialog-preview'
})).withConfig({
  displayName: "StyledButtonPreview",
  componentId: "sc-yxis8h-0"
})(["display:inline-block;bottom:", "px;border-radius:", ";box-shadow:inset 0 0 0 ", " ", ";width:", "px;height:", "px;", ";"], props => props.theme.space.base, props => props.theme.borderRadii.sm, props => props.theme.borderWidths.sm, props => polished.rgba(props.theme.palette.black, 0.19), props => props.theme.space.base * 5, props => props.theme.space.base * 5, reactTheming.componentStyles);

const COMPONENT_ID$6 = 'colorpickers.colordialog_tooltipdialog';
const StyledTooltipDialog = styled__default.default(reactModals.TooltipDialog).attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialog",
  componentId: "sc-1vbkccl-0"
})(["width:auto !important;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$5 = 'colorpickers.colordialog_tooltipdialog_body';
const StyledTooltipBody = styled__default.default(reactModals.TooltipDialog.Body).attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipBody",
  componentId: "sc-1ueddpo-0"
})(["padding:0;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$4 = 'colorpickers.color_swatch';
const StyledColorSwatch = styled__default.default.table.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledColorSwatch",
  componentId: "sc-ajx440-0"
})(["border-collapse:collapse;line-height:normal;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$3 = 'colorpickers.color_swatch_input';
const StyledColorSwatchInput = styled__default.default.input.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledColorSwatchInput",
  componentId: "sc-em45h0-0"
})(["position:absolute;opacity:0;z-index:1;margin:0;cursor:pointer;width:100%;height:100%;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$2 = 'colorpickers.color_swatch_label';
const colorStyles = ({
  $backgroundColor,
  theme
}) => {
  const {
    alpha
  } = polished.parseToRgb($backgroundColor);
  const returnIfLightColor = reactTheming.getColor({
    theme,
    hue: 'neutralHue',
    shade: 900
  });
  let foregroundColor = returnIfLightColor;
  if (alpha === undefined || alpha >= 0.4) {
    const returnIfDarkColor = reactTheming.getColor({
      theme,
      hue: 'white'
    });
    foregroundColor = polished.readableColor($backgroundColor, returnIfLightColor, returnIfDarkColor, false );
  }
  return `
    color: ${foregroundColor};
  `;
};
const StyledColorSwatchLabel = styled__default.default(StyledButtonPreview).attrs({
  as: 'label',
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledColorSwatchLabel",
  componentId: "sc-1aghocg-0"
})(["position:relative;top:0;border-radius:", ";", ";", " ", ";"], props => props.theme.borderRadii.md, colorStyles, props => reactTheming.focusStyles({
  theme: props.theme,
  selector: '&:has(:focus-visible)'
}), reactTheming.componentStyles);

const COMPONENT_ID$1 = 'colorpickers.colorswatch_check';
const StyledIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-8oigif-0"
})(["position:absolute;top:0;left:0;transition:opacity 0.2s ease-in-out;opacity:0;width:100%;height:100%;", ":checked ~ &{opacity:1;}", ";"], StyledColorSwatchInput, reactTheming.componentStyles);

const COMPONENT_ID = 'colorpickers.swatch_cell';
const StyledCell = styled__default.default.td.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCell",
  componentId: "sc-qr3oit-0"
})(["padding:", "px;font-size:0;", ";"], props => props.theme.space.base, reactTheming.componentStyles);

const ColorWell = React__namespace.default.memo(({
  hue,
  saturation,
  lightness,
  onChange
}) => {
  const {
    rtl
  } = React.useContext(styled.ThemeContext);
  const containerRef = React.useRef(null);
  const hsv = hslToHsv(hue, saturation, lightness);
  const mouseActiveRef = React.useRef(false);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const {
    topFromMouse,
    leftFromMouse
  } = getThumbPosition(x, y, rtl, containerRef);
  const [topPosition, setTopPosition] = React.useState(0);
  const [leftPosition, setLeftPosition] = React.useState(0);
  React.useEffect(() => {
    setTopPosition(100 - hsv.v);
    setLeftPosition(rtl ? 100 - hsv.s : hsv.s);
  }, [hsv.s, hsv.v, rtl]);
  const throttledChange = React.useMemo(() => {
    return throttle__default.default(e => {
      if (containerRef.current) {
        const nextHsv = getNextHsv(e, hue, containerRef.current, rtl);
        onChange && onChange(nextHsv, e);
      }
    }, 50);
  }, [hue, rtl, onChange]);
  const handleMouseMove = React.useCallback(e => {
    mouseActiveRef.current = true;
    setX(e.pageX);
    setY(e.pageY);
    throttledChange(e);
  }, [throttledChange]);
  const handleMouseUp = React.useCallback(() => {
    mouseActiveRef.current = true;
    setTimeout(() => {
      mouseActiveRef.current = false;
    });
    throttledChange.cancel();
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }, [throttledChange, handleMouseMove]);
  const handleMouseDown = React.useCallback(e => {
    mouseActiveRef.current = true;
    e.persist();
    handleMouseMove(e);
    throttledChange(e);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [throttledChange, handleMouseMove, handleMouseUp]);
  React.useEffect(() => {
    return () => {
      throttledChange.cancel();
    };
  }, [throttledChange]);
  return (
    React__namespace.default.createElement(StyledColorWell, {
      $hue: hue,
      ref: containerRef,
      role: "presentation",
      onMouseDown: handleMouseDown
    }, React__namespace.default.createElement(StyledColorWellThumb, {
      $top: mouseActiveRef.current ? topFromMouse : topPosition,
      $left: mouseActiveRef.current ? leftFromMouse : leftPosition
    }))
  );
});
ColorWell.displayName = 'ColorWell';

const isValidHex = hexString => {
  const regEx = /^#(?:(?:[0-9A-F]{6}(?:[0-9A-F]{2})?)|(?:[0-9A-F]{3})(?:[0-9A-F]?))$/iu;
  return regEx.test(hexString);
};

function convertStringToColor(colorString) {
  if (colorString.includes('#') && !isValidHex(colorString)) {
    return undefined;
  }
  const {
    hue,
    saturation,
    lightness
  } = polished.parseToHsl(colorString);
  const {
    red,
    green,
    blue,
    alpha
  } = polished.parseToRgb(colorString);
  const computedAlpha = alpha === undefined ? 100 : alpha * 100;
  const computedHex = polished.rgb({
    red,
    green,
    blue
  });
  return {
    hue,
    saturation: saturation * 100,
    lightness: lightness * 100,
    red,
    green,
    blue,
    alpha: computedAlpha,
    hex: computedHex
  };
}
const areColorsEqual = (a, b) => {
  if (a === undefined || b === undefined) {
    return false;
  }
  const colorA = typeof a === 'string' ? convertStringToColor(a) : a;
  const colorB = typeof b === 'string' ? convertStringToColor(b) : b;
  if (colorA === undefined || colorB === undefined) {
    return false;
  }
  return isEqual__default.default(colorA, colorB);
};
function getInitialState(color) {
  const whiteColor = {
    hue: 0,
    saturation: 0,
    lightness: 0,
    red: 255,
    green: 255,
    blue: 255,
    alpha: 100,
    hex: '#ffffff'
  };
  if (color === undefined) {
    return getInitialState(whiteColor);
  }
  if (typeof color === 'string') {
    const computedColor = convertStringToColor(color);
    return getInitialState(computedColor || whiteColor);
  }
  return {
    color,
    hexInput: color.hex,
    redInput: color.red.toString(),
    blueInput: color.blue.toString(),
    greenInput: color.green.toString(),
    alphaInput: color.alpha.toString()
  };
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'SATURATION_CHANGE':
      {
        const hsl = hsvToHsl(action.payload.h, action.payload.s * 100, action.payload.v * 100);
        const hex = polished.hsl({
          hue: action.payload.h,
          saturation: hsl.s / 100,
          lightness: hsl.l / 100
        });
        const rgb = polished.parseToRgb(hex);
        return {
          ...state,
          color: {
            ...state.color,
            saturation: hsl.s,
            lightness: hsl.l,
            hex,
            red: rgb.red,
            green: rgb.green,
            blue: rgb.blue
          }
        };
      }
    case 'HUE_CHANGE':
      {
        const hue = Number(action.payload);
        const hex = polished.hsl({
          hue,
          saturation: state.color.saturation / 100,
          lightness: state.color.lightness / 100
        });
        const rgb = polished.parseToRgb(hex);
        return {
          ...state,
          color: {
            ...state.color,
            hue,
            hex,
            red: rgb.red,
            green: rgb.green,
            blue: rgb.blue
          }
        };
      }
    case 'ALPHA_SLIDER_CHANGE':
      {
        return {
          ...state,
          color: {
            ...state.color,
            alpha: Math.round(Number(action.payload) * 100)
          }
        };
      }
    case 'HEX_CHANGE':
      {
        let color = state.color;
        if (isValidHex(action.payload)) {
          const rgb = polished.parseToRgb(action.payload);
          const hsl = polished.parseToHsl(`rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`);
          color = {
            ...color,
            hue: hsl.hue,
            saturation: hsl.saturation * 100,
            lightness: hsl.lightness * 100,
            hex: action.payload,
            red: rgb.red,
            green: rgb.green,
            blue: rgb.blue
          };
        }
        return {
          ...state,
          hexInput: action.payload,
          color
        };
      }
    case 'RED_CHANGE':
      {
        let red = parseInt(action.payload, 10);
        let color = state.color;
        if (!isNaN(red)) {
          if (red >= 255) {
            red = 255;
          }
          if (red < 0) {
            red = 0;
          }
          const hsl = polished.parseToHsl(`rgb(${red}, ${color.green}, ${color.blue})`);
          const hex = polished.rgb(red, color.green, color.blue);
          color = {
            ...color,
            hex,
            red: action.payload === '' ? color.red : red,
            hue: hsl.hue,
            saturation: hsl.saturation * 100,
            lightness: hsl.lightness * 100
          };
        }
        return {
          ...state,
          redInput: action.payload,
          color
        };
      }
    case 'GREEN_CHANGE':
      {
        let green = parseInt(action.payload, 10);
        let color = state.color;
        if (!isNaN(green)) {
          if (green >= 255) {
            green = 255;
          }
          if (green < 0) {
            green = 0;
          }
          const hsl = polished.parseToHsl(`rgb(${color.red}, ${green}, ${color.blue})`);
          const hex = polished.rgb(color.red, green, color.blue);
          color = {
            ...color,
            hex,
            green: action.payload === '' ? color.green : green,
            hue: hsl.hue,
            saturation: hsl.saturation * 100,
            lightness: hsl.lightness * 100
          };
        }
        return {
          ...state,
          greenInput: action.payload,
          color
        };
      }
    case 'BLUE_CHANGE':
      {
        let blue = parseInt(action.payload, 10);
        let color = state.color;
        if (!isNaN(blue)) {
          if (blue >= 255) {
            blue = 255;
          }
          if (blue < 0) {
            blue = 0;
          }
          const hsl = polished.parseToHsl(`rgb(${color.red}, ${color.green}, ${blue})`);
          const hex = polished.rgb(color.red, color.green, blue);
          color = {
            ...color,
            hex,
            blue: action.payload === '' ? color.blue : blue,
            hue: hsl.hue,
            saturation: hsl.saturation * 100,
            lightness: hsl.lightness * 100
          };
        }
        return {
          ...state,
          blueInput: action.payload,
          color
        };
      }
    case 'ALPHA_CHANGE':
      {
        let alpha = parseInt(action.payload, 10);
        let color = state.color;
        if (!isNaN(alpha)) {
          if (alpha > 100) {
            alpha = 100;
          }
          if (alpha < 0) {
            alpha = 0;
          }
          color = {
            ...color,
            alpha
          };
        }
        return {
          ...state,
          alphaInput: action.payload,
          color
        };
      }
    case 'RESET_COLOR':
      {
        return getInitialState(action.payload);
      }
    default:
      throw new Error('Unknown reducer case.');
  }
};

const ColorPicker = React.forwardRef(({
  color,
  defaultColor = '#fff',
  isOpaque,
  labels = {},
  autofocus,
  onChange,
  ...props
}, ref) => {
  const [state, dispatch] = React.useReducer(reducer, getInitialState(color || defaultColor));
  const previousComputedColorRef = React.useRef(state.color);
  const previousStateColorRef = React.useRef(state.color);
  const computedColor = React.useMemo(() => {
    let retVal = state.color;
    if (color) {
      if (typeof color === 'string') {
        const convertedColor = convertStringToColor(color);
        if (convertedColor) {
          retVal = convertedColor;
        }
      } else {
        retVal = color;
      }
    }
    if (isOpaque) {
      retVal.alpha = 100;
    }
    if (areColorsEqual(retVal, previousComputedColorRef.current)) {
      return previousComputedColorRef.current;
    }
    return retVal;
  }, [color, isOpaque, state.color]);
  React.useEffect(() => {
    if (!areColorsEqual(previousStateColorRef.current, state.color) && !areColorsEqual(color, state.color)) {
      onChange && onChange(state.color);
    }
    previousStateColorRef.current = state.color;
  }, [color, onChange, state.color]);
  if (previousComputedColorRef.current !== computedColor) {
    dispatch({
      type: 'RESET_COLOR',
      payload: computedColor
    });
    previousComputedColorRef.current = computedColor;
  }
  const handleColorWellChange = React.useCallback(hsv => {
    dispatch({
      type: 'SATURATION_CHANGE',
      payload: hsv
    });
  }, []);
  const handleHueChange = React.useCallback(e => {
    dispatch({
      type: 'HUE_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleAlphaSliderChange = React.useCallback(e => {
    dispatch({
      type: 'ALPHA_SLIDER_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleHexChange = React.useCallback(e => {
    dispatch({
      type: 'HEX_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleRedChange = React.useCallback(e => {
    dispatch({
      type: 'RED_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleGreenChange = React.useCallback(e => {
    dispatch({
      type: 'GREEN_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleBlueChange = React.useCallback(e => {
    dispatch({
      type: 'BLUE_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleAlphaChange = React.useCallback(e => {
    dispatch({
      type: 'ALPHA_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleBlur = React.useCallback(() => {
    dispatch({
      type: 'RESET_COLOR',
      payload: computedColor
    });
  }, [computedColor]);
  return React__namespace.default.createElement(StyledColorPicker, Object.assign({
    ref: ref,
    $isOpaque: isOpaque
  }, props), React__namespace.default.createElement(ColorWell, {
    hue: computedColor.hue,
    saturation: computedColor.saturation,
    lightness: computedColor.lightness,
    onChange: handleColorWellChange
  }), React__namespace.default.createElement(StyledSliderGroup, null, React__namespace.default.createElement(StyledPreview, {
    $red: computedColor.red,
    $green: computedColor.green,
    $blue: computedColor.blue,
    $alpha: computedColor.alpha,
    $isOpaque: isOpaque
  }), React__namespace.default.createElement(StyledSliders, {
    $isOpaque: isOpaque
  }, React__namespace.default.createElement(reactForms.Field, null, React__namespace.default.createElement(reactForms.Field.Label, {
    hidden: true
  }, labels.hueSlider || 'Hue slider'), React__namespace.default.createElement(StyledHueRange, {
    step: 1,
    max: 360,
    value: computedColor.hue,
    $isOpaque: isOpaque,
    onChange: handleHueChange
  })), !isOpaque && React__namespace.default.createElement(reactForms.Field, null, React__namespace.default.createElement(reactForms.Field.Label, {
    hidden: true
  }, labels.alphaSlider || 'Alpha slider'), React__namespace.default.createElement(StyledAlphaRange, {
    max: 1,
    step: 0.01,
    value: computedColor.alpha / 100,
    onChange: handleAlphaSliderChange,
    $red: computedColor.red,
    $green: computedColor.green,
    $blue: computedColor.blue
  })))), React__namespace.default.createElement(StyledInputGroup, null, React__namespace.default.createElement(StyledHexField, null, React__namespace.default.createElement(StyledLabel, {
    isRegular: true
  }, labels.hex || 'Hex'), React__namespace.default.createElement(StyledInput, {
    isCompact: true,
    maxLength: 7,
    value: state.hexInput
    ,
    autoFocus: autofocus,
    spellCheck: false,
    onBlur: handleBlur,
    onChange: handleHexChange
  })), React__namespace.default.createElement(StyledRGBAField, null, React__namespace.default.createElement(StyledLabel, {
    isRegular: true
  }, labels.red || 'R'), React__namespace.default.createElement(StyledInput, {
    isCompact: true,
    type: "number",
    min: "0",
    max: "255",
    maxLength: 3,
    value: state.redInput,
    onBlur: handleBlur,
    onChange: handleRedChange
  })), React__namespace.default.createElement(StyledRGBAField, null, React__namespace.default.createElement(StyledLabel, {
    isRegular: true
  }, labels.green || 'G'), React__namespace.default.createElement(StyledInput, {
    isCompact: true,
    type: "number",
    min: "0",
    max: "255",
    maxLength: 3,
    value: state.greenInput,
    onBlur: handleBlur,
    onChange: handleGreenChange
  })), React__namespace.default.createElement(StyledRGBAField, null, React__namespace.default.createElement(StyledLabel, {
    isRegular: true
  }, labels.blue || 'B'), React__namespace.default.createElement(StyledInput, {
    isCompact: true,
    type: "number",
    min: "0",
    max: "255",
    maxLength: 3,
    value: state.blueInput,
    onBlur: handleBlur,
    onChange: handleBlueChange
  })), !isOpaque && React__namespace.default.createElement(StyledRGBAField, null, React__namespace.default.createElement(StyledLabel, {
    isRegular: true
  }, labels.alpha || 'A'), React__namespace.default.createElement(StyledInput, {
    isCompact: true,
    type: "number",
    min: "0",
    max: "100",
    value: state.alphaInput,
    onBlur: handleBlur,
    onChange: handleAlphaChange
  }))));
});
ColorPicker.displayName = 'ColorPicker';
ColorPicker.propTypes = {
  color: PropTypes__default.default.oneOfType([PropTypes__default.default.object, PropTypes__default.default.string]),
  isOpaque: PropTypes__default.default.bool,
  onChange: PropTypes__default.default.func,
  labels: PropTypes__default.default.object,
  defaultColor: PropTypes__default.default.oneOfType([PropTypes__default.default.object, PropTypes__default.default.string])
};

var _path$1;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgChevronDownStroke = function SvgChevronDownStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"
  })));
};

const ColorPickerDialog = React.forwardRef(({
  color,
  defaultColor,
  placement = 'bottom-start',
  onChange,
  onClose,
  labels,
  hasArrow = false,
  isAnimated = true,
  isOpaque,
  isOpen,
  zIndex = 1000,
  focusInset,
  disabled,
  buttonProps,
  onDialogChange,
  'aria-label': ariaLabel,
  children,
  ...props
}, ref) => {
  const isControlled = color !== null && color !== undefined;
  const isDialogControlled = isOpen !== undefined && isOpen !== null;
  const buttonRef = React.useRef(null);
  const colorPickerRef = React.useRef(null);
  const [referenceElement, setReferenceElement] = React.useState();
  const [uncontrolledColor, setUncontrolledColor] = React.useState(defaultColor);
  const ariaLabelText = reactTheming.useText(ColorPickerDialog, {
    'aria-label': ariaLabel
  }, 'aria-label', 'Color picker');
  const theme = styled.useTheme() || reactTheming.DEFAULT_THEME;
  const openDialog = () => {
    setReferenceElement(buttonRef.current);
    onDialogChange && onDialogChange({
      isOpen: true
    });
  };
  const closeDialog = () => {
    setReferenceElement(null);
    onDialogChange && onDialogChange({
      isOpen: false
    });
  };
  const onClick = containerUtilities.composeEventHandlers(props.onClick, () => {
    if (referenceElement) {
      closeDialog();
    } else {
      openDialog();
    }
  });
  React.useEffect(() => {
    if (isDialogControlled) {
      if (isOpen) {
        setReferenceElement(buttonRef.current);
      } else {
        setReferenceElement(null);
      }
    }
  }, [isOpen, isDialogControlled]);
  return React__namespace.default.createElement(React__namespace.default.Fragment, null, children ? (React.cloneElement(React.Children.only(children), {
    onClick,
    ref: buttonRef
  })) : React__namespace.default.createElement(StyledButton, Object.assign({
    disabled: disabled,
    focusInset: focusInset,
    ref: buttonRef,
    onClick: onClick
  }, buttonProps), React__namespace.default.createElement(StyledButtonPreview, {
    $backgroundColor: isControlled ? color : uncontrolledColor
  }), React__namespace.default.createElement(reactButtons.Button.EndIcon, {
    isRotated: referenceElement != null
  }, React__namespace.default.createElement(SvgChevronDownStroke, null))), React__namespace.default.createElement(StyledTooltipDialog, Object.assign({
    ref: ref,
    hasArrow: hasArrow,
    zIndex: zIndex,
    isAnimated: isAnimated,
    focusOnMount: false,
    placement: placement,
    offset: theme.space.base,
    referenceElement: referenceElement,
    onClose: () => {
      closeDialog();
      onClose && onClose(isControlled ? color : uncontrolledColor);
    },
    "aria-label": ariaLabelText
  }, props), React__namespace.default.createElement(StyledTooltipBody, null, React__namespace.default.createElement(ColorPicker, {
    autofocus: true,
    color: color,
    isOpaque: isOpaque,
    labels: labels,
    ref: colorPickerRef,
    defaultColor: uncontrolledColor,
    onChange: isControlled ? onChange : setUncontrolledColor
  }))));
});
ColorPickerDialog.propTypes = {
  ...ColorPicker.propTypes,
  placement: PropTypes__default.default.oneOf(reactModals.PLACEMENT),
  onClose: PropTypes__default.default.func,
  onDialogChange: PropTypes__default.default.func,
  disabled: PropTypes__default.default.bool,
  labels: PropTypes__default.default.object,
  buttonProps: PropTypes__default.default.object,
  zIndex: PropTypes__default.default.number,
  hasArrow: PropTypes__default.default.bool,
  isAnimated: PropTypes__default.default.bool,
  isOpen: PropTypes__default.default.bool,
  focusInset: PropTypes__default.default.bool
};
ColorPickerDialog.displayName = 'ColorPickerDialog';

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgCheckSmFill = function SvgCheckSmFill(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 6l2 2 4-4"
  })));
};

const ColorSwatch = React.forwardRef(({
  name,
  colors,
  isCheckboxGroup,
  defaultSelectedColIndex,
  defaultSelectedRowIndex,
  selectedColIndex,
  selectedRowIndex,
  onSelect,
  ...props
}, ref) => {
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
  const environment = reactTheming.useDocument(theme);
  const gridRef = React.useRef();
  const [rowIndex, setRowIndex] = React.useState(selectedRowIndex === null ? undefined : selectedRowIndex);
  const [colIndex, setColIndex] = React.useState(selectedColIndex === null ? undefined : selectedColIndex);
  const isControlled = selectedColIndex !== undefined && selectedRowIndex !== undefined;
  const {
    getGridCellProps
  } = containerGrid.useGrid({
    environment,
    rtl: theme.rtl,
    matrix: colors,
    wrap: true,
    idPrefix: containerUtilities.useId(undefined),
    defaultRowIndex: defaultSelectedRowIndex,
    defaultColIndex: defaultSelectedColIndex,
    rowIndex,
    colIndex,
    onChange: (row, col) => {
      setRowIndex(row);
      setColIndex(col);
    }
  });
  return React__namespace.default.createElement(StyledColorSwatch, Object.assign({
    role: "grid",
    ref: reactMergeRefs.mergeRefs([gridRef, ref])
  }, props), React__namespace.default.createElement("tbody", null, colors.map((row, _rowIndex) => React__namespace.default.createElement("tr", {
    key: row[0].value
  }, row.map((color, _colIndex) => {
    const {
      label,
      value
    } = color;
    const {
      role,
      ...gridCellProps
    } = getGridCellProps({
      colIndex: _colIndex,
      rowIndex: _rowIndex
    });
    const checked = isControlled ? selectedRowIndex === _rowIndex && selectedColIndex === _colIndex : undefined;
    const defaultChecked = isControlled ? undefined : defaultSelectedRowIndex === _rowIndex && defaultSelectedColIndex === _colIndex;
    const handleChange = event => {
      if (onSelect) {
        if (event.target.checked) {
          onSelect(_rowIndex, _colIndex);
        } else {
          onSelect(null, null);
        }
      }
      if (isCheckboxGroup && event.target.checked) {
        const inputs = gridRef.current?.querySelectorAll('input');
        inputs?.forEach(input => {
          if (input !== event.target) {
            input.checked = false;
          }
        });
      }
    };
    const handleBlur = event => {
      if (!(isCheckboxGroup || gridRef.current?.contains(event.relatedTarget))) {
        const selectedInput = gridRef.current?.querySelector(`input[name='${event.target.name}']:checked`);
        if (selectedInput !== null) {
          const inputs = gridRef.current?.querySelectorAll('input');
          inputs?.forEach(input => input.setAttribute('tabIndex', input.checked ? '0' : '-1'));
        }
      }
    };
    return React__namespace.default.createElement(StyledCell, {
      key: value,
      role: role
    }, React__namespace.default.createElement(StyledColorSwatchLabel, {
      $backgroundColor: value
    }, React__namespace.default.createElement(reactTooltips.Tooltip, {
      content: label,
      zIndex: 1
    }, React__namespace.default.createElement(StyledColorSwatchInput, Object.assign({
      "aria-label": label,
      name: name,
      type: isCheckboxGroup ? 'checkbox' : 'radio',
      value: value,
      defaultChecked: defaultChecked,
      checked: checked,
      onBlur: handleBlur,
      onChange: handleChange
    }, gridCellProps))), React__namespace.default.createElement(StyledIcon, null, React__namespace.default.createElement(SvgCheckSmFill, null))));
  })))));
});
ColorSwatch.displayName = 'ColorSwatch';
ColorSwatch.propTypes = {
  name: PropTypes__default.default.string.isRequired,
  colors: PropTypes__default.default.arrayOf(PropTypes__default.default.any).isRequired,
  isCheckboxGroup: PropTypes__default.default.bool,
  selectedRowIndex: PropTypes__default.default.number,
  selectedColIndex: PropTypes__default.default.number,
  defaultSelectedRowIndex: PropTypes__default.default.number,
  defaultSelectedColIndex: PropTypes__default.default.number,
  onSelect: PropTypes__default.default.func
};

const ColorSwatchDialog = React.forwardRef(({
  name,
  colors,
  isCheckboxGroup,
  selectedRowIndex,
  selectedColIndex,
  defaultSelectedRowIndex,
  defaultSelectedColIndex,
  placement = 'bottom-start',
  onSelect,
  hasArrow = false,
  isAnimated = true,
  zIndex = 1000,
  isOpen,
  focusInset,
  disabled,
  buttonProps,
  onDialogChange,
  children,
  'aria-label': ariaLabel,
  ...props
}, ref) => {
  const isControlled = selectedRowIndex !== undefined && selectedColIndex !== undefined;
  const isDialogControlled = isOpen !== undefined && isOpen !== null;
  const buttonRef = React.useRef(null);
  const colorSwatchRef = React.useRef(null);
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [rowIndex, setRowIndex] = React.useState(defaultSelectedRowIndex);
  const [colIndex, setColIndex] = React.useState(defaultSelectedColIndex);
  const theme = styled.useTheme() || reactTheming.DEFAULT_THEME;
  let backgroundColor;
  if (isControlled) {
    if (selectedRowIndex !== null && selectedColIndex !== null) {
      backgroundColor = colors[selectedRowIndex][selectedColIndex].value;
    }
  } else if (rowIndex !== undefined && colIndex !== undefined) {
    backgroundColor = colors[rowIndex][colIndex].value;
  }
  const ariaLabelText = reactTheming.useText(ColorSwatchDialog, {
    'aria-label': ariaLabel
  }, 'aria-label', 'Color swatch');
  React.useEffect(() => {
    if (isDialogControlled) {
      if (isOpen) {
        setReferenceElement(buttonRef.current);
      } else {
        setReferenceElement(null);
      }
    }
  }, [isOpen, isDialogControlled]);
  const openDialog = () => {
    setReferenceElement(buttonRef.current);
    onDialogChange && onDialogChange({
      isOpen: true
    });
  };
  const closeDialog = () => {
    setReferenceElement(null);
    onDialogChange && onDialogChange({
      isOpen: false
    });
  };
  const onClick = containerUtilities.composeEventHandlers(props.onClick, () => {
    if (referenceElement) {
      closeDialog();
    } else {
      openDialog();
    }
  });
  React.useEffect(() => {
    if (referenceElement && colorSwatchRef.current) {
      const input = colorSwatchRef.current.querySelector('[tabindex="0"]');
      input?.focus();
    }
  }, [referenceElement]);
  const handleSelect = (row, col) => {
    if (isControlled === false) {
      if (row === null || col === null) {
        setRowIndex(undefined);
        setColIndex(undefined);
      } else {
        setRowIndex(row);
        setColIndex(col);
      }
    }
    onSelect && onSelect(row, col);
  };
  return React__namespace.default.createElement(React__namespace.default.Fragment, null, children ? (React.cloneElement(React.Children.only(children), {
    onClick,
    ref: buttonRef
  })) : React__namespace.default.createElement(StyledButton, Object.assign({
    disabled: disabled,
    focusInset: focusInset,
    ref: buttonRef,
    onClick: onClick
  }, buttonProps), React__namespace.default.createElement(StyledButtonPreview, {
    $backgroundColor: backgroundColor
  }), React__namespace.default.createElement(reactButtons.Button.EndIcon, {
    isRotated: referenceElement !== null
  }, React__namespace.default.createElement(SvgChevronDownStroke, null))), React__namespace.default.createElement(StyledTooltipDialog, Object.assign({
    ref: ref,
    zIndex: zIndex,
    hasArrow: hasArrow,
    focusOnMount: false,
    placement: placement,
    offset: theme.space.base,
    isAnimated: isAnimated,
    referenceElement: referenceElement,
    onClose: closeDialog,
    "aria-label": ariaLabelText
  }, props), React__namespace.default.createElement(StyledTooltipBody, null, React__namespace.default.createElement(ColorSwatch, {
    name: name,
    colors: colors,
    ref: colorSwatchRef,
    isCheckboxGroup: isCheckboxGroup,
    selectedRowIndex: selectedRowIndex,
    selectedColIndex: selectedColIndex,
    defaultSelectedRowIndex: rowIndex,
    defaultSelectedColIndex: colIndex,
    onSelect: handleSelect
  }))));
});
ColorSwatchDialog.propTypes = {
  ...ColorSwatch.propTypes,
  placement: PropTypes__default.default.oneOf(reactModals.PLACEMENT),
  onDialogChange: PropTypes__default.default.func,
  disabled: PropTypes__default.default.bool,
  buttonProps: PropTypes__default.default.object,
  zIndex: PropTypes__default.default.number,
  hasArrow: PropTypes__default.default.bool,
  isAnimated: PropTypes__default.default.bool,
  focusInset: PropTypes__default.default.bool,
  isOpen: PropTypes__default.default.bool
};
ColorSwatchDialog.displayName = 'ColorSwatchDialog';

exports.ColorPicker = ColorPicker;
exports.ColorPickerDialog = ColorPickerDialog;
exports.ColorSwatch = ColorSwatch;
exports.ColorSwatchDialog = ColorSwatchDialog;
