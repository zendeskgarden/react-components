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
var reactButtons = require('@zendeskgarden/react-buttons');
var containerUtilities = require('@zendeskgarden/container-utilities');
var useResizeObserver = require('use-resize-observer');
var reactMergeRefs = require('react-merge-refs');
var containerSplitter = require('@zendeskgarden/container-splitter');
var reactTooltips = require('@zendeskgarden/react-tooltips');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var useResizeObserver__default = /*#__PURE__*/_interopDefault(useResizeObserver);

const ALIGN_ITEMS = ['start', 'end', 'center', 'baseline', 'stretch'];
const ALIGN_SELF = ['auto', ...ALIGN_ITEMS];
const DIRECTION = ['row', 'row-reverse', 'column', 'column-reverse'];
const JUSTIFY_CONTENT = ['start', 'end', 'center', 'between', 'around'];
const TEXT_ALIGN = ['start', 'end', 'center', 'justify'];
const SPACE = [false, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const WRAP = ['nowrap', 'wrap', 'wrap-reverse'];
const ORIENTATION = ['top', 'bottom', 'start', 'end'];

const COMPONENT_ID$6 = 'grid.col';
const colorStyles$4 = ({
  theme
}) => {
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.primaryEmphasis',
    dark: {
      transparency: theme.opacity[200]
    },
    light: {
      transparency: theme.opacity[100]
    }
  });
  return styled.css(["background-clip:content-box;background-color:", ";"], backgroundColor);
};
const flexStyles$1 = (size, alignSelf, textAlign, offset, order, props) => {
  const margin = offset && `${polished.math(`${offset} / ${props.$columns} * 100`)}%`;
  let flexBasis;
  let flexGrow;
  let maxWidth;
  let width;
  if (typeof size === 'boolean') {
    flexBasis = 0;
    flexGrow = 1;
    maxWidth = '100%';
  } else if (size === 'auto') {
    flexBasis = 'auto';
    flexGrow = 0;
    maxWidth = '100%';
    width = 'auto';
  } else if (size !== undefined) {
    flexBasis = `${polished.math(`${size} / ${props.$columns} * 100`)}%`;
    flexGrow = 0;
    maxWidth = flexBasis;
  }
  let horizontalAlign;
  if (textAlign === 'start') {
    horizontalAlign = props.theme.rtl ? 'right' : 'left';
  } else if (textAlign === 'end') {
    horizontalAlign = props.theme.rtl ? 'left' : 'right';
  } else {
    horizontalAlign = textAlign;
  }
  let flexOrder;
  if (order === 'first') {
    flexOrder = -1;
  } else if (order === 'last') {
    flexOrder = polished.math(`${props.$columns} + 1`);
  } else {
    flexOrder = order;
  }
  return styled.css(["flex-basis:", ";flex-grow:", ";flex-shrink:", ";align-self:", ";order:", ";margin-", ":", ";width:", ";max-width:", ";text-align:", ";"], flexBasis, flexGrow, size && 0, alignSelf === 'start' || alignSelf === 'end' ? `flex-${alignSelf}` : alignSelf, flexOrder, props.theme.rtl ? 'right' : 'left', margin, width, maxWidth, horizontalAlign);
};
const mediaStyles$1 = (minWidth, size, alignSelf, textAlign, offset, order, props) => {
  return styled.css(["@media (min-width:", "){", ";}"], minWidth, flexStyles$1(size, alignSelf, textAlign, offset, order, props));
};
const sizeStyles$5 = ({
  theme,
  $gutters
}) => {
  const padding = $gutters ? polished.math(`${theme.space[$gutters]} / 2`) : 0;
  return styled.css(["padding-right:", ";padding-left:", ";"], padding, padding);
};
const StyledCol = styled__default.default.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3',
  $columns: props.$columns ?? 12
})).withConfig({
  displayName: "StyledCol",
  componentId: "sc-inuw62-0"
})(["box-sizing:border-box;width:100%;", ";", ";", ";", ";", ";", ";", ";", ";", ";"], props => flexStyles$1(!props.$sizeAll && (props.$xs || props.$sm || props.$md || props.$lg || props.$xl) ? undefined : props.$sizeAll || false, props.$alignSelf, props.$textAlign, props.$offset, props.$order, props), sizeStyles$5, props => props.$debug && colorStyles$4(props), props => mediaStyles$1(props.theme.breakpoints.xs, props.$xs, props.$alignSelfXs, props.$textAlignXs, props.$offsetXs, props.$orderXs, props), props => mediaStyles$1(props.theme.breakpoints.sm, props.$sm, props.$alignSelfSm, props.$textAlignSm, props.$offsetSm, props.$orderSm, props), props => mediaStyles$1(props.theme.breakpoints.md, props.$md, props.$alignSelfMd, props.$textAlignMd, props.$offsetMd, props.$orderMd, props), props => mediaStyles$1(props.theme.breakpoints.lg, props.$lg, props.$alignSelfLg, props.$textAlignLg, props.$offsetLg, props.$orderLg, props), props => mediaStyles$1(props.theme.breakpoints.xl, props.$xl, props.$alignSelfXl, props.$textAlignXl, props.$offsetXl, props.$orderXl, props), reactTheming.componentStyles);

