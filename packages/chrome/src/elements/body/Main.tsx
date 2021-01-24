/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledMain } from '../../styled';

interface IMainProps extends HTMLAttributes<HTMLElement> {
  /** Sets the ID of the main element */
  id?: string;
}

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Main = React.forwardRef<HTMLElement, IMainProps>((props, ref) => (
  <StyledMain tabIndex={props.tabIndex || -1} ref={ref} {...props} />
));

Main.displayName = 'Main';

Main.propTypes = {
  id: PropTypes.string
};
