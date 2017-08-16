"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingleSelectionModel = function () {
  function SingleSelectionModel() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$wrapping = _ref.wrapping,
        wrapping = _ref$wrapping === undefined ? "items" : _ref$wrapping;

    (0, _classCallCheck3.default)(this, SingleSelectionModel);

    this.selection = null;
    this.items = [];
    this.wrapping = wrapping;
  }

  SingleSelectionModel.prototype.fireSelectionChanged = function fireSelectionChanged(newSelection, previousSelection) {
    if (this.onSelectionChanged) {
      if (typeof newSelection === "undefined") {
        newSelection = null;
      }

      if (typeof previousSelection === "undefined") {
        previousSelection = null;
      }

      this.onSelectionChanged(newSelection, previousSelection);
    }
  };

  SingleSelectionModel.prototype.select = function select(item) {
    var selection = this.selection;
    this.selection = item;
    if (this.selectedIndex === -1) {
      this.selection = null;
    }

    this.fireSelectionChanged(this.selection, selection);
  };

  SingleSelectionModel.prototype.selectNext = function selectNext() {
    if (this.items.length > 0) {
      var newIndex = this.selectedIndex + 1;
      if (this.items.length <= newIndex) {
        switch (this.wrapping) {
          case "clear":
            newIndex = -1;
            break;
          case "items":
            newIndex = newIndex % this.items.length;
            break;
          case "off":
            newIndex = this.items.length - 1;
            break;
        }
      }

      this.select(this.items[newIndex] || null);
      return true;
    } else {
      return false;
    }
  };

  SingleSelectionModel.prototype.selectPrevious = function selectPrevious() {
    if (this.items.length > 0) {
      var newIndex = void 0;
      if (this.selectedIndex === -1) {
        newIndex = this.items.length - 1;
      } else {
        newIndex = this.selectedIndex - 1;
        if (newIndex < 0) {
          switch (this.wrapping) {
            case "clear":
              newIndex = -1;
              break;
            case "items":
              newIndex = this.items.length - 1;
              break;
            case "off":
              newIndex = 0;
              break;
          }
        }
      }

      this.select(this.items[newIndex] || null);
      return true;
    } else {
      return false;
    }
  };

  SingleSelectionModel.prototype.selectFirst = function selectFirst() {
    if (this.items.length > 0) {
      this.select(this.items[0] || null);
      return true;
    } else {
      return false;
    }
  };

  SingleSelectionModel.prototype.selectLast = function selectLast() {
    if (this.items.length > 0) {
      this.select(this.items[this.items.length - 1] || null);
      return true;
    } else {
      return false;
    }
  };

  SingleSelectionModel.prototype.clear = function clear() {
    this.clearedSelection = this.selection;
    this.select(null);
  };

  SingleSelectionModel.prototype.reactivate = function reactivate() {
    if (this.items.indexOf(this.clearedSelection) === -1) {
      return this.selectFirst();
    }

    this.select(this.clearedSelection);
    this.clearedSelection = null;
    return true;
  };

  SingleSelectionModel.prototype.hasSelection = function hasSelection() {
    return this.selection !== null;
  };

  (0, _createClass3.default)(SingleSelectionModel, [{
    key: "selectedIndex",
    get: function get() {
      return this.items.indexOf(this.selection);
    }
  }]);
  return SingleSelectionModel;
}();

exports.default = SingleSelectionModel;