const COMPONENT_ID$5 = 'grid.grid';
const colorStyles$3 = ({
  theme,
  $debug
}) => {
  const borderColor = $debug && reactTheming.getColor({
    theme,
    hue: 'crimson',
    shade: 700,
    transparency: theme.opacity[600]
  });
  const borderWidth = $debug && polished.math(`${theme.borderWidths.sm} * 2`);
  return styled.css(["color-scheme:only ", ";box-shadow:", ";"], theme.colors.base, $debug && `
      -${borderWidth} 0 0 0 ${borderColor},
      ${borderWidth} 0 0 0 ${borderColor}
    `);
};
const sizeStyles$4 = ({
  theme,
  $gutters
}) => {
  const padding = $gutters ? polished.math(`${theme.space[$gutters]} / 2`) : 0;
  return styled.css(["padding-right:", ";padding-left:", ";"], padding, padding);
};
const StyledGrid = styled__default.default.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3',
  $gutters: props.$gutters ?? 'md'
})).withConfig({
  displayName: "StyledGrid",
  componentId: "sc-oxgg5i-0"
})(["direction:", ";margin-right:auto;margin-left:auto;width:100%;box-sizing:border-box;", ";", ";", ";"], props => props.theme.rtl && 'rtl', sizeStyles$4, colorStyles$3, reactTheming.componentStyles);

const COMPONENT_ID$4 = 'grid.row';
const colorStyles$2 = ({
  theme
}) => {
  const borderColor = reactTheming.getColor({
    theme,
    hue: 'mint',
    shade: 700,
    transparency: theme.opacity[600]
  });
  const borderWidth = theme.borderWidths.sm;
  return styled.css(["box-shadow:inset 0 ", " 0 0 ", ",inset 0 -", " 0 0 ", ";"], borderWidth, borderColor, borderWidth, borderColor);
};
const flexStyles = (alignItems, justifyContent, wrap) => {
  let flexAlignItems;
  let flexJustifyContent;
  if (alignItems === 'start' || alignItems === 'end') {
    flexAlignItems = `flex-${alignItems}`;
  } else {
    flexAlignItems = alignItems;
  }
  if (justifyContent === 'start' || justifyContent === 'end') {
    flexJustifyContent = `flex-${justifyContent}`;
  } else if (justifyContent === 'between' || justifyContent === 'around') {
    flexJustifyContent = `space-${justifyContent}`;
  } else {
    flexJustifyContent = justifyContent;
  }
  return styled.css(["flex-wrap:", ";align-items:", ";justify-content:", ";"], wrap, flexAlignItems, flexJustifyContent);
};
const mediaStyles = (minWidth, alignItems, justifyContent, wrap) => {
  return styled.css(["@media (min-width:", "){", ";}"], minWidth, flexStyles(alignItems, justifyContent, wrap));
};
const sizeStyles$3 = ({
  theme,
  $gutters
}) => {
  const margin = $gutters ? polished.math(`${theme.space[$gutters]} / 2`) : 0;
  return styled.css(["margin-right:-", ";margin-left:-", ";"], margin, margin);
};
const StyledRow = styled__default.default.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3',
  $wrapAll: props.$wrapAll ?? 'wrap'
})).withConfig({
  displayName: "StyledRow",
  componentId: "sc-xjsdg1-0"
})(["display:flex;box-sizing:border-box;", " ", ";", ";", ";", ";", ";", ";", ";", ";"], props => flexStyles(props.$alignItems, props.$justifyContent, props.$wrapAll), sizeStyles$3, props => props.$debug && colorStyles$2(props), props => mediaStyles(props.theme.breakpoints.xs, props.$alignItemsXs, props.$justifyContentXs, props.$wrapXs), props => mediaStyles(props.theme.breakpoints.sm, props.$alignItemsSm, props.$justifyContentSm, props.$wrapSm), props => mediaStyles(props.theme.breakpoints.md, props.$alignItemsMd, props.$justifyContentMd, props.$wrapMd), props => mediaStyles(props.theme.breakpoints.lg, props.$alignItemsLg, props.$justifyContentLg, props.$wrapLg), props => mediaStyles(props.theme.breakpoints.xl, props.$alignItemsXl, props.$justifyContentXl, props.$wrapXl), reactTheming.componentStyles);

const COMPONENT_ID$3 = 'pane';
const StyledPane = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPane",
  componentId: "sc-1ltjst7-0"
})(["position:relative;min-width:0;min-height:0;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$2 = 'pane.content';
const StyledPaneContent = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPaneContent",
  componentId: "sc-1b38mbh-0"
})(["height:100%;overflow:auto;color-scheme:only ", ";&[hidden]{display:none;}", ";"], p => p.theme.colors.base, reactTheming.componentStyles);

