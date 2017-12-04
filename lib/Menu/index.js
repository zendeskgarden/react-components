"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require("react-dom");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _ThemedComponent2 = require("../ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _ReactSingleSelectionModel = require("../utils/selection/ReactSingleSelectionModel");

var _ReactSingleSelectionModel2 = _interopRequireDefault(_ReactSingleSelectionModel);

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _RelativePositionedPopup = require("../core/RelativePositionedPopup");

var _RelativePositionedPopup2 = _interopRequireDefault(_RelativePositionedPopup);

var _keyCodes = require("../utils/keyCodes");

var _keyCodes2 = _interopRequireDefault(_keyCodes);

var _Container = require("./Container");

var _Container2 = _interopRequireDefault(_Container);

var _Item = require("./Item");

var _Item2 = _interopRequireDefault(_Item);

var _LinkItem = require("./LinkItem");

var _LinkItem2 = _interopRequireDefault(_LinkItem);

var _Separator = require("./Separator");

var _Separator2 = _interopRequireDefault(_Separator);

var _PreviousItem = require("./PreviousItem");

var _PreviousItem2 = _interopRequireDefault(_PreviousItem);

var _NextItem = require("./NextItem");

var _NextItem2 = _interopRequireDefault(_NextItem);

var _HeaderItem = require("./HeaderItem");

var _HeaderItem2 = _interopRequireDefault(_HeaderItem);

var _AddItem = require("./AddItem");

var _AddItem2 = _interopRequireDefault(_AddItem);

var _MediaItem = require("./MediaItem");

var _MediaItem2 = _interopRequireDefault(_MediaItem);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function (_ThemedComponent) {
  (0, _inherits3.default)(Menu, _ThemedComponent);

  function Menu(props, context) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Menu",
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
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          focusOnClose = _this$props.focusOnClose;


      _this.closeMenu();
      onChange && onChange(value, event);

      if (focusOnClose) {
        var triggerDOMNode = (0, _reactDom.findDOMNode)(_this.refs.triggerElement);
        triggerDOMNode.focus();
      }
    };

    _this.showMenu = function () {
      var onOpen = _this.props.onOpen;


      if (_this.state.hidden) {
        _this.setState({ hidden: false }, function () {
          onOpen && onOpen();
        });
      }
    };

    _this.closeMenu = function (e) {
      var onClose = _this.props.onClose;


      _this.selectionModel.clear();
      _this.setState({ hidden: true }, function () {
        onClose && onClose();
      });
      e && e.stopPropagation();
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

    _this.selectionModel = new _ReactSingleSelectionModel2.default();
    _this.selectionModel.onSelectionChanged = _this.onSelectionChanged;
    _this.selectionModel.onValueChosen = _this.onValueChosen;
    _this.state = {
      hidden: true,
      items: []
    };
    return _this;
  }

  Menu.prototype.setSelectableItems = function setSelectableItems(children) {
    this.selectionModel.items = children;
    this.setState({ items: this.selectionModel.items });
  };

  Menu.prototype.componentWillMount = function componentWillMount() {
    var children = this.props.children;

    this.setSelectableItems(children);
  };

  Menu.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var _props = this.props,
        arrow = _props.arrow,
        dir = _props.dir,
        centerArrow = _props.centerArrow,
        marginBottom = _props.marginBottom,
        marginLeft = _props.marginLeft,
        marginRight = _props.marginRight,
        marginTop = _props.marginTop,
        positioning = _props.positioning,
        trigger = _props.trigger,
        testId = _props.testId,
        stretched = _props.stretched,
        enableArrowKeyExpansion = _props.enableArrowKeyExpansion,
        other = (0, _objectWithoutProperties3.default)(_props, ["arrow", "dir", "centerArrow", "marginBottom", "marginLeft", "marginRight", "marginTop", "positioning", "trigger", "testId", "stretched", "enableArrowKeyExpansion"]);
    var theme = this.theme;
    var _state = this.state,
        hidden = _state.hidden,
        items = _state.items;


    var triggerElement = _react2.default.cloneElement(typeof trigger === "function" ? trigger({ open: !hidden }) : trigger, { ref: "triggerElement" });

    var anchor = _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)((_classNames = {}, _classNames[theme.stretched] = stretched, _classNames)),
        onKeyDown: function onKeyDown(event) {
          if (!hidden) {
            _this2.selectionModel.handleKeyDown(event);
          } else if (enableArrowKeyExpansion && (event.keyCode === _keyCodes2.default.UP || event.keyCode === _keyCodes2.default.DOWN)) {
            _this2.showMenu();
            event.preventDefault();
            event.stopPropagation();
          }
        },
        onBlur: function onBlur(event) {
          if (!_this2.containerMousedDown) {
            _this2.closeMenu(event);
          }
        },
        onClick: this.toggleHidden,
        onEnter: this.keyboardToggleHidden,
        onEscape: this.closeMenu,
        onSpace: this.keyboardToggleHidden
      },
      triggerElement
    );

    var arrowMargin = arrow ? 3 : 0;

    var centerPoint = centerArrow ? 19 : null;

    return _react2.default.createElement(
      _RelativePositionedPopup2.default,
      {
        anchor: anchor,
        centerPoint: centerPoint,
        dir: dir,
        hidden: hidden,
        positioning: positioning,
        marginTop: marginTop + arrowMargin,
        marginLeft: marginLeft + arrowMargin,
        marginRight: marginRight + arrowMargin,
        marginBottom: marginBottom + arrowMargin,
        stretched: stretched,
        testId: testId
      },
      function (position) {
        return _react2.default.createElement(
          _Container2.default,
          (0, _extends3.default)({}, other, {
            animate: !hidden,
            dir: dir,
            arrow: arrow,
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
            onKeyDown: _this2.selectionModel.handleKeyDown,
            onEscape: _this2.closeMenu
          }),
          items
        );
      }
    );
  };

  return Menu;
}(_ThemedComponent3.default);

