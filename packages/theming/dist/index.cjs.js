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
var color2k = require('color2k');
var polished = require('polished');
var get = require('lodash.get');
var memoize = require('lodash.memoize');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var get__default = /*#__PURE__*/_interopDefault(get);
var memoize__default = /*#__PURE__*/_interopDefault(memoize);

const mediaQuery$1 = typeof window === 'undefined' ? undefined : window.matchMedia('(prefers-color-scheme: dark)');
const useColorScheme$1 = (initialState, colorSchemeKey) => {
  const localStorage =
  typeof window === 'undefined' || colorSchemeKey === null ? undefined : window.localStorage;
  const getState = React.useCallback(_state => {
    const isSystem = _state === 'system' || _state === undefined || _state === null;
    let colorScheme;
    if (isSystem) {
      colorScheme = mediaQuery$1?.matches ? 'dark' : 'light';
    } else {
      colorScheme = _state;
    }
    return {
      isSystem,
      colorScheme
    };
  }, []);
  const [state, setState] = React.useState(getState(localStorage?.getItem(colorSchemeKey) || initialState));
  return {
    isSystem: state.isSystem,
    colorScheme: state.colorScheme,
    setColorScheme: colorScheme => {
      setState(getState(colorScheme));
      localStorage?.setItem(colorSchemeKey, colorScheme);
    }
  };
};
const ColorSchemeContext = React.createContext(undefined);
const ColorSchemeProvider = _ref => {
  let {
    children,
    colorSchemeKey = 'color-scheme',
    initialColorScheme = 'system'
  } = _ref;
  const {
    isSystem,
    colorScheme,
    setColorScheme
  } = useColorScheme$1(initialColorScheme, colorSchemeKey);
  const contextValue = React.useMemo(() => ({
    colorScheme,
    isSystem,
    setColorScheme
  }), [isSystem, colorScheme, setColorScheme]);
  React.useEffect(() => {
    const eventListener = () => {
      setColorScheme('system');
    };
    if (isSystem) {
      mediaQuery$1?.addEventListener('change', eventListener);
    } else {
      mediaQuery$1?.removeEventListener('change', eventListener);
    }
    return () => {
      mediaQuery$1?.removeEventListener('change', eventListener);
    };
  }, [isSystem, setColorScheme]);
  return React__default.default.createElement(ColorSchemeContext.Provider, {
    value: contextValue
  }, children);
};
ColorSchemeProvider.propTypes = {
  colorSchemeKey: PropTypes__default.default.string,
  initialColorScheme: PropTypes__default.default.oneOf(['light', 'dark', 'system'])
};

const PALETTE = {
  black: '#000',
  white: '#fff',
  product: {
    support: '#00a656',
    explore: '#30aabc',
    gather: '#f6c8be',
    guide: '#eb4962',
    chat: '#f79a3e',
    talk: '#efc93d',
    sell: '#c38f00'
  },
  grey: {
    100: '#f8f9f9',
    200: '#e8eaec',
    300: '#d8dcde',
    400: '#b0b8be',
    500: '#919ca5',
    600: '#848f99',
    700: '#5c6970',
    800: '#39434b',
    900: '#293239',
    1000: '#1c2227',
    1100: '#151a1e',
    1200: '#0a0d0e'
  },
  blue: {
    100: '#edf7ff',
    200: '#ddecf8',
    300: '#cce0f1',
    400: '#93bcdc',
    500: '#66a0cd',
    600: '#2694d6',
    700: '#1f73b7',
    800: '#13456d',
    900: '#0f3655',
    1000: '#0a2338',
    1100: '#061420',
    1200: '#040d15'
  },
  red: {
    100: '#fff2f3',
    200: '#fee3e5',
    300: '#f5d5d8',
    400: '#f2a1a8',
    500: '#ea7881',
    600: '#eb5c69',
    700: '#cd3642',
    800: '#7e1d25',
    900: '#671219',
    1000: '#3d1418',
    1100: '#1d1011',
    1200: '#100b0c'
  },
  yellow: {
    100: '#fff3e4',
    200: '#ffe6cb',
    300: '#fed6a9',
    400: '#fca347',
    500: '#e38215',
    600: '#d67305',
    700: '#ac5918',
    800: '#673515',
    900: '#4c2c17',
    1000: '#2d1e15',
    1100: '#18120f',
    1200: '#0e0c0b'
  },
  green: {
    100: '#eef8f4',
    200: '#daeee6',
    300: '#cae3d9',
    400: '#94c1b0',
    500: '#4eab89',
    600: '#26a178',
    700: '#037f52',
    800: '#104b35',
    900: '#0b3b29',
    1000: '#0c261c',
    1100: '#0a1511',
    1200: '#080d0c'
  },
  kale: {
    100: '#ecf9f9',
    200: '#daeded',
    300: '#cbe2e1',
    400: '#97bfbf',
    500: '#6ba4a5',
    600: '#4a9999',
    700: '#40787a',
    800: '#16494f',
    900: '#063940',
    1000: '#03252a',
    1100: '#061517',
    1200: '#060e0e'
  },
  fuschia: {
    100: '#fbf3f8',
    200: '#f7e6f1',
    300: '#f2d5e7',
    400: '#e3a4cc',
    500: '#d77db7',
    600: '#d16aac',
    700: '#b34496',
    800: '#78116c',
    900: '#5a0d51',
    1000: '#3f0939',
    1100: '#31072c',
    1200: '#1b0418'
  },
  pink: {
    100: '#fcf3f4',
    200: '#f7e5e8',
    300: '#f3d6dc',
    400: '#e5a6b4',
    500: '#d98193',
    600: '#d96b81',
    700: '#d62054',
    800: '#75263d',
    900: '#561d2e',
    1000: '#3c141f',
    1100: '#2e0f18',
    1200: '#17080c'
  },
  crimson: {
    100: '#fbf3f2',
    200: '#f7e7e4',
    300: '#f1d7d2',
    400: '#e2aaa0',
    500: '#d58678',
    600: '#cf7464',
    700: '#be4938',
    800: '#811b12',
    900: '#61140d',
    1000: '#440e09',
    1100: '#340b07',
    1200: '#1c0604'
  },
  orange: {
    100: '#fdf3ed',
    200: '#fae7d8',
    300: '#f7d7be',
    400: '#eda875',
    500: '#e58035',
    600: '#d57428',
    700: '#af5626',
    800: '#693317',
    900: '#4d2711',
    1000: '#361a0c',
    1100: '#291409',
    1200: '#150a04'
  },
  lemon: {
    100: '#fff7d4',
    200: '#ffea97',
    300: '#ffdc4f',
    400: '#efab00',
    500: '#c79100',
    600: '#b68500',
    700: '#8f6900',
    800: '#563e00',
    900: '#3f2e00',
    1000: '#2b2000',
    1100: '#221800',
    1200: '#110c00'
  },
  lime: {
    100: '#ecfae7',
    200: '#d1f3c7',
    300: '#b3eda3',
    400: '#4fd12b',
    500: '#45b025',
    600: '#509f2d',
    700: '#3d7e19',
    800: '#2c491b',
    900: '#203614',
    1000: '#16250e',
    1100: '#111d0a',
    1200: '#090e05'
  },
  mint: {
    100: '#d6ffeb',
    200: '#9affce',
    300: '#0afe89',
    400: '#00d26d',
    500: '#01b15c',
    600: '#16a260',
    700: '#2d7e55',
    800: '#1b4b33',
    900: '#143726',
    1000: '#0e261a',
    1100: '#0b1d14',
    1200: '#050e0a'
  },
  teal: {
    100: '#d4fefa',
    200: '#88fdf1',
    300: '#0bf8e1',
    400: '#03cdb8',
    500: '#02ad9c',
    600: '#2a9d8f',
    700: '#367a74',
    800: '#254846',
    900: '#1b3534',
    1000: '#122423',
    1100: '#0e1c1a',
    1200: '#070d0d'
  },
  azure: {
    100: '#eff7fe',
    200: '#d9ecfc',
    300: '#c4e0fa',
    400: '#82bcf4',
    500: '#4b9fee',
    600: '#3191ea',
    700: '#2770c3',
    800: '#23446b',
    900: '#1a3250',
    1000: '#122238',
    1100: '#0e1a2a',
    1200: '#070d14'
  },
  royal: {
    100: '#f4f5fc',
    200: '#e7e9f8',
    300: '#d8dcf4',
    400: '#acb4e7',
    500: '#8a96dd',
    600: '#7a88d9',
    700: '#4c67d3',
    800: '#1833ab',
    900: '#122680',
    1000: '#0d1a5a',
    1100: '#0a1445',
    1200: '#050a25'
  },
  purple: {
    100: '#f9f3fb',
    200: '#f2e7f6',
    300: '#e9d8f1',
    400: '#d0a9e0',
    500: '#bb86d3',
    600: '#b276cd',
    700: '#9256b1',
    800: '#58209a',
    900: '#411973',
    1000: '#2e1150',
    1100: '#230d3f',
    1200: '#120720'
  }
};

