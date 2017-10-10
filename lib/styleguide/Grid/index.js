import _extends from "babel-runtime/helpers/extends";
import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../../core/View";
import styles from "./styles";

import Row from "./Row";
import Cell from "./Cell";

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Grid.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        children = _props.children,
        columns = _props.columns,
        spacing = _props.spacing,
        stretched = _props.stretched,
        other = _objectWithoutProperties(_props, ["children", "columns", "spacing", "stretched"]);

    var rows = [];
    var currentRow = void 0;

    React.Children.forEach(children, function (child, i) {
      if (i % columns === 0) {
        currentRow = [];
        rows.push(currentRow);
      }

      currentRow.push(child);
    });

    return React.createElement(
      View,
      _extends({}, other, {
        className: classNames(styles.grid, styles["spacing_" + spacing], (_classNames = {}, _classNames[styles.stretched] = stretched, _classNames))
      }),
      rows.map(function (row, i) {
        return React.createElement(
          Row,
          { key: i },
          row.map(function (cell, i) {
            return React.createElement(
              Cell,
              { key: i },
              cell
            );
          })
        );
      })
    );
  };

  return Grid;
}(Component);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf(["none", "small", "medium", "large"]),
  stretched: PropTypes.bool,
  columns: PropTypes.number.isRequired
};
Grid.defaultProps = {
  columns: Infinity,
  spacing: "small",
  stretched: false
};


export default Grid;