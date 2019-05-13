/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import { StyledMediaItem } from '../../styled';

/**
 * Accepts all `<li>` props
 */
const MediaItem = React.forwardRef((props, ref) => (
  <Item component={StyledMediaItem} ref={ref} {...props} />
));

MediaItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};

/** @component */
export default MediaItem;
