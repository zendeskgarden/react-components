/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var reactDom$1 = require('react-dom');
var PropTypes = require('prop-types');
var reactMergeRefs = require('react-merge-refs');
var styled = require('styled-components');
var reactDom = require('@floating-ui/react-dom');
var reactTheming = require('@zendeskgarden/react-theming');
var startOfMonth = require('date-fns/startOfMonth');
var endOfMonth = require('date-fns/endOfMonth');
var startOfWeek = require('date-fns/startOfWeek');
var endOfWeek = require('date-fns/endOfWeek');
var eachDayOfInterval = require('date-fns/eachDayOfInterval');
var addDays = require('date-fns/addDays');
var isToday = require('date-fns/isToday');
var isSameDay = require('date-fns/isSameDay');
var isSameMonth = require('date-fns/isSameMonth');
var isBefore = require('date-fns/isBefore');
var isAfter = require('date-fns/isAfter');
var getDate = require('date-fns/getDate');
var addMonths = require('date-fns/addMonths');
var subMonths = require('date-fns/subMonths');
var isValid = require('date-fns/isValid');
var parse = require('date-fns/parse');
var containerUtilities = require('@zendeskgarden/container-utilities');
var compareAsc = require('date-fns/compareAsc');
var subDays = require('date-fns/subDays');

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
var styled__default = /*#__PURE__*/_interopDefault(styled);

const WEEK_STARTS_ON = [0, 1, 2, 3, 4, 5, 6];
const PLACEMENT = ['auto', ...reactTheming.PLACEMENT];

const COMPONENT_ID$b = 'datepickers.menu';
const StyledMenu = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMenu",
  componentId: "sc-1npbkk0-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$a = 'datepickers.menu_wrapper';
const StyledMenuWrapper = styled__default.default.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3',
  className: props.$isAnimated ? 'is-animated' : undefined
})).withConfig({
  displayName: "StyledMenuWrapper",
  componentId: "sc-6fowoz-0"
})(["top:0;left:0;", ";", ";"], props => reactTheming.menuStyles(reactTheming.getMenuPosition(props.$placement), {
  theme: props.theme,
  hidden: props['aria-hidden'],
  margin: `${props.theme.space.base}px`,
  zIndex: props.$zIndex,
  animationModifier: props.$isAnimated ? '.is-animated' : undefined
}), reactTheming.componentStyles);

const COMPONENT_ID$9 = 'datepickers.datepicker';
const sizeStyles$4 = ({
  $isCompact,
  theme
}) => {
  const margin = theme.space.base * ($isCompact ? 4 : 5);
  return styled.css(["margin:", "px;"], margin);
};
const colorStyles$3 = ({
  theme
}) => {
  const foreground = reactTheming.getColor({
    variable: 'foreground.default',
    theme
  });
  return styled.css(["background-color:transparent;color:", ";"], foreground);
};
const StyledDatePicker = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDatePicker",
  componentId: "sc-15hwqzh-0"
})(["direction:", ";", " ", " ", ";"], p => p.theme.rtl && 'rtl', sizeStyles$4, colorStyles$3, reactTheming.componentStyles);

const COMPONENT_ID$8 = 'datepickers.range_calendar';
const StyledRangeCalendar = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRangeCalendar",
  componentId: "sc-1og46sy-0"
})(["display:flex;overflow:auto;", "{margin:0;", "}", ";"], StyledDatePicker, props => props.theme.rtl ? `&:last-of-type {margin-right: ${props.theme.space.base * 5}px}` : `&:first-of-type {margin-right: ${props.theme.space.base * 5}px}`, reactTheming.componentStyles);

const COMPONENT_ID$7 = 'datepickers.header';
const StyledHeader = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeader",
  componentId: "sc-upq318-0"
})(["display:flex;width:", "px;", ";"], props => props.$isCompact ? props.theme.space.base * 56 : props.theme.space.base * 70, reactTheming.componentStyles);

const sizeStyles$3 = ({
  $isCompact,
  theme
}) => {
  const iconSize = theme.iconSizes.md;
  const size = theme.space.base * ($isCompact ? 8 : 10);
  return styled.css(["width:", "px;height:", "px;svg{width:", ";height:", ";}"], size, size, iconSize, iconSize);
};
const colorStyles$2 = ({
  theme
}) => {
  const foreground = reactTheming.getColor({
    variable: 'foreground.subtle',
    theme
  });
  const foregroundHover = reactTheming.getColor({
    variable: 'foreground.subtle',
    light: {
      offset: 100
    },
    dark: {
      offset: -100
    },
    theme
  });
  const backgroundHover = reactTheming.getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[100]
  });
  const foregroundActive = reactTheming.getColor({
    variable: 'foreground.subtle',
    light: {
      offset: 200
    },
    dark: {
      offset: -200
    },
    theme
  });
  const backgroundActive = reactTheming.getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[200]
  });
  return styled.css(["color:", ";&:hover{background-color:", ";color:", ";}&:active{background-color:", ";color:", ";}"], foreground, backgroundHover, foregroundHover, backgroundActive, foregroundActive);
};
const COMPONENT_ID$6 = 'datepickers.header_paddle';
const StyledHeaderPaddle = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderPaddle",
  componentId: "sc-2oqh0g-0"
})(["display:flex;align-items:center;justify-content:center;transform:", ";border-radius:50%;cursor:pointer;&[aria-hidden]{visibility:hidden;}", " ", " ", ";"], props => props.theme.rtl && 'rotate(180deg)', sizeStyles$3, colorStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$5 = 'datepickers.header_label';
const StyledHeaderLabel = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderLabel",
  componentId: "sc-1ryf5ub-0"
})(["display:flex;flex-grow:1;align-items:center;justify-content:center;font-size:", ";font-weight:", ";", ";"], props => props.$isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md, props => props.theme.fontWeights.semibold, reactTheming.componentStyles);

const COMPONENT_ID$4 = 'datepickers.calendar';
const StyledCalendar = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCalendar",
  componentId: "sc-g5hoe8-0"
})(["width:", "px;", ";"], props => props.$isCompact ? props.theme.space.base * 56 : props.theme.space.base * 70, reactTheming.componentStyles);

