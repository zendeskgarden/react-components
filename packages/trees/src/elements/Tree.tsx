/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ITreeProps } from '../types';
import { TreeText } from './TreeText';
import { StyledTree } from '../styled';

const TreeComponent = forwardRef<HTMLDivElement, ITreeProps>((props, ref) => (
  <StyledTree ref={ref} {...props} />
));

TreeComponent.displayName = 'Tree';

TreeComponent.propTypes = {
  isCompact: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tree = TreeComponent as typeof TreeComponent & {
  Text: typeof TreeText;
};

Tree.Text = TreeText;
