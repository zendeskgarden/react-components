/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var reactMergeRefs = require('react-merge-refs');
var styled = require('styled-components');
var reactTheming = require('@zendeskgarden/react-theming');
var polished = require('polished');
var containerTabs = require('@zendeskgarden/container-tabs');
var containerUtilities = require('@zendeskgarden/container-utilities');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);
var styled__default = /*#__PURE__*/_interopDefault(styled);

const COMPONENT_ID$3 = 'tabs.tab';
const colorStyles$1 = _ref => {
  let {
    theme,
    $isSelected
  } = _ref;
  const borderColor = $isSelected ? reactTheming.getColor({
    theme,
    variable: 'border.primaryEmphasis'
  }) : 'transparent';
  const selectedColor = reactTheming.getColor({
    theme,
    variable: 'foreground.primary'
  });
  const foregroundColor = $isSelected ? selectedColor : 'inherit';
  const disabledColor = reactTheming.getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return styled.css(["border-color:", ";color:", ";&:hover{color:", ";}", " &:active{border-color:currentcolor;color:", ";}&[aria-disabled='true']{border-color:transparent;color:", ";}"], borderColor, foregroundColor, selectedColor, reactTheming.focusStyles({
    theme,
    inset: true,
    spacerWidth: null,
    shadowWidth: 'sm',
    selector: '&:focus-visible::before',
    styles: {
      color: selectedColor
    }
  }), selectedColor, disabledColor);
};
const sizeStyles$2 = _ref2 => {
  let {
    theme,
    $isVertical
  } = _ref2;
  const borderWidth = theme.borderWidths.md;
  const focusHeight = `calc(100% - ${theme.space.base * ($isVertical ? 2 : 4)}px);`;
  let marginBottom;
  let padding;
  if ($isVertical) {
    marginBottom = `${theme.space.base * 5}px`;
    padding = `${theme.space.base}px ${theme.space.base * 2}px`;
  } else {
    const paddingTop = theme.space.base * 2.5;
    const paddingHorizontal = theme.space.base * 7;
    const paddingBottom = paddingTop - polished.stripUnit(theme.borderWidths.md) - polished.stripUnit(theme.borderWidths.sm);
    padding = `${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px`;
  }
  return styled.css(["margin-bottom:", ";border-width:", ";padding:", ";&:focus-visible::before,&[data-garden-focus-visible]::before{height:", ";}&:last-of-type{margin-bottom:0;}"], marginBottom, borderWidth, padding, focusHeight);
};
const StyledTab = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTab",
  componentId: "sc-x2pbow-0"
})(["display:", ";position:relative;transition:color 0.25s ease-in-out;border-bottom:", ";border-", ":", ";cursor:pointer;overflow:hidden;vertical-align:top;user-select:none;text-align:", ";text-decoration:none;text-overflow:ellipsis;", ";", ";&:focus{text-decoration:none;}&::before{transition:box-shadow 0.1s ease-in-out;content:'';}&:focus-visible::before{position:absolute;top:", "px;right:", "px;left:", "px;border-radius:", ";pointer-events:none;}&:active::before{box-shadow:none;}&[aria-disabled='true']{cursor:default;}", ";"], props => props.$isVertical ? 'block' : 'inline-block', props => props.$isVertical ? undefined : props.theme.borderStyles.solid, props => props.theme.rtl ? 'right' : 'left', props => props.$isVertical ? props.theme.borderStyles.solid : undefined, props => {
  if (props.$isVertical) {
    return props.theme.rtl ? 'right' : 'left';
  }
  return 'center';
}, sizeStyles$2, colorStyles$1, props => props.theme.space.base * (props.$isVertical ? 1 : 2.5), props => props.theme.space.base * (props.$isVertical ? 1 : 6), props => props.theme.space.base * (props.$isVertical ? 1 : 6), props => props.theme.borderRadii.md, reactTheming.componentStyles);

const COMPONENT_ID$2 = 'tabs.tablist';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.default'
  });
  const foregroundColor = reactTheming.getColor({
    theme,
    variable: 'foreground.default'
  });
  return styled.css(["transition:border-color 0.25s ease-in-out;color-scheme:only ", ";border-bottom-color:", ";color:", ";"], p => p.theme.colors.base, borderColor, foregroundColor);
};
const sizeStyles$1 = _ref2 => {
  let {
    theme,
    $isVertical
  } = _ref2;
  const marginBottom = $isVertical ? 0 : `${theme.space.base * 5}px`;
  const borderBottom = $isVertical ? undefined : theme.borderWidths.sm;
  const fontSize = theme.fontSizes.md;
  const lineHeight = reactTheming.getLineHeight(theme.space.base * 5, fontSize);
  return styled.css(["margin-top:0;margin-bottom:", ";border-bottom-width:", ";padding:0;line-height:", ";font-size:", ";"], marginBottom, borderBottom, lineHeight, fontSize);
};
const StyledTabList = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTabList",
  componentId: "sc-wa5aaj-0"
})(["display:", ";border-bottom:", ";vertical-align:", ";white-space:nowrap;", ";", ";", ";"], props => props.$isVertical ? 'table-cell' : 'block', props => props.$isVertical ? 'none' : props.theme.borderStyles.solid, props => props.$isVertical ? 'top' : undefined, sizeStyles$1, colorStyles, reactTheming.componentStyles);

