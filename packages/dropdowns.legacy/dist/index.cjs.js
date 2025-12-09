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
var Downshift = require('downshift');
var reactPopper = require('react-popper');
var containerUtilities = require('@zendeskgarden/container-utilities');
var reactTheming = require('@zendeskgarden/react-theming');
var polished = require('polished');
var reactForms = require('@zendeskgarden/react-forms');
var reactMergeRefs = require('react-merge-refs');
var containerSelection = require('@zendeskgarden/container-selection');
var reactDom = require('react-dom');

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
var Downshift__default = /*#__PURE__*/_interopDefault(Downshift);

const DropdownContext = React__namespace.default.createContext(undefined);
const useDropdownContext = () => {
  const dropdownContext = React.useContext(DropdownContext);
  if (!dropdownContext) {
    throw new Error('This component must be rendered within a `Dropdown` component.');
  }
  return dropdownContext;
};

const REMOVE_ITEM_STATE_TYPE = 'REMOVE_ITEM';
const Dropdown = props => {
  const {
    children,
    isOpen,
    selectedItem,
    selectedItems,
    highlightedIndex,
    inputValue,
    onSelect,
    onStateChange,
    onInputValueChange,
    downshiftProps
  } = props;
  const itemIndexRef = React.useRef(0);
  const previousItemRef = React.useRef(undefined);
  const previousIndexRef = React.useRef(undefined);
  const nextItemsHashRef = React.useRef({});
  const containsMultiselectRef = React.useRef(false);
  const itemSearchRegistry = React.useRef([]);
  const [dropdownType, setDropdownType] = React.useState('');
  const {
    rtl
  } = React.useContext(styled.ThemeContext);
  const hasMenuRef = React.useRef(false);
  const popperReferenceElementRef = React.useRef(null);
  const customGetInputProps = (_ref, downshift) => {
    let {
      onKeyDown,
      ...other
    } = _ref;
    return {
      onKeyDown: containerUtilities.composeEventHandlers(onKeyDown, e => {
        const PREVIOUS_KEY = rtl ? containerUtilities.KEY_CODES.RIGHT : containerUtilities.KEY_CODES.LEFT;
        const NEXT_KEY = rtl ? containerUtilities.KEY_CODES.LEFT : containerUtilities.KEY_CODES.RIGHT;
        if (downshift.isOpen) {
          if (e.keyCode === PREVIOUS_KEY && previousIndexRef.current !== null && previousIndexRef.current !== undefined && !downshift.inputValue) {
            e.preventDefault();
            e.stopPropagation();
            downshift.selectItemAtIndex(previousIndexRef.current);
          }
          if (e.keyCode === NEXT_KEY) {
            const nextItemIndexes = Object.values(nextItemsHashRef.current);
            if (nextItemIndexes.includes(downshift.highlightedIndex)) {
              e.preventDefault();
              e.stopPropagation();
              downshift.selectItemAtIndex(downshift.highlightedIndex);
            }
          }
        } else if ((e.keyCode === containerUtilities.KEY_CODES.ENTER || e.keyCode === containerUtilities.KEY_CODES.SPACE) && !downshift.isOpen && dropdownType !== 'combobox') {
          e.preventDefault();
          e.stopPropagation();
          downshift.openMenu();
        }
      }),
      ...other
    };
  };
  const transformDownshift = _ref2 => {
    let {
      getInputProps,
      getToggleButtonProps,
      ...downshift
    } = _ref2;
    return {
      getInputProps: p => getInputProps(customGetInputProps(p, downshift)),
      getToggleButtonProps: p => getToggleButtonProps({
        'aria-label': undefined,
        ...p
      }),
      ...downshift
    };
  };
  return React__namespace.default.createElement(reactPopper.Manager, null, React__namespace.default.createElement(Downshift__default.default, Object.assign({
    suppressRefError: true
    ,
    isOpen: isOpen,
    highlightedIndex: highlightedIndex,
    selectedItem: selectedItem || null
    ,
    inputValue: inputValue,
    onInputValueChange: (inputVal, stateAndHelpers) => {
      if (onInputValueChange) {
        if (stateAndHelpers.isOpen) {
          onInputValueChange(inputVal, stateAndHelpers);
        } else if (dropdownType === 'multiselect') {
          onInputValueChange('', stateAndHelpers);
        }
      }
    },
    onStateChange: (changes, stateAndHelpers) => {
      if (dropdownType === 'autocomplete' && changes.isOpen === false && !changes.selectedItem) {
        onSelect && onSelect(selectedItem, stateAndHelpers);
      }
      if (Object.prototype.hasOwnProperty.call(changes, 'selectedItem') && changes.selectedItem !== null) {
        if (selectedItems) {
          const {
            itemToString
          } = stateAndHelpers;
          const existingItemIndex = selectedItems.findIndex(item => {
            return itemToString(item) === itemToString(changes.selectedItem);
          });
          const updatedSelectedItems = Array.from(selectedItems);
          if (existingItemIndex === -1) {
            updatedSelectedItems.splice(updatedSelectedItems.length, 0, changes.selectedItem);
          } else {
            updatedSelectedItems.splice(existingItemIndex, 1);
          }
          changes.selectedItems = updatedSelectedItems;
          delete changes.selectedItem;
          onSelect && onSelect(updatedSelectedItems, stateAndHelpers);
        } else {
          onSelect && onSelect(changes.selectedItem, stateAndHelpers);
        }
        if (dropdownType === 'multiselect') {
          stateAndHelpers.setState({
            inputValue: ''
          });
        }
      }
      onStateChange && onStateChange(changes, stateAndHelpers);
    },
    stateReducer: (_state, changes) => {
      switch (changes.type) {
        case Downshift__default.default.stateChangeTypes.changeInput:
          if (changes.inputValue === '' && dropdownType === 'combobox') {
            return {
              ...changes,
              isOpen: false
            };
          }
          return changes;
        default:
          return changes;
      }
    }
  }, downshiftProps), downshift => React__namespace.default.createElement(DropdownContext.Provider, {
    value: {
      hasMenuRef,
      itemIndexRef,
      previousItemRef,
      previousIndexRef,
      nextItemsHashRef,
      popperReferenceElementRef,
      selectedItems,
      downshift: transformDownshift(downshift),
      containsMultiselectRef,
      itemSearchRegistry,
      setDropdownType
    }
  }, children)));
};
Dropdown.propTypes = {
  isOpen: PropTypes__default.default.bool,
  selectedItem: PropTypes__default.default.any,
  selectedItems: PropTypes__default.default.arrayOf(PropTypes__default.default.any),
  highlightedIndex: PropTypes__default.default.number,
  inputValue: PropTypes__default.default.string,
  onSelect: PropTypes__default.default.func,
  onStateChange: PropTypes__default.default.func,
  downshiftProps: PropTypes__default.default.object
};

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

const COMPONENT_ID$m = 'dropdowns.menu';
const StyledMenu = styled__default.default.ul.attrs(props => ({
  'data-garden-id': COMPONENT_ID$m,
  'data-garden-version': '9.12.3',
  className: props.$isAnimated ? 'is-animated' : undefined
})).withConfig({
  displayName: "StyledMenu",
  componentId: "sc-lzt5u6-0"
})(["position:static !important;max-height:", ";overflow-y:auto;", ";", ";"], props => props.$maxHeight, props => props.$hasArrow && reactTheming.arrowStyles(getArrowPosition(props.$placement), {
  size: `${props.theme.space.base * 1.5}px`,
  inset: '1px',
  animationModifier: props.$isAnimated ? '.is-animated' : undefined
}), reactTheming.componentStyles);

const COMPONENT_ID$l = 'dropdowns.menu_wrapper';
const StyledMenuWrapper = styled__default.default.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$l,
  'data-garden-version': '9.12.3',
  className: props.$isAnimated ? 'is-animated' : undefined
})).withConfig({
  displayName: "StyledMenuWrapper",
  componentId: "sc-u70fn3-0"
})(["", ";", ";"], props => reactTheming.menuStyles(getMenuPosition(props.$placement), {
  theme: props.theme,
  hidden: props.$isHidden,
  margin: `${props.theme.space.base * (props.$hasArrow ? 2 : 1)}px`,
  zIndex: props.$zIndex,
  animationModifier: props.$isAnimated ? '.is-animated' : undefined
}), reactTheming.componentStyles);

