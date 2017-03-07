'use strict';

exports.__esModule = true;

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _RadioButton = require('./RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _Range = require('./Range');

var _Range2 = _interopRequireDefault(_Range);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Toggle = require('./Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = {
  Button: _Button2.default,
  Checkbox: _Checkbox2.default,
  RadioButton: _RadioButton2.default,
  Range: _Range2.default,
  Select: _Select2.default,
  Tabs: _Tabs2.default,
  TextArea: _TextInput2.default,
  TextInput: _TextInput2.default,
  Toggle: _Toggle2.default
};

exports.default = theme;