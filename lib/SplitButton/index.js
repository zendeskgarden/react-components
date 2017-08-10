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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _chevron = require("@zendesk/garden-svg-icons/src/14-chevron.svg");

var _chevron2 = _interopRequireDefault(_chevron);

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

var _styles = require("./styles.css");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SplitButton = function (_ThemedComponent) {
  (0, _inherits3.default)(SplitButton, _ThemedComponent);

  function SplitButton(props, context) {
    (0, _classCallCheck3.default)(this, SplitButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "SplitButton",
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

    _this.onValueChosen = function (value) {
      var onSelect = _this.props.onSelect;

      _this.closeMenu();
      onSelect && onSelect(value);
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

    _this.selectDefault = function () {
      var onSelect = _this.props.onSelect;


      onSelect && onSelect(_this.defaultItem.props.value);
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
    var _classNames, _classNames2;

    var _props = this.props,
        dir = _props.dir,
        disabled = _props.disabled,
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
        anchor: _react2.default.createElement(
          _View2.default,
          {
            className: (0, _classnames2.default)(theme.group, (_classNames = {}, _classNames[theme.rtl] = dir === "rtl", _classNames))
          },
          _react2.default.createElement(
            _Button2.default,
            {
              disabled: disabled,
              onClick: onClick || this.selectDefault,
              pill: pill,
              size: size,
              tabIndex: tabIndex,
              testId: testId && testId + "-button",
              title: title,
              type: type
            },
            label || this.defaultItem.props.children
          ),
          _react2.default.createElement(
            _IconButton2.default,
            {
              disabled: disabled,
              className: (0, _classnames2.default)((_classNames2 = {}, _classNames2[theme.active] = !hidden, _classNames2)),
              isRotated: !hidden,
              onKeyDown: this.onKeyDown,
              onBlur: this.closeMenu,
              onClick: this.onClick,
              pill: pill,
              size: size,
              testId: testId && testId + "-menu-button",
              type: type
            },
            _react2.default.createElement(_chevron2.default, null)
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
            wide: wide
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
  disabled: _propTypes2.default.bool,
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
  onSelect: _propTypes2.default.func,
  /** <a href="#relativepositionedpopup">See RelativePositionedPopup</a> */
  positioning: _RelativePositionedPopup2.default.propTypes.positioning,
  pill: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(["small", "medium", "large"]),
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string,
  /** Enables tooltip */
  title: _propTypes2.default.string,
  /** <a href="#view">See View</a> */
  tooltipPositioning: function tooltipPositioning() {},
  type: _propTypes2.default.oneOf(["default", "primary"]),
  /** <a href="#menu">See Menu</a> */
  wide: _propTypes2.default.bool
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