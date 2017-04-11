'use strict';

exports.__esModule = true;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

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

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Selectable = function Selectable(ChildComponent) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      action = _ref.action,
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === undefined ? false : _ref$preventDefault,
      _ref$stopPropagation = _ref.stopPropagation,
      stopPropagation = _ref$stopPropagation === undefined ? false : _ref$stopPropagation,
      _ref$selectOnHover = _ref.selectOnHover,
      selectOnHover = _ref$selectOnHover === undefined ? true : _ref$selectOnHover,
      _ref$selectEvent = _ref.selectEvent,
      selectEvent = _ref$selectEvent === undefined ? 'onMouseDown' : _ref$selectEvent;

  var Selectable = function (_Component) {
    (0, _inherits3.default)(Selectable, _Component);

    function Selectable() {
      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Selectable);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onChoseValue = function (e) {
        var _this$props = _this.props,
            disabled = _this$props.disabled,
            onValueChosen = _this$props.onValueChosen,
            value = _this$props.value;


        if (!disabled && onValueChosen) {
          onValueChosen(value, e);
          preventDefault && e.preventDefault();
          stopPropagation && e.stopPropagation();
        }
      }, _this.onMouseEnter = function (e) {
        var onSelect = _this.props.onSelect;


        _this.hover = true;
        if (selectOnHover) {
          setTimeout(function () {
            onSelect && onSelect(e, _this);
          }, 0);
        }
      }, _this.onMouseLeave = function (e) {
        _this.hover = false;
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Selectable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var selected = this.props.selected;


      if (!selected && nextProps.selected && !this.hover) {
        setTimeout(function () {
          if (_this2.domNode.scrollIntoViewIfNeeded) {
            _this2.domNode.scrollIntoViewIfNeeded(false);
          } else if (_this2.domNode.scrollIntoView) {
            _this2.domNode.scrollIntoView(false);
          }
        }, 0);
      }
    };

    Selectable.prototype.render = function render() {
      var _extends2,
          _this3 = this;

      var props = (0, _extends4.default)({}, this.props, (_extends2 = {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      }, _extends2[selectEvent] = this.onChoseValue, _extends2));

      return _react2.default.createElement(ChildComponent, (0, _extends4.default)({
        ref: function ref(_ref2) {
          _this3.domNode = _this3.domNode || _ref2 && (0, _reactDom.findDOMNode)(_ref2);
        }
      }, props));
    };

    return Selectable;
  }(_react.Component);

  Selectable.selectable = true;
  Selectable.propTypes = {
    action: _propTypes2.default.func,
    disabled: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func,
    onValueChosen: _propTypes2.default.func,
    selected: _propTypes2.default.bool,
    value: _propTypes2.default.any
  };
  Selectable.defaultProps = (0, _assign2.default)({}, ChildComponent.defaultProps || {}, {
    action: action,
    disabled: false
  });


  return Selectable;
};

exports.default = Selectable;