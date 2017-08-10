"use strict";

exports.__esModule = true;

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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require("react-dom");

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("./styles.css");

var _styles2 = _interopRequireDefault(_styles);

var _View = require("../core/View/");

var _View2 = _interopRequireDefault(_View);

var _FocusJail = require("../utils/FocusJail");

var _FocusJail2 = _interopRequireDefault(_FocusJail);

var _Body = require("./Body");

var _Body2 = _interopRequireDefault(_Body);

var _CloseButton = require("./CloseButton");

var _CloseButton2 = _interopRequireDefault(_CloseButton);

var _Footer = require("./Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _Title = require("./Title");

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_ThemedComponent) {
  (0, _inherits3.default)(Modal, _ThemedComponent);

  function Modal(props, context) {
    (0, _classCallCheck3.default)(this, Modal);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Modal",
      styles: _styles2.default
    }));

    _this.onTab = function (e) {
      _this.tabJail && _this.tabJail.onTab(e);
    };

    return _this;
  }

  Modal.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var hidden = this.props.hidden;
    var prevHidden = prevProps.hidden;


    if (!hidden && prevHidden) {
      document.querySelector("html").style.overflow = "hidden";
    } else if (hidden && !prevHidden) {
      document.querySelector("html").style.overflow = "";
      this.tabJail = null;
    }
  };

  Modal.prototype.render = function render() {
    var _this2 = this,
        _classNames;

    var _props = this.props,
        children = _props.children,
        dir = _props.dir,
        hidden = _props.hidden,
        onClose = _props.onClose,
        type = _props.type,
        testId = _props.testId,
        width = _props.width;


    if (hidden) {
      return null;
    }

    var theme = this.theme;


    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme.backdrop, theme["type_" + type]),
        onClick: onClose,
        onEscape: onClose,
        onTab: this.onTab,
        ref: function ref(_ref) {
          if (_ref && !_this2.tabJail) {
            _this2.tabJail = new _FocusJail2.default((0, _reactDom.findDOMNode)(_ref).firstChild);
          }
        }
      },
      _react2.default.createElement(
        _View2.default,
        {
          "aria-labelledby": "dialog-title",
          className: (0, _classnames2.default)(theme.dialog, theme[dir], (_classNames = {}, _classNames[theme.open] = !hidden, _classNames)),
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          role: "dialog",
          style: { width: width },
          tabIndex: -1,
          testId: testId
        },
        children
      )
    );
  };

  return Modal;
}(_ThemedComponent3.default);

Modal.propTypes = {
  children: _propTypes2.default.node.isRequired,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  hidden: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(["default", "transparent", "lightbox"]),
  testId: _propTypes2.default.string,
  width: _propTypes2.default.string
};
Modal.defaultProps = {
  dir: "ltr",
  hidden: false,
  type: "default"
};
Modal.Body = _Body2.default;
Modal.CloseButton = _CloseButton2.default;
Modal.Footer = _Footer2.default;
Modal.Header = _Header2.default;
Modal.Title = _Title2.default;
exports.default = Modal;