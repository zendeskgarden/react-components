/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { I{{capitalize component}}Props } from '../types';
import { {{capitalize component}}Text } from './{{capitalize component}}Text';
import { Styled{{capitalize component}} } from '../styled';

const {{capitalize component}}Component = forwardRef<HTMLDivElement, I{{capitalize component}}Props>((props, ref) => (
  <Styled{{capitalize component}} ref={ref} {...props} />
));

{{capitalize component}}Component.displayName = '{{capitalize component}}';

{{capitalize component}}Component.propTypes = {
  isCompact: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const {{capitalize component}} = {{capitalize component}}Component as typeof {{capitalize component}}Component & {
  Text: typeof {{capitalize component}}Text;
};

{{capitalize component}}.Text = {{capitalize component}}Text;
