/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.css';

import Row from './Row';
import Cell from './Cell';

class Grid extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    spacing: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
    stretched: PropTypes.bool,
    centered: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.number.isRequired
  };

  static defaultProps = {
    columns: Infinity,
    spacing: 'small',
    stretched: false,
    centered: false
  };

  render() {
    const { children, columns, spacing, stretched, centered, className, ...other } = this.props;

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
        className={classNames(
          styles.grid,
          styles[`spacing_${spacing}`],
          {
            [styles.stretched]: stretched,
            [styles.centered]: centered
          },
          className
        )}
      >
        {rows.map((row, i) => (
          <Row key={i}>{row.map((cell, cellIndex) => <Cell key={cellIndex}>{cell}</Cell>)}</Row>
        ))}
      </div>
    );
  }
}

export default Grid;
