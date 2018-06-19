/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Spacer = ({ height }) => <div style={{ height }} />;

Spacer.propTypes = {
  height: PropTypes.string.isRequired
};

export default Spacer;