const COMPONENT_ID$k = 'dropdowns.separator';
const StyledSeparator = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$k,
  'data-garden-version': '9.12.3',
  role: 'separator'
}).withConfig({
  displayName: "StyledSeparator",
  componentId: "sc-oncsf0-0"
})(["display:block;margin:", "px 0;border-bottom:", ";", ";"], props => props.theme.space.base, props => `${props.theme.borders.sm} ${reactTheming.getColor({
  theme: props.theme,
  variable: 'border.subtle'
})}`, reactTheming.componentStyles);

const COMPONENT_ID$j = 'dropdowns.item';
const getItemPaddingVertical = props => {
  if (props.$isCompact) {
    return `${props.theme.space.base}px`;
  }
  return `${props.theme.space.base * 2}px`;
};
const getColorStyles = props => {
  const backgroundColor = props.$isFocused ? reactTheming.getColor({
    theme: props.theme,
    variable: 'background.primaryEmphasis',
    transparency: props.theme.opacity[100]
  }) : 'inherit';
  let foregroundColor;
  if (props.disabled) {
    foregroundColor = reactTheming.getColor({
      theme: props.theme,
      variable: 'foreground.disabled'
    });
  } else if (props.$isDanger) {
    foregroundColor = reactTheming.getColor({
      theme: props.theme,
      variable: 'foreground.danger'
    });
  } else {
    foregroundColor = reactTheming.getColor({
      theme: props.theme,
      variable: 'foreground.default'
    });
  }
  return styled.css(["background-color:", ";color:", ";& a,& a:hover,& a:focus,& a:active{color:inherit;}"], backgroundColor, foregroundColor);
};
const StyledItem = styled__default.default.li.attrs(props => ({
  'data-garden-id': COMPONENT_ID$j,
  'data-garden-version': '9.12.3',
  'aria-disabled': props.disabled
})).withConfig({
  displayName: "StyledItem",
  componentId: "sc-x4h8aw-0"
})(["display:block;position:relative;z-index:0;cursor:", ";padding:", " ", "px;text-decoration:none;line-height:", "px;word-wrap:break-word;user-select:none;&:first-child{margin-top:", "px;}&:last-child{margin-bottom:", "px;}&:focus{outline:none;}& a,& a:hover,& a:focus,& a:active{text-decoration:none;}", ";", ";"], props => props.disabled ? 'default' : 'pointer', props => getItemPaddingVertical(props), props => props.theme.space.base * 9, props => props.theme.space.base * 5, props => props.theme.space.base, props => props.theme.space.base, props => getColorStyles(props), reactTheming.componentStyles);

const COMPONENT_ID$i = 'dropdowns.add_item';
const StyledAddItem = styled__default.default(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID$i,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledAddItem",
  componentId: "sc-mlto71-0"
})(["color:", ";", ";"], props => !props.disabled && reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.primary'
}), reactTheming.componentStyles);

const COMPONENT_ID$h = 'dropdowns.item_meta';
const StyledItemMeta = styled__default.default.span.attrs({
  'data-garden-id': COMPONENT_ID$h,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemMeta",
  componentId: "sc-1m3x8m1-0"
})(["display:block;line-height:", "px;color:", ";font-size:", ";", ";"], props => props.theme.space.base * (props.$isCompact ? 3 : 4), props => reactTheming.getColor({
  theme: props.theme,
  variable: props.$isDisabled ? 'foreground.disabled' : 'foreground.subtle'
}), props => props.theme.fontSizes.sm, reactTheming.componentStyles);

const COMPONENT_ID$g = 'dropdowns.item_icon';
const getSizeStyles = props => {
  return styled.css(["width:", ";height:calc(", "px + ", ");"], props.theme.iconSizes.md, props.theme.space.base * 5, polished.math(`${getItemPaddingVertical(props)} * 2`));
};
const StyledItemIcon = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$g,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemIcon",
  componentId: "sc-pspm80-0"
})(["display:flex;position:absolute;top:0;", ":", "px;align-items:center;justify-content:center;transition:opacity 0.1s ease-in-out;opacity:", ";color:", ";", ";& > *{width:", ";height:", ";}"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 3, props => props.$isVisible ? '1' : '0', props => props.$isDisabled ? 'inherit' : reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.primary'
}), props => getSizeStyles(props), props => props.theme.iconSizes.md, props => props.theme.iconSizes.md);

const COMPONENT_ID$f = 'dropdowns.next_item';
const StyledNextItem = styled__default.default(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNextItem",
  componentId: "sc-1wrjlge-0"
})(["", "{right:", ";left:", ";}", ";"], StyledItemIcon, props => props.theme.rtl ? 'auto' : `${props.theme.space.base * 3}px`, props => props.theme.rtl ? `${props.theme.space.base * 3}px` : 'auto', reactTheming.componentStyles);

var _path$4;
function _extends$4() { return _extends$4 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$4.apply(null, arguments); }
var SvgChevronRightStroke = function SvgChevronRightStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M5.61 3.312a.5.5 0 01.718-.69l.062.066 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L9.359 8l-3.75-4.688z"
  })));
};

const COMPONENT_ID$e = 'dropdowns.next_item_icon';
const NextIconComponent = _ref => {
  let {
    className
  } = _ref;
  return React__namespace.default.createElement(SvgChevronRightStroke, {
    "data-garden-id": COMPONENT_ID$e,
    "data-garden-version": '9.12.3',
    className: className
  });
};
const StyledNextIcon = styled__default.default(NextIconComponent).withConfig({
  displayName: "StyledNextIcon",
  componentId: "sc-1nzkdnq-0"
})(["transform:", ";color:", ";", ";"], props => props.theme.rtl && 'rotate(180deg)', props => props.$isDisabled ? 'inherit' : reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.disabled'
}), reactTheming.componentStyles);

const COMPONENT_ID$d = 'dropdowns.previous_item';
const StyledPreviousItem = styled__default.default(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPreviousItem",
  componentId: "sc-1qv9jwe-0"
})(["font-weight:", ";", ";"], props => props.theme.fontWeights.semibold, reactTheming.componentStyles);

var _path$3;
function _extends$3() { return _extends$3 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$3.apply(null, arguments); }
var SvgChevronLeftStroke = function SvgChevronLeftStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10.39 12.688a.5.5 0 01-.718.69l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L6.641 8l3.75 4.688z"
  })));
};

const COMPONENT_ID$c = 'dropdowns.previous_item_icon';
const PreviousIconComponent = _ref => {
  let {
    className
  } = _ref;
  return React__namespace.default.createElement(SvgChevronLeftStroke, {
    "data-garden-id": COMPONENT_ID$c,
    "data-garden-version": '9.12.3',
    className: className
  });
};
const StyledPreviousIcon = styled__default.default(PreviousIconComponent).withConfig({
  displayName: "StyledPreviousIcon",
  componentId: "sc-1n1t07s-0"
})(["transform:", ";color:", ";", ";"], props => props.theme.rtl && 'rotate(180deg)', props => props.$isDisabled ? 'inherit' : reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.subtle'
}), reactTheming.componentStyles);

const COMPONENT_ID$b = 'dropdowns.header_icon';
const StyledHeaderIcon = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderIcon",
  componentId: "sc-ow8s45-0"
})(["display:flex;position:absolute;top:0;bottom:0;align-items:center;justify-content:center;", ":", "px;color:", ";& > *{width:", ";height:", ";}", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 3, props => reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.subtle'
}), props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, reactTheming.componentStyles);

const COMPONENT_ID$a = 'dropdowns.header_item';
const getHorizontalPadding = props => {
  if (props.$hasIcon) {
    return undefined;
  }
  return `${props.theme.space.base * 3}px`;
};
const StyledHeaderItem = styled__default.default(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderItem",
  componentId: "sc-1xosinr-0"
})(["cursor:default;padding-right:", ";padding-left:", ";font-weight:", ";", ";"], props => getHorizontalPadding(props), props => getHorizontalPadding(props), props => props.theme.fontWeights.semibold, reactTheming.componentStyles);

