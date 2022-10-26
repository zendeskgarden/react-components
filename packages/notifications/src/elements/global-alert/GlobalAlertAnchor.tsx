/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';

import { IGlobalAlertAnchorProps } from '../../types';
import { StyledGlobalAlertAnchor } from '../../styled';
import { useGlobalAlertContext } from './utility';

export const GlobalAlertAnchor = forwardRef<HTMLAnchorElement, IGlobalAlertAnchorProps>(
  (props, ref) => {
    const { type } = useGlobalAlertContext();

    return <StyledGlobalAlertAnchor ref={ref} kind={type} {...props} />;
  }
);

GlobalAlertAnchor.displayName = 'GlobalAlert.Anchor';
