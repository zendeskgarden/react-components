"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _ItemConfig = require("./ItemConfig");

var _ItemConfig2 = _interopRequireDefault(_ItemConfig);

var _Item = require("./Item");

var _Item2 = _interopRequireDefault(_Item);

var _ReactSingleSelectionModel = require("../utils/selection/ReactSingleSelectionModel");

var _ReactSingleSelectionModel2 = _interopRequireDefault(_ReactSingleSelectionModel);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("../Button/styles.css");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = function (_ThemedComponent) {
  (0, _inherits3.default)(ButtonGroup, _ThemedComponent);

  function ButtonGroup(props, context) {
    (0, _classCallCheck3.default)(this, ButtonGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Button",
      styles: _styles2.default
    }));

    _this.onSelectionChanged = function () {
      var buttons = _this.selectionModel.items;
      _this.setState({ buttons: buttons });
    };

    _this.componentWillReceiveProps = function (nextProps) {
      _this.selectionModel.rtl = nextProps.dir === "rtl";
      _this.setSelectableItems(nextProps);
    };

    _this.selectionModel = new _ReactSingleSelectionModel2.default({
      rtl: props.dir === "rtl",
      vertical: false
    });
    _this.selectionModel.onSelectionChanged = _this.onSelectionChanged;
    _this.selectionModel.onValueChosen = props.onActivate;
    _this.keyboard = true;
    _this.state = {};
    return _this;
  }

  ButtonGroup.prototype.setSelectableItems = function setSelectableItems(_ref) {
    var active = _ref.active,
        children = _ref.children,
        dir = _ref.dir,
        size = _ref.size,
        vertical = _ref.vertical;

    var buttons = [];

    _react.Children.forEach(children, function (child) {
      if (child && child.type === _ItemConfig2.default) {
        var _child$props = child.props,
            _children = _child$props.children,
            disabled = _child$props.disabled,
            id = _child$props.id;

        buttons.push(_react2.default.createElement(
          _Item2.default,
          {
            active: id === active,
            disabled: disabled,
            id: id,
            key: id,
            value: id,
            size: size
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
        testId = _props.testId;
    var buttons = this.state.buttons;
    var theme = this.theme;


    var props = {};
    if (testId) {
      props["data-test-id"] = testId;
    }

    if (dir === "rtl") {
      props.dir = dir;
    }

    return _react2.default.createElement(
      "nav",
      (0, _extends3.default)({
        className: (0, _classnames2.default)(theme.group, (_classNames = {}, _classNames[theme.rtl] = dir === "rtl", _classNames)),
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
}(_ThemedComponent3.default);

ButtonGroup.Item = _ItemConfig2.default;
ButtonGroup.propTypes = {
  active: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  onActivate: _propTypes2.default.func,
  size: _propTypes2.default.oneOf(["small", "medium", "large"]),
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string
};
ButtonGroup.defaultProps = {
  dir: "ltr",
  tabIndex: 0,
  vertical: false
};
exports.default = ButtonGroup;