const COMPONENT_ID$9 = 'dropdowns.media_body';
const StyledMediaBody = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMediaBody",
  componentId: "sc-133sssc-0"
})(["display:block;overflow:hidden;padding-", ":", "px;", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 2, reactTheming.componentStyles);

const COMPONENT_ID$8 = 'dropdowns.media_figure';
const StyledMediaFigure = styled__default.default(
_ref => {
  let {
    children,
    $isCompact,
    theme,
    ...props
  } = _ref;
  return  React__namespace.default.cloneElement(React.Children.only(children), props);
}).attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMediaFigure",
  componentId: "sc-16vz3xj-0"
})(["float:", ";margin-top:", "px !important;width:", ";height:", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 0.5, props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, reactTheming.componentStyles);

const COMPONENT_ID$7 = 'dropdowns.media_item';
const StyledMediaItem = styled__default.default(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMediaItem",
  componentId: "sc-af4509-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$6 = 'dropdowns.faux_input';
const StyledFauxInput = styled__default.default(reactForms.FauxInput).attrs(props => ({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3',
  mediaLayout: true,
  theme: props.theme
})).withConfig({
  displayName: "StyledFauxInput",
  componentId: "sc-bk8odf-0"
})(["cursor:", ";min-width:", "px;", ";"], props => !props.disabled && 'pointer', props => props.theme.space.base * (props.isCompact ? 25 : 36), reactTheming.componentStyles);

const COMPONENT_ID$5 = 'dropdowns.input';
const hiddenStyling = styled.css(["position:fixed;border:0;clip:rect(1px,1px,1px,1px);padding:0;width:1px;height:1px;overflow:hidden;white-space:nowrap;"]);
const StyledInput = styled__default.default(reactForms.Input).attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3',
  isBare: true
}).withConfig({
  displayName: "StyledInput",
  componentId: "sc-kykaw8-0"
})(["", ";", ";"], props => props.$isHidden && hiddenStyling, reactTheming.componentStyles);

const COMPONENT_ID$4 = 'dropdowns.select';
const StyledSelect = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSelect",
  componentId: "sc-xf4qjv-0"
})(["flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$3 = 'dropdowns.multiselect_input';
const visibleStyling = _ref => {
  let {
    $isVisible,
    isCompact,
    theme
  } = _ref;
  const margin = $isVisible ? `${theme.space.base / 2}px` : 0;
  const minWidth = $isVisible ? `${theme.space.base * 15}px` : 0;
  let height = '0';
  if ($isVisible) {
    height = `${theme.space.base * (isCompact ? 5 : 8)}px`;
  }
  return styled.css(["opacity:", ";margin:", ";width:", ";min-width:", ";height:", ";"], !$isVisible && 0, margin, !$isVisible && 0, minWidth, height);
};
const StyledMultiselectInput = styled__default.default(StyledInput).attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3',
  isBare: true
}).withConfig({
  displayName: "StyledMultiselectInput",
  componentId: "sc-iiow29-0"
})(["flex-basis:", "px;flex-grow:1;align-self:center;min-height:0;", ";", ";"], props => props.theme.space.base * 15, props => visibleStyling(props), reactTheming.componentStyles);

const COMPONENT_ID$2 = 'dropdowns.multiselect_items_container';
const sizeStyles = props => {
  let margin;
  let padding;
  if (!props.$isBare) {
    const marginVertical = props.$isCompact ? `-${props.theme.space.base * 1.5}px` : `-${props.theme.space.base * 2.5}px`;
    margin = `${marginVertical} 0`;
    const paddingVertical = props.$isCompact ? '3px' : '1px';
    const paddingEnd = `${props.theme.space.base}px`;
    padding = `${paddingVertical} ${props.theme.rtl ? 0 : paddingEnd} ${paddingVertical} ${props.theme.rtl ? paddingEnd : 0}`;
  }
  return styled.css(["margin:", ";padding:", ";"], margin, padding);
};
const StyledMultiselectItemsContainer = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMultiselectItemsContainer",
  componentId: "sc-1dxwjyz-0"
})(["display:inline-flex;flex-grow:1;flex-wrap:wrap;min-width:0;", ";", ";"], props => sizeStyles(props), reactTheming.componentStyles);

const COMPONENT_ID$1 = 'dropdowns.multiselect_item_wrapper';
const StyledMultiselectItemWrapper = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMultiselectItemWrapper",
  componentId: "sc-vgr7nd-0"
})(["display:inline-flex;align-items:center;margin:", "px;max-width:100%;", ";"], props => props.theme.space.base / 2, reactTheming.componentStyles);

const COMPONENT_ID = 'dropdowns.multiselect_more_anchor';
const StyledMultiselectMoreAnchor = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMultiselectMoreAnchor",
  componentId: "sc-pkakky-0"
})(["display:inline-block;cursor:", ";padding:", "px 0;overflow:hidden;user-select:none;text-overflow:ellipsis;line-height:", ";white-space:nowrap;color:", ";&:hover{text-decoration:", ";}", ";"], props => props.$isDisabled ? 'default' : 'pointer', props => props.theme.space.base * (props.$isCompact ? 0.75 : 1.5), props => props.$isCompact ? '1em' : reactTheming.getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => reactTheming.getColor({
  theme: props.theme,
  variable: props.$isDisabled ? 'foreground.disabled' : 'foreground.primary'
}), props => !props.$isDisabled && 'underline', reactTheming.componentStyles);

const Trigger = _ref => {
  let {
    children,
    refKey = 'ref',
    ...triggerProps
  } = _ref;
  const {
    hasMenuRef,
    itemSearchRegistry,
    downshift: {
      getRootProps,
      getToggleButtonProps,
      getInputProps,
      isOpen,
      highlightedIndex,
      selectItemAtIndex,
      setHighlightedIndex
    }
  } = useDropdownContext();
  const hiddenInputRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const previousIsOpenRef = React.useRef(undefined);
  const [searchString, setSearchString] = React.useState('');
  const searchTimeoutRef = React.useRef();
  const currentSearchIndexRef = React.useRef(0);
  React.useEffect(() => {
    if (hiddenInputRef.current && isOpen && !previousIsOpenRef.current) {
      hiddenInputRef.current.focus();
    }
    if (triggerRef.current && !isOpen && previousIsOpenRef.current) {
      triggerRef.current.focus();
    }
    previousIsOpenRef.current = isOpen;
  }, [isOpen, hasMenuRef]);
  React.useEffect(() => {
    if (hasMenuRef.current === false) {
      hasMenuRef.current = true;
    }
  }, [hasMenuRef]);
  React.useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    searchTimeoutRef.current = window.setTimeout(() => {
      setSearchString('');
    }, 500);
    return () => {
      clearTimeout(searchTimeoutRef.current);
    };
  }, [searchString]);
  const searchItems = React.useCallback((searchValue, startIndex, endIndex) => {
    for (let index = startIndex; index < endIndex; index++) {
      const itemTextValue = itemSearchRegistry.current[index];
      if (itemTextValue && itemTextValue.toUpperCase().indexOf(searchValue.toUpperCase()) === 0) {
        return index;
      }
    }
    return undefined;
  }, [itemSearchRegistry]);
  const onInputKeyDown = React.useCallback(e => {
    if (e.keyCode === containerUtilities.KEY_CODES.SPACE) {
      if (searchString) {
        e.preventDefault();
        e.stopPropagation();
      } else if (highlightedIndex !== null && highlightedIndex !== undefined) {
        e.preventDefault();
        e.stopPropagation();
        selectItemAtIndex(highlightedIndex);
      }
    }
    if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 65 || e.keyCode > 90) && e.keyCode !== containerUtilities.KEY_CODES.SPACE) {
      return;
    }
    const character = String.fromCharCode(e.which || e.keyCode);
    if (!character || character.length === 0) {
      return;
    }
    if (!searchString) {
      if (highlightedIndex === null || highlightedIndex === undefined) {
        currentSearchIndexRef.current = -1;
      } else {
        currentSearchIndexRef.current = highlightedIndex;
      }
    }
    const newSearchString = searchString + character;
    setSearchString(newSearchString);
    let matchingIndex = searchItems(newSearchString, currentSearchIndexRef.current + 1, itemSearchRegistry.current.length);
    if (matchingIndex === undefined) {
      matchingIndex = searchItems(newSearchString, 0, currentSearchIndexRef.current);
    }
    if (matchingIndex !== undefined) {
      setHighlightedIndex(matchingIndex);
    }
  }, [searchString, searchItems, itemSearchRegistry, highlightedIndex, selectItemAtIndex, setHighlightedIndex]);
  const renderChildren = popperRef => {
    const {
      ref: rootPropsRefCallback,
      ...rootProps
    } = getRootProps();
    const listboxToggleProps = getToggleButtonProps({
      ...rootProps,
      role: null,
      'aria-labelledby': undefined,
      ...triggerProps,
      ...children.props
    });
    const menuToggleProps = {
      ...listboxToggleProps,
      'aria-haspopup': 'true',
      'aria-controls': listboxToggleProps['aria-owns'],
      'aria-owns': null
    };
    const toggleButtonProps = hasMenuRef.current ? menuToggleProps : listboxToggleProps;
    return React__namespace.default.cloneElement(React__namespace.default.Children.only(children), {
      ...toggleButtonProps,
      [refKey]: childRef => {
        popperRef(childRef);
        triggerRef.current = childRef;
        rootPropsRefCallback(childRef);
      }
    });
  };
  return React__namespace.default.createElement(reactPopper.Reference, null, _ref2 => {
    let {
      ref: popperReference
    } = _ref2;
    return React__namespace.default.createElement(React__namespace.default.Fragment, null, renderChildren(popperReference), React__namespace.default.createElement(StyledInput, getInputProps({
      readOnly: true,
      $isHidden: true,
      tabIndex: -1,
      ref: hiddenInputRef,
      value: '',
      onClick: e => {
        if (isOpen) {
          e.nativeEvent.preventDownshiftDefault = true;
        }
      },
      onKeyDown: onInputKeyDown
    })));
  });
};
Trigger.propTypes = {
  children: PropTypes__default.default.any,
  refKey: PropTypes__default.default.string
};