const COMPONENT_ID$3 = 'datepickers.calendar_item';
const sizeStyles$2 = ({
  $isCompact,
  theme
}) => {
  let size;
  if ($isCompact) {
    size = `${theme.space.base * 8}px`;
  } else {
    size = `${theme.space.base * 10}px`;
  }
  return styled.css(["width:", ";height:", ";"], size, size);
};
const StyledCalendarItem = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCalendarItem",
  componentId: "sc-143w8wb-0"
})(["display:inline-block;position:relative;vertical-align:top;", " ", ";"], sizeStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$2 = 'datepickers.day_label';
const StyledDayLabel = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDayLabel",
  componentId: "sc-9bh1p7-0"
})(["display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:", ";font-weight:", ";", ";"], props => props.$isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md, props => props.theme.fontWeights.semibold, reactTheming.componentStyles);

const COMPONENT_ID$1 = 'datepickers.highlight';
const sizeStyles$1 = ({
  theme,
  $isEnd,
  $isStart
}) => {
  let borderRadius;
  const startValue = '0 50% 50% 0;';
  const endValue = '50% 0 0 50%;';
  if (theme.rtl) {
    if ($isStart) {
      borderRadius = startValue;
    } else if ($isEnd) {
      borderRadius = endValue;
    }
  }
  if ($isStart) {
    borderRadius = endValue;
  } else if ($isEnd) {
    borderRadius = startValue;
  }
  return styled.css(["border-radius:", ";width:100%;height:100%;"], borderRadius);
};
const colorStyles$1 = ({
  $isHighlighted,
  theme
}) => {
  return styled.css(["background-color:", ";"], $isHighlighted && reactTheming.getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[100],
    theme
  }));
};
const StyledHighlight = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHighlight",
  componentId: "sc-16vr32x-0"
})(["position:absolute;top:0;left:0;", " ", " ", ";"], sizeStyles$1, colorStyles$1, reactTheming.componentStyles);

const sizeStyles = () => {
  return styled.css(["border-radius:50%;width:100%;height:100%;"]);
};
const colorStyles = ({
  $isToday,
  $isPreviousMonth,
  theme,
  ...props
}) => {
  const isSelected = props['aria-selected'];
  const isDisabled = props['aria-disabled'];
  let backgroundColor = 'inherit';
  let foreground;
  const backgroundHover = reactTheming.getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[100]
  });
  const foregroundHover = !$isToday && reactTheming.getColor({
    variable: 'foreground.primary',
    light: {
      offset: 100
    },
    dark: {
      offset: -100
    },
    theme
  });
  const backgroundActive = reactTheming.getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[200]
  });
  const foregroundActive = !$isToday && reactTheming.getColor({
    variable: 'foreground.primary',
    light: {
      offset: 200
    },
    dark: {
      offset: -200
    },
    theme
  });
  if (isSelected && !isDisabled) {
    backgroundColor = reactTheming.getColor({
      variable: 'background.primaryEmphasis',
      theme
    });
    foreground = reactTheming.getColor({
      variable: 'foreground.onEmphasis',
      theme
    });
  } else if (isDisabled) {
    foreground = reactTheming.getColor({
      variable: 'foreground.disabled',
      theme
    });
  } else if ($isToday) {
    foreground = 'inherit';
  } else if ($isPreviousMonth) {
    foreground = reactTheming.getColor({
      variable: 'foreground.subtle',
      theme
    });
  } else {
    foreground = reactTheming.getColor({
      variable: 'foreground.primary',
      theme
    });
  }
  return styled.css(["background-color:", ";color:", ";&:not([aria-disabled]):not([aria-selected]):hover{background-color:", ";color:", ";}&:not([aria-disabled]):not([aria-selected]):active{background-color:", ";color:", ";}"], backgroundColor, foreground, backgroundHover, foregroundHover, backgroundActive, foregroundActive);
};
const COMPONENT_ID = 'datepickers.day';
const StyledDay = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDay",
  componentId: "sc-v42uk5-0"
})(["display:flex;position:absolute;align-items:center;justify-content:center;cursor:", ";font-size:", ";font-weight:", ";", " ", " ", ";"], props => props['aria-disabled'] ? 'inherit' : 'pointer', props => props.$isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md, props => props.$isToday && !props['aria-disabled'] ? props.theme.fontWeights.semibold : 'inherit', sizeStyles, colorStyles, reactTheming.componentStyles);

const DatePickerContext = React.createContext(undefined);
const useDatePickerContext$1 = () => {
  return React.useContext(DatePickerContext);
};

const REGION_MAPPINGS = {
  'ar-DZ': 0,
  'ar-SA': 0,
  'en-CA': 0,
  'en-GB': 1,
  'en-US': 0,
  'fa-IR': 0,
  'fr-CH': 1,
  'nl-BE': 1,
  'pt-BR': 0,
  'zh-CN': 1,
  'zh-TW': 1
};
const LANGUAGE_MAPPINGS = {
  af: 0,
  ar: 6,
  be: 1,
  bg: 1,
  bn: 0,
  ca: 1,
  cs: 1,
  da: 1,
  de: 1,
  el: 1,
  en: 0,
  eo: 1,
  es: 1,
  et: 1,
  fa: 0,
  fi: 1,
  fil: 0,
  fr: 1,
  gl: 1,
  he: 0,
  hr: 1,
  hu: 1,
  id: 1,
  is: 1,
  it: 1,
  ja: 1,
  ka: 1,
  ko: 0,
  lt: 1,
  lv: 1,
  mk: 1,
  ms: 1,
  nb: 1,
  nl: 1,
  nn: 1,
  pl: 1,
  pt: 0,
  ro: 1,
  ru: 1,
  sk: 1,
  sl: 1,
  sr: 1,
  sv: 1,
  th: 1,
  tr: 1,
  ug: 0,
  uk: 1,
  vi: 1,
  zh: 1
};
function getStartOfWeek(locale) {
  if (!locale) {
    return 0;
  }
  for (const region in REGION_MAPPINGS) {
    if (locale.startsWith(region)) {
      return REGION_MAPPINGS[region];
    }
  }
  for (const language in LANGUAGE_MAPPINGS) {
    if (locale.startsWith(language)) {
      return LANGUAGE_MAPPINGS[language];
    }
  }
  return 0;
}

var _path$1;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgChevronLeftStroke = function SvgChevronLeftStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10.39 12.688a.5.5 0 01-.718.69l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L6.641 8l3.75 4.688z"
  })));
};

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgChevronRightStroke = function SvgChevronRightStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M5.61 3.312a.5.5 0 01.718-.69l.062.066 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L9.359 8l-3.75-4.688z"
  })));
};

