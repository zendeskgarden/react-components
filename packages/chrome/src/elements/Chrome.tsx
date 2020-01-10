/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { ChromeContext } from '../utils/useChromeContext';
import { StyledChrome } from '../styled';

interface IChromeProps extends HTMLAttributes<HTMLDivElement> {
  hue?: string;
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Chrome = React.forwardRef<HTMLDivElement, IChromeProps>(({ hue, ...props }, ref) => (
  <ChromeContext.Provider value={{ hue }}>
    <StyledChrome ref={ref} {...props} />
  </ChromeContext.Provider>
));

Chrome.propTypes = {
  hue: PropTypes.string
};