var _path$2;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgChevronDownStroke = function SvgChevronDownStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"
  })));
};

const FieldContext = React__namespace.default.createContext(undefined);
const useFieldContext = () => {
  const fieldContext = React.useContext(FieldContext);
  if (!fieldContext) {
    throw new Error('This component must be rendered within a `Field` component.');
  }
  return fieldContext;
};

const Autocomplete = React.forwardRef((_ref, ref) => {
  let {
    children,
    inputRef: controlledInputRef,
    start,
    ...props
  } = _ref;
  const {
    popperReferenceElementRef,
    downshift: {
      getToggleButtonProps,
      getInputProps,
      getRootProps,
      isOpen
    },
    setDropdownType
  } = useDropdownContext();
  const {
    isLabelHovered
  } = useFieldContext();
  const inputRef = React.useRef();
  const triggerRef = React.useRef();
  const previousIsOpenRef = React.useRef(isOpen);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  React.useEffect(() => {
    if (inputRef.current && isOpen !== previousIsOpenRef.current) {
      inputRef.current.focus();
    }
    previousIsOpenRef.current = isOpen;
  }, [inputRef, isOpen]);
  const {
    type,
    onKeyDown,
    ...selectProps
  } = getToggleButtonProps(getRootProps({
    role: null,
    ...props,
    onKeyDown: e => {
      if (isOpen) {
        e.nativeEvent.preventDownshiftDefault = true;
      }
    },
    onMouseEnter: containerUtilities.composeEventHandlers(props.onMouseEnter, () => setIsHovered(true)),
    onMouseLeave: containerUtilities.composeEventHandlers(props.onMouseLeave, () => setIsHovered(false))
  }));
  const onSelectKeyDown = containerUtilities.composeEventHandlers(props.onKeyDown, onKeyDown);
  const isContainerHovered = isLabelHovered && !isOpen;
  const isContainerFocused = isOpen || isFocused;
  React.useEffect(() => {
    setDropdownType('autocomplete');
  }, [setDropdownType]);
  return React__namespace.default.createElement(reactPopper.Reference, null, _ref2 => {
    let {
      ref: popperReference
    } = _ref2;
    return React__namespace.default.createElement(StyledFauxInput, Object.assign({
      isHovered: isContainerHovered,
      isFocused: isContainerFocused,
      tabIndex: null,
      onKeyDown: onSelectKeyDown
    }, selectProps, {
      ref: selectRef => {
        popperReference(selectRef);
        reactMergeRefs.mergeRefs([triggerRef, ref])(selectRef);
        popperReferenceElementRef.current = selectRef;
      }
    }), !!start && React__namespace.default.createElement(StyledFauxInput.StartIcon, {
      isHovered: isHovered || isLabelHovered && !isOpen,
      isFocused: isContainerFocused,
      isDisabled: props.disabled
    }, start), !isOpen && React__namespace.default.createElement(StyledSelect, null, children), React__namespace.default.createElement(StyledInput, getInputProps({
      $isHidden: !isOpen,
      disabled: props.disabled,
      onFocus: () => {
        setIsFocused(true);
      },
      onBlur: () => {
        setIsFocused(false);
      },
      onClick: e => {
        if (isOpen) {
          e.nativeEvent.preventDownshiftDefault = true;
        }
      },
      role: 'combobox',
      ref: reactMergeRefs.mergeRefs([inputRef, controlledInputRef || null])
    })), !props.isBare && React__namespace.default.createElement(StyledFauxInput.EndIcon, {
      isHovered: isHovered || isLabelHovered && !isOpen,
      isFocused: isContainerFocused,
      isDisabled: props.disabled,
      isRotated: isOpen
    }, React__namespace.default.createElement(SvgChevronDownStroke, null)));
  });
});
Autocomplete.displayName = 'Autocomplete';
Autocomplete.propTypes = {
  isCompact: PropTypes__default.default.bool,
  isBare: PropTypes__default.default.bool,
  disabled: PropTypes__default.default.bool,
  focusInset: PropTypes__default.default.bool,
  validation: PropTypes__default.default.oneOf(reactForms.VALIDATION)
};

const Combobox = React.forwardRef((_ref, ref) => {
  let {
    isCompact,
    isBare,
    disabled,
    focusInset,
    placeholder,
    validation,
    inputRef: inputRefProp = null,
    start,
    end,
    ...props
  } = _ref;
  const {
    popperReferenceElementRef,
    downshift: {
      getToggleButtonProps,
      getInputProps,
      getRootProps,
      isOpen
    },
    setDropdownType
  } = useDropdownContext();
  const wrapperRef = React.useRef();
  const inputRef = React.useRef();
  const isOpenRef = React.useRef(isOpen);
  const wrapperProps = getToggleButtonProps(getRootProps({
    role: null,
    type: null,
    onClick: event => {
      event.nativeEvent.preventDownshiftDefault = true;
    },
    ...props,
    onKeyDown: event => {
      event.nativeEvent.preventDownshiftDefault = true;
    }
  }));
  const inputProps = getInputProps({
    isCompact,
    isBare,
    disabled,
    focusInset,
    placeholder,
    validation,
    start,
    end,
    role: 'combobox',
    onKeyDown: event => {
      if (event.keyCode === containerUtilities.KEY_CODES.SPACE || !isOpen && [containerUtilities.KEY_CODES.DOWN, containerUtilities.KEY_CODES.UP].includes(event.keyCode)) {
        event.nativeEvent.preventDownshiftDefault = true;
      }
    },
    onClick: event => {
      event.nativeEvent.preventDownshiftDefault = true;
    }
  });
  React.useEffect(() => {
    if (inputRef.current && isOpen !== isOpenRef.current) {
      inputRef.current.focus();
    }
    isOpenRef.current = isOpen;
  }, [inputRef, isOpen]);
  React.useEffect(() => {
    setDropdownType('combobox');
  }, [setDropdownType]);
  return React__namespace.default.createElement(reactPopper.Reference, null, _ref2 => {
    let {
      ref: popperReference
    } = _ref2;
    const wrapperRefProp = element => {
      popperReference(element);
      reactMergeRefs.mergeRefs([wrapperRef, ref])(element);
      popperReferenceElementRef.current = element;
    };
    return React__namespace.default.createElement(reactForms.MediaInput, Object.assign({}, inputProps, {
      wrapperProps: wrapperProps,
      wrapperRef: wrapperRefProp,
      ref: reactMergeRefs.mergeRefs([inputRef, inputRefProp])
    }));
  });
});
Combobox.displayName = 'Combobox';
Combobox.propTypes = {
  isCompact: PropTypes__default.default.bool,
  isBare: PropTypes__default.default.bool,
  disabled: PropTypes__default.default.bool,
  focusInset: PropTypes__default.default.bool,
  placeholder: PropTypes__default.default.string,
  validation: PropTypes__default.default.oneOf(reactForms.VALIDATION)
};

