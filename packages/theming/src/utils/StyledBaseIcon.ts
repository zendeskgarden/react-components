/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import React, { Children } from 'react';

const COMPONENT_ID = 'icon.base';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,garden-local/require-default-theme
export const StyledBaseIcon = styled(({ children, theme, ...props }) =>
  React.cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable no-empty-block */
`;
