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

var _PanelConfig = require("./PanelConfig");

var _PanelConfig2 = _interopRequireDefault(_PanelConfig);

var _Label = require("./Label");

var _Label2 = _interopRequireDefault(_Label);

var _Panel = require("./Panel");

var _Panel2 = _interopRequireDefault(_Panel);

var _ReactSingleSelectionModel = require("../utils/selection/ReactSingleSelectionModel");

var _ReactSingleSelectionModel2 = _interopRequireDefault(_ReactSingleSelectionModel);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_ThemedComponent) {
  (0, _inherits3.default)(Tabs, _ThemedComponent);

  function Tabs(props, context) {
    (0, _classCallCheck3.default)(this, Tabs);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Tabs",
      styles: _styles2.default
    }));

    _this.onSelectionChanged = function () {
      var labels = _this.selectionModel.items;
      _this.setState({ labels: labels });
    };

    _this.updatePanel = function (_ref) {
      var children = _ref.children,
          active = _ref.active;

      var panelConfigs = [];

      _react.Children.forEach(children, function (child) {
        if (child && child.type === _PanelConfig2.default) {
          panelConfigs.push(child.props);
        }
      });

      var activePanelConfig = panelConfigs.find(function (_ref2) {
        var id = _ref2.id;
        return active === id;
      }) || panelConfigs[0];

      var activePanelContent = activePanelConfig.children;

      var panel = _react2.default.createElement(
        _Panel2.default,
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

    _this.selectionModel = new _ReactSingleSelectionModel2.default({
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

    _react.Children.forEach(children, function (child) {
      if (child && child.type === _PanelConfig2.default) {
        var _child$props = child.props,
            disabled = _child$props.disabled,
            id = _child$props.id,
            label = _child$props.label,
            title = _child$props.title,
            tooltipPositioning = _child$props.tooltipPositioning;

        labels.push(_react2.default.createElement(
          _Label2.default,
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
        vertical = _props.vertical;
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

    return _react2.default.createElement(
      "nav",
      (0, _extends3.default)({
        className: (0, _classnames2.default)(theme.tabs, (_classNames = {}, _classNames[theme.vertical] = vertical, _classNames[theme.rtl] = dir === "rtl", _classNames))
      }, props),
      _react2.default.createElement(
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
}(_ThemedComponent3.default);

Tabs.Panel = _PanelConfig2.default;
Tabs.propTypes = {
  active: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  onChange: _propTypes2.default.func,
  vertical: _propTypes2.default.bool.isRequired,
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string
};
Tabs.defaultProps = {
  dir: "ltr",
  tabIndex: 0,
  vertical: false
};
exports.default = Tabs;