const Multiselect = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    renderItem,
    placeholder,
    maxItems = 4,
    renderShowMore,
    inputRef: externalInputRef = null,
    start,
    onKeyDown,
    ...props
  } = _ref;
  const {
    popperReferenceElementRef,
    selectedItems = [],
    containsMultiselectRef,
    previousIndexRef,
    downshift: {
      getToggleButtonProps,
      getRootProps,
      getInputProps,
      isOpen,
      closeMenu,
      inputValue,
      setState: setDownshiftState,
      itemToString
    },
    setDropdownType
  } = useDropdownContext();
  const {
    isLabelHovered
  } = useFieldContext();
  const inputRef = React.useRef();
  const triggerRef = React.useRef();
  const blurTimeoutRef = React.useRef();
  const previousIsOpenRef = React.useRef(undefined);
  const previousIsFocusedRef = React.useRef(undefined);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [focusedItem, setFocusedItem] = React.useState(undefined);
  const themeContext = React.useContext(styled.ThemeContext);
  const environment = reactTheming.useDocument(themeContext);
  const {
    getContainerProps,
    getItemProps
  } = containerSelection.useSelection({
    rtl: themeContext.rtl,
    focusedItem,
    selectedItem: undefined,
    onFocus: item => {
      setFocusedItem(item);
    }
  });
  React.useEffect(() => {
    containsMultiselectRef.current = true;
    const tempRef = blurTimeoutRef;
    return () => {
      clearTimeout(tempRef.current);
    };
  }, []);
  React.useEffect(() => {
    if (inputRef.current) {
      if (isOpen && !previousIsOpenRef.current) {
        inputRef.current.focus();
      } else if (isFocused && !previousIsFocusedRef.current && focusedItem === undefined) {
        inputRef.current.focus();
      }
    }
    previousIsOpenRef.current = isOpen;
    previousIsFocusedRef.current = isFocused;
  }, [isOpen, inputRef, isFocused, focusedItem]);
  React.useEffect(() => {
    if (focusedItem !== undefined && isOpen) {
      closeMenu();
    }
  }, [focusedItem, isOpen, closeMenu]);
  const {
    type,
    ...selectProps
  } = getToggleButtonProps(getRootProps({
    tabIndex: props.disabled ? undefined : -1,
    onKeyDown: containerUtilities.composeEventHandlers(onKeyDown, e => {
      if (isOpen) {
        e.nativeEvent.preventDownshiftDefault = true;
      } else if (!inputValue && e.keyCode === containerUtilities.KEY_CODES.HOME) {
        setFocusedItem(selectedItems[0]);
        e.preventDefault();
      }
    }),
    onFocus: () => {
      setIsFocused(true);
    },
    onBlur: e => {
      const currentTarget = e.currentTarget;
      blurTimeoutRef.current = setTimeout(() => {
        if (environment && !currentTarget.contains(environment.activeElement)) {
          setIsFocused(false);
        }
      }, 0);
    },
    onMouseEnter: containerUtilities.composeEventHandlers(props.onMouseEnter, () => setIsHovered(true)),
    onMouseLeave: containerUtilities.composeEventHandlers(props.onMouseLeave, () => setIsHovered(false)),
    role: null,
    ...props
  }));
  const renderSelectableItem = React.useCallback((item, index) => {
    const removeValue = () => {
      setDownshiftState({
        type: REMOVE_ITEM_STATE_TYPE,
        selectedItem: item
      });
      inputRef.current && inputRef.current.focus();
    };
    const renderedItem = renderItem({
      value: item,
      removeValue
    });
    const focusRef = React__namespace.default.createRef();
    const clonedChild = React__namespace.default.cloneElement(renderedItem, {
      ...getItemProps({
        item,
        focusRef,
        onKeyDown: e => {
          if (e.keyCode === containerUtilities.KEY_CODES.DELETE || e.keyCode === containerUtilities.KEY_CODES.BACKSPACE) {
            e.preventDefault();
            removeValue();
          }
          if (e.keyCode === containerUtilities.KEY_CODES.END && !inputValue) {
            inputRef.current && inputRef.current.focus();
            e.preventDefault();
          }
          if (themeContext.rtl) {
            if (e.keyCode === containerUtilities.KEY_CODES.RIGHT && index === 0) {
              e.preventDefault();
            }
            if (e.keyCode === containerUtilities.KEY_CODES.LEFT && index === selectedItems.length - 1) {
              e.preventDefault();
              inputRef.current && inputRef.current.focus();
            }
          } else {
            if (e.keyCode === containerUtilities.KEY_CODES.LEFT && index === 0) {
              e.preventDefault();
            }
            if (e.keyCode === containerUtilities.KEY_CODES.RIGHT && index === selectedItems.length - 1) {
              e.preventDefault();
              inputRef.current && inputRef.current.focus();
            }
          }
        },
        onClick: e => {
          e.nativeEvent.preventDownshiftDefault = true;
        },
        tabIndex: -1
      }),
      size: props.isCompact ? 'medium' : 'large'
    });
    const key = `${itemToString(item)}-${index}`;
    return React__namespace.default.createElement(StyledMultiselectItemWrapper, {
      key: key
    }, clonedChild);
  }, [getItemProps, inputValue, renderItem, setDownshiftState, itemToString, selectedItems, props, inputRef, themeContext.rtl]);
  const items = React.useMemo(() => {
    const itemValues = selectedItems || [];
    const output = [];
    for (let x = 0; x < itemValues.length; x++) {
      const item = itemValues[x];
      if (x < maxItems) {
        if (props.disabled) {
          const renderedItem = React__namespace.default.cloneElement(renderItem({
            value: item,
            removeValue: () => {
              return undefined;
            }
          }), {
            size: props.isCompact ? 'medium' : 'large'
          });
          output.push(React__namespace.default.createElement(StyledMultiselectItemWrapper, {
            key: x
          }, renderedItem));
        } else {
          output.push(renderSelectableItem(item, x));
        }
      } else if (!isFocused && !inputValue || props.disabled) {
        output.push(React__namespace.default.createElement(StyledMultiselectItemWrapper, {
          key: "more-anchor"
        }, React__namespace.default.createElement(StyledMultiselectMoreAnchor, {
          $isCompact: props.isCompact,
          $isDisabled: props.disabled
        }, renderShowMore ? renderShowMore(itemValues.length - x) : `+ ${itemValues.length - x} more`)));
        break;
      } else {
        output.push(renderSelectableItem(item, x));
      }
    }
    return output;
  }, [isFocused, props.disabled, renderSelectableItem, selectedItems, renderItem, inputValue, maxItems, renderShowMore, props.isCompact]);
  const isContainerHovered = isLabelHovered && !isOpen;
  const isContainerFocused = isOpen || isFocused;
  React.useEffect(() => {
    setDropdownType('multiselect');
  }, [setDropdownType]);
  return React__namespace.default.createElement(reactPopper.Reference, null, _ref2 => {
    let {
      ref: popperReference
    } = _ref2;
    return React__namespace.default.createElement(StyledFauxInput, getContainerProps({
      ...selectProps,
      isHovered: isContainerHovered,
      isFocused: isContainerFocused,
      ref: selectRef => {
        popperReference(selectRef);
        reactMergeRefs.mergeRefs([triggerRef, popperReferenceElementRef, ref])(selectRef);
      }
    }), !!start && React__namespace.default.createElement(StyledFauxInput.StartIcon, {
      isHovered: isHovered || isLabelHovered && !isOpen,
      isFocused: isContainerFocused,
      isDisabled: props.disabled
    }, start), React__namespace.default.createElement(StyledMultiselectItemsContainer, {
      $isBare: props.isBare,
      $isCompact: props.isCompact
    }, items, React__namespace.default.createElement(StyledMultiselectInput, getInputProps({
      disabled: props.disabled,
      onFocus: () => {
        setFocusedItem(undefined);
      },
      onClick: e => {
        if (inputValue && inputValue.length > 0 && isOpen) {
          e.nativeEvent.preventDownshiftDefault = true;
        }
      },
      onKeyDown: e => {
        if (!inputValue) {
          if (themeContext.rtl && e.keyCode === containerUtilities.KEY_CODES.RIGHT && selectedItems.length > 0 && previousIndexRef.current === undefined) {
            setFocusedItem(selectedItems[selectedItems.length - 1]);
          } else if (!themeContext.rtl && e.keyCode === containerUtilities.KEY_CODES.LEFT && selectedItems.length > 0 && previousIndexRef.current === undefined) {
            setFocusedItem(selectedItems[selectedItems.length - 1]);
          } else if (e.keyCode === containerUtilities.KEY_CODES.BACKSPACE && selectedItems.length > 0) {
            setDownshiftState({
              type: REMOVE_ITEM_STATE_TYPE,
              selectedItem: selectedItems[selectedItems.length - 1]
            });
            e.nativeEvent.preventDownshiftDefault = true;
            e.preventDefault();
            e.stopPropagation();
          }
        }
      },
      $isVisible: isFocused || inputValue || selectedItems.length === 0,
      isCompact: props.isCompact,
      role: 'combobox',
      ref: reactMergeRefs.mergeRefs([inputRef, externalInputRef]),
      placeholder: selectedItems.length === 0 ? placeholder : undefined
    }))), !props.isBare && React__namespace.default.createElement(StyledFauxInput.EndIcon, {
      isHovered: isHovered || isLabelHovered && !isOpen,
      isFocused: isContainerFocused,
      isDisabled: props.disabled,
      isRotated: isOpen
    }, React__namespace.default.createElement(SvgChevronDownStroke, null)));
  });
});
Multiselect.propTypes = {
  isCompact: PropTypes__default.default.bool,
  isBare: PropTypes__default.default.bool,
  disabled: PropTypes__default.default.bool,
  focusInset: PropTypes__default.default.bool,
  renderItem: PropTypes__default.default.func.isRequired,
  maxItems: PropTypes__default.default.number,
  validation: PropTypes__default.default.oneOf(['success', 'warning', 'error'])
};
Multiselect.displayName = 'Multiselect';