const COMPONENT_ID$1 = 'pane.splitter';
const colorStyles$1 = ({
  theme
}) => {
  const color = reactTheming.getColor({
    theme,
    variable: 'border.default'
  });
  const options = {
    theme,
    variable: 'border.primaryEmphasis'
  };
  const hoverColor = reactTheming.getColor(options);
  const activeColor = reactTheming.getColor({
    ...options,
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  });
  return styled.css(["&::before{background-color:", ";}&:hover::before{background-color:", ";}", " &:active::before{background-color:", ";}"], color, hoverColor, reactTheming.focusStyles({
    theme,
    styles: {
      backgroundColor: hoverColor
    },
    selector: '&:focus-visible::before'
  }), activeColor);
};
const sizeStyles$2 = ({
  theme,
  $orientation,
  $isFixed
}) => {
  const size = polished.math(`${theme.shadowWidths.md} * 2`);
  const separatorSize = polished.math(`${theme.borderWidths.sm} * 2`);
  const offset = polished.math(`-${size} / 2`);
  let cursor;
  let top;
  let right;
  let left;
  let bottom;
  let width;
  let height;
  let separatorWidth;
  let separatorHeight;
  switch ($orientation) {
    case 'top':
      cursor = 'row-resize';
      top = offset;
      width = '100%';
      height = size;
      separatorWidth = width;
      separatorHeight = theme.borderWidths.sm;
      break;
    case 'bottom':
      cursor = 'row-resize';
      bottom = offset;
      width = '100%';
      height = size;
      separatorWidth = width;
      separatorHeight = theme.borderWidths.sm;
      break;
    case 'start':
      cursor = 'col-resize';
      top = 0;
      width = size;
      height = '100%';
      separatorWidth = theme.borderWidths.sm;
      separatorHeight = height;
      if (theme.rtl) {
        right = offset;
      } else {
        left = offset;
      }
      break;
    case 'end':
    default:
      cursor = 'col-resize';
      top = 0;
      width = size;
      height = '100%';
      separatorWidth = theme.borderWidths.sm;
      separatorHeight = height;
      if (theme.rtl) {
        left = offset;
      } else {
        right = offset;
      }
      break;
  }
  const dimensionProperty = width === '100%' ? 'height' : 'width';
  return styled.css(["top:", ";right:", ";bottom:", ";left:", ";cursor:", ";width:", ";height:", ";&::before{width:", ";height:", ";}&:hover::before{", ":", ";}&:focus::before,&:focus-visible::before{", ":", ";}&:focus-visible::before{border-radius:", ";}"], top, right, bottom, left, $isFixed ? 'pointer' : cursor, width, height, separatorWidth, separatorHeight, dimensionProperty, separatorSize, dimensionProperty, separatorSize, theme.borderRadii.md);
};
const StyledPaneSplitter = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPaneSplitter",
  componentId: "sc-jylemn-0"
})(["display:flex;position:absolute;align-items:center;justify-content:center;z-index:1;user-select:none;", ";", "{z-index:2;}&::before{position:absolute;transition:box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out;z-index:-1;content:'';}", ";", ";"], sizeStyles$2, reactTheming.SELECTOR_FOCUS_VISIBLE, colorStyles$1, reactTheming.componentStyles);

const getSize = theme => theme.space.base * 6;
const sizeStyles$1 = ({
  theme
}) => {
  const size = `${getSize(theme)}px`;
  return styled.css(["width:", ";min-width:", ";height:", ";"], size, size, size);
};
const transformStyles = ({
  $isRotated,
  $orientation,
  theme
}) => {
  let degrees = 0;
  if ($isRotated) {
    degrees = theme.rtl ? -180 : 180;
  }
  if ($orientation === 'end') {
    degrees += theme.rtl ? -90 : 90;
  } else if ($orientation === 'start') {
    degrees += theme.rtl ? 90 : -90;
  } else if ($orientation === 'bottom') {
    degrees += 180;
  }
  return styled.css(["& > svg{transform:rotate(", "deg);}"], degrees);
};
const StyledPaneSplitterButton = styled__default.default(reactButtons.ChevronButton).attrs({
  'data-garden-version': '9.12.3',
  isBasic: true,
  isPill: true,
  size: 'small'
}).withConfig({
  displayName: "StyledPaneSplitterButton",
  componentId: "sc-zh032e-0"
})(["", ";", ";", ";"], sizeStyles$1, transformStyles, reactTheming.componentStyles);

