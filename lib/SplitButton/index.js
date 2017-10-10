import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import _extends from "babel-runtime/helpers/extends";
import React, { Children } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import ThemedComponent from "../utils/theming/ThemedComponent";

var ChevronIcon = function ChevronIcon(props) {
  return React.createElement(
    "svg",
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, props),
    React.createElement("path", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M4 6l3 3 3-3"
    })
  );
};

import ReactSingleSelectionModel from "../utils/selection/ReactSingleSelectionModel";
import View from "../View";
import Menu from "../Menu";
import Button from "../Button";
import RelativePositionedPopup from "../RelativePositionedPopup";
import IconButton from "../IconButton";
import styles from "./styles";

var SplitButton = function (_ThemedComponent) {
  _inherits(SplitButton, _ThemedComponent);

  function SplitButton(props, context) {
    _classCallCheck(this, SplitButton);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Button",
      styles: styles
    }));

    _this.componentWillReceiveProps = function (nextProps) {
      var children = nextProps.children;

      _this.setSelectableItems(children);
    };

    _this.onSelectionChanged = function () {
      var items = _this.selectionModel.items;
      _this.setState({ items: items });
      _this.showMenu();
    };

    _this.onValueChosen = function (value, event) {
      var onChange = _this.props.onChange;

      _this.closeMenu();
      onChange && onChange(value, event);
    };

    _this.showMenu = function () {
      var onOpen = _this.props.onOpen;


      if (_this.state.hidden) {
        _this.setState({ hidden: false }, function () {
          onOpen && onOpen();
        });
      }
    };

    _this.closeMenu = function () {
      var onClose = _this.props.onClose;


      _this.selectionModel.clear();
      _this.setState({ hidden: true }, function () {
        onClose && onClose();
      });
    };

    _this.toggleHidden = function (e) {
      if (_this.state.hidden) {
        _this.showMenu();
      } else {
        _this.closeMenu();
      }
      e && e.stopPropagation();
    };

    _this.keyboardToggleHidden = function (e) {
      if (!_this.selectionModel.hasSelection()) {
        _this.toggleHidden();
        e.preventDefault();
        e.stopPropagation();
      }
    };

    _this.selectDefault = function (event) {
      var onChange = _this.props.onChange;


      onChange && onChange(_this.defaultItem.props.value, event);
    };

    _this.onClick = function (e) {
      if (e.type === "click") {
        if (_this.state.hidden) {
          _this.showMenu();
        } else {
          _this.closeMenu();
        }
      }
    };

    _this.onKeyDown = function (e) {
      var hidden = _this.props.hidden;


      var keyDownHandlers = {
        "13": _this.keyboardToggleHidden,
        "27": _this.closeMenu,
        "32": _this.keyboardToggleHidden
      };

      var handler = keyDownHandlers[e.keyCode];
      if (handler) {
        handler(e);
        e.preventDefault();
        e.stopPropagation();
      }

      if (!hidden) {
        _this.selectionModel.handleKeyDown(e);
      }
    };

    _this.selectionModel = new ReactSingleSelectionModel();
    _this.selectionModel.onSelectionChanged = _this.onSelectionChanged;
    _this.selectionModel.onValueChosen = _this.onValueChosen;
    _this.state = {
      hidden: true,
      items: []
    };
    return _this;
  }

  SplitButton.prototype.setSelectableItems = function setSelectableItems(children) {
    this.selectionModel.items = children;
    this.setState({ items: this.selectionModel.items });
  };

  SplitButton.prototype.componentWillMount = function componentWillMount() {
    var children = this.props.children;

    this.setSelectableItems(children);
  };

  SplitButton.prototype.render = function render() {
    var _classNames, _classNames2;

    var _props = this.props,
        className = _props.className,
        danger = _props.danger,
        dir = _props.dir,
        mainButtonDisabled = _props.mainButtonDisabled,
        dropdownDisabled = _props.dropdownDisabled,
        fixedWidth = _props.fixedWidth,
        label = _props.label,
        marginBottom = _props.marginBottom,
        marginLeft = _props.marginLeft,
        marginRight = _props.marginRight,
        marginTop = _props.marginTop,
        onClick = _props.onClick,
        pill = _props.pill,
        positioning = _props.positioning,
        size = _props.size,
        type = _props.type,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        title = _props.title,
        wide = _props.wide;
    var _state = this.state,
        hidden = _state.hidden,
        items = _state.items;
    var theme = this.theme;


    return React.createElement(
      RelativePositionedPopup,
      {
        dir: dir,
        hidden: hidden,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        positioning: positioning,
        testId: testId,
        anchor: React.createElement(
          View,
          {
            className: classNames(theme.group, (_classNames = {}, _classNames[theme.rtl] = dir === "rtl", _classNames), className)
          },
          React.createElement(
            Button,
            {
              disabled: mainButtonDisabled,
              onClick: onClick || this.selectDefault,
              pill: pill,
              size: size,
              tabIndex: tabIndex,
              danger: danger,
              testId: testId && testId + "-button",
              title: title,
              type: type
            },
            label || this.defaultItem.props.children
          ),
          React.createElement(
            IconButton,
            {
              disabled: dropdownDisabled,
              danger: danger,
              className: classNames((_classNames2 = {}, _classNames2[theme.active] = !hidden, _classNames2)),
              isRotated: !hidden,
              onKeyDown: this.onKeyDown,
              onBlur: this.closeMenu,
              onClick: this.onClick,
              pill: pill,
              size: size,
              testId: testId && testId + "-menu-button",
              type: type
            },
            React.createElement(ChevronIcon, null)
          )
        )
      },
      function (position) {
        return React.createElement(
          Menu.Container,
          {
            animate: !hidden,
            dir: dir,
            fixedWidth: fixedWidth,
            position: position,
            wide: wide
          },
          items
        );
      }
    );
  };

  _createClass(SplitButton, [{
    key: "defaultItem",
    get: function get() {
      var children = this.props.children;

      return Children.toArray(children).find(function (c) {
        return c.type && c.type.selectable;
      });
    }
  }]);

  return SplitButton;
}(ThemedComponent);

SplitButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  danger: PropTypes.bool,
  mainButtonDisabled: PropTypes.bool,
  dropdownDisabled: PropTypes.bool,
  /** Node for main button label, defaults to first child */
  label: PropTypes.node,
  /** <a href="#menu">See Menu</a> */
  fixedWidth: PropTypes.bool,
  /** <a href="#menu">See Menu</a> */
  marginBottom: PropTypes.number,
  /** <a href="#menu">See Menu</a> */
  marginLeft: PropTypes.number,
  /** <a href="#menu">See Menu</a> */
  marginRight: PropTypes.number,
  /** <a href="#menu">See Menu</a> */
  marginTop: PropTypes.number,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  /** <a href="#relativepositionedpopup">See RelativePositionedPopup</a> */
  positioning: RelativePositionedPopup.propTypes.positioning,
  pill: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: PropTypes.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  type: PropTypes.oneOf(["default", "primary"]),
  /** <a href="#menu">See Menu</a> */
  wide: PropTypes.bool
};
SplitButton.defaultProps = {
  dir: "ltr",
  marginBottom: 2,
  marginLeft: 2,
  marginRight: 2,
  marginTop: 2,
  positioning: ["bottom_left", "top_left"]
};
SplitButton.Item = Menu.Item;
SplitButton.Separator = Menu.Separator;
export default SplitButton;