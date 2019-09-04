/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledCode } from '../styled';

export interface ICodeProps extends HTMLAttributes<HTMLDivElement> {
  hue?: 'grey' | 'red' | 'green' | 'yellow';
  size?: 'small' | 'medium' | 'large';
}

/**
 * Accepts all `<code>` props
 */
const Code: React.FunctionComponent<ICodeProps> = React.forwardRef(
  ({ size, hue, ...other }, ref) => {
    let _size: 'sm' | 'md' | 'lg';

    if (size === 'small') {
      _size = 'sm';
    } else if (size === 'medium') {
      _size = 'md';
    } else {
      _size = 'lg';
    }

    return <StyledCode ref={ref as any} size={_size} hue={hue} {...other} />;
  }
);

Code.defaultProps = {
  hue: 'grey',
  size: 'medium'
};

/** @component */
export default Code;