const COMPONENT_ID = 'pane.splitter_button_container';
const colorStyles = ({
  theme
}) => {
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.raised'
  });
  const boxShadow = theme.shadows.lg(`${theme.space.base}px`, `${theme.space.base * 2}px`, reactTheming.getColor({
    variable: 'shadow.small',
    theme
  }));
  return styled.css(["box-shadow:", ";background-color:", ";"], boxShadow, backgroundColor);
};
const positionStyles = ({
  theme,
  $orientation,
  $placement,
  $splitterSize
}) => {
  let top;
  let left;
  let right;
  let bottom;
  const size = getSize(theme);
  const inset = `-${size / 2}px`;
  if ($placement === 'center' || $splitterSize < size * 3) {
    const center = `${$splitterSize / 2 - size / 2}px`;
    switch (`${$orientation}-${theme.rtl ? 'rtl' : 'ltr'}`) {
      case 'top-ltr':
      case 'top-rtl':
        top = inset;
        left = center;
        break;
      case 'start-ltr':
      case 'end-rtl':
        top = center;
        left = inset;
        break;
      case 'end-ltr':
      case 'start-rtl':
        top = center;
        right = inset;
        break;
      case 'bottom-ltr':
      case 'bottom-rtl':
        bottom = inset;
        right = center;
        break;
    }
  } else {
    const offset = `${size}px`;
    switch (`${$orientation}-${$placement}-${theme.rtl ? 'rtl' : 'ltr'}`) {
      case 'top-end-ltr':
      case 'top-end-rtl':
      case 'top-start-rtl':
        top = inset;
        right = offset;
        break;
      case 'bottom-end-ltr':
      case 'bottom-end-rtl':
      case 'bottom-start-rtl':
        bottom = inset;
        right = offset;
        break;
      case 'start-start-ltr':
      case 'end-start-rtl':
        top = offset;
        left = inset;
        break;
      case 'start-end-ltr':
      case 'end-end-rtl':
        bottom = offset;
        left = inset;
        break;
      case 'end-start-ltr':
      case 'start-start-rtl':
        top = offset;
        right = inset;
        break;
      case 'end-end-ltr':
      case 'start-end-rtl':
        bottom = offset;
        right = inset;
        break;
      case 'top-start-ltr':
        top = inset;
        left = offset;
        break;
      case 'bottom-start-ltr':
        bottom = inset;
        left = offset;
        break;
    }
  }
  return styled.css(["top:", ";right:", ";bottom:", ";left:", ";"], top, right, bottom, left);
};
const sizeStyles = ({
  theme
}) => {
  const size = getSize(theme);
  return styled.css(["border-radius:", "px;width:", "px;height:", "px;"], size, size, size);
};
const minimumSplitterSize = theme => polished.stripUnit(polished.math(`${theme.shadowWidths.md} * 2 + ${getSize(theme)}`));
const StyledPaneSplitterButtonContainer = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPaneSplitterButtonContainer",
  componentId: "sc-1w84y62-0"
})(["display:", ";position:absolute;transition:box-shadow 0.1s ease-in-out,opacity 0.25s ease-in-out 0.1s;opacity:0;z-index:2;", ";", ";", ";&:hover,&:focus-within,", ":hover ~ &,", ":focus-visible ~ &{opacity:1;}", ";"], props => props.$splitterSize <= minimumSplitterSize(props.theme) ? 'none' : undefined, positionStyles, sizeStyles, colorStyles, StyledPaneSplitter, StyledPaneSplitter, reactTheming.componentStyles);

const GridContext = React.createContext({
  gutters: 'md'
});
const useGridContext = () => {
  return React.useContext(GridContext);
};

const Col = React__default.default.forwardRef(({
  alignSelf,
  alignSelfLg,
  alignSelfMd,
  alignSelfSm,
  alignSelfXl,
  alignSelfXs,
  lg,
  md,
  offset,
  offsetLg,
  offsetMd,
  offsetSm,
  offsetXl,
  offsetXs,
  order,
  orderLg,
  orderMd,
  orderSm,
  orderXl,
  orderXs,
  size,
  sm,
  textAlign,
  textAlignLg,
  textAlignMd,
  textAlignSm,
  textAlignXl,
  textAlignXs,
  xl,
  xs,
  ...other
}, ref) => {
  const {
    columns,
    gutters,
    debug
  } = useGridContext();
  return React__default.default.createElement(StyledCol, Object.assign({
    $xs: xs,
    $sm: sm,
    $md: md,
    $lg: lg,
    $xl: xl,
    $alignSelf: alignSelf,
    $alignSelfXs: alignSelfXs,
    $alignSelfSm: alignSelfSm,
    $alignSelfMd: alignSelfMd,
    $alignSelfLg: alignSelfLg,
    $alignSelfXl: alignSelfXl,
    $textAlign: textAlign,
    $textAlignXs: textAlignXs,
    $textAlignSm: textAlignSm,
    $textAlignMd: textAlignMd,
    $textAlignLg: textAlignLg,
    $textAlignXl: textAlignXl,
    $offset: offset,
    $offsetXs: offsetXs,
    $offsetSm: offsetSm,
    $offsetMd: offsetMd,
    $offsetLg: offsetLg,
    $offsetXl: offsetXl,
    $order: order,
    $orderXs: orderXs,
    $orderSm: orderSm,
    $orderMd: orderMd,
    $orderLg: orderLg,
    $orderXl: orderXl,
    $sizeAll: size,
    $columns: columns,
    $gutters: gutters,
    $debug: debug,
    ref: ref
  }, other));
});
Col.displayName = 'Grid.Col';
Col.propTypes = {
  size: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  xs: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string, PropTypes__default.default.bool]),
  sm: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string, PropTypes__default.default.bool]),
  md: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string, PropTypes__default.default.bool]),
  lg: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string, PropTypes__default.default.bool]),
  xl: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string, PropTypes__default.default.bool]),
  alignSelf: PropTypes__default.default.oneOf(ALIGN_SELF),
  alignSelfXs: PropTypes__default.default.oneOf(ALIGN_SELF),
  alignSelfSm: PropTypes__default.default.oneOf(ALIGN_SELF),
  alignSelfMd: PropTypes__default.default.oneOf(ALIGN_SELF),
  alignSelfLg: PropTypes__default.default.oneOf(ALIGN_SELF),
  alignSelfXl: PropTypes__default.default.oneOf(ALIGN_SELF),
  textAlign: PropTypes__default.default.oneOf(TEXT_ALIGN),
  textAlignXs: PropTypes__default.default.oneOf(TEXT_ALIGN),
  textAlignSm: PropTypes__default.default.oneOf(TEXT_ALIGN),
  textAlignMd: PropTypes__default.default.oneOf(TEXT_ALIGN),
  textAlignLg: PropTypes__default.default.oneOf(TEXT_ALIGN),
  textAlignXl: PropTypes__default.default.oneOf(TEXT_ALIGN),
  offset: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  offsetXs: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  offsetSm: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  offsetMd: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  offsetLg: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  offsetXl: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  order: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  orderXs: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  orderSm: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  orderMd: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  orderLg: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  orderXl: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string])
};

