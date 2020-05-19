/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledCode } from '../styled';

export interface ICodeProps extends HTMLAttributes<HTMLDivElement> {
  hue?: 'grey' | 'red' | 'green' | 'yellow';
  /** By default font size is inherited from surrounding text */
  size?: 'small' | 'medium' | 'large' | 'inherit';
}

/**
 * Accepts all `<code>` attributes and events
 */
const Code: React.FunctionComponent<
  ICodeProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, ICodeProps>(({ size, hue, ...other }, ref) => {
  let _size: 'sm' | 'md' | 'lg' | 'inherit';

  if (size === 'small') {
    _size = 'sm';
  } else if (size === 'medium') {
    _size = 'md';
  } else if (size === 'large') {
    _size = 'lg';
  } else {
    _size = 'inherit';
  }

  return <StyledCode ref={ref} size={_size} hue={hue} {...other} />;
});

Code.displayName = 'Code';

Code.propTypes = {
  hue: PropTypes.oneOf(['grey', 'red', 'green', 'yellow']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'inherit'])
};

Code.defaultProps = {
  hue: 'grey',
  size: 'inherit'
};

/** @component */
export default Code;
