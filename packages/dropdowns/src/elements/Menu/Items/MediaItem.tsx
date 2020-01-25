/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Item, IItemProps } from './Item';
import { StyledMediaItem } from '../../../styled';

/**
 * Accepts all `<li>` props
 */
export const MediaItem = React.forwardRef<HTMLLIElement, IItemProps>((props, ref) => (
  <Item component={StyledMediaItem} ref={ref} {...props} />
));

MediaItem.propTypes = {
  isActive: PropTypes.bool,
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};