const MonthSelector = ({
  locale,
  isCompact
}) => {
  const {
    state,
    dispatch
  } = useDatePickerContext$1();
  const headerLabelFormatter = React.useCallback(date => {
    const formatter = new Intl.DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric'
    });
    return formatter.format(date);
  }, [locale]);
  return React__namespace.default.createElement(StyledHeader, {
    $isCompact: isCompact
  }, React__namespace.default.createElement(StyledHeaderPaddle, {
    $isCompact: isCompact,
    onClick: () => {
      dispatch({
        type: 'PREVIEW_PREVIOUS_MONTH'
      });
    }
  }, React__namespace.default.createElement(SvgChevronLeftStroke, null)), React__namespace.default.createElement(StyledHeaderLabel, {
    $isCompact: isCompact
  }, headerLabelFormatter(state.previewDate)), React__namespace.default.createElement(StyledHeaderPaddle, {
    $isCompact: isCompact,
    onClick: () => {
      dispatch({
        type: 'PREVIEW_NEXT_MONTH'
      });
    }
  }, React__namespace.default.createElement(SvgChevronRightStroke, null)));
};

const Calendar$1 = React.forwardRef(({
  value,
  minValue,
  maxValue,
  isCompact,
  locale,
  weekStartsOn
}, ref) => {
  const {
    state,
    dispatch
  } = useDatePickerContext$1();
  const preferredWeekStartsOn = weekStartsOn || getStartOfWeek(locale);
  const monthStartDate = startOfMonth.startOfMonth(state.previewDate);
  const monthEndDate = endOfMonth.endOfMonth(monthStartDate);
  const startDate = startOfWeek.startOfWeek(monthStartDate, {
    weekStartsOn: preferredWeekStartsOn
  });
  const endDate = endOfWeek.endOfWeek(monthEndDate, {
    weekStartsOn: preferredWeekStartsOn
  });
  const dayLabelFormatter = React.useCallback(date => {
    const formatter = new Intl.DateTimeFormat(locale, {
      weekday: 'short'
    });
    return formatter.format(date);
  }, [locale]);
  const dayLabels = eachDayOfInterval.eachDayOfInterval({
    start: startDate,
    end: addDays.addDays(startDate, 6)
  }).map(date => {
    const formattedDayLabel = dayLabelFormatter(date);
    return React__namespace.default.createElement(StyledCalendarItem, {
      key: `day-label-${formattedDayLabel}`,
      $isCompact: isCompact
    }, React__namespace.default.createElement(StyledDayLabel, {
      $isCompact: isCompact
    }, formattedDayLabel));
  });
  const items = eachDayOfInterval.eachDayOfInterval({
    start: startDate,
    end: endDate
  }).map(date => {
    const formattedDayLabel = getDate.getDate(date);
    const isCurrentDate = isToday.isToday(date);
    const isPreviousMonth = !isSameMonth.isSameMonth(date, state.previewDate);
    const isSelected = value && isSameDay.isSameDay(date, value);
    let isDisabled = false;
    if (minValue !== undefined) {
      isDisabled = isBefore.isBefore(date, minValue) && !isSameDay.isSameDay(date, minValue);
    }
    if (maxValue !== undefined) {
      isDisabled = isDisabled || isAfter.isAfter(date, maxValue) && !isSameDay.isSameDay(date, maxValue);
    }
    return React__namespace.default.createElement(StyledCalendarItem, {
      key: date.toISOString(),
      $isCompact: isCompact
    }, React__namespace.default.createElement(StyledDay, {
      $isToday: isCurrentDate,
      $isPreviousMonth: isPreviousMonth,
      $isCompact: isCompact,
      "aria-selected": isSelected || undefined,
      "aria-disabled": isDisabled || undefined,
      onClick: () => {
        if (!isDisabled) {
          dispatch({
            type: 'SELECT_DATE',
            value: date
          });
        }
      }
    }, formattedDayLabel));
  });
  return React__namespace.default.createElement(StyledDatePicker, {
    ref: ref,
    $isCompact: isCompact,
    onMouseDown: e => {
      e.preventDefault();
    }
  }, React__namespace.default.createElement(MonthSelector, {
    locale: locale,
    isCompact: isCompact
  }), React__namespace.default.createElement(StyledCalendar, {
    $isCompact: isCompact
  }, dayLabels, items));
});
Calendar$1.displayName = 'Calendar';

