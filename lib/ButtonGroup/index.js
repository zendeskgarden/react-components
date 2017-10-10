import _extends from "babel-runtime/helpers/extends";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ItemConfig from "./ItemConfig";
import Item from "./Item";
import ReactSingleSelectionModel from "../utils/selection/ReactSingleSelectionModel";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "../Button/styles";

var ButtonGroup = function (_ThemedComponent) {
  _inherits(ButtonGroup, _ThemedComponent);

  function ButtonGroup(props, context) {
    _classCallCheck(this, ButtonGroup);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Button",
      styles: styles
    }));

    _this.onSelectionChanged = function () {
      var buttons = _this.selectionModel.items;
      _this.setState({ buttons: buttons });
    };

    _this.componentWillReceiveProps = function (nextProps) {
      _this.selectionModel.rtl = nextProps.dir === "rtl";
      _this.setSelectableItems(nextProps);
    };

    _this.selectionModel = new ReactSingleSelectionModel({
      rtl: props.dir === "rtl",
      vertical: false
    });
    _this.selectionModel.onSelectionChanged = _this.onSelectionChanged;
    _this.selectionModel.onValueChosen = props.onChange;
    _this.keyboard = true;
    _this.state = {};
    return _this;
  }

  ButtonGroup.prototype.setSelectableItems = function setSelectableItems(_ref) {
    var active = _ref.active,
        children = _ref.children,
        dir = _ref.dir,
        size = _ref.size,
        vertical = _ref.vertical,
        danger = _ref.danger;

    var buttons = [];

    Children.forEach(children, function (child) {
      if (child && child.type === ItemConfig) {
        var _child$props = child.props,
            _children = _child$props.children,
            disabled = _child$props.disabled,
            id = _child$props.id;

        buttons.push(React.createElement(
          Item,
          {
            active: id === active,
            disabled: disabled,
            id: id,
            key: id,
            value: id,
            size: size,
            danger: danger
          },
          _children
        ));
      } else {
        buttons.push(child);
      }
    });

    this.selectionModel.items = buttons;
    this.setState({ buttons: this.selectionModel.items });
  };

  ButtonGroup.prototype.componentWillMount = function componentWillMount() {
    this.setSelectableItems(this.props);
  };

  ButtonGroup.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var _props = this.props,
        dir = _props.dir,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        className = _props.className;
    var buttons = this.state.buttons;
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
        className: classNames(theme.group, (_classNames = {}, _classNames[theme.rtl] = dir === "rtl", _classNames), className),
        tabIndex: tabIndex,
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
        role: "tablist"
      }, props),
      buttons
    );
  };

  return ButtonGroup;
}(ThemedComponent);

ButtonGroup.Item = ItemConfig;
ButtonGroup.propTypes = {
  active: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  danger: PropTypes.bool,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  tabIndex: PropTypes.number,
  testId: PropTypes.string
};
ButtonGroup.defaultProps = {
  dir: "ltr",
  tabIndex: 0,
  vertical: false
};
export default ButtonGroup;