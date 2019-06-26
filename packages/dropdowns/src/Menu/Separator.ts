/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLProps } from 'react';
import { StyledSeparator } from '../styled';

/**
 * Accepts all `<li>` props
 */
const Separator = StyledSeparator as React.FunctionComponent<HTMLProps<HTMLLIElement>>;

Separator.displayName = 'Separator';

/** @component */
export default Separator;