function parseInputValue$1({
  inputValue,
  customParseDate
}) {
  if (customParseDate) {
    return customParseDate(inputValue);
  }
  const MINIMUM_DATE = new Date(1001, 0, 0);
  let tryParseDate = parse.parse(inputValue, 'P', new Date());
  if (isValid.isValid(tryParseDate) && !isBefore.isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }
  tryParseDate = parse.parse(inputValue, 'PP', new Date());
  if (isValid.isValid(tryParseDate) && !isBefore.isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }
  tryParseDate = parse.parse(inputValue, 'PPP', new Date());
  if (isValid.isValid(tryParseDate) && !isBefore.isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }
  return new Date(NaN);
}
function formatInputValue({
  date,
  locale,
  formatDate
}) {
  if (!date) {
    return '';
  }
  if (formatDate) {
    return formatDate(date);
  }
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}
const datepickerReducer = ({
  value,
  formatDate,
  locale,
  customParseDate,
  onChange
}) => (state, action) => {
  switch (action.type) {
    case 'OPEN':
      return {
        ...state,
        isOpen: true,
        previewDate: value || new Date()
      };
    case 'CLOSE':
      {
        const inputValue = formatInputValue({
          date: value,
          locale,
          formatDate
        });
        return {
          ...state,
          isOpen: false,
          inputValue
        };
      }
    case 'PREVIEW_NEXT_MONTH':
      {
        const previewDate = addMonths.addMonths(state.previewDate, 1);
        return {
          ...state,
          previewDate
        };
      }
    case 'PREVIEW_PREVIOUS_MONTH':
      {
        const previewDate = subMonths.subMonths(state.previewDate, 1);
        return {
          ...state,
          previewDate
        };
      }
    case 'MANUALLY_UPDATE_INPUT':
      {
        const inputValue = action.value;
        const currentDate = parseInputValue$1({
          inputValue,
          customParseDate
        });
        if (onChange && currentDate && isValid.isValid(currentDate) && !isSameDay.isSameDay(value, currentDate)) {
          onChange(currentDate);
        }
        return {
          ...state,
          isOpen: true,
          inputValue
        };
      }
    case 'CONTROLLED_VALUE_CHANGE':
      {
        const previewDate = action.value || new Date();
        const inputValue = formatInputValue({
          date: action.value,
          locale,
          formatDate
        });
        return {
          ...state,
          previewDate,
          inputValue
        };
      }
    case 'CONTROLLED_LOCALE_CHANGE':
      {
        const inputValue = formatInputValue({
          date: value,
          locale,
          formatDate
        });
        return {
          ...state,
          inputValue
        };
      }
    case 'SELECT_DATE':
      {
        const inputValue = formatInputValue({
          date: action.value,
          locale,
          formatDate
        });
        if (onChange && action.value && isValid.isValid(action.value) && !isSameDay.isSameDay(value, action.value)) {
          onChange(action.value);
        }
        return {
          ...state,
          isOpen: false,
          inputValue
        };
      }
    default:
      throw new Error();
  }
};
function retrieveInitialState$1(initialProps) {
  let previewDate = initialProps.value;
  if (previewDate === undefined || !isValid.isValid(previewDate)) {
    previewDate = new Date();
  }
  let inputValue = '';
  if (initialProps.value !== undefined) {
    if (initialProps.formatDate) {
      inputValue = initialProps.formatDate(initialProps.value);
    } else {
      inputValue = new Intl.DateTimeFormat(initialProps.locale, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(previewDate);
    }
  }
  return {
    isOpen: false,
    previewDate,
    inputValue
  };
}

const Input = React.forwardRef(({
  element,
  dispatch,
  state,
  refKey
}, ref) => {
  const isInputMouseDownRef = React.useRef(false);
  const handleBlur = () => {
    dispatch({
      type: 'CLOSE'
    });
  };
  const handleChange = e => {
    dispatch({
      type: 'MANUALLY_UPDATE_INPUT',
      value: e.target.value
    });
  };
  const handleClick = () => {
    if (isInputMouseDownRef.current && !state.isOpen) {
      dispatch({
        type: 'OPEN'
      });
    }
  };
  const handleKeyDown = e => {
    switch (e.key) {
      case containerUtilities.KEYS.ESCAPE:
      case containerUtilities.KEYS.ENTER:
        dispatch({
          type: 'CLOSE'
        });
        break;
      case containerUtilities.KEYS.UP:
      case containerUtilities.KEYS.DOWN:
      case containerUtilities.KEYS.SPACE:
        dispatch({
          type: 'OPEN'
        });
        break;
    }
  };
  const handleMouseDown = () => {
    isInputMouseDownRef.current = true;
  };
  const handleMouseUp = () => {
    setTimeout(() => {
      isInputMouseDownRef.current = false;
    }, 0);
  };
  return React.cloneElement(element, {
    [refKey]: ref,
    onMouseDown: containerUtilities.composeEventHandlers(element.props.onMouseDown, handleMouseDown),
    onMouseUp: containerUtilities.composeEventHandlers(element.props.onMouseUp, handleMouseUp),
    onClick: containerUtilities.composeEventHandlers(element.props.onClick, handleClick),
    onBlur: containerUtilities.composeEventHandlers(element.props.onBlur, handleBlur),
    onChange: containerUtilities.composeEventHandlers(element.props.onChange, handleChange),
    onKeyDown: containerUtilities.composeEventHandlers(element.props.onKeyDown, handleKeyDown),
    autoComplete: 'off',
    value: state.inputValue
  });
});
Input.displayName = 'Input';

const PLACEMENT_DEFAULT = 'bottom-start';
const DatePicker = React.forwardRef((props, calendarRef) => {
  const {
    appendToNode,
    children,
    placement: _placement = PLACEMENT_DEFAULT,
    zIndex = 1000,
    isAnimated = true,
    refKey = 'ref',
    value,
    isCompact,
    onChange,
    formatDate,
    minValue,
    maxValue,
    locale = 'en-US',
    weekStartsOn,
    customParseDate,
    ...menuProps
  } = props;
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
  const memoizedReducer = React.useCallback(datepickerReducer({
    value,
    formatDate,
    locale,
    customParseDate,
    onChange
  }), [value, formatDate, locale, onChange, customParseDate]);
  const [state, dispatch] = React.useReducer(memoizedReducer, retrieveInitialState$1(props));
  const triggerRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(state.isOpen);
  const contextValue = React.useMemo(() => ({
    state,
    dispatch
  }), [state, dispatch]);
  const [floatingPlacement] = reactTheming.getFloatingPlacements(theme, _placement === 'auto' ? PLACEMENT_DEFAULT : _placement);
  const {
    refs,
    placement,
    update,
    floatingStyles: {
      transform
    }
  } = reactDom.useFloating({
    platform: {
      ...reactDom.platform,
      isRTL: () => theme.rtl
    },
    elements: {
      reference: triggerRef?.current,
      floating: floatingRef?.current
    },
    placement: floatingPlacement,
    middleware: [_placement === 'auto' ? reactDom.autoPlacement() : reactDom.flip()]
  });
  const Child = React__namespace.default.Children.only(children);
  React.useEffect(() => {
    let cleanup;
    if (state.isOpen && refs.reference.current && refs.floating.current) {
      cleanup = reactDom.autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }
    return () => cleanup && cleanup();
  }, [state.isOpen, refs.reference, refs.floating, update]);
  React.useEffect(() => {
    let timeout;
    if (state.isOpen) {
      setIsVisible(true);
    } else if (isAnimated) {
      timeout = setTimeout(() => setIsVisible(false), 200);
    } else {
      setIsVisible(false);
    }
    return () => clearTimeout(timeout);
  }, [state.isOpen, isAnimated]);
  React.useEffect(() => {
    dispatch({
      type: 'CONTROLLED_VALUE_CHANGE',
      value
    });
  }, [value]);
  React.useEffect(() => {
    dispatch({
      type: 'CONTROLLED_LOCALE_CHANGE'
    });
  }, [locale]);
  const Node = React__namespace.default.createElement(StyledMenuWrapper, {
    ref: floatingRef,
    style: {
      transform
    },
    $isAnimated: !!isAnimated && (state.isOpen || isVisible),
    $placement: placement,
    $zIndex: zIndex,
    "aria-hidden": !state.isOpen || undefined
  }, !!(state.isOpen || isVisible) && React__namespace.default.createElement(StyledMenu, menuProps, React__namespace.default.createElement(Calendar$1, {
    ref: calendarRef,
    isCompact: isCompact,
    value: value,
    minValue: minValue,
    maxValue: maxValue,
    locale: locale,
    weekStartsOn: weekStartsOn
  })));
  return React__namespace.default.createElement(React__namespace.default.Fragment, null, React__namespace.default.createElement(Input, {
    element: Child,
    dispatch: dispatch,
    state: state,
    refKey: refKey,
    ref: reactMergeRefs.mergeRefs([triggerRef, Child.ref ? Child.ref : null])
  }), React__namespace.default.createElement(DatePickerContext.Provider, {
    value: contextValue
  }, appendToNode ? reactDom$1.createPortal(Node, appendToNode) : Node));
});
DatePicker.displayName = 'DatePicker';
DatePicker.propTypes = {
  appendToNode: PropTypes__default.default.any,
  value: PropTypes__default.default.any,
  onChange: PropTypes__default.default.any,
  formatDate: PropTypes__default.default.func,
  locale: PropTypes__default.default.any,
  weekStartsOn: PropTypes__default.default.oneOf(WEEK_STARTS_ON),
  minValue: PropTypes__default.default.any,
  maxValue: PropTypes__default.default.any,
  isCompact: PropTypes__default.default.bool,
  customParseDate: PropTypes__default.default.any,
  refKey: PropTypes__default.default.string,
  placement: PropTypes__default.default.oneOf(PLACEMENT),
  isAnimated: PropTypes__default.default.bool,
  zIndex: PropTypes__default.default.number
};

function formatValue({
  value,
  locale,
  formatDate
}) {
  let stringValue = '';
  if (value !== undefined && isValid.isValid(value)) {
    if (formatDate) {
      stringValue = formatDate(value);
    } else {
      stringValue = new Intl.DateTimeFormat(locale, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(value);
    }
  }
  return stringValue;
}
function parseInputValue({
  inputValue
}) {
  const MINIMUM_DATE = new Date(1001, 0, 0);
  let tryParseDate = parse.parse(inputValue || '', 'P', new Date());
  if (isValid.isValid(tryParseDate) && !isBefore.isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }
  tryParseDate = parse.parse(inputValue || '', 'PP', new Date());
  if (isValid.isValid(tryParseDate) && !isBefore.isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }
  tryParseDate = parse.parse(inputValue || '', 'PPP', new Date());
  if (isValid.isValid(tryParseDate) && !isBefore.isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }
  return new Date(NaN);
}
const datepickerRangeReducer = ({
  startValue,
  endValue,
  locale,
  formatDate,
  customParseDate
}) => (state, action) => {
  switch (action.type) {
    case 'START_FOCUS':
      {
        let previewDate = state.previewDate;
        if (startValue) {
          if (compareAsc.compareAsc(startValue, startOfMonth.startOfMonth(state.previewDate)) === 1 && compareAsc.compareAsc(startValue, addMonths.addMonths(endOfMonth.endOfMonth(state.previewDate), 1)) === -1) {
            previewDate = state.previewDate;
          } else {
            previewDate = startOfMonth.startOfMonth(startValue);
          }
        }
        return {
          ...state,
          previewDate,
          isStartFocused: true,
          isEndFocused: false
        };
      }
    case 'END_FOCUS':
      {
        let previewDate = state.previewDate;
        if (endValue) {
          if (compareAsc.compareAsc(endValue, startOfMonth.startOfMonth(state.previewDate)) === 1 && compareAsc.compareAsc(endValue, addMonths.addMonths(endOfMonth.endOfMonth(state.previewDate), 1)) === -1) {
            previewDate = state.previewDate;
          } else {
            previewDate = startOfMonth.startOfMonth(endValue);
          }
        }
        return {
          ...state,
          previewDate,
          isEndFocused: true,
          isStartFocused: false
        };
      }
    case 'START_BLUR':
      {
        let parsedDate;
        if (customParseDate) {
          parsedDate = customParseDate(state.startInputValue);
        } else {
          parsedDate = parseInputValue({
            inputValue: state.startInputValue
          });
        }
        const startInputValue = formatValue({
          value: parsedDate,
          locale,
          formatDate
        });
        return {
          ...state,
          startInputValue: startInputValue || formatValue({
            value: startValue,
            locale,
            formatDate
          }),
          isStartFocused: false
        };
      }
    case 'END_BLUR':
      {
        let parsedDate;
        if (customParseDate) {
          parsedDate = customParseDate(state.endInputValue);
        } else {
          parsedDate = parseInputValue({
            inputValue: state.endInputValue
          });
        }
        const endInputValue = formatValue({
          value: parsedDate,
          locale,
          formatDate
        }) || formatValue({
          value: endValue,
          locale,
          formatDate
        });
        return {
          ...state,
          endInputValue,
          isEndFocused: false
        };
      }
    case 'CONTROLLED_START_VALUE_CHANGE':
      {
        const startInputValue = formatValue({
          value: action.value,
          locale,
          formatDate
        });
        let previewDate = state.previewDate;
        if (action.value) {
          if (compareAsc.compareAsc(action.value, startOfMonth.startOfMonth(state.previewDate)) === 1 && compareAsc.compareAsc(action.value, addMonths.addMonths(endOfMonth.endOfMonth(state.previewDate), 1)) === -1) {
            previewDate = state.previewDate;
          } else {
            previewDate = startOfMonth.startOfMonth(action.value);
          }
        }
        return {
          ...state,
          startInputValue,
          hoverDate: undefined,
          previewDate
        };
      }
    case 'CONTROLLED_END_VALUE_CHANGE':
      {
        const endInputValue = formatValue({
          value: action.value,
          locale,
          formatDate
        });
        let previewDate = state.previewDate;
        if (action.value) {
          if (compareAsc.compareAsc(action.value, startOfMonth.startOfMonth(state.previewDate)) === 1 && compareAsc.compareAsc(action.value, addMonths.addMonths(endOfMonth.endOfMonth(state.previewDate), 1)) === -1) {
            previewDate = state.previewDate;
          } else {
            previewDate = startOfMonth.startOfMonth(action.value);
          }
        }
        return {
          ...state,
          endInputValue,
          hoverDate: undefined,
          previewDate
        };
      }
    case 'CLICK_DATE':
      if (state.isStartFocused) {
        if (endValue !== undefined && (isBefore.isBefore(action.value, endValue) || isSameDay.isSameDay(action.value, endValue))) {
          return {
            ...state,
            startInputValue: formatValue({
              value: action.value
            })
          };
        }
        return {
          ...state,
          startInputValue: formatValue({
            value: action.value
          }),
          endInputValue: undefined
        };
      } else if (state.isEndFocused) {
        if (startValue !== undefined && (isAfter.isAfter(action.value, startValue) || isSameDay.isSameDay(action.value, startValue))) {
          return {
            ...state,
            endInputValue: formatValue({
              value: action.value
            })
          };
        }
        return {
          ...state,
          startInputValue: formatValue({
            value: action.value
          })
        };
      } else if (startValue === undefined) {
        return {
          ...state,
          startInputValue: formatValue({
            value: action.value
          }),
          endInputValue: undefined
        };
      } else if (endValue === undefined) {
        if (isBefore.isBefore(action.value, startValue)) {
          return {
            ...state,
            startInputValue: formatValue({
              value: action.value
            }),
            endInputValue: undefined
          };
        }
        return {
          ...state,
          endInputValue: formatValue({
            value: action.value
          })
        };
      }
      return state;
    case 'START_INPUT_ONCHANGE':
      {
        return {
          ...state,
          startInputValue: action.value
        };
      }
    case 'END_INPUT_ONCHANGE':
      {
        return {
          ...state,
          endInputValue: action.value
        };
      }
    case 'HOVER_DATE':
      return {
        ...state,
        hoverDate: action.value
      };
    case 'PREVIEW_NEXT_MONTH':
      {
        const previewDate = addMonths.addMonths(state.previewDate, 1);
        return {
          ...state,
          previewDate,
          hoverDate: undefined
        };
      }
    case 'PREVIEW_PREVIOUS_MONTH':
      {
        const previewDate = subMonths.subMonths(state.previewDate, 1);
        return {
          ...state,
          previewDate,
          hoverDate: undefined
        };
      }
    default:
      throw new Error();
  }
};
function retrieveInitialState(initialProps) {
  let previewDate = initialProps.startValue;
  if (previewDate === undefined || !isValid.isValid(previewDate)) {
    previewDate = new Date();
  }
  const startInputValue = formatValue({
    value: initialProps.startValue,
    locale: initialProps.locale,
    formatDate: initialProps.formatDate
  });
  const endInputValue = formatValue({
    value: initialProps.endValue,
    locale: initialProps.locale,
    formatDate: initialProps.formatDate
  });
  return {
    previewDate,
    startInputValue,
    endInputValue,
    isStartFocused: false,
    isEndFocused: false
  };
}

const DatePickerRangeContext = React.createContext(undefined);
const useDatePickerContext = () => {
  return React.useContext(DatePickerRangeContext);
};

const Start = props => {
  const {
    state,
    dispatch,
    onChange,
    startValue,
    endValue,
    startInputRef,
    customParseDate
  } = useDatePickerContext();
  const onChangeCallback = React.useCallback(e => {
    dispatch({
      type: 'START_INPUT_ONCHANGE',
      value: e.target.value
    });
    props.children.props.onChange && props.children.props.onChange(e);
  }, [dispatch, props.children]);
  const onFocusCallback = React.useCallback(e => {
    dispatch({
      type: 'START_FOCUS'
    });
    props.children.props.onFocus && props.children.props.onFocus(e);
  }, [dispatch, props.children]);
  const handleBlur = React.useCallback(() => {
    let parsedDate;
    if (customParseDate) {
      parsedDate = customParseDate(state.startInputValue);
    } else {
      parsedDate = parseInputValue({
        inputValue: state.startInputValue
      });
    }
    dispatch({
      type: 'START_BLUR'
    });
    if (parsedDate && isValid.isValid(parsedDate) && !isSameDay.isSameDay(parsedDate, startValue)) {
      onChange && onChange({
        startValue: parsedDate,
        endValue
      });
    }
  }, [dispatch, onChange, startValue, endValue, customParseDate, state.startInputValue]);
  const onKeyDownCallback = React.useCallback(e => {
    if (e.key === containerUtilities.KEYS.ENTER) {
      e.preventDefault();
      handleBlur();
    }
    props.children.props.onKeyDown && props.children.props.onKeyDown(e);
  }, [handleBlur, props.children]);
  const onBlurCallback = React.useCallback(e => {
    handleBlur();
    props.children.props.onBlur && props.children.props.onBlur(e);
  }, [handleBlur, props.children]);
  const childElement = React__namespace.default.Children.only(props.children);
  return React__namespace.default.cloneElement(childElement, {
    value: state.startInputValue || '',
    ref: startInputRef,
    onChange: containerUtilities.composeEventHandlers(childElement.props.onChange, onChangeCallback),
    onFocus: containerUtilities.composeEventHandlers(childElement.props.onFocus, onFocusCallback),
    onKeyDown: containerUtilities.composeEventHandlers(childElement.props.onKeyDown, onKeyDownCallback),
    onBlur: containerUtilities.composeEventHandlers(childElement.props.onBlur, onBlurCallback)
  });
};
Start.displayName = 'DatePickerRange.Start';

const End = props => {
  const {
    state,
    dispatch,
    onChange,
    startValue,
    endValue,
    endInputRef,
    customParseDate
  } = useDatePickerContext();
  const onChangeCallback = React.useCallback(e => {
    dispatch({
      type: 'END_INPUT_ONCHANGE',
      value: e.target.value
    });
    props.children.props.onChange && props.children.props.onChange(e);
  }, [dispatch, props.children]);
  const onFocusCallback = React.useCallback(e => {
    dispatch({
      type: 'END_FOCUS'
    });
    props.children.props.onFocus && props.children.props.onFocus(e);
  }, [dispatch, props.children]);
  const handleBlur = React.useCallback(() => {
    dispatch({
      type: 'END_BLUR'
    });
    let parsedDate;
    if (customParseDate) {
      parsedDate = customParseDate(state.endInputValue);
    } else {
      parsedDate = parseInputValue({
        inputValue: state.endInputValue
      });
    }
    if (onChange && parsedDate && isValid.isValid(parsedDate) && !isSameDay.isSameDay(parsedDate, endValue)) {
      onChange && onChange({
        startValue,
        endValue: parsedDate
      });
    }
  }, [dispatch, onChange, startValue, endValue, customParseDate, state.endInputValue]);
  const onKeydownCallback = React.useCallback(e => {
    if (e.key === containerUtilities.KEYS.ENTER) {
      handleBlur();
      e.preventDefault();
    }
    props.children.props.onKeyDown && props.children.props.onKeyDown(e);
  }, [handleBlur, props.children]);
  const onBlurCallback = React.useCallback(e => {
    handleBlur();
    props.children.props.onBlur && props.children.props.onBlur(e);
  }, [handleBlur, props.children]);
  const childElement = React__namespace.default.Children.only(props.children);
  return React__namespace.default.cloneElement(childElement, {
    value: state.endInputValue || '',
    ref: endInputRef,
    onChange: containerUtilities.composeEventHandlers(childElement.props.onChange, onChangeCallback),
    onFocus: containerUtilities.composeEventHandlers(childElement.props.onFocus, onFocusCallback),
    onKeyDown: containerUtilities.composeEventHandlers(childElement.props.onKeyDown, onKeydownCallback),
    onBlur: containerUtilities.composeEventHandlers(childElement.props.onBlur, onBlurCallback)
  });
};
End.displayName = 'DatePickerRange.End';

const Month = React.forwardRef(({
  displayDate,
  isPreviousHidden,
  isNextHidden
}, ref) => {
  const {
    state,
    dispatch,
    locale,
    weekStartsOn,
    isCompact,
    minValue,
    maxValue,
    startValue,
    endValue,
    onChange
  } = useDatePickerContext();
  const headerLabelFormatter = React.useCallback(date => {
    const formatter = new Intl.DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric'
    });
    return formatter.format(date);
  }, [locale]);
  const dayLabelFormatter = React.useCallback(date => {
    const formatter = new Intl.DateTimeFormat(locale, {
      weekday: 'short'
    });
    return formatter.format(date);
  }, [locale]);
  const dayFormatter = React.useCallback(date => {
    const formatter = new Intl.DateTimeFormat(locale, {
      day: 'numeric'
    });
    return formatter.format(date);
  }, [locale]);
  const preferredWeekStartsOn = weekStartsOn || getStartOfWeek(locale);
  const monthStartDate = startOfMonth.startOfMonth(displayDate);
  const monthEndDate = endOfMonth.endOfMonth(monthStartDate);
  const startDate = startOfWeek.startOfWeek(monthStartDate, {
    weekStartsOn: preferredWeekStartsOn
  });
  const endDate = endOfWeek.endOfWeek(monthEndDate, {
    weekStartsOn: preferredWeekStartsOn
  });
  const dayLabels = eachDayOfInterval.eachDayOfInterval({
    start: startDate,
    end: addDays.addDays(startDate, 6)
  }).map(date => {
    const formattedDayLabel = dayLabelFormatter(date);
    return React__namespace.default.createElement(StyledCalendarItem, {
      key: `day-label-${formattedDayLabel}`,
      $isCompact: isCompact
    }, React__namespace.default.createElement(StyledDayLabel, {
      $isCompact: isCompact
    }, formattedDayLabel));
  });
  const items = eachDayOfInterval.eachDayOfInterval({
    start: startDate,
    end: endDate
  }).map(date => {
    const formattedDayLabel = dayFormatter(date);
    const isCurrentDate = isToday.isToday(date);
    const isPreviousMonth = !isSameMonth.isSameMonth(date, displayDate);
    if (isPreviousMonth) {
      return React__namespace.default.createElement(StyledCalendarItem, {
        key: date.toISOString(),
        $isCompact: isCompact
      }, React__namespace.default.createElement(StyledDay, {
        $isCompact: isCompact,
        $isPreviousMonth: true,
        "aria-disabled": true
      }, "\xA0"));
    }
    let isSelected = false;
    if (startValue !== undefined) {
      isSelected = isSameDay.isSameDay(date, startValue);
    }
    if (endValue !== undefined) {
      isSelected = isSelected || isSameDay.isSameDay(date, endValue);
    }
    let isDisabled = false;
    if (minValue !== undefined) {
      isDisabled = isBefore.isBefore(date, minValue) && !isSameDay.isSameDay(date, minValue);
    }
    if (maxValue !== undefined) {
      isDisabled = isDisabled || isAfter.isAfter(date, maxValue) && !isSameDay.isSameDay(date, maxValue);
    }
    let isHighlighted = false;
    if (startValue !== undefined && endValue !== undefined) {
      isHighlighted = (isAfter.isAfter(date, startValue) || isSameDay.isSameDay(date, startValue)) && (isBefore.isBefore(date, endValue) || isSameDay.isSameDay(date, endValue)) && !isSameDay.isSameDay(startValue, endValue);
    } else if (startValue !== undefined && state.hoverDate !== undefined) {
      isHighlighted = (isAfter.isAfter(date, startValue) || isSameDay.isSameDay(date, startValue)) && (isBefore.isBefore(date, state.hoverDate) || isSameDay.isSameDay(date, state.hoverDate));
    }
    const isHighlightStart = isHighlighted && startValue && isSameDay.isSameDay(date, startValue) || false;
    const isHighlightEnd = isHighlighted && endValue && isSameDay.isSameDay(date, endValue) || state.hoverDate && isSameDay.isSameDay(date, state.hoverDate) && !isBefore.isBefore(date, endValue) || false;
    let isInvalidDateRange = endValue && startValue && compareAsc.compareAsc(endValue, startValue) === -1 || false;
    if (minValue) {
      if (startValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc.compareAsc(startValue, subDays.subDays(minValue, 1)) === -1;
      }
      if (endValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc.compareAsc(endValue, subDays.subDays(minValue, 1)) === -1;
      }
    }
    if (maxValue) {
      if (startValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc.compareAsc(startValue, maxValue) === 1;
      }
      if (endValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc.compareAsc(endValue, maxValue) === 1;
      }
    }
    return React__namespace.default.createElement(StyledCalendarItem, {
      key: date.toISOString(),
      $isCompact: isCompact
    }, React__namespace.default.createElement(StyledHighlight, {
      $isHighlighted: !isInvalidDateRange && !!isHighlighted && !isDisabled,
      $isStart: !isInvalidDateRange && isHighlightStart,
      $isEnd: !isInvalidDateRange && isHighlightEnd
    }), React__namespace.default.createElement(StyledDay, {
      $isToday: isCurrentDate,
      $isPreviousMonth: isPreviousMonth,
      "aria-selected": !isInvalidDateRange && isSelected || undefined,
      "aria-disabled": isDisabled || undefined,
      $isCompact: isCompact,
      onClick: () => {
        if (!isDisabled) {
          dispatch({
            type: 'CLICK_DATE',
            value: date
          });
          if (onChange) {
            if (state.isStartFocused) {
              if (endValue !== undefined && (isBefore.isBefore(date, endValue) || isSameDay.isSameDay(date, endValue))) {
                onChange({
                  startValue: date,
                  endValue
                });
              } else {
                onChange({
                  startValue: date,
                  endValue: undefined
                });
              }
            } else if (state.isEndFocused) {
              if (startValue !== undefined && (isAfter.isAfter(date, startValue) || isSameDay.isSameDay(date, startValue))) {
                onChange({
                  startValue,
                  endValue: date
                });
              } else {
                onChange({
                  startValue: date,
                  endValue: undefined
                });
              }
            } else if (startValue === undefined) {
              onChange({
                startValue: date,
                endValue: undefined
              });
            } else if (endValue === undefined) {
              if (isBefore.isBefore(date, startValue)) {
                onChange({
                  startValue: date,
                  endValue: undefined
                });
              } else {
                onChange({
                  startValue,
                  endValue: date
                });
              }
            } else {
              onChange({
                startValue: date,
                endValue: undefined
              });
            }
          }
        }
      },
      onMouseEnter: () => {
        if (!isSelected) {
          dispatch({
            type: 'HOVER_DATE',
            value: date
          });
        }
      }
    }, formattedDayLabel));
  });
  return React__namespace.default.createElement(StyledDatePicker, {
    ref: ref,
    $isCompact: isCompact,
    onMouseDown: e => {
      e.preventDefault();
    }
  }, React__namespace.default.createElement(StyledHeader, {
    $isCompact: isCompact
  }, React__namespace.default.createElement(StyledHeaderPaddle, {
    $isCompact: isCompact,
    onClick: () => {
      dispatch({
        type: 'PREVIEW_PREVIOUS_MONTH'
      });
    },
    "aria-hidden": isPreviousHidden || undefined
  }, React__namespace.default.createElement(SvgChevronLeftStroke, null)), React__namespace.default.createElement(StyledHeaderLabel, {
    $isCompact: isCompact
  }, headerLabelFormatter(displayDate)), React__namespace.default.createElement(StyledHeaderPaddle, {
    $isCompact: isCompact,
    "aria-hidden": isNextHidden || undefined,
    onClick: () => {
      dispatch({
        type: 'PREVIEW_NEXT_MONTH'
      });
    }
  }, React__namespace.default.createElement(SvgChevronRightStroke, null))), React__namespace.default.createElement(StyledCalendar, {
    $isCompact: isCompact,
    onMouseLeave: () => {
      dispatch({
        type: 'HOVER_DATE',
        value: undefined
      });
    }
  }, dayLabels, items));
});
Month.displayName = 'Month';