const Select = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    children,
    start,
    ...props
  } = _ref;
  const {
    popperReferenceElementRef,
    itemSearchRegistry,
    downshift: {
      getToggleButtonProps,
      getInputProps,
      isOpen,
      highlightedIndex,
      setHighlightedIndex,
      selectItemAtIndex,
      closeMenu
    }
  } = useDropdownContext();
  const {
    isLabelHovered
  } = useFieldContext();
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const hiddenInputRef = React.useRef();
  const triggerRef = React.useRef();
  const previousIsOpenRef = React.useRef(undefined);
  const [searchString, setSearchString] = React.useState('');
  const searchTimeoutRef = React.useRef();
  const currentSearchIndexRef = React.useRef(0);
  React.useEffect(() => {
    if (hiddenInputRef.current && isOpen && !previousIsOpenRef.current) {
      hiddenInputRef.current.focus();
    }
    if (triggerRef.current && !isOpen && previousIsOpenRef.current) {
      triggerRef.current.focus();
    }
    previousIsOpenRef.current = isOpen;
  }, [isOpen, triggerRef]);
  React.useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    searchTimeoutRef.current = window.setTimeout(() => {
      setSearchString('');
    }, 500);
    return () => {
      clearTimeout(searchTimeoutRef.current);
    };
  }, [searchString]);
  const searchItems = React.useCallback((searchValue, startIndex, endIndex) => {
    for (let index = startIndex; index < endIndex; index++) {
      const itemTextValue = itemSearchRegistry.current[index];
      if (itemTextValue && itemTextValue.toUpperCase().indexOf(searchValue.toUpperCase()) === 0) {
        return index;
      }
    }
    return undefined;
  }, [itemSearchRegistry]);
  const onInputKeyDown = React.useCallback(e => {
    if (e.keyCode === containerUtilities.KEY_CODES.SPACE) {
      if (searchString) {
        e.preventDefault();
        e.stopPropagation();
      } else if (highlightedIndex !== null && highlightedIndex !== undefined) {
        e.preventDefault();
        e.stopPropagation();
        selectItemAtIndex(highlightedIndex);
        closeMenu();
      }
    }
    if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 65 || e.keyCode > 90) && e.keyCode !== containerUtilities.KEY_CODES.SPACE) {
      return;
    }
    const character = String.fromCharCode(e.which || e.keyCode);
    if (!character || character.length === 0) {
      return;
    }
    if (!searchString) {
      if (highlightedIndex === null || highlightedIndex === undefined) {
        currentSearchIndexRef.current = -1;
      } else {
        currentSearchIndexRef.current = highlightedIndex;
      }
    }
    const newSearchString = searchString + character;
    setSearchString(newSearchString);
    let matchingIndex = searchItems(newSearchString, currentSearchIndexRef.current + 1, itemSearchRegistry.current.length);
    if (matchingIndex === undefined) {
      matchingIndex = searchItems(newSearchString, 0, currentSearchIndexRef.current);
    }
    if (matchingIndex !== undefined) {
      setHighlightedIndex(matchingIndex);
    }
  }, [searchString, searchItems, itemSearchRegistry, highlightedIndex, selectItemAtIndex, closeMenu, setHighlightedIndex]);
  const {
    type,
    ...selectProps
  } = getToggleButtonProps({
    tabIndex: props.disabled ? undefined : 0,
    onMouseEnter: containerUtilities.composeEventHandlers(props.onMouseEnter, () => setIsHovered(true)),
    onMouseLeave: containerUtilities.composeEventHandlers(props.onMouseLeave, () => setIsHovered(false)),
    onFocus: containerUtilities.composeEventHandlers(props.onFocus, () => setIsFocused(true)),
    onBlur: containerUtilities.composeEventHandlers(props.onBlur, () => setIsFocused(false)),
    ...props
  });
  const isContainerHovered = isLabelHovered && !isOpen;
  const isContainerFocused = isFocused || isOpen;
  return React__namespace.default.createElement(reactPopper.Reference, null, _ref2 => {
    let {
      ref: popperReference
    } = _ref2;
    return React__namespace.default.createElement(StyledFauxInput, Object.assign({
      isHovered: isContainerHovered,
      isFocused: isContainerFocused
    }, selectProps, {
      role: "none",
      ref: selectRef => {
        popperReference(selectRef);
        reactMergeRefs.mergeRefs([triggerRef, ref, popperReferenceElementRef])(selectRef);
      }
    }), !!start && React__namespace.default.createElement(StyledFauxInput.StartIcon, {
      isHovered: isHovered || isLabelHovered && !isOpen,
      isFocused: isContainerFocused,
      isDisabled: props.disabled
    }, start), React__namespace.default.createElement(StyledSelect, null, children), React__namespace.default.createElement(StyledInput, getInputProps({
      readOnly: true,
      $isHidden: true,
      tabIndex: -1,
      ref: hiddenInputRef,
      value: '',
      onClick: e => {
        if (isOpen) {
          e.nativeEvent.preventDownshiftDefault = true;
        }
      },
      onKeyDown: onInputKeyDown
    })), !props.isBare && React__namespace.default.createElement(StyledFauxInput.EndIcon, {
      isHovered: isHovered || isLabelHovered && !isOpen,
      isFocused: isContainerFocused,
      isDisabled: props.disabled,
      isRotated: isOpen
    }, React__namespace.default.createElement(SvgChevronDownStroke, null)));
  });
});
Select.displayName = 'Select';
Select.propTypes = {
  isCompact: PropTypes__default.default.bool,
  isBare: PropTypes__default.default.bool,
  disabled: PropTypes__default.default.bool,
  focusInset: PropTypes__default.default.bool,
  validation: PropTypes__default.default.oneOf(reactForms.VALIDATION),
  start: PropTypes__default.default.any
};