const Row = React__default.default.forwardRef(({
  alignItems,
  alignItemsXs,
  alignItemsSm,
  alignItemsMd,
  alignItemsLg,
  alignItemsXl,
  justifyContent,
  justifyContentXs,
  justifyContentSm,
  justifyContentMd,
  justifyContentLg,
  justifyContentXl,
  wrap,
  wrapXs,
  wrapSm,
  wrapMd,
  wrapLg,
  wrapXl,
  ...props
}, ref) => {
  const {
    gutters,
    debug
  } = useGridContext();
  return React__default.default.createElement(StyledRow, Object.assign({
    $gutters: gutters,
    $debug: debug,
    $alignItems: alignItems,
    $alignItemsXs: alignItemsXs,
    $alignItemsSm: alignItemsSm,
    $alignItemsMd: alignItemsMd,
    $alignItemsLg: alignItemsLg,
    $alignItemsXl: alignItemsXl,
    $justifyContent: justifyContent,
    $justifyContentXs: justifyContentXs,
    $justifyContentSm: justifyContentSm,
    $justifyContentMd: justifyContentMd,
    $justifyContentLg: justifyContentLg,
    $justifyContentXl: justifyContentXl,
    $wrapAll: wrap,
    $wrapXs: wrapXs,
    $wrapSm: wrapSm,
    $wrapMd: wrapMd,
    $wrapLg: wrapLg,
    $wrapXl: wrapXl,
    ref: ref
  }, props));
});
Row.displayName = 'Grid.Row';
Row.propTypes = {
  alignItems: PropTypes__default.default.oneOf(ALIGN_ITEMS),
  alignItemsXs: PropTypes__default.default.oneOf(ALIGN_ITEMS),
  alignItemsSm: PropTypes__default.default.oneOf(ALIGN_ITEMS),
  alignItemsMd: PropTypes__default.default.oneOf(ALIGN_ITEMS),
  alignItemsLg: PropTypes__default.default.oneOf(ALIGN_ITEMS),
  alignItemsXl: PropTypes__default.default.oneOf(ALIGN_ITEMS),
  justifyContent: PropTypes__default.default.oneOf(JUSTIFY_CONTENT),
  justifyContentXs: PropTypes__default.default.oneOf(JUSTIFY_CONTENT),
  justifyContentSm: PropTypes__default.default.oneOf(JUSTIFY_CONTENT),
  justifyContentMd: PropTypes__default.default.oneOf(JUSTIFY_CONTENT),
  justifyContentLg: PropTypes__default.default.oneOf(JUSTIFY_CONTENT),
  justifyContentXl: PropTypes__default.default.oneOf(JUSTIFY_CONTENT),
  wrap: PropTypes__default.default.oneOf(WRAP),
  wrapXs: PropTypes__default.default.oneOf(WRAP),
  wrapSm: PropTypes__default.default.oneOf(WRAP),
  wrapMd: PropTypes__default.default.oneOf(WRAP),
  wrapLg: PropTypes__default.default.oneOf(WRAP),
  wrapXl: PropTypes__default.default.oneOf(WRAP)
};

const GridComponent = React__default.default.forwardRef(({
  columns = 12,
  gutters = 'md',
  debug,
  ...other
}, ref) => {
  const value = React.useMemo(() => ({
    columns,
    gutters: gutters,
    debug
  }), [columns, gutters, debug]);
  return React__default.default.createElement(GridContext.Provider, {
    value: value
  }, React__default.default.createElement(StyledGrid, Object.assign({
    $debug: debug,
    $gutters: gutters,
    ref: ref
  }, other)));
});
GridComponent.displayName = 'Grid';
GridComponent.propTypes = {
  columns: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  gutters: PropTypes__default.default.oneOf(SPACE),
  debug: PropTypes__default.default.bool
};
const Grid = GridComponent;
Grid.Row = Row;
Grid.Col = Col;

const PaneProviderContext = React.createContext({});
const usePaneProviderContextData = providerId => {
  const context = React.useContext(PaneProviderContext);
  const id = providerId || context.providerId;
  return id && context.contextData ? context.contextData[id] : undefined;
};
const usePaneProviderContext = () => React.useContext(PaneProviderContext);