const BASE = 4;
const borderRadii = {
  sm: `${BASE / 2}px`,
  md: `${BASE}px`,
  lg: `${BASE * 2}px`
};
const borderStyles = {
  solid: 'solid'
};
const borderWidths = {
  sm: '1px',
  md: '3px'
};
const borders = {
  sm: `${borderWidths.sm} ${borderStyles.solid}`,
  md: `${borderWidths.md} ${borderStyles.solid}`
};
const breakpoints = {
  xs: '0px',
  sm: `${BASE * 144}px`,
  md: `${BASE * 192}px`,
  lg: `${BASE * 248}px`,
  xl: `${BASE * 300}px`
};
const colors = {
  primaryHue: 'blue',
  dangerHue: 'red',
  warningHue: 'yellow',
  successHue: 'green',
  neutralHue: 'grey',
  chromeHue: 'kale',
  variables: {
    dark: {
      background: {
        default: 'neutralHue.1100',
        raised: 'neutralHue.1000',
        recessed: 'neutralHue.1200',
        subtle: 'neutralHue.1000',
        emphasis: 'neutralHue.600',
        success: 'successHue.1000',
        warning: 'warningHue.1000',
        danger: 'dangerHue.1000',
        primaryEmphasis: 'primaryHue.600',
        successEmphasis: 'successHue.600',
        warningEmphasis: 'warningHue.600',
        dangerEmphasis: 'dangerHue.600',
        disabled: 'rgba(white, 100)'
      },
      border: {
        default: 'neutralHue.800',
        emphasis: 'neutralHue.600',
        subtle: 'neutralHue.900',
        success: 'successHue.900',
        warning: 'warningHue.900',
        danger: 'dangerHue.900',
        primaryEmphasis: 'primaryHue.600',
        successEmphasis: 'successHue.600',
        warningEmphasis: 'warningHue.600',
        dangerEmphasis: 'dangerHue.600',
        disabled: 'neutralHue.800'
      },
      foreground: {
        default: 'neutralHue.300',
        subtle: 'neutralHue.500',
        onEmphasis: 'neutralHue.1100',
        primary: 'primaryHue.600',
        success: 'successHue.400',
        warning: 'warningHue.400',
        danger: 'dangerHue.400',
        successEmphasis: 'successHue.300',
        warningEmphasis: 'warningHue.300',
        dangerEmphasis: 'dangerHue.300',
        disabled: 'neutralHue.700'
      },
      shadow: {
        small: 'rgba(neutralHue.1200, 1100)',
        medium: 'rgba(neutralHue.1200, 800)',
        large: 'rgba(neutralHue.1200, 1000)'
      }
    },
    light: {
      background: {
        default: 'palette.white',
        raised: 'palette.white',
        recessed: 'neutralHue.100',
        subtle: 'neutralHue.100',
        emphasis: 'neutralHue.700',
        success: 'successHue.100',
        warning: 'warningHue.100',
        danger: 'dangerHue.100',
        primaryEmphasis: 'primaryHue.700',
        successEmphasis: 'successHue.700',
        warningEmphasis: 'warningHue.700',
        dangerEmphasis: 'dangerHue.700',
        disabled: 'rgba(neutralHue.700, 100)'
      },
      border: {
        default: 'neutralHue.300',
        emphasis: 'neutralHue.600',
        subtle: 'neutralHue.200',
        success: 'successHue.300',
        warning: 'warningHue.300',
        danger: 'dangerHue.300',
        primaryEmphasis: 'primaryHue.700',
        successEmphasis: 'successHue.700',
        warningEmphasis: 'warningHue.700',
        dangerEmphasis: 'dangerHue.700',
        disabled: 'neutralHue.300'
      },
      foreground: {
        default: 'neutralHue.900',
        subtle: 'neutralHue.700',
        onEmphasis: 'palette.white',
        primary: 'primaryHue.700',
        success: 'successHue.700',
        warning: 'warningHue.700',
        danger: 'dangerHue.700',
        successEmphasis: 'successHue.900',
        warningEmphasis: 'warningHue.900',
        dangerEmphasis: 'dangerHue.900',
        disabled: 'neutralHue.600'
      },
      shadow: {
        small: 'rgba(neutralHue.1200, 200)',
        medium: 'rgba(neutralHue.1200, 200)',
        large: 'rgba(neutralHue.1200, 200)'
      }
    }
  }
};
const fonts = {
  mono: ['SFMono-Regular' , 'Consolas' , '"Liberation Mono"' , 'Menlo', 'Courier', 'monospace'].join(','),
  system: ['system-ui' , '-apple-system' , 'BlinkMacSystemFont' , '"Segoe UI"' , 'Roboto' , 'Oxygen-Sans' , 'Ubuntu' , 'Cantarell' , '"Helvetica Neue"', 'Arial', 'sans-serif'].join(',')
};
const fontSizes = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '22px',
  xxl: '26px',
  xxxl: '36px'
};
const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};
const iconSizes = {
  sm: '12px',
  md: '16px',
  lg: '26px'
};
const lineHeights = {
  sm: `${BASE * 4}px`,
  md: `${BASE * 5}px`,
  lg: `${BASE * 6}px`,
  xl: `${BASE * 7}px`,
  xxl: `${BASE * 8}px`,
  xxxl: `${BASE * 11}px`
};
const opacity = {
  100: 0.08,
  200: 0.16,
  300: 0.24,
  400: 0.32,
  500: 0.4,
  600: 0.48,
  700: 0.56,
  800: 0.64,
  900: 0.72,
  1000: 0.8,
  1100: 0.88,
  1200: 0.96
};
const palette = {
  ...PALETTE
};
delete palette.product;
const shadowWidths = {
  xs: '1px',
  sm: '2px',
  md: '3px'
};
const shadows = {
  xs: color => `0 0 0 ${shadowWidths.xs} ${color}`,
  sm: color => `0 0 0 ${shadowWidths.sm} ${color}`,
  md: color => `0 0 0 ${shadowWidths.md} ${color}`,
  lg: (offsetY, blurRadius, color) => `0 ${offsetY} ${blurRadius} 0 ${color}`
};
const space = {
  base: BASE,
  xxs: `${BASE}px`,
  xs: `${BASE * 2}px`,
  sm: `${BASE * 3}px`,
  md: `${BASE * 5}px`,
  lg: `${BASE * 8}px`,
  xl: `${BASE * 10}px`,
  xxl: `${BASE * 12}px`
};
const DEFAULT_THEME = {
  borders,
  borderRadii,
  borderStyles,
  borderWidths,
  breakpoints,
  colors: {
    base: 'light',
    ...colors
  },
  components: {},
  fonts,
  fontSizes,
  fontWeights,
  iconSizes,
  lineHeights,
  opacity,
  palette,
  rtl: false,
  shadowWidths,
  shadows,
  space
};

