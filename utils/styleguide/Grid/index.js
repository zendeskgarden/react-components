import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.css";

import Row from "./Row";
import Cell from "./Cell";

class Grid extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    spacing: PropTypes.oneOf(["none", "small", "medium", "large"]),
    stretched: PropTypes.bool,
    columns: PropTypes.number.isRequired
  };

  static defaultProps = {
    columns: Infinity,
    spacing: "small",
    stretched: false
  };

  render() {
    const { children, columns, spacing, stretched, ...other } = this.props;

    const rows = [];
    let currentRow;

    React.Children.forEach(children, (child, i) => {
      if (i % columns === 0) {
        currentRow = [];
        rows.push(currentRow);
      }

      currentRow.push(child);
    });

    return (
      <div
        {...other}
        className={classNames(styles.grid, styles[`spacing_${spacing}`], {
          [styles.stretched]: stretched
        })}
      >
        {rows.map((row, i) =>
          <Row key={i}>
            {row.map((cell, i) =>
              <Cell key={i}>
                {cell}
              </Cell>
            )}
          </Row>
        )}
      </div>
    );
  }
}

export default Grid;
