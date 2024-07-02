/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, forwardRef, HTMLAttributes } from 'react';
import { useBreadcrumb } from '@zendeskgarden/container-breadcrumb';
import { useText } from '@zendeskgarden/react-theming';
import {
  StyledBreadcrumb,
  StyledBreadcrumbItem,
  StyledCenteredBreadcrumbItem,
  StyledChevronIcon
} from '../styled';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Breadcrumb = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const { getContainerProps, getCurrentPageProps } = useBreadcrumb();

  const totalChildren = Children.count(props.children);

  const mappedChildren = Children.map(props.children, (child, index) => {
    const isLastItem = index === totalChildren - 1;

    if (isLastItem) {
      return (
        <StyledBreadcrumbItem $isCurrent>
          {cloneElement(child as any, getCurrentPageProps())}
        </StyledBreadcrumbItem>
      );
    }

    return (
      <>
        <StyledBreadcrumbItem>{child}</StyledBreadcrumbItem>
        <StyledCenteredBreadcrumbItem>
          <StyledChevronIcon />
        </StyledCenteredBreadcrumbItem>
      </>
    );
  });

  const ariaLabel = useText(Breadcrumb, props, 'aria-label', 'Breadcrumbs');

  return (
    <nav {...getContainerProps({ ...props, ref, role: null, 'aria-label': ariaLabel! })}>
      <StyledBreadcrumb>{mappedChildren}</StyledBreadcrumb>
    </nav>
  );
});

Breadcrumb.displayName = 'Breadcrumb';