const ThemeProvider = _ref => {
  let {
    theme = DEFAULT_THEME,
    ...other
  } = _ref;
  return React__default.default.createElement(styled.ThemeProvider, Object.assign({
    theme: theme
  }, other));
};

function retrieveComponentStyles(componentId, props) {
  const components = props.theme?.components;
  if (!components) {
    return undefined;
  }
  const componentStyles = components[componentId];
  if (typeof componentStyles === 'function') {
    return componentStyles(props);
  }
  return componentStyles;
}

const componentStyles = props => {
  let retVal;
  const components = props.theme.components;
  const componentId = props.componentId || props['data-garden-id'];
  if (components && componentId) {
    retVal = components[componentId];
    if (typeof retVal === 'function') {
      const fn = retVal;
      retVal = fn(props);
    }
  }
  return retVal;
};

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

const adjust$1 = (color, expected, actual) => {
  if (expected !== actual) {
    const amount = Math.abs(expected - actual) / 100 * 0.05;
    return expected > actual ? polished.darken(amount, color) : polished.lighten(amount, color);
  }
  return color;
};
const toShade = (shade, offset, transparency, scheme) => {
  let _shade;
  if (shade === undefined) {
    const darkShade = transparency === undefined ? 600 : 500;
    _shade = scheme === 'dark' ? darkShade : 700;
  } else {
    _shade = parseInt(shade.toString(), 10);
    if (isNaN(_shade)) {
      throw new TypeError(`Error: unexpected '${typeof shade}' type for color shade "${shade}"`);
    }
  }
  return _shade + (offset || 0);
};
const toHex = (hue, shade, offset, transparency, scheme) => {
  const _shade = toShade(shade, offset, transparency, scheme);
  let retVal = hue[_shade];
  if (!retVal) {
    const closestShade = Object.keys(hue).map(hueShade => parseInt(hueShade, 10)).reduce((previous, current) => {
      return Math.abs(current - _shade) < Math.abs(previous - _shade) ? current : previous;
    });
    retVal = adjust$1(hue[closestShade], _shade, closestShade);
  }
  return retVal;
};
const isValidColor = maybeColor => {
  let retVal = ['currentcolor', 'inherit', 'transparent'].includes(maybeColor);
  if (!retVal) {
    try {
      retVal = !!color2k.parseToRgba(maybeColor);
    } catch {
      retVal = false;
    }
  }
  return retVal;
};
function findNearestIndex(target, arr) {
  let startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (typeof target !== 'number' || isNaN(target)) {
    throw new Error('Target must be a number.');
  }
  if (!Array.isArray(arr)) {
    throw new Error('Second argument must be an array.');
  }
  let left = startIndex;
  let right = arr.length - 1;
  if (target < arr[left]) return left;
  if (target > arr[right]) return right;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return arr[left] - target < target - arr[right] ? left : right;
}
const OFFSET_TO_TARGET_RATIO = {
  100: 1.08,
  200: 1.2,
  300: 1.35,
  400: 2,
  500: 2.8,
  600: 3.3,
  700: 5,
  800: 10,
  900: 13,
  1000: 16,
  1100: 17.5,
  1200: 19
};
const generateColorScale = memoize__default.default(color => {
  const scaleSize = 200;
  const _scale = color2k.getScale('#FFF', color, '#000');
  const scale = x => _scale(x / scaleSize);
  const colors = [];
  const contrastRatios = [];
  for (let i = 0; i <= scaleSize; i++) {
    const _color = color2k.toHex(scale(i));
    colors.push(_color);
    contrastRatios.push(polished.getContrast('#FFF', _color));
  }
  const palette = {};
  let startIndex = 0;
  for (const offset in OFFSET_TO_TARGET_RATIO) {
    if (Object.prototype.hasOwnProperty.call(OFFSET_TO_TARGET_RATIO, offset)) {
      const ratio = OFFSET_TO_TARGET_RATIO[offset];
      const nearestIndex = findNearestIndex(ratio, contrastRatios, startIndex);
      startIndex = nearestIndex + 1;
      palette[offset] = colors[nearestIndex];
    }
  }
  return palette;
});
const toColor = (colors, palette, opacity, scheme, hue, shade, offset, transparency) => {
  let retVal;
  let _hue = colors[hue]  || hue;
  if (Object.prototype.hasOwnProperty.call(palette, _hue)) {
    _hue = palette[_hue];
  }
  if (typeof _hue === 'object') {
    retVal = toHex(_hue, shade, offset, transparency, scheme);
  } else if (isValidColor(_hue)) {
    if (shade === undefined) {
      retVal = _hue;
    } else {
      _hue = generateColorScale(_hue);
      retVal = toHex(_hue, shade, offset, transparency, scheme);
    }
  }
  if (retVal && transparency) {
    const alpha = transparency > 1 ? opacity[transparency] : transparency;
    if (alpha === undefined) {
      throw new Error('Error: invalid `transparency` parameter');
    }
    retVal = polished.rgba(retVal, alpha);
  }
  return retVal;
};
const toProperty = (object, path) => {
  const retVal = get__default.default(object, path);
  if (typeof retVal === 'string') {
    return retVal;
  } else if (retVal === undefined) {
    throw new ReferenceError(`Error: color variable '${path}' is not defined`);
  } else {
    throw new TypeError(`Error: unexpected '${typeof retVal}' type for color variable "${path}"`);
  }
};
const fromRgba = value => {
  let retVal;
  const regex = /rgba\s*\(\s*(?<property>[#\w.]+)\s*,\s*(?<alpha>[\w.]+)\s*\)/gu;
  const _rgba = regex.exec(value);
  if (_rgba && _rgba.groups) {
    const property = _rgba.groups.property;
    const transparency = parseFloat(_rgba.groups.alpha);
    retVal = {
      property,
      transparency
    };
  } else {
    throw new Error(`Error: invalid \`rgba\` value "${value}"`);
  }
  return retVal;
};
const fromVariable = (variable, variables, palette) => {
  const retVal = {};
  let property = toProperty(variables, variable);
  if (property.startsWith('rgba')) {
    const value = fromRgba(property);
    property = value.property;
    retVal.transparency = value.transparency;
  }
  const [key, value] = property.split(/\.(?<value>.*)/u);
  if (key === 'palette') {
    retVal.hue = toProperty(palette, value);
  } else {
    retVal.hue = key;
    if (value !== undefined) {
      retVal.shade = parseInt(value, 10);
    }
  }
  return retVal;
};
const CACHE$1 = new WeakMap();
const KEYS$1 = {
  colors: 0,
  palette: 0,
  opacity: 0
};
CACHE$1.set(DEFAULT_THEME.colors, KEYS$1.colors);
CACHE$1.set(DEFAULT_THEME.palette, KEYS$1.palette);
CACHE$1.set(DEFAULT_THEME.opacity, KEYS$1.opacity);
const toKey$1 = _ref => {
  let {
    dark,
    hue,
    light,
    offset,
    shade,
    theme,
    transparency,
    variable
  } = _ref;
  let themeColorsKey;
  if (theme.colors) {
    themeColorsKey = CACHE$1.get(theme.colors);
    if (themeColorsKey === undefined) {
      themeColorsKey = ++KEYS$1.colors;
      CACHE$1.set(theme.colors, themeColorsKey);
    }
  }
  let themeOpacityKey;
  if (theme.opacity) {
    themeOpacityKey = CACHE$1.get(theme.opacity);
    if (themeOpacityKey === undefined) {
      themeOpacityKey = ++KEYS$1.opacity;
      CACHE$1.set(theme.opacity, themeOpacityKey);
    }
  }
  let themePaletteKey;
  if (theme.palette) {
    themePaletteKey = CACHE$1.get(theme.palette);
    if (themePaletteKey === undefined) {
      themePaletteKey = ++KEYS$1.palette;
      CACHE$1.set(theme.palette, themePaletteKey);
    }
  }
  let retVal = `{${themeColorsKey},${themePaletteKey},${themeOpacityKey}}`;
  if (variable !== undefined) {
    retVal += `,${variable}`;
  }
  if (hue !== undefined) {
    retVal += `,${hue}`;
  }
  if (shade !== undefined) {
    retVal += `,${shade}`;
  }
  if (offset !== undefined) {
    retVal += `,${offset}`;
  }
  if (transparency !== undefined) {
    retVal += `,${transparency}`;
  }
  if (dark !== undefined) {
    retVal += `,${JSON.stringify(dark)}`;
  }
  if (light !== undefined) {
    retVal += `,${JSON.stringify(light)}`;
  }
  return retVal;
};
const getColor = memoize__default.default(_ref2 => {
  let {
    dark,
    hue,
    light,
    offset,
    shade,
    theme,
    transparency,
    variable
  } = _ref2;
  let retVal;
  const palette = theme.palette && Object.keys(theme.palette).length > 0 ? theme.palette : DEFAULT_THEME.palette;
  const {
    base,
    variables,
    ...colors
  } = theme.colors && Object.keys(theme.colors).length > 0 ? theme.colors : DEFAULT_THEME.colors;
  const scheme = base === 'dark' ? 'dark' : 'light';
  const mode = scheme === 'dark' ? dark : light;
  let _hue = mode?.hue || hue;
  let _shade = mode?.shade === undefined ? shade : mode.shade;
  const _offset = mode?.offset === undefined ? offset : mode.offset;
  let _transparency = mode?.transparency === undefined ? transparency : mode.transparency;
  if (variable) {
    const _variables = variables?.[scheme] ? variables[scheme] : DEFAULT_THEME.colors.variables[scheme];
    const value = fromVariable(variable, _variables, palette);
    _hue = value.hue;
    _shade = value.shade;
    _transparency = _transparency === undefined ? value.transparency : _transparency;
  }
  if (_hue) {
    const opacity = theme.opacity && Object.keys(theme.opacity).length > 0 ? theme.opacity : DEFAULT_THEME.opacity;
    retVal = toColor(colors, palette, opacity, scheme, _hue, _shade, _offset, _transparency);
  }
  if (retVal === undefined) {
    throw new Error('Error: invalid `getColor` parameters');
  }
  return retVal;
}, _ref3 => {
  let {
    dark,
    hue,
    light,
    offset,
    shade,
    theme,
    transparency,
    variable
  } = _ref3;
  return toKey$1({
    dark,
    hue,
    light,
    offset,
    shade,
    theme,
    transparency,
    variable
  });
});

const getCheckeredBackground = _ref => {
  let {
    theme,
    size,
    overlay,
    positionY = 0,
    repeat = 'repeat'
  } = _ref;
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

const PALETTE_V8 = {
  black: '#000',
  white: '#fff',
  product: {
    support: '#00a656',
    message: '#37b8af',
    explore: '#30aabc',
    gather: '#f6c8be',
    guide: '#eb4962',
    connect: '#ff6224',
    chat: '#f79a3e',
    talk: '#efc93d',
    sell: '#c38f00'
  },
  grey: {
    100: '#f8f9f9',
    200: '#e9ebed',
    300: '#d8dcde',
    400: '#c2c8cc',
    500: '#87929d',
    600: '#68737d',
    700: '#49545c',
    800: '#2f3941'
  },
  blue: {
    100: '#edf7ff',
    200: '#cee2f2',
    300: '#adcce4',
    400: '#5293c7',
    500: '#337fbd',
    600: '#1f73b7',
    700: '#144a75',
    800: '#0f3554'
  },
  red: {
    100: '#fff0f1',
    200: '#f5d5d8',
    300: '#f5b5ba',
    400: '#e35b66',
    500: '#d93f4c',
    600: '#cc3340',
    700: '#8c232c',
    800: '#681219'
  },
  yellow: {
    100: '#fff7ed',
    200: '#ffeedb',
    300: '#fed6a8',
    400: '#ffb057',
    500: '#f79a3e',
    600: '#ed8f1c',
    700: '#ad5918',
    800: '#703815'
  },
  green: {
    100: '#edf8f4',
    200: '#d1e8df',
    300: '#aecfc2',
    400: '#5eae91',
    500: '#228f67',
    600: '#038153',
    700: '#186146',
    800: '#0b3b29'
  },
  kale: {
    100: '#f5fcfc',
    200: '#daeded',
    300: '#bdd9d7',
    400: '#90bbbb',
    500: '#498283',
    600: '#17494d',
    700: '#03363d',
    800: '#012b30'
  },
  fuschia: {
    400: '#d653c2',
    600: '#a81897',
    M400: '#cf62a8',
    M600: '#a8458c'
  },
  pink: {
    400: '#ec4d63',
    600: '#d42054',
    M400: '#d57287',
    M600: '#b23a5d'
  },
  crimson: {
    400: '#e34f32',
    600: '#c72a1c',
    M400: '#cc6c5b',
    M600: '#b24a3c'
  },
  orange: {
    400: '#de701d',
    600: '#bf5000',
    M400: '#d4772c',
    M600: '#b35827'
  },
  lemon: {
    400: '#ffd424',
    600: '#ffbb10',
    M400: '#e7a500',
    M600: '#c38f00'
  },
  lime: {
    400: '#43b324',
    600: '#2e8200',
    M400: '#519e2d',
    M600: '#47782c'
  },
  mint: {
    400: '#00a656',
    600: '#058541',
    M400: '#299c66',
    M600: '#2e8057'
  },
  teal: {
    400: '#02a191',
    600: '#028079',
    M400: '#2d9e8f',
    M600: '#3c7873'
  },
  azure: {
    400: '#3091ec',
    600: '#1371d6',
    M400: '#5f8dcf',
    M600: '#3a70b2'
  },
  royal: {
    400: '#5d7df5',
    600: '#3353e2',
    M400: '#7986d8',
    M600: '#4b61c3'
  },
  purple: {
    400: '#b552e2',
    600: '#6a27b8',
    M400: '#b072cc',
    M600: '#9358b0'
  }
};

const DEFAULT_SHADE = 600;
const adjust = (color, expected, actual) => {
  if (expected !== actual) {
    const amount = Math.abs(expected - actual) / 100 * 0.05;
    return expected > actual ? polished.darken(amount, color) : polished.lighten(amount, color);
  }
  return color;
};
const CACHE = new WeakMap();
const KEYS = {
  colors: 0,
  palette: 0
};
CACHE.set(DEFAULT_THEME.colors, KEYS.colors);
CACHE.set(DEFAULT_THEME.palette, KEYS.palette);
const toKey = _ref => {
  let {
    hue,
    shade,
    theme,
    transparency
  } = _ref;
  let retVal = `${typeof hue === 'object' ? JSON.stringify(hue) : hue}`;
  if (shade !== undefined) {
    retVal += `,${shade}`;
  }
  if (theme !== undefined) {
    let themeColorsKey;
    if (theme.colors) {
      themeColorsKey = CACHE.get(theme.colors);
      if (themeColorsKey === undefined) {
        themeColorsKey = ++KEYS.colors;
        CACHE.set(theme.colors, themeColorsKey);
      }
    }
    let themePaletteKey;
    if (theme.palette) {
      themePaletteKey = CACHE.get(theme.palette);
      if (themePaletteKey === undefined) {
        themePaletteKey = ++KEYS.palette;
        CACHE.set(theme.palette, themePaletteKey);
      }
    }
    retVal += `,{${themeColorsKey},${themePaletteKey}}`;
  }
  if (transparency !== undefined) {
    retVal += `,${transparency}`;
  }
  return retVal;
};
const getColorV8 = memoize__default.default(function (hue) {
  let shade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_SHADE;
  let theme = arguments.length > 2 ? arguments[2] : undefined;
  let transparency = arguments.length > 3 ? arguments[3] : undefined;
  let retVal;
  if (isNaN(shade)) {
    return undefined;
  }
  const palette = {
    background: PALETTE_V8.white,
    foreground: PALETTE_V8.grey[800],
    ...(theme && theme.palette ? {
      ...theme.palette,
      ...PALETTE_V8
    } : {
      ...DEFAULT_THEME.palette,
      ...PALETTE_V8
    })
  };
  const colors = theme && theme.colors ? theme.colors : DEFAULT_THEME.colors;
  let _hue;
  if (typeof hue === 'string') {
    _hue = colors[hue] || hue;
  } else {
    _hue = hue;
  }
  if (Object.prototype.hasOwnProperty.call(palette, _hue)) {
    _hue = palette[_hue];
  }
  if (typeof _hue === 'object') {
    retVal = _hue[shade];
    if (!retVal) {
      const _shade = Object.keys(_hue).map(hueKey => parseInt(hueKey, 10)).reduce((previous, current) => {
        return Math.abs(current - shade) < Math.abs(previous - shade) ? current : previous;
      });
      retVal = adjust(_hue[_shade], shade, _shade);
    }
  } else {
    retVal = adjust(_hue, shade, DEFAULT_SHADE);
  }
  if (transparency) {
    retVal = polished.rgba(retVal, transparency);
  }
  return retVal;
}, (hue, shade, theme, transparency) => toKey({
  hue,
  shade,
  theme,
  transparency
}));

const PLACEMENT_MAP = {
  end: 'right',
  'end-top': 'right-start',
  'end-bottom': 'right-end',
  start: 'left',
  'start-top': 'left-start',
  'start-bottom': 'left-end'
};
const RTL_PLACEMENT_MAP = {
  left: 'right',
  'left-start': 'right-start',
  'left-end': 'right-end',
  right: 'left',
  'right-start': 'left-start',
  'right-end': 'left-end'
};
const toFloatingPlacement = (placement, theme) => {
  let retVal = PLACEMENT_MAP[placement] || placement;
  if (theme.rtl) {
    retVal = RTL_PLACEMENT_MAP[retVal] || retVal;
  }
  return retVal;
};
const SIDE_FALLBACKS_MAP = {
  top: ['top-start', 'top', 'top-end'],
  right: ['right-start', 'right', 'right-end'],
  bottom: ['bottom-start', 'bottom', 'bottom-end'],
  left: ['left-start', 'left', 'left-end']
};
const SIDE_OPPOSITE_MAP = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};
const toFallbackPlacements = (primaryPlacement, theme, fallbackPlacements) => {
  if (Array.isArray(fallbackPlacements) && fallbackPlacements.length > 0) {
    return fallbackPlacements.map(fallbackPlacement => toFloatingPlacement(fallbackPlacement, theme));
  }
  const side = primaryPlacement.split('-')[0];
  const sameSideFallbackPlacements = [...SIDE_FALLBACKS_MAP[side]];
  const oppositeSideFallbackPlacements = SIDE_FALLBACKS_MAP[SIDE_OPPOSITE_MAP[side]];
  sameSideFallbackPlacements.splice(sameSideFallbackPlacements.indexOf(primaryPlacement), 1);
  return [...sameSideFallbackPlacements, ...oppositeSideFallbackPlacements];
};
const getFloatingPlacements = (theme, placement, fallbackPlacements) => {
  const floatingPlacement = toFloatingPlacement(placement, theme);
  const floatingFallbackPlacements = toFallbackPlacements(floatingPlacement, theme, fallbackPlacements);
  return [floatingPlacement, floatingFallbackPlacements];
};

const getFocusBoxShadow = _ref => {
  let {
    boxShadow,
    inset = false,
    color = {
      variable: 'border.primaryEmphasis'
    },
    shadowWidth = 'md',
    spacerColor = {
      variable: 'background.default'
    },
    spacerWidth = 'xs',
    theme = DEFAULT_THEME,
    ...args
  } = _ref;
  const _args = args;
  const _color = _args.hue ? getColorV8(_args.hue, _args.shade, theme) : getColor({
    ...color,
    theme
  });
  const shadow = theme.shadows[shadowWidth](_color);
  if (spacerWidth === null) {
    return `${inset ? 'inset' : ''} ${shadow}`;
  }
  const _spacerColor = _args.spacerHue ? getColorV8(_args.spacerHue, _args.spacerShade, theme) : getColor({
    ...spacerColor,
    theme
  });
  const retVal = `
    ${inset ? 'inset' : ''} ${theme.shadows[spacerWidth](_spacerColor)},
    ${inset ? 'inset' : ''} ${shadow}`;
  return boxShadow ? `${retVal}, ${boxShadow}` : retVal;
};

function getLineHeight(height, fontSize) {
  const [heightValue, heightUnit] = polished.getValueAndUnit(height.toString());
  const [fontSizeValue, fontSizeUnit] = polished.getValueAndUnit(fontSize.toString());
  const PIXELS = 'px';
  if (heightUnit && heightUnit !== PIXELS) {
    throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`);
  }
  if (fontSizeUnit && fontSizeUnit !== PIXELS) {
    throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`);
  }
  return heightValue / fontSizeValue;
}

const getMenuPosition = placement => {
  return placement.split('-')[0];
};

const maxWidth = (breakpoints, breakpoint) => {
  const keys = Object.keys(breakpoints);
  const index = keys.indexOf(breakpoint) + 1;
  if (keys[index]) {
    const dimension = polished.getValueAndUnit(breakpoints[keys[index]]);
    const value = dimension[0] - 0.02;
    const unit = dimension[1];
    return `${value}${unit}`;
  }
  return undefined;
};
function mediaQuery(query, breakpoint, theme) {
  let retVal;
  let min;
  let max;
  const breakpoints = theme && theme.breakpoints ? theme.breakpoints : DEFAULT_THEME.breakpoints;
  if (typeof breakpoint === 'string') {
    if (query === 'up') {
      min = breakpoints[breakpoint];
    } else if (query === 'down') {
      if (breakpoint === 'xl') {
        min = DEFAULT_THEME.breakpoints.xs;
      } else {
        max = maxWidth(breakpoints, breakpoint);
      }
    } else if (query === 'only') {
      min = breakpoints[breakpoint];
      max = maxWidth(breakpoints, breakpoint);
    }
  } else if (query === 'between') {
    min = breakpoints[breakpoint[0]];
    max = maxWidth(breakpoints, breakpoint[1]);
  }
  if (min) {
    retVal = `@media (min-width: ${min})`;
    if (max) {
      retVal = `${retVal} and (max-width: ${max})`;
    }
  } else if (max) {
    retVal = `@media (max-width: ${max})`;
  } else {
    throw new Error(`Unexpected query and breakpoint combination: '${query}', '${breakpoint}'.`);
  }
  return retVal;
}

const animationStyles$1 = (position, modifier) => {
  const property = position.split('-')[0];
  const animationName = styled.keyframes(["0%,66%{", ":2px;border:transparent;}"], property);
  return styled.css(["&", "::before,&", "::after{animation:0.3s ease-in-out ", ";}"], modifier, modifier, animationName);
};
const positionStyles = (position, size, inset, shift) => {
  const defaultInset = 0.3;
  const margin = size / -2;
  const placement = Math.round((margin + inset + defaultInset) * 100) / 100;
  const marginPx = `${margin}px`;
  const placementPx = `${placement}px`;
  const offsetPx = `${size + shift}px`;
  let positionCss;
  let transform;
  if (position.startsWith('top')) {
    transform = 'rotate(-135deg)';
    positionCss = styled.css(["top:", ";right:", ";left:", ";margin-left:", ";"], placementPx, position === 'top-right' && offsetPx, position === 'top' ? '50%' : position === 'top-left' && offsetPx, position === 'top' && marginPx);
  } else if (position.startsWith('right')) {
    transform = 'rotate(-45deg)';
    positionCss = styled.css(["top:", ";right:", ";bottom:", ";margin-top:", ";"], position === 'right' ? '50%' : position === 'right-top' && offsetPx, placementPx, position === 'right-bottom' && offsetPx, position === 'right' && marginPx);
  } else if (position.startsWith('bottom')) {
    transform = 'rotate(45deg)';
    positionCss = styled.css(["right:", ";bottom:", ";left:", ";margin-left:", ";"], position === 'bottom-right' && offsetPx, placementPx, position === 'bottom' ? '50%' : position === 'bottom-left' && offsetPx, position === 'bottom' && marginPx);
  } else if (position.startsWith('left')) {
    transform = 'rotate(135deg)';
    positionCss = styled.css(["top:", ";bottom:", ";left:", ";margin-top:", ";"], position === 'left' ? '50%' : position === 'left-top' && offsetPx, offsetPx, placementPx, position === 'left' && marginPx);
  }
  return styled.css(["&::before,&::after{transform:", ";", ";}"], transform, positionCss);
};
function arrowStyles(position) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const inset = polished.stripUnit(options.inset || '0');
  const size = polished.stripUnit(options.size || '6');
  const shift = polished.stripUnit(options.shift || '0');
  const sizeOffset = 2;
  const squareSize = size * 2 / Math.sqrt(2) + sizeOffset;
  const squareSizeRounded = Math.round(squareSize * 100) / 100;
  const squareSizePx = `${squareSizeRounded}px`;
  const afterOffset = 0;
  const beforeOffset = afterOffset + 2;
  return styled.css(["position:relative;&::before,&::after{position:absolute;border-width:inherit;border-style:inherit;background-color:inherit;width:", ";height:", ";content:'';box-sizing:inherit;}&::before{border-color:inherit;clip-path:polygon(100% ", "px,", "px 100%,100% 100%);}&::after{border-color:transparent;background-clip:content-box;clip-path:polygon(100% ", "px,", "px 100%,100% 100%);}", ";", ";"], squareSizePx, squareSizePx, beforeOffset, beforeOffset, afterOffset, afterOffset, positionStyles(position, squareSizeRounded, inset, shift), options.animationModifier && animationStyles$1(position, options.animationModifier));
}

const useColorScheme = () => {
  const context = React.useContext(ColorSchemeContext);
  if (!context) {
    throw new Error('Error: this component must be rendered within a <ColorSchemeProvider>.');
  }
  return context;
};

const useDocument = theme => {
  const [controlledDocument, setControlledDocument] = React.useState();
  React.useEffect(() => {
    if (theme && theme.document) {
      setControlledDocument(theme.document);
    } else {
      setControlledDocument(document);
    }
  }, [theme]);
  return controlledDocument;
};

const useWindow = theme => {
  const [controlledWindow, setControlledWindow] = React.useState();
  React.useEffect(() => {
    if (theme && theme.window) {
      setControlledWindow(theme.window);
    } else {
      setControlledWindow(window);
    }
  }, [theme]);
  return controlledWindow;
};

const useText = function (component, props, name, text) {
  let condition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  const value = condition ? props[name] : undefined;
  return React.useMemo(() => {
    if (condition) {
      if (name === 'children') {
        throw new Error('Error: `children` is not a valid `useText` prop.');
      } else if (value === null || value === '') {
        throw new Error(component.displayName ? `Error: you must provide a valid \`${name}\` text value for <${component.displayName}>.` : `Error: you must provide a valid \`${name}\` text value.`);
      } else if (value === undefined) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(component.displayName ? `Warning: you did not provide a customized/translated \`${name}\` text value for <${component.displayName}>. Zendesk Garden is rendering <${component.displayName} ${name}="${text}"> by default.` : `Warning: you did not provide a customized/translated \`${name}\` text value. Zendesk Garden is rendering ${name}="${text}" by default.`);
        }
        return text;
      }
    }
    return value;
  }, [component.displayName, value, name, text, condition]);
};