const getPixelsPerFr = (totalFrs, totalDimension) => {
  return totalDimension / totalFrs;
};
const convertToPixels = (values, pixelsPerFr) => {
  return Object.entries(values).reduce((prev, [key, value]) => {
    prev[key] = value * pixelsPerFr;
    return prev;
  }, {});
};
const PaneProvider = ({
  id,
  totalPanesWidth,
  totalPanesHeight,
  defaultRowValues,
  defaultColumnValues,
  rowValues,
  columnValues,
  onChange,
  children
}) => {
  const isControlled = rowValues !== undefined && rowValues !== null && columnValues !== undefined && columnValues !== null;
  const [rowState, setRowState] = React.useState(defaultRowValues || {});
  const [columnState, setColumnState] = React.useState(defaultColumnValues || {});
  const rowsTrack = isControlled ? rowValues : rowState;
  const columnsTrack = isControlled ? columnValues : columnState;
  const setRowsTrack = React.useCallback(values => {
    if (isControlled && onChange) {
      return onChange(values(rowsTrack), columnsTrack);
    }
    return setRowState(values);
  }, [isControlled, onChange, setRowState, columnsTrack, rowsTrack]);
  const setColumnsTrack = React.useCallback(values => {
    if (isControlled && onChange) {
      return onChange(rowsTrack, values(columnsTrack));
    }
    return setColumnState(values);
  }, [isControlled, onChange, setColumnState, rowsTrack, columnsTrack]);
  const totalFractions = React.useMemo(() => ({
    rows: Object.values(rowsTrack).reduce((prev, value) => value + prev, 0),
    columns: Object.values(columnsTrack).reduce((prev, value) => value + prev, 0)
  }), [rowsTrack, columnsTrack]);
  const pixelsPerFr = React.useMemo(() => ({
    rows: getPixelsPerFr(totalFractions.rows, totalPanesHeight),
    columns: getPixelsPerFr(totalFractions.columns, totalPanesWidth)
  }), [totalFractions, totalPanesHeight, totalPanesWidth]);
  const layoutStateInPixels = React.useMemo(() => ({
    rows: convertToPixels(rowsTrack, pixelsPerFr.rows),
    columns: convertToPixels(columnsTrack, pixelsPerFr.columns)
  }), [rowsTrack, columnsTrack, pixelsPerFr]);
  const layoutIndices = React.useMemo(() => {
    const rowArray = Object.keys(rowsTrack);
    const columnArray = Object.keys(columnsTrack);
    const rows = rowArray.reduce((prev, key, index) => {
      prev[key] = index;
      return prev;
    }, {});
    const columns = columnArray.reduce((prev, key, index) => {
      prev[key] = index;
      return prev;
    }, {});
    return {
      rows,
      columns,
      rowArray,
      columnArray
    };
  }, [rowsTrack, columnsTrack]);
  const setRowValue = React.useCallback((isTop, splitterId, value) => {
    const {
      rows,
      rowArray
    } = layoutIndices;
    const stealFromTraversal = isTop ? -1 : 1;
    const addToTraversal = 0;
    setRowsTrack(state => {
      const oldValue = rowsTrack[splitterId];
      const stealFromIndex = rows[splitterId] + stealFromTraversal;
      const addToIndex = rows[splitterId] + addToTraversal;
      const stealFromKey = rowArray[stealFromIndex];
      const addToKey = rowArray[addToIndex];
      const difference = oldValue - value;
      const nextState = {
        ...state
      };
      nextState[addToKey] = rowsTrack[addToKey] - difference;
      nextState[stealFromKey] = rowsTrack[stealFromKey] + difference;
      return nextState;
    });
  }, [layoutIndices, rowsTrack, setRowsTrack]);
  const setColumnValue = React.useCallback((isStart, splitterId, value) => {
    const {
      columns,
      columnArray
    } = layoutIndices;
    const stealFromTraversal = isStart ? -1 : 1;
    const addToTraversal = 0;
    setColumnsTrack(state => {
      const stealFromIndex = columns[splitterId] + stealFromTraversal;
      const addToIndex = columns[splitterId] + addToTraversal;
      const oldValue = columnsTrack[splitterId];
      const stealFromKey = columnArray[stealFromIndex];
      const addToKey = columnArray[addToIndex];
      const difference = oldValue - value;
      const nextState = {
        ...state
      };
      nextState[addToKey] = columnsTrack[addToKey] - difference;
      nextState[stealFromKey] = columnsTrack[stealFromKey] + difference;
      return nextState;
    });
  }, [layoutIndices, columnsTrack, setColumnsTrack]);
  const getColumnValue = React.useCallback((splitterKey, isPixels) => {
    if (isPixels) {
      return layoutStateInPixels.columns[splitterKey];
    }
    return columnsTrack[splitterKey];
  }, [columnsTrack, layoutStateInPixels]);
  const getRowValue = React.useCallback((splitterKey, isPixels) => {
    if (isPixels) {
      return layoutStateInPixels.rows[splitterKey];
    }
    return rowsTrack[splitterKey];
  }, [rowsTrack, layoutStateInPixels]);
  const getGridTemplateColumns = React.useCallback(isPixels => {
    const {
      columnArray
    } = layoutIndices;
    if (isPixels) {
      return columnArray.map(col => `${layoutStateInPixels.columns[col]}px`).join(' ');
    }
    return columnArray.map(col => `${columnsTrack[col]}fr`).join(' ');
  }, [layoutIndices, columnsTrack, layoutStateInPixels]);
  const getGridTemplateRows = React.useCallback(isPixels => {
    const {
      rowArray
    } = layoutIndices;
    if (isPixels) {
      return rowArray.map(row => `${layoutStateInPixels.rows[row]}px`).join(' ');
    }
    return rowArray.map(row => `${rowsTrack[row]}fr`).join(' ');
  }, [layoutIndices, rowsTrack, layoutStateInPixels]);
  const providerId = containerUtilities.useId(id);
  const parentPaneProviderContext = usePaneProviderContext();
  const paneProviderContext = React.useMemo(() => providerId ? {
    providerId,
    contextData: {
      ...parentPaneProviderContext.contextData,
      [providerId]: {
        columnState,
        rowState,
        setRowValue,
        setColumnValue,
        getRowValue,
        getColumnValue,
        totalPanesHeight,
        totalPanesWidth,
        pixelsPerFr
      }
    }
  } : {}, [providerId, parentPaneProviderContext, rowState, columnState, setRowValue, setColumnValue, getRowValue, getColumnValue, totalPanesHeight, totalPanesWidth, pixelsPerFr]);
  return React__default.default.createElement(PaneProviderContext.Provider, {
    value: paneProviderContext
  }, children?.({
    id: providerId,
    getRowValue,
    getColumnValue,
    getGridTemplateColumns,
    getGridTemplateRows
  }));
};
PaneProvider.displayName = 'PaneProvider';
PaneProvider.propTypes = {
  id: PropTypes__default.default.string,
  totalPanesWidth: PropTypes__default.default.number.isRequired,
  totalPanesHeight: PropTypes__default.default.number.isRequired,
  defaultRowValues: PropTypes__default.default.object,
  defaultColumnValues: PropTypes__default.default.object,
  rowValues: PropTypes__default.default.object,
  columnValues: PropTypes__default.default.object,
  onChange: PropTypes__default.default.func,
  children: PropTypes__default.default.func
};

