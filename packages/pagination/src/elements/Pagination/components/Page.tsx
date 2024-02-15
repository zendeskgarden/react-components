/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes } from 'react';
import { useText } from '@zendeskgarden/react-theming';
import { StyledPage } from '../../../styled';

const PageComponent = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const text = props['aria-current']
    ? `Current page, page ${props.children}`
    : `Page ${props.children}`;
  const ariaLabel = useText(PageComponent, props, 'aria-label', text);

  return <StyledPage {...props} aria-label={ariaLabel} ref={ref} />;
});

PageComponent.displayName = 'Pagination.Page';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Page = PageComponent;
