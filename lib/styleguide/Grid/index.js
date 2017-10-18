"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _View = require("../../core/View");

var _View2 = _interopRequireDefault(_View);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

var _Row = require("./Row");

var _Row2 = _interopRequireDefault(_Row);

var _Cell = require("./Cell");

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function (_Component) {
  (0, _inherits3.default)(Grid, _Component);

  function Grid() {
    (0, _classCallCheck3.default)(this, Grid);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Grid.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        children = _props.children,
        columns = _props.columns,
        spacing = _props.spacing,
        stretched = _props.stretched,
        other = (0, _objectWithoutProperties3.default)(_props, ["children", "columns", "spacing", "stretched"]);


    var rows = [];
    var currentRow = void 0;

    _react2.default.Children.forEach(children, function (child, i) {
      if (i % columns === 0) {
        currentRow = [];
        rows.push(currentRow);
      }

      currentRow.push(child);
    });

    return _react2.default.createElement(
      _View2.default,
      (0, _extends3.default)({}, other, {
        className: (0, _classnames2.default)(_styles2.default.grid, _styles2.default["spacing_" + spacing], (_classNames = {}, _classNames[_styles2.default.stretched] = stretched, _classNames))
      }),
      rows.map(function (row, i) {
        return _react2.default.createElement(
          _Row2.default,
          { key: i },
          row.map(function (cell, i) {
            return _react2.default.createElement(
              _Cell2.default,
              { key: i },
              cell
            );
          })
        );
      })
    );
  };

  return Grid;
}(_react.Component);

Grid.propTypes = {
  children: _propTypes2.default.node.isRequired,
  spacing: _propTypes2.default.oneOf(["none", "small", "medium", "large"]),
  stretched: _propTypes2.default.bool,
  columns: _propTypes2.default.number.isRequired
};
Grid.defaultProps = {
  columns: Infinity,
  spacing: "small",
  stretched: false
};
exports.default = Grid;