const animationStyles = (position, options) => {
  const theme = options.theme || DEFAULT_THEME;
  let translateValue = `${theme.space.base * 5}px`;
  let transformFunction;
  if (position === 'top') {
    transformFunction = 'translateY';
  } else if (position === 'right') {
    transformFunction = 'translateX';
    translateValue = `-${translateValue}`;
  } else if (position === 'bottom') {
    transformFunction = 'translateY';
    translateValue = `-${translateValue}`;
  } else {
    transformFunction = 'translateX';
  }
  const animationName = styled.keyframes(["0%{transform:", "(", ");pointer-events:none;}100%{pointer-events:auto;}"], transformFunction, translateValue);
  return styled.css(["&", " ", "{animation:0.2s cubic-bezier(0.15,0.85,0.35,1.2) ", ";}"], options.animationModifier, options.childSelector || '> *', animationName);
};
const colorStyles = theme => {
  const backgroundColor = getColor({
    theme,
    variable: 'background.raised'
  });
  const borderColor = getColor({
    theme,
    variable: 'border.default'
  });
  const boxShadowColor = getColor({
    variable: 'shadow.medium',
    theme
  });
  const boxShadowBlurRadius = `${theme.space.base * (theme.colors.base === 'dark' ? 5 : 6)}px`;
  const boxShadowOffsetY = `${theme.space.base * (theme.colors.base === 'dark' ? 4 : 5)}px`;
  const foregroundColor = getColor({
    theme,
    variable: 'foreground.default'
  });
  return styled.css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";"], borderColor, theme.shadows.lg(boxShadowOffsetY, boxShadowBlurRadius, boxShadowColor), backgroundColor, foregroundColor);
};
const hiddenStyles = options => {
  const transition = 'opacity 0.2s ease-in-out, 0.2s visibility 0s linear';
  return styled.css(["transition:", ";visibility:hidden;opacity:0;"], options.animationModifier && transition);
};
function menuStyles(position) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const theme = options.theme || DEFAULT_THEME;
  let marginProperty;
  if (position === 'top') {
    marginProperty = 'margin-bottom';
  } else if (position === 'right') {
    marginProperty = 'margin-left';
  } else if (position === 'bottom') {
    marginProperty = 'margin-top';
  } else {
    marginProperty = 'margin-right';
  }
  return styled.css(["position:absolute;z-index:", ";", ":", ";line-height:0;font-size:0.01px;color-scheme:only ", ";& ", "{display:inline-block;position:relative;margin:0;box-sizing:border-box;border:", ";border-radius:", ";cursor:default;padding:0;text-align:", ";white-space:normal;font-size:", ";font-weight:", ";direction:", ";", ";&:focus{outline:none;}}", ";", ";"], options.zIndex || 0, marginProperty, options.margin, p => p.theme.colors.base, options.childSelector || '> *', theme.borders.sm, theme.borderRadii.md, theme.rtl ? 'right' : 'left', theme.fontSizes.md, theme.fontWeights.regular, theme.rtl && 'rtl', colorStyles(theme), options.animationModifier && animationStyles(position, options), options.hidden && hiddenStyles(options));
}