const Field = React.forwardRef((props, fieldRef) => {
  const {
    downshift: {
      getRootProps
    }
  } = useDropdownContext();
  const [isLabelHovered, setIsLabelHovered] = React.useState(false);
  const {
    ref
  } = getRootProps();
  const value = React.useMemo(() => ({
    isLabelHovered,
    setIsLabelHovered
  }), [isLabelHovered, setIsLabelHovered]);
  return React__namespace.default.createElement(FieldContext.Provider, {
    value: value
  }, React__namespace.default.createElement(reactForms.Field, Object.assign({
    ref: reactMergeRefs.mergeRefs([ref, fieldRef])
  }, props)));
});
Field.displayName = 'Field';

const Hint = React__namespace.default.forwardRef((props, ref) => React__namespace.default.createElement(reactForms.Hint, Object.assign({
  ref: ref
}, props)));
Hint.displayName = 'Hint';

const Label = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    onMouseEnter,
    onMouseLeave,
    ...other
  } = _ref;
  const {
    downshift: {
      getLabelProps
    }
  } = useDropdownContext();
  const {
    setIsLabelHovered
  } = useFieldContext();
  const labelProps = getLabelProps({
    onMouseEnter: containerUtilities.composeEventHandlers(onMouseEnter, () => {
      setIsLabelHovered(true);
    }),
    onMouseLeave: containerUtilities.composeEventHandlers(onMouseLeave, () => {
      setIsLabelHovered(false);
    }),
    ...other
  });
  return React__namespace.default.createElement(reactForms.Label, Object.assign({
    ref: ref
  }, labelProps));
});
Label.displayName = 'Label';
Label.propTypes = {
  isRegular: PropTypes__default.default.bool
};

const Message = React__namespace.default.forwardRef((props, ref) => React__namespace.default.createElement(reactForms.Message, Object.assign({
  ref: ref
}, props)));
Message.displayName = 'Message';
Message.propTypes = {
  validation: PropTypes__default.default.oneOf(reactForms.VALIDATION)
};

const SHARED_PLACEMENT = ['auto', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'];
const PLACEMENT = [...SHARED_PLACEMENT, 'end', 'end-top', 'end-bottom', 'start', 'start-top', 'start-bottom'];

const MenuContext = React__namespace.default.createContext(undefined);
const useMenuContext = () => {
  const menuContext = React.useContext(MenuContext);
  if (!menuContext) {
    throw new Error('This component must be rendered within a `Menu` component.');
  }
  return menuContext;
};

const Menu = React.forwardRef((props, menuRef) => {
  const {
    appendToNode,
    children,
    eventsEnabled = true,
    hasArrow,
    isAnimated = true,
    isCompact,
    maxHeight = '400px',
    placement = 'bottom-start',
    popperModifiers,
    style: menuStyle,
    zIndex = 1000,
    ...other
  } = props;
  const {
    hasMenuRef,
    itemIndexRef,
    previousIndexRef,
    nextItemsHashRef,
    popperReferenceElementRef,
    itemSearchRegistry,
    downshift: {
      isOpen,
      getMenuProps
    }
  } = useDropdownContext();
  const scheduleUpdateRef = React.useRef(undefined);
  React.useEffect(() => {
    if (scheduleUpdateRef.current && isOpen) {
      scheduleUpdateRef.current();
    }
  });
  const [isVisible, setIsVisible] = React.useState(isOpen);
  React.useEffect(() => {
    let timeout;
    if (isOpen) {
      setIsVisible(true);
    } else if (isAnimated) {
      timeout = setTimeout(() => setIsVisible(false), 200);
    } else {
      setIsVisible(false);
    }
    return () => clearTimeout(timeout);
  }, [isOpen, isAnimated]);
  const themeContext = React.useContext(styled.ThemeContext);
  itemIndexRef.current = 0;
  nextItemsHashRef.current = {};
  previousIndexRef.current = undefined;
  itemSearchRegistry.current = [];
  const popperPlacement = themeContext.rtl ? getRtlPopperPlacement(placement) : getPopperPlacement(placement);
  return  React__namespace.default.createElement(MenuContext.Provider, {
    value: {
      itemIndexRef,
      isCompact
    }
  }, React__namespace.default.createElement(reactPopper.Popper, {
    placement: popperPlacement,
    modifiers: popperModifiers
    ,
    eventsEnabled: !!(isOpen && eventsEnabled)
  }, _ref => {
    let {
      ref,
      style,
      scheduleUpdate,
      placement: currentPlacement
    } = _ref;
    let computedStyle = menuStyle;
    scheduleUpdateRef.current = scheduleUpdate;
    if ((isOpen || isVisible) && popperReferenceElementRef.current && popperReferenceElementRef.current.getBoundingClientRect) {
      computedStyle = {
        width: popperReferenceElementRef.current.getBoundingClientRect().width,
        ...menuStyle
      };
    }
    const menuProps = getMenuProps({
      role: hasMenuRef.current ? 'menu' : 'listbox',
      ...other
    });
    const sharedProps = {
      $hasArrow: hasArrow,
      $isAnimated: isAnimated ? isOpen || isVisible : false,
      $isCompact: isCompact,
      $maxHeight: maxHeight,
      $placement: currentPlacement
    };
    const menu = React__namespace.default.createElement(StyledMenuWrapper, Object.assign({
      ref: isOpen ? ref : undefined,
      $isHidden: !isOpen,
      $zIndex: zIndex,
      style: style
    }, sharedProps), React__namespace.default.createElement(StyledMenu, Object.assign({
      ref: menuRef,
      style: computedStyle
    }, sharedProps, menuProps), !!(isOpen || isVisible) && children));
    return appendToNode ? reactDom.createPortal(menu, appendToNode) : menu;
  }));
});
Menu.displayName = 'Menu';
Menu.propTypes = {
  popperModifiers: PropTypes__default.default.any,
  eventsEnabled: PropTypes__default.default.bool,
  zIndex: PropTypes__default.default.number,
  style: PropTypes__default.default.object,
  placement: PropTypes__default.default.oneOf(PLACEMENT),
  isAnimated: PropTypes__default.default.bool,
  isCompact: PropTypes__default.default.bool,
  hasArrow: PropTypes__default.default.bool,
  maxHeight: PropTypes__default.default.string
};

const Separator = React__namespace.default.forwardRef((props, ref) => React__namespace.default.createElement(StyledSeparator, Object.assign({
  ref: ref
}, props)));
Separator.displayName = 'Separator';

var _path$1;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgPlusStroke = function SvgPlusStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M7.5 2.5v12m6-6h-12"
  })));
};

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgCheckLgStroke = function SvgCheckLgStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M1 9l4 4L15 3"
  })));
};

const ItemContext = React__namespace.default.createContext(undefined);
const useItemContext = () => {
  const context = React.useContext(ItemContext);
  if (!context) {
    throw new Error('This component must be rendered within an `Item` component.');
  }
  return context;
};

