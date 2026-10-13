/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useBreadcrumb } from '@zendeskgarden/container-breadcrumb';
import ChevronRightIcon from '@zendeskgarden/svg-icons/src/chevron-right.svg';
import { Children, cloneElement, forwardRef, HTMLAttributes } from 'react';

import { useText } from '../../theming/utils/useText';
import { StyledBreadcrumb } from '../../views/breadcrumb/StyledBreadcrumb';
import { StyledBreadcrumbItem } from '../../views/breadcrumb/StyledBreadcrumbItem';
import { StyledCenteredBreadcrumbItem } from '../../views/breadcrumb/StyledCenteredBreadcrumbItem';
import { StyledChevronIcon } from '../../views/breadcrumb/StyledChevronIcon';
import { COMPONENT_IDS } from '../utils';

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
        <StyledBreadcrumbItem
          $isCurrent
          data-garden-id={COMPONENT_IDS['breadcrumbs.item']}
          data-garden-version={PACKAGE_VERSION}
        >
          {cloneElement(child as any, getCurrentPageProps())}
        </StyledBreadcrumbItem>
      );
    }

    return (
      <>
        <StyledBreadcrumbItem
          data-garden-id={COMPONENT_IDS['breadcrumbs.item']}
          data-garden-version={PACKAGE_VERSION}
        >
          {child}
        </StyledBreadcrumbItem>
        <StyledCenteredBreadcrumbItem
          aria-hidden
          data-garden-id={COMPONENT_IDS['breadcrumbs.item']}
          data-garden-version={PACKAGE_VERSION}
        >
          <StyledChevronIcon>
            <ChevronRightIcon />
          </StyledChevronIcon>
        </StyledCenteredBreadcrumbItem>
      </>
    );
  });

  const ariaLabel = useText(Breadcrumb, props, 'aria-label', 'Breadcrumbs');

  return (
    <nav {...getContainerProps({ ...props, ref, role: null, 'aria-label': ariaLabel! })}>
      <StyledBreadcrumb
        data-garden-id={COMPONENT_IDS['breadcrumbs.list']}
        data-garden-version={PACKAGE_VERSION}
      >
        {mappedChildren}
      </StyledBreadcrumb>
    </nav>
  );
});

Breadcrumb.displayName = 'Breadcrumb';