const Calendar = React.forwardRef((props, ref) => {
  const {
    state
  } = useDatePickerContext();
  return React__namespace.default.createElement(StyledRangeCalendar, Object.assign({
    ref: ref,
    "data-garden-id": "datepickers.range",
    "data-garden-version": '9.12.3'
  }, props), React__namespace.default.createElement(Month, {
    displayDate: state.previewDate,
    isNextHidden: true
  }), React__namespace.default.createElement(Month, {
    displayDate: addMonths.addMonths(state.previewDate, 1),
    isPreviousHidden: true
  }));
});
Calendar.displayName = 'DatePickerRange.Calendar';

const DatePickerRangeComponent = props => {
  const {
    startValue,
    locale = 'en-US',
    weekStartsOn,
    formatDate,
    endValue,
    onChange,
    customParseDate,
    isCompact = false,
    minValue,
    maxValue,
    children
  } = props;
  const reducer = React.useCallback(datepickerRangeReducer({
    startValue,
    locale,
    formatDate,
    endValue,
    customParseDate
  }), [startValue, endValue, locale, formatDate, onChange, customParseDate]);
  const [state, dispatch] = React.useReducer(reducer, retrieveInitialState(props));
  const previousStartValue = React.useRef(startValue);
  const previousEndValue = React.useRef(endValue);
  const startInputRef = React.useRef();
  const endInputRef = React.useRef();
  React.useEffect(() => {
    dispatch({
      type: 'CONTROLLED_START_VALUE_CHANGE',
      value: startValue
    });
    if (endInputRef.current && previousStartValue.current !== startValue && startValue !== undefined) {
      endInputRef.current.focus();
    }
    previousStartValue.current = startValue;
  }, [props, startValue]);
  React.useEffect(() => {
    dispatch({
      type: 'CONTROLLED_END_VALUE_CHANGE',
      value: endValue
    });
    if (startInputRef.current && previousEndValue.current !== endValue && endValue !== undefined) {
      startInputRef.current.focus();
    }
    previousEndValue.current = endValue;
  }, [props, endValue]);
  const value = React.useMemo(() => ({
    state,
    dispatch,
    isCompact,
    locale,
    weekStartsOn,
    minValue,
    maxValue,
    startValue,
    endValue,
    onChange,
    startInputRef,
    endInputRef,
    customParseDate
  }), [state, dispatch, isCompact, locale, weekStartsOn, minValue, maxValue, startValue, endValue, onChange, startInputRef, endInputRef, customParseDate]);
  return React__namespace.default.createElement(DatePickerRangeContext.Provider, {
    value: value
  }, children);
};
DatePickerRangeComponent.propTypes = {
  locale: PropTypes__default.default.string,
  weekStartsOn: PropTypes__default.default.number,
  startValue: PropTypes__default.default.instanceOf(Date),
  endValue: PropTypes__default.default.instanceOf(Date),
  minValue: PropTypes__default.default.instanceOf(Date),
  maxValue: PropTypes__default.default.instanceOf(Date),
  onChange: PropTypes__default.default.func,
  formatDate: PropTypes__default.default.func,
  customParseDate: PropTypes__default.default.func,
  isCompact: PropTypes__default.default.bool
};
const DatePickerRange = DatePickerRangeComponent;
DatePickerRange.Calendar = Calendar;
DatePickerRange.End = End;
DatePickerRange.Start = Start;

exports.DatePicker = DatePicker;
exports.DatePickerRange = DatePickerRange;
