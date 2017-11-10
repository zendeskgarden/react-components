"use strict";

exports.__esModule = true;

var _Selectable = require("../core/Selectable");

var _Selectable2 = _interopRequireDefault(_Selectable);

var _Label = require("../Label");

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _Selectable2.default)(_Label2.default, {
  selectEvent: "onClick"
});