const SELECTOR_FOCUS_VISIBLE = '&:focus-visible';
const focusStyles = _ref => {
  let {
    condition = true,
    selector = SELECTOR_FOCUS_VISIBLE,
    shadowWidth = 'md',
    spacerWidth = 'xs',
    styles: {
      boxShadow,
      ...styles
    } = {},
    theme,
    ...options
  } = _ref;
  const _boxShadow = condition ? getFocusBoxShadow({
    boxShadow,
    shadowWidth,
    spacerWidth,
    theme,
    ...options
  }) : boxShadow;
  let outline;
  let outlineOffset;
  if (spacerWidth === null) {
    outline = theme.shadowWidths[shadowWidth];
  } else {
    outline = `${polished.math(`${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`)} solid transparent`;
    outlineOffset = theme.shadowWidths[spacerWidth];
  }
  return styled.css(["&:focus{outline:none;}", "{outline:", ";outline-offset:", ";box-shadow:", ";", "}"], selector, outline, outlineOffset, _boxShadow, styles);
};

const StyledBaseIcon = styled__default.default(
_ref => {
  let {
    children,
    theme,
    ...props
  } = _ref;
  return React.cloneElement(React.Children.only(children), props);
}).withConfig({
  displayName: "StyledBaseIcon",
  componentId: "sc-1moykgb-0"
})([""]);

const ARROW_POSITION = ['top', 'top-left', 'top-right', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right', 'left', 'left-top', 'left-bottom'];
const MENU_POSITION = ['top', 'right', 'bottom', 'left'];
const PLACEMENT = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'end', 'end-top', 'end-bottom', 'start', 'start-top', 'start-bottom'];

exports.ARROW_POSITION = ARROW_POSITION;
exports.ColorSchemeProvider = ColorSchemeProvider;
exports.DEFAULT_THEME = DEFAULT_THEME;
exports.MENU_POSITION = MENU_POSITION;
exports.PALETTE = PALETTE;
exports.PLACEMENT = PLACEMENT;
exports.SELECTOR_FOCUS_VISIBLE = SELECTOR_FOCUS_VISIBLE;
exports.StyledBaseIcon = StyledBaseIcon;
exports.ThemeProvider = ThemeProvider;
exports.arrowStyles = arrowStyles;
exports.componentStyles = componentStyles;
exports.focusStyles = focusStyles;
exports.getArrowPosition = getArrowPosition;
exports.getCheckeredBackground = getCheckeredBackground;
exports.getColor = getColor;
exports.getColorV8 = getColorV8;
exports.getFloatingPlacements = getFloatingPlacements;
exports.getFocusBoxShadow = getFocusBoxShadow;
exports.getLineHeight = getLineHeight;
exports.getMenuPosition = getMenuPosition;
exports.mediaQuery = mediaQuery;
exports.menuStyles = menuStyles;
exports.retrieveComponentStyles = retrieveComponentStyles;
exports.useColorScheme = useColorScheme;
exports.useDocument = useDocument;
exports.useText = useText;
exports.useWindow = useWindow;
