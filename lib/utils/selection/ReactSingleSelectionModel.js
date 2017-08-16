"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SingleSelectionModel = require("./SingleSelectionModel");

var _SingleSelectionModel2 = _interopRequireDefault(_SingleSelectionModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactSingleSelectionModel = function () {
  function ReactSingleSelectionModel() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$rtl = _ref.rtl,
        rtl = _ref$rtl === undefined ? false : _ref$rtl,
        _ref$wrapping = _ref.wrapping,
        wrapping = _ref$wrapping === undefined ? "items" : _ref$wrapping,
        _ref$selectOnSpace = _ref.selectOnSpace,
        selectOnSpace = _ref$selectOnSpace === undefined ? true : _ref$selectOnSpace,
        _ref$vertical = _ref.vertical,
        vertical = _ref$vertical === undefined ? true : _ref$vertical;

    (0, _classCallCheck3.default)(this, ReactSingleSelectionModel);

    this.handleKeyDown = function (event) {
      var keyDownHandlers = _this.vertical ? {
        "13": _this.onEnter,
        "32": _this.onSpace,
        "38": _this.onArrowUp,
        "40": _this.onArrowDown
      } : {
        "13": _this.onEnter,
        "32": _this.onSpace,
        "37": _this.onArrowLeft,
        "39": _this.onArrowRight
      };

      keyDownHandlers["35"] = _this.onEnd;
      keyDownHandlers["36"] = _this.onHome;

      var handler = keyDownHandlers[event.keyCode];
      if (handler) {
        _this.selectedByMouse = false;
        handler(event);
      }
    };

    this.choseSelection = function (event) {
      if (_this.hasSelection()) {
        var selection = _this.model.selection;
        var value = selection.props.value;
        if (selection.props.action) {
          selection.props.action && selection.props.action(selection.props, event);
        }
        _this.onValueChosen && _this.onValueChosen(value);
        return true;
      }
    };

    this.hasSelection = function () {
      return _this.model.hasSelection();
    };

    this.onEnter = function (event) {
      if (_this.choseSelection(event)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    this.onSpace = function (event) {
      if (_this.selectOnSpace && _this.choseSelection(event)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    this.onArrowDown = function (event) {
      if (_this.model.selectNext()) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    this.onArrowUp = function (event) {
      if (_this.model.selectPrevious()) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    this.onArrowRight = function (event) {
      var success = _this.rtl ? _this.model.selectPrevious() : _this.model.selectNext();

      if (success) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    this.onArrowLeft = function (event) {
      var success = _this.rtl ? _this.model.selectNext() : _this.model.selectPrevious();

      if (success) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    this.onHome = function (event) {
      if (_this.model.selectFirst()) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    this.onEnd = function (event) {
      if (_this.model.selectLast()) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    this.reactivate = function () {
      _this.model.reactivate();
    };

    this.clear = function () {
      _this.selectedByMouse = false;
      _this.model.clear();
    };

    this.model = new _SingleSelectionModel2.default({ wrapping: wrapping });
    this.onSelectionChanged = null;
    this.onValueChosen = null;
    this.model.onSelectionChanged = function (newSelection, previousSelection) {
      if (newSelection !== previousSelection) {
        _this.onSelectionChanged && _this.onSelectionChanged();
      }
    };
    this.selectedByMouse = false;
    this.selectOnSpace = selectOnSpace;
    this.rtl = rtl;
    this.vertical = vertical;
    this._items = [];
  }

  (0, _createClass3.default)(ReactSingleSelectionModel, [{
    key: "items",
    set: function set(items) {
      var _this2 = this;

      this._items = items;
      var selectable = [];
      var selection = this.model.selection;

      _react2.default.Children.forEach(this._items, function (item) {
        if (item && item.type && item.type.selectable && !item.props.disabled) {
          selectable.push(item);
          if (_this2.hasSelection() && item.props.value === selection.props.value) {
            _this2.model.selection = item;
          }
        }
      });

      this.model.items = selectable;
    },
    get: function get() {
      var _this3 = this;

      return _react2.default.Children.map(this._items, function (child) {
        if (child && child.type && child.type.selectable) {
          return _react2.default.cloneElement(child, {
            selectedByMouse: _this3.selectedByMouse,
            onSelect: function onSelect() {
              _this3.selectedByMouse = true;
              _this3.model.select(child);
            },
            onValueChosen: function onValueChosen(value, event) {
              _this3.selectedByMouse = true;
              if (_this3.model.selection !== child) {
                _this3.model.select(child);
              }
              _this3.choseSelection(event);
            },
            selected: child === _this3.model.selection
          });
        } else {
          return child;
        }
      });
    }
  }, {
    key: "selection",
    get: function get() {
      if (this.hasSelection()) {
        return this.model.selection.props.value;
      } else {
        return null;
      }
    }
  }]);
  return ReactSingleSelectionModel;
}();

exports.default = ReactSingleSelectionModel;