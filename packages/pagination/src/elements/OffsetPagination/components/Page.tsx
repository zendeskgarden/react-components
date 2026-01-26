/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useText } from '@zendeskgarden/react-theming';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { StyledPage } from '../../../styled';

const PageComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const ariaLabel = useText(PageComponent, props, 'aria-label', `Page ${props.children}`);

    return <StyledPage type="button" {...props} aria-label={ariaLabel} ref={ref} />;
  }
);

PageComponent.displayName = 'Pagination.Page';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Page = PageComponent;