const COMPONENT_ID$1 = 'tabs.tabpanel';
const sizeStyles = _ref => {
  let {
    theme,
    $isVertical
  } = _ref;
  const margin = $isVertical ? `${theme.space.base * 8}px` : undefined;
  return styled.css(["margin-", ":", ";"], theme.rtl ? 'right' : 'left', margin);
};
const StyledTabPanel = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTabPanel",
  componentId: "sc-7lhrmp-0"
})(["display:block;vertical-align:", ";color-scheme:only ", ";", ";&[aria-hidden='true']{display:none;}", ";"], props => props.$isVertical && 'top', p => p.theme.colors.base, sizeStyles, reactTheming.componentStyles);

const COMPONENT_ID = 'tabs.tabs';
const StyledTabs = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTabs",
  componentId: "sc-1qaor65-0"
})(["display:", ";overflow:hidden;direction:", ";", ";"], props => props.$isVertical ? 'table' : 'block', props => props.theme.rtl && 'rtl', reactTheming.componentStyles);

const TabsContext = React.createContext(undefined);
const useTabsContext = () => {
  return React.useContext(TabsContext);
};

const Tab = React__default.default.forwardRef((_ref, ref) => {
  let {
    disabled,
    item,
    ...otherProps
  } = _ref;
  const tabsPropGetters = useTabsContext();
  if (disabled || !tabsPropGetters) {
    return React__default.default.createElement(StyledTab, Object.assign({
      role: "tab",
      "aria-disabled": disabled,
      ref: ref,
      $isVertical: tabsPropGetters?.isVertical
    }, otherProps));
  }
  const {
    ref: tabRef,
    ...tabProps
  } = tabsPropGetters.getTabProps({
    value: item
  });
  return React__default.default.createElement(StyledTab, Object.assign({
    $isSelected: item === tabsPropGetters.selectedValue,
    $isVertical: tabsPropGetters.isVertical
  }, tabProps, otherProps, {
    ref: reactMergeRefs.mergeRefs([tabRef, ref])
  }));
});
Tab.displayName = 'Tabs.Tab';
Tab.propTypes = {
  disabled: PropTypes__default.default.bool,
  item: PropTypes__default.default.any
};

const TabList = React__default.default.forwardRef((props, ref) => {
  const tabsPropGetters = useTabsContext();
  if (!tabsPropGetters) {
    return React__default.default.createElement(StyledTabList, Object.assign({
      ref: ref
    }, props));
  }
  const tabListProps = tabsPropGetters.getTabListProps();
  return React__default.default.createElement(StyledTabList, Object.assign({
    $isVertical: tabsPropGetters.isVertical
  }, tabListProps, props, {
    ref: ref
  }));
});
TabList.displayName = 'Tabs.TabList';

const TabPanel = React__default.default.forwardRef((_ref, ref) => {
  let {
    item,
    ...otherProps
  } = _ref;
  const tabsPropGetters = useTabsContext();
  if (!tabsPropGetters) {
    return React__default.default.createElement(StyledTabPanel, Object.assign({
      ref: ref
    }, otherProps));
  }
  const tabPanelProps = tabsPropGetters.getTabPanelProps({
    value: item
  });
  return React__default.default.createElement(StyledTabPanel, Object.assign({
    "aria-hidden": tabsPropGetters.selectedValue !== item,
    $isVertical: tabsPropGetters.isVertical
  }, tabPanelProps, otherProps, {
    ref: ref
  }));
});
TabPanel.displayName = 'Tabs.TabPanel';
TabPanel.propTypes = {
  item: PropTypes__default.default.any
};

const toTabs = children => React.Children.toArray(children).reduce((_items, child) => {
  const retVal = _items;
  if (React.isValidElement(child)) {
    if ('item' in child.props) {
      const props = child.props;
      retVal.push({
        value: props.item,
        disabled: props.disabled
      });
    } else {
      const childItems = toTabs(child.props.children);
      retVal.push(...childItems);
    }
  }
  return retVal;
}, []);

const TabsComponent = React.forwardRef((_ref, ref) => {
  let {
    isVertical = false,
    children,
    onChange,
    selectedItem: controlledSelectedItem,
    ...otherProps
  } = _ref;
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
  const [internalSelectedItem, setInternalSelectedItem] = React.useState();
  const selectedItem = containerUtilities.getControlledValue(controlledSelectedItem, internalSelectedItem);
  const tabs = React.useMemo(() => toTabs(children), [children]);
  const tabsContextValue = containerTabs.useTabs({
    tabs,
    rtl: theme.rtl,
    orientation: isVertical ? 'vertical' : 'horizontal',
    selectedValue: selectedItem,
    defaultSelectedValue: tabs.find(tab => !tab.disabled)?.value,
    onSelect: item => {
      if (onChange) {
        onChange(item);
      } else {
        setInternalSelectedItem(item);
      }
    }
  });
  const contextValue = React.useMemo(() => ({
    isVertical,
    ...tabsContextValue
  }), [isVertical, tabsContextValue]);
  return React__default.default.createElement(TabsContext.Provider, {
    value: contextValue
  }, React__default.default.createElement(StyledTabs, Object.assign({
    $isVertical: isVertical
  }, otherProps, {
    ref: ref
  }), children));
});
TabsComponent.propTypes = {
  isVertical: PropTypes__default.default.bool,
  selectedItem: PropTypes__default.default.any,
  onChange: PropTypes__default.default.func
};
TabsComponent.displayName = 'Tabs';
const Tabs = TabsComponent;
Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.TabPanel = TabPanel;

exports.Tab = Tab;
exports.TabList = TabList;
exports.TabPanel = TabPanel;
exports.Tabs = Tabs;
