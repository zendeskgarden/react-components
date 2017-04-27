'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ReactSingleSelectionModel = require('../utils/selection/ReactSingleSelectionModel');

var _ReactSingleSelectionModel2 = _interopRequireDefault(_ReactSingleSelectionModel);

var _View = require('../core/View');

var _View2 = _interopRequireDefault(_View);

var _RelativePositionedPopup = require('../core/RelativePositionedPopup');

var _RelativePositionedPopup2 = _interopRequireDefault(_RelativePositionedPopup);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _LinkItem = require('./LinkItem');

var _LinkItem2 = _interopRequireDefault(_LinkItem);

var _Separator = require('./Separator');

var _Separator2 = _interopRequireDefault(_Separator);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu(props) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

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
    var _classNames;

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
        other = (0, _objectWithoutProperties3.default)(_props, ['arrow', 'dir', 'centerArrow', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'positioning', 'trigger', 'testId', 'stretched']);
    var _state = this.state,
        hidden = _state.hidden,
        items = _state.items;


    var anchor = _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)((_classNames = {}, _classNames[_styles2.default.stretched] = stretched, _classNames)),
        onKeyDown: this.selectionModel.handleKeyDown,
        onBlur: this.closeMenu,
        onClick: this.toggleHidden,
        onEnter: this.keyboardToggleHidden,
        onEscape: this.closeMenu,
        onSpace: this.keyboardToggleHidden
      },
      typeof trigger === 'function' ? trigger({ open: !hidden }) : trigger
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
            position: position
          }),
          items
        );
      }
    );
  };

  return Menu;
}(_react.Component);

Menu.propTypes = {
  arrow: _propTypes2.default.bool,
  dir: _propTypes2.default.oneOf(['ltr', 'rtl']),
  centerArrow: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node.isRequired,
  fixedWidth: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  marginBottom: _propTypes2.default.number,
  marginLeft: _propTypes2.default.number,
  marginRight: _propTypes2.default.number,
  marginTop: _propTypes2.default.number,
  maxHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  positioning: _RelativePositionedPopup2.default.propTypes.positioning,
  size: _propTypes2.default.oneOf(['small', 'large']),
  stretched: _propTypes2.default.bool,
  testId: _propTypes2.default.string,
  trigger: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]).isRequired
};
Menu.defaultProps = {
  arrow: false,
  dir: 'ltr',
  centerArrow: false,
  marginBottom: 2,
  marginLeft: 2,
  marginRight: 2,
  marginTop: 2,
  positioning: ['bottom_right', 'top_right'],
  stretched: false,
  size: 'small'
};
Menu.Container = _Container2.default;
Menu.Item = _Item2.default;
Menu.LinkItem = _LinkItem2.default;
Menu.Separator = _Separator2.default;
exports.default = Menu;