const Item = React__namespace.default.forwardRef((_ref, forwardRef) => {
  let {
    value,
    disabled,
    isDanger,
    component = StyledItem,
    hasIcon,
    children,
    ...other
  } = _ref;
  const {
    selectedItems,
    hasMenuRef,
    itemSearchRegistry,
    downshift: {
      isOpen,
      selectedItem,
      highlightedIndex,
      getItemProps,
      setHighlightedIndex,
      itemToString
    }
  } = useDropdownContext();
  const {
    itemIndexRef,
    isCompact
  } = useMenuContext();
  const itemRef = React.useRef();
  const Component = component;
  if ((value === undefined || value === null) && !disabled) {
    throw new Error('All Item components require a `value` prop');
  }
  const currentIndex = itemIndexRef.current;
  const isFocused = highlightedIndex === currentIndex;
  let isSelected;
  React.useEffect(() => {
    if (!disabled && itemRef.current) {
      const itemTextValue = itemRef.current.innerText;
      if (itemTextValue) {
        itemSearchRegistry.current[currentIndex] = itemTextValue;
      }
    }
  });
  if (value) {
    if (selectedItems) {
      isSelected = selectedItems.some(item => {
        return itemToString(item) === itemToString(value);
      });
    } else {
      isSelected = itemToString(selectedItem) === itemToString(value);
    }
  } else {
    isSelected = false;
  }
  React.useEffect(() => {
    if (isOpen && !disabled && !selectedItems && isSelected) {
      setHighlightedIndex(currentIndex);
    }
  }, [currentIndex, disabled, isOpen, isSelected, selectedItems, setHighlightedIndex]);
  const contextValue = React.useMemo(() => ({
    isDisabled: disabled
  }), [disabled]);
  const ref = reactMergeRefs.mergeRefs([itemRef, forwardRef]);
  if (disabled) {
    return React__namespace.default.createElement(ItemContext.Provider, {
      value: contextValue
    }, React__namespace.default.createElement(Component, Object.assign({
      ref: ref,
      disabled: disabled,
      $isDanger: isDanger,
      $isCompact: isCompact
    }, other), !!isSelected && !hasIcon && React__namespace.default.createElement(StyledItemIcon, {
      $isCompact: isCompact,
      $isVisible: isSelected,
      $isDisabled: disabled
    }, React__namespace.default.createElement(SvgCheckLgStroke, null)), children));
  }
  itemIndexRef.current++;
  return React__namespace.default.createElement(ItemContext.Provider, {
    value: contextValue
  }, React__namespace.default.createElement(Component, Object.assign({
    $isCompact: isCompact,
    $isDanger: isDanger,
    $isFocused: isFocused
  }, getItemProps({
    item: value,
    ref,
    ...(hasMenuRef.current && {
      role: 'menuitem',
      'aria-selected': null
    }),
    ...other
  })), !!isSelected && !hasIcon && React__namespace.default.createElement(StyledItemIcon, {
    $isCompact: isCompact,
    $isVisible: isSelected
  }, React__namespace.default.createElement(SvgCheckLgStroke, null)), children));
});
Item.displayName = 'Item';
Item.propTypes = {
  value: PropTypes__default.default.any,
  disabled: PropTypes__default.default.bool
};

const AddItemComponent = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    children,
    disabled,
    ...props
  } = _ref;
  const {
    isCompact
  } = useMenuContext();
  return React__namespace.default.createElement(StyledAddItem, Object.assign({
    ref: ref,
    disabled: disabled
  }, props), React__namespace.default.createElement(StyledItemIcon, {
    $isCompact: isCompact,
    $isVisible: true,
    $isDisabled: disabled
  }, React__namespace.default.createElement(SvgPlusStroke, null)), children);
});
const AddItem = React__namespace.default.forwardRef((props, ref) => React__namespace.default.createElement(Item, Object.assign({
  component: AddItemComponent,
  ref: ref
}, props, {
  hasIcon: true
})));
AddItem.displayName = 'AddItem';
AddItem.propTypes = {
  value: PropTypes__default.default.any,
  disabled: PropTypes__default.default.bool
};

const HeaderIcon = React__namespace.default.forwardRef((props, ref) => {
  return React__namespace.default.createElement(StyledHeaderIcon, Object.assign({
    ref: ref
  }, props));
});
HeaderIcon.displayName = 'HeaderIcon';

const HeaderItem = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    hasIcon,
    ...other
  } = _ref;
  const {
    isCompact
  } = useMenuContext();
  return React__namespace.default.createElement(StyledHeaderItem, Object.assign({
    ref: ref,
    $isCompact: isCompact,
    $hasIcon: hasIcon
  }, other));
});
HeaderItem.displayName = 'HeaderItem';

const ItemMeta = React__namespace.default.forwardRef((props, ref) => {
  const {
    isCompact
  } = useMenuContext();
  const {
    isDisabled
  } = useItemContext();
  return React__namespace.default.createElement(StyledItemMeta, Object.assign({
    ref: ref,
    $isCompact: isCompact,
    $isDisabled: isDisabled
  }, props));
});
ItemMeta.displayName = 'ItemMeta';

const MediaBody = React__namespace.default.forwardRef((props, ref) => {
  const {
    isCompact
  } = useMenuContext();
  return React__namespace.default.createElement(StyledMediaBody, Object.assign({
    ref: ref,
    $isCompact: isCompact
  }, props));
});
MediaBody.displayName = 'MediaBody';

const MediaFigure = props => {
  const {
    isCompact
  } = useMenuContext();
  return React__namespace.default.createElement(StyledMediaFigure, Object.assign({
    $isCompact: isCompact
  }, props));
};

const MediaItem = React__namespace.default.forwardRef((props, ref) => React__namespace.default.createElement(Item, Object.assign({
  component: StyledMediaItem,
  ref: ref
}, props)));
MediaItem.displayName = 'MediaItem';
MediaItem.propTypes = {
  value: PropTypes__default.default.any,
  disabled: PropTypes__default.default.bool
};

const NextItemComponent = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    children,
    disabled,
    ...props
  } = _ref;
  const {
    isCompact
  } = useMenuContext();
  return React__namespace.default.createElement(StyledNextItem, Object.assign({
    ref: ref,
    disabled: disabled
  }, props), React__namespace.default.createElement(StyledItemIcon, {
    $isCompact: isCompact,
    $isDisabled: disabled,
    $isVisible: true
  }, React__namespace.default.createElement(StyledNextIcon, {
    $isDisabled: disabled
  })), children);
});
const NextItem = React__namespace.default.forwardRef((_ref2, ref) => {
  let {
    value,
    disabled,
    ...props
  } = _ref2;
  const {
    nextItemsHashRef,
    downshift: {
      itemToString
    }
  } = useDropdownContext();
  const {
    itemIndexRef
  } = useMenuContext();
  if (!disabled) {
    nextItemsHashRef.current[itemToString(value)] = itemIndexRef.current;
  }
  return React__namespace.default.createElement(Item, Object.assign({
    component: NextItemComponent,
    "aria-expanded": true,
    disabled: disabled,
    value: value,
    ref: ref
  }, props, {
    hasIcon: true
  }));
});
NextItem.displayName = 'NextItem';
NextItem.propTypes = {
  value: PropTypes__default.default.any,
  disabled: PropTypes__default.default.bool
};

const PreviousItemComponent = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    children,
    disabled,
    ...props
  } = _ref;
  const {
    isCompact
  } = useMenuContext();
  return React__namespace.default.createElement(StyledPreviousItem, Object.assign({
    ref: ref,
    disabled: disabled
  }, props), React__namespace.default.createElement(StyledItemIcon, {
    $isCompact: isCompact,
    $isDisabled: disabled,
    $isVisible: true
  }, React__namespace.default.createElement(StyledPreviousIcon, {
    $isDisabled: disabled
  })), children);
});
const PreviousItem = React__namespace.default.forwardRef((_ref2, ref) => {
  let {
    value,
    disabled,
    ...props
  } = _ref2;
  const {
    previousIndexRef
  } = useDropdownContext();
  const {
    itemIndexRef
  } = useMenuContext();
  if (!disabled) {
    previousIndexRef.current = itemIndexRef.current;
  }
  return React__namespace.default.createElement(Item, Object.assign({
    component: PreviousItemComponent,
    "aria-expanded": true,
    value: value,
    disabled: disabled
  }, props, {
    ref: ref,
    hasIcon: true
  }));
});
PreviousItem.displayName = 'PreviousItem';
PreviousItem.propTypes = {
  value: PropTypes__default.default.any,
  disabled: PropTypes__default.default.bool
};

Object.defineProperty(exports, "resetIdCounter", {
  enumerable: true,
  get: function () { return Downshift.resetIdCounter; }
});
exports.AddItem = AddItem;
exports.Autocomplete = Autocomplete;
exports.Combobox = Combobox;
exports.Dropdown = Dropdown;
exports.Field = Field;
exports.HeaderIcon = HeaderIcon;
exports.HeaderItem = HeaderItem;
exports.Hint = Hint;
exports.Item = Item;
exports.ItemMeta = ItemMeta;
exports.Label = Label;
exports.MediaBody = MediaBody;
exports.MediaFigure = MediaFigure;
exports.MediaItem = MediaItem;
exports.Menu = Menu;
exports.Message = Message;
exports.Multiselect = Multiselect;
exports.NextItem = NextItem;
exports.PreviousItem = PreviousItem;
exports.Select = Select;
exports.Separator = Separator;
exports.Trigger = Trigger;
