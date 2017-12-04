"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _keyCodes = require("../utils/keyCodes.js");

var _keyCodes2 = _interopRequireDefault(_keyCodes);

var _ReactSingleSelectionModel = require("../utils/selection/ReactSingleSelectionModel");

var _ReactSingleSelectionModel2 = _interopRequireDefault(_ReactSingleSelectionModel);

var _View = require("../View");

var _View2 = _interopRequireDefault(_View);

var _Menu = require("../Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _RelativePositionedPopup = require("../RelativePositionedPopup");

var _RelativePositionedPopup2 = _interopRequireDefault(_RelativePositionedPopup);

var _IconButton = require("../IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChevronIcon = function ChevronIcon(props) {
  return _react2.default.createElement(
    "svg",
    (0, _extends3.default)({
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, props),
    _react2.default.createElement("path", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M4 6l3 3 3-3"
    })
  );
};

var SplitButton = function (_ThemedComponent) {
  (0, _inherits3.default)(SplitButton, _ThemedComponent);

  function SplitButton(props, context) {
    (0, _classCallCheck3.default)(this, SplitButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Button",
      styles: _styles2.default
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
      var _keyDownHandlers;

      var hidden = _this.props.hidden;


      var keyDownHandlers = (_keyDownHandlers = {}, _keyDownHandlers[_keyCodes2.default.ENTER] = _this.keyboardToggleHidden, _keyDownHandlers[_keyCodes2.default.ESCAPE] = _this.closeMenu, _keyDownHandlers[_keyCodes2.default.SPACE] = _this.keyboardToggleHidden, _keyDownHandlers);

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

    _this.selectionModel = new _ReactSingleSelectionModel2.default();
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
    var _classNames,
        _classNames2,
        _this2 = this;

    var _props = this.props,
        className = _props.className,
        danger = _props.danger,
        dir = _props.dir,
        dropdownDisabled = _props.dropdownDisabled,
        fixedWidth = _props.fixedWidth,
        label = _props.label,
        mainButtonDisabled = _props.mainButtonDisabled,
        marginBottom = _props.marginBottom,
        marginLeft = _props.marginLeft,
        marginRight = _props.marginRight,
        marginTop = _props.marginTop,
        onClick = _props.onClick,
        pill = _props.pill,
        positioning = _props.positioning,
        size = _props.size,
        stretched = _props.stretched,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        title = _props.title,
        type = _props.type;
    var _state = this.state,
        hidden = _state.hidden,
        items = _state.items;
    var theme = this.theme;


    return _react2.default.createElement(
      _RelativePositionedPopup2.default,
      {
        dir: dir,
        hidden: hidden,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        positioning: positioning,
        testId: testId,
        stretched: stretched,
        anchor: _react2.default.createElement(
          _View2.default,
          {
            className: (0, _classnames2.default)(theme.group, (_classNames = {}, _classNames[theme.rtl] = dir === "rtl", _classNames[theme.stretched] = stretched, _classNames), className)
          },
          _react2.default.createElement(
            _Button2.default,
            {
              disabled: mainButtonDisabled,
              onClick: onClick || this.selectDefault,
              pill: pill,
              size: size,
              tabIndex: tabIndex,
              danger: danger,
              testId: testId && testId + "-button",
              title: title,
              type: type,
              stretched: stretched
            },
            label || this.defaultItem.props.children
          ),
          _react2.default.createElement(
            _IconButton2.default,
            {
              disabled: dropdownDisabled,
              danger: danger,
              className: (0, _classnames2.default)((_classNames2 = {}, _classNames2[theme.active] = !hidden, _classNames2)),
              isRotated: !hidden,
              onKeyDown: this.onKeyDown,
              onBlur: function onBlur(event) {
                if (!_this2.containerMousedDown) {
                  _this2.closeMenu(event);
                }
              },
              onClick: this.onClick,
              pill: pill,
              size: size,
              testId: testId && testId + "-menu-button",
              type: type
            },
            _react2.default.createElement(ChevronIcon, null)
          )
        )
      },
      function (position) {
        return _react2.default.createElement(
          _Menu2.default.Container,
          {
            animate: !hidden,
            dir: dir,
            fixedWidth: fixedWidth,
            position: position,
            onMouseDown: function onMouseDown(event) {
              _this2.containerMousedDown = true;

              setTimeout(function () {
                _this2.containerMousedDown = false;
              }, 0);
            },
            onBlur: function onBlur() {
              return _this2.closeMenu();
            },
            onKeyDown: _this2.selectionModel.handleKeyDown
          },
          items
        );
      }
    );
  };

  (0, _createClass3.default)(SplitButton, [{
    key: "defaultItem",
    get: function get() {
      var children = this.props.children;

      return _react.Children.toArray(children).find(function (c) {
        return c.type && c.type.selectable;
      });
    }
  }]);
  return SplitButton;
}(_ThemedComponent3.default);

SplitButton.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  danger: _propTypes2.default.bool,
  mainButtonDisabled: _propTypes2.default.bool,
  dropdownDisabled: _propTypes2.default.bool,
  /** Node for main button label, defaults to first child */
  label: _propTypes2.default.node,
  /** <a href="#menu">See Menu</a> */
  fixedWidth: _propTypes2.default.bool,
  /** <a href="#menu">See Menu</a> */
  marginBottom: _propTypes2.default.number,
  /** <a href="#menu">See Menu</a> */
  marginLeft: _propTypes2.default.number,
  /** <a href="#menu">See Menu</a> */
  marginRight: _propTypes2.default.number,
  /** <a href="#menu">See Menu</a> */
  marginTop: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  /** <a href="#relativepositionedpopup">See RelativePositionedPopup</a> */
  positioning: _RelativePositionedPopup2.default.propTypes.positioning,
  pill: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(["small", "medium", "large"]),
  stretched: _propTypes2.default.bool,
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: _propTypes2.default.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  type: _propTypes2.default.oneOf(["default", "primary"])
};
SplitButton.defaultProps = {
  dir: "ltr",
  marginBottom: 2,
  marginLeft: 2,
  marginRight: 2,
  marginTop: 2,
  positioning: ["bottom_left", "top_left"]
};
SplitButton.Item = _Menu2.default.Item;
SplitButton.Separator = _Menu2.default.Separator;
exports.default = SplitButton;