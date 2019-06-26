/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLProps } from 'react';
import { StyledMediaBody } from '../../styled';

/**
 * Accepts all `<div>` props
 */
const MediaBody = StyledMediaBody as React.FunctionComponent<HTMLProps<HTMLDivElement>>;

MediaBody.displayName = 'MediaBody';

/** @component */
export default MediaBody;
