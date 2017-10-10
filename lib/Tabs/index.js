import _extends from "babel-runtime/helpers/extends";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import PanelConfig from "./PanelConfig";
import Label from "./Label";
import Panel from "./Panel";
import ReactSingleSelectionModel from "../utils/selection/ReactSingleSelectionModel";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles";

var Tabs = function (_ThemedComponent) {
  _inherits(Tabs, _ThemedComponent);

  function Tabs(props, context) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Tabs",
      styles: styles
    }));

    _this.onSelectionChanged = function () {
      var labels = _this.selectionModel.items;
      _this.setState({ labels: labels });
    };

    _this.updatePanel = function (_ref) {
      var children = _ref.children,
          active = _ref.active;

      var panelConfigs = [];

      Children.forEach(children, function (child) {
        if (child && child.type === PanelConfig) {
          panelConfigs.push(child.props);
        }
      });

      var activePanelConfig = panelConfigs.find(function (_ref2) {
        var id = _ref2.id;
        return active === id;
      }) || panelConfigs[0];

      var activePanelContent = activePanelConfig.children;

      var panel = React.createElement(
        Panel,
        { id: activePanelConfig.id },
        typeof activePanelContent === "function" ? activePanelContent(activePanelConfig.id) : activePanelContent
      );

      _this.setState({ panel: panel });
    };

    _this.componentWillReceiveProps = function (nextProps) {
      _this.selectionModel.rtl = nextProps.dir === "rtl";
      _this.selectionModel.vertical = nextProps.vertical;
      _this.setSelectableItems(nextProps);
      _this.updatePanel(nextProps);
    };

    _this.selectionModel = new ReactSingleSelectionModel({
      rtl: props.dir === "rtl",
      vertical: props.vertical
    });
    _this.selectionModel.onSelectionChanged = _this.onSelectionChanged;
    _this.selectionModel.onValueChosen = props.onChange;
    _this.keyboard = true;
    _this.state = {};
    return _this;
  }

  Tabs.prototype.setSelectableItems = function setSelectableItems(_ref3) {
    var children = _ref3.children,
        dir = _ref3.dir,
        active = _ref3.active,
        vertical = _ref3.vertical;

    var labels = [];

    Children.forEach(children, function (child) {
      if (child && child.type === PanelConfig) {
        var _child$props = child.props,
            disabled = _child$props.disabled,
            id = _child$props.id,
            label = _child$props.label,
            title = _child$props.title,
            tooltipPositioning = _child$props.tooltipPositioning;

        labels.push(React.createElement(
          Label,
          {
            active: id === active,
            disabled: disabled,
            id: id,
            key: id,
            title: title,
            tooltipPositioning: tooltipPositioning,
            value: id
          },
          label
        ));
      } else {
        labels.push(child);
      }
    });

    this.selectionModel.items = labels;
    this.setState({ labels: this.selectionModel.items });
  };

  Tabs.prototype.componentWillMount = function componentWillMount() {
    this.setSelectableItems(this.props);
    this.updatePanel(this.props);
  };

  Tabs.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var _props = this.props,
        dir = _props.dir,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        vertical = _props.vertical,
        className = _props.className;
    var _state = this.state,
        labels = _state.labels,
        panel = _state.panel;
    var theme = this.theme;


    var props = {};
    if (testId) {
      props["data-test-id"] = testId;
    }

    if (dir === "rtl") {
      props.dir = dir;
    }

    return React.createElement(
      "nav",
      _extends({
        className: classNames(theme.tabs, (_classNames = {}, _classNames[theme.vertical] = vertical, _classNames[theme.rtl] = dir === "rtl", _classNames), className)
      }, props),
      React.createElement(
        "ul",
        {
          className: theme.list,
          onFocus: function onFocus() {
            if (!_this2.selectionModel.hasSelection() && _this2.keyboard) {
              _this2.selectionModel.reactivate();
            }
            _this2.keyboard = true;
          },
          onMouseDown: function onMouseDown() {
            _this2.keyboard = false;
            setTimeout(function () {
              _this2.keyboard = true;
            }, 0);
          },
          onBlur: this.selectionModel.clear,
          onKeyDown: this.selectionModel.handleKeyDown,
          role: "tablist",
          tabIndex: tabIndex
        },
        labels
      ),
      panel
    );
  };

  return Tabs;
}(ThemedComponent);

Tabs.Panel = PanelConfig;
Tabs.propTypes = {
  active: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  onChange: PropTypes.func,
  vertical: PropTypes.bool.isRequired,
  tabIndex: PropTypes.number,
  testId: PropTypes.string
};
Tabs.defaultProps = {
  dir: "ltr",
  tabIndex: 0,
  vertical: false
};
export default Tabs;