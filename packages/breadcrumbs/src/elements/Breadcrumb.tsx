/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, HTMLAttributes } from 'react';
import { useBreadcrumb } from '@zendeskgarden/container-breadcrumb';

import { StyledBreadcrumb, StyledBreadcrumbItem } from '../styled';

export const Breadcrumb = React.forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    const { getContainerProps, getCurrentPageProps } = useBreadcrumb();

    const totalChildren = Children.count(props.children);

    const mappedChildren = Children.map(props.children, (child, index) => {
      const isLastItem = index === totalChildren - 1;

      if (isLastItem) {
        return (
          <StyledBreadcrumbItem isCurrent>
            {cloneElement(child as any, getCurrentPageProps())}
          </StyledBreadcrumbItem>
        );
      }

      return <StyledBreadcrumbItem>{child}</StyledBreadcrumbItem>;
    });

    return (
      <nav {...getContainerProps({ ...props, ref, role: null } as any)}>
        <StyledBreadcrumb>{mappedChildren}</StyledBreadcrumb>
      </nav>
    );
  }
);
