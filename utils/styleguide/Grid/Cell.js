/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Cell = ({ children }) => <div className={styles.cell}>{children}</div>;

Cell.propTypes = {
  children: PropTypes.node.isRequired
};

export default Cell;