Menu.propTypes = {
  arrow: _propTypes2.default.bool,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  centerArrow: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node.isRequired,
  fixedWidth: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  marginBottom: _propTypes2.default.number,
  marginLeft: _propTypes2.default.number,
  marginRight: _propTypes2.default.number,
  marginTop: _propTypes2.default.number,
  maxHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /** <a href="#relativepositionedpopup">See RelativePositionedPopup</a> */
  positioning: _RelativePositionedPopup2.default.propTypes.positioning,
  size: _propTypes2.default.oneOf(["small", "medium"]),
  stretched: _propTypes2.default.bool,
  testId: _propTypes2.default.string,
  trigger: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]).isRequired,
  /**
   * Allows arrow keys to expand Menu. Used by the Select component.
   */
  enableArrowKeyExpansion: _propTypes2.default.bool,
  /**
   * Focus the trigger DOM node when a menu item is selected
   */
  focusOnClose: _propTypes2.default.bool
};
Menu.defaultProps = {
  arrow: false,
  dir: "ltr",
  centerArrow: false,
  marginBottom: 4,
  marginLeft: 4,
  marginRight: 4,
  marginTop: 4,
  positioning: ["bottom_right", "top_right"],
  stretched: false,
  size: "medium",
  enableArrowKeyExpansion: false,
  focusOnClose: true
};
Menu.Container = _Container2.default;
Menu.Item = _Item2.default;
Menu.LinkItem = _LinkItem2.default;
Menu.Separator = _Separator2.default;
Menu.PreviousItem = _PreviousItem2.default;
Menu.NextItem = _NextItem2.default;
Menu.HeaderItem = _HeaderItem2.default;
Menu.AddItem = _AddItem2.default;
Menu.MediaItem = _MediaItem2.default;
exports.default = Menu;