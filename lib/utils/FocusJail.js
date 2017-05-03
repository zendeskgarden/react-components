'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _tabbable = require('tabbable');

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FocusJail = function FocusJail(container) {
  var _this = this;

  (0, _classCallCheck3.default)(this, FocusJail);

  this.onTab = function (e) {
    var elements = (0, _tabbable2.default)(_this.container);

    var isFirstElementClose = elements.length > 0 && elements[0].getAttribute('aria-label') === 'close';

    if (isFirstElementClose) {
      var _elements = elements,
          first = _elements[0],
          rest = _elements.slice(1);

      elements = [].concat(rest, [first]);
    }

    var index = elements.indexOf(e.target);

    if (elements.length === 0) {
      setTimeout(function () {
        _this.container.focus();
      }, 0);
      e.stopPropagation();
      e.preventDefault();
    } else if (e.shiftKey) {
      var newIndex = index <= 0 ? elements.length - 1 : index - 1;
      setTimeout(function () {
        elements[newIndex].focus();
      }, 0);
      e.stopPropagation();
      e.preventDefault();
    } else if (!e.shiftKey) {
      var _newIndex = (index + 1) % elements.length;
      setTimeout(function () {
        elements[_newIndex].focus();
      }, 0);
      e.stopPropagation();
      e.preventDefault();
    }
  };

  this.container = container;

  setTimeout(function () {
    if (!_this.container.contains(window.document.activeElement)) {
      _this.container.focus();
    }
  }, 1);
};

exports.default = FocusJail;