const PaneContext = React.createContext({
  setId: () => undefined
});
const usePaneContext = () => {
  return React.useContext(PaneContext);
};

const PaneSplitterContext = React.createContext({
  orientation: 'start',
  min: 0,
  max: 0,
  layoutKey: '',
  valueNow: 0,
  size: 0,
  isRow: false
});
const usePaneSplitterContext = () => {
  return React.useContext(PaneSplitterContext);
};

const paneToSplitterOrientation = {
  start: 'vertical',
  end: 'vertical',
  top: 'horizontal',
  bottom: 'horizontal'
};
const orientationToDimension = {
  start: 'columns',
  end: 'columns',
  top: 'rows',
  bottom: 'rows'
};
const SplitterComponent = React.forwardRef(({
  children,
  providerId,
  layoutKey,
  min,
  max,
  orientation = 'end',
  isFixed,
  onMouseDown,
  onTouchStart,
  onKeyDown,
  onClick,
  ...props
}, ref) => {
  const paneProviderContext = usePaneProviderContextData(providerId);
  const paneContext = usePaneContext();
  const themeContext = React.useContext(styled.ThemeContext);
  const environment = reactTheming.useDocument(themeContext);
  const isRow = orientationToDimension[orientation] === 'rows';
  const separatorRef = React.useRef(null);
  const splitterOrientation = paneToSplitterOrientation[orientation || 'end'];
  const pixelsPerFr = paneProviderContext ? paneProviderContext.pixelsPerFr[orientationToDimension[orientation]] : 0;
  const value = isRow ? paneProviderContext?.getRowValue(layoutKey, true) : paneProviderContext?.getColumnValue(layoutKey, true);
  const valueInFr = isRow ? paneProviderContext?.getRowValue(layoutKey) : paneProviderContext?.getColumnValue(layoutKey);
  const {
    getSeparatorProps,
    getPrimaryPaneProps
  } = containerSplitter.useSplitter({
    orientation: splitterOrientation,
    isLeading: orientation === 'start' || orientation === 'top',
    min: min * pixelsPerFr,
    max: max * pixelsPerFr,
    rtl: themeContext.rtl,
    isFixed,
    environment,
    onChange: valueNow => {
      if (isRow) {
        return paneProviderContext?.setRowValue(orientation === 'top', layoutKey, valueNow / pixelsPerFr);
      }
      return paneProviderContext?.setColumnValue(orientation === 'start', layoutKey, valueNow / pixelsPerFr);
    },
    valueNow: value,
    separatorRef
  });
  React.useEffect(() => {
    if (!paneContext.id) {
      paneContext.setId(getPrimaryPaneProps().id);
    }
  }, [paneContext, getPrimaryPaneProps]);
  const ariaLabel = reactTheming.useText(SplitterComponent, props, 'aria-label', `${splitterOrientation} splitter`);
  const separatorProps = getSeparatorProps({
    'aria-controls': paneContext.id,
    'aria-label': ariaLabel,
    onMouseDown,
    onTouchStart,
    onKeyDown,
    onClick
  });
  const size = isRow ? separatorRef.current?.clientWidth : separatorRef.current?.clientHeight;
  return React__default.default.createElement(PaneSplitterContext.Provider, {
    value: React.useMemo(() => ({
      orientation,
      layoutKey,
      min,
      max,
      valueNow: valueInFr,
      size,
      isRow
    }), [orientation, layoutKey, min, max, valueInFr, size, isRow])
  }, React__default.default.createElement(StyledPaneSplitter, Object.assign({
    $isFixed: isFixed,
    $orientation: orientation
  }, separatorProps, props, {
    ref: reactMergeRefs.mergeRefs([separatorRef, ref])
  })), children );
});
SplitterComponent.displayName = 'Pane.Splitter';
SplitterComponent.propTypes = {
  layoutKey: PropTypes__default.default.string.isRequired,
  min: PropTypes__default.default.number.isRequired,
  max: PropTypes__default.default.number.isRequired,
  orientation: PropTypes__default.default.oneOf(ORIENTATION),
  isFixed: PropTypes__default.default.bool
};
const Splitter = SplitterComponent;

const ContentComponent = React.forwardRef((props, ref) => {
  const {
    isVisible
  } = usePaneContext();
  return React__default.default.createElement(StyledPaneContent, Object.assign({
    hidden: !isVisible,
    ref: ref
  }, props));
});
ContentComponent.displayName = 'Pane.Content';
const Content = ContentComponent;

const SplitterButtonComponent = React.forwardRef(({
  label,
  placement: defaultPlacement,
  ...other
}, ref) => {
  const {
    orientation,
    layoutKey,
    min,
    max,
    isRow,
    valueNow,
    size,
    providerId
  } = usePaneSplitterContext();
  const paneProviderContext = usePaneProviderContextData(providerId);
  const isTop = orientation === 'top';
  const isStart = orientation === 'start';
  const isMin = valueNow === min;
  let placement = defaultPlacement;
  if (!defaultPlacement) {
    if (isRow) {
      placement = 'center';
    } else {
      placement = 'start';
    }
  }
  const setValue = React.useCallback(value => {
    if (isRow) {
      paneProviderContext.setRowValue(isTop, layoutKey, value);
    } else {
      paneProviderContext.setColumnValue(isStart, layoutKey, value);
    }
  }, [isRow, isTop, isStart, layoutKey, paneProviderContext]);
  const onClick = containerUtilities.composeEventHandlers(other.onClick, () => {
    if (isMin) {
      setValue(max);
    } else {
      setValue(min);
    }
  });
  const onKeyDown = containerUtilities.composeEventHandlers(other.onKeyDown, event => event.stopPropagation()
  );
  const onMouseDown = containerUtilities.composeEventHandlers(other.onMouseDown, event => event.stopPropagation()
  );
  return React__default.default.createElement(StyledPaneSplitterButtonContainer, {
    $orientation: orientation,
    $placement: placement,
    $splitterSize: size || 0
  }, React__default.default.createElement(reactTooltips.Tooltip, {
    content: label,
    placement: "auto",
    zIndex: 2,
    style: {
      cursor: 'default'
    },
    onMouseDown: e => e.stopPropagation()
  }, React__default.default.createElement(StyledPaneSplitterButton, Object.assign({
    "aria-label": label
  }, other, {
    $orientation: orientation,
    $isRotated: isMin,
    ref: ref,
    onClick: onClick,
    onKeyDown: onKeyDown,
    onMouseDown: onMouseDown
  }))));
});
SplitterButtonComponent.displayName = 'Pane.SplitterButton';
const SplitterButton = SplitterButtonComponent;

const PaneComponent = React.forwardRef(({
  children,
  ...props
}, ref) => {
  const [paneId, setPaneId] = React.useState();
  const observerRef = React.useRef(null);
  const {
    width = 0,
    height = 0
  } = useResizeObserver__default.default({
    ref: observerRef
  });
  const isVisible = React.useMemo(() => observerRef.current ? width > 0 && height > 0 : true, [width, height]);
  const paneContext = React.useMemo(() => ({
    isVisible,
    id: paneId,
    setId: id => setPaneId(id)
  }), [paneId, isVisible]);
  return React__default.default.createElement(PaneContext.Provider, {
    value: paneContext
  }, React__default.default.createElement(StyledPane, Object.assign({
    id: paneId,
    ref: reactMergeRefs.mergeRefs([ref, observerRef])
  }, props), children));
});
PaneComponent.displayName = 'Pane';
const Pane = PaneComponent;
Pane.Content = Content;
Pane.Splitter = Splitter;
Pane.SplitterButton = SplitterButton;

exports.ALIGN_ITEMS = ALIGN_ITEMS;
exports.ALIGN_SELF = ALIGN_SELF;
exports.Col = Col;
exports.DIRECTION = DIRECTION;
exports.Grid = Grid;
exports.JUSTIFY_CONTENT = JUSTIFY_CONTENT;
exports.Pane = Pane;
exports.PaneProvider = PaneProvider;
exports.Row = Row;
exports.SPACE = SPACE;
exports.TEXT_ALIGN = TEXT_ALIGN;
exports.WRAP = WRAP;
