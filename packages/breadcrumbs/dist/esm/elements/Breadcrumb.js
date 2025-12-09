/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, Children, cloneElement } from 'react';
import SvgChevronRightStroke from '../node_modules/@zendeskgarden/svg-icons/src/12/chevron-right-stroke.svg.js';
import { useBreadcrumb } from '@zendeskgarden/container-breadcrumb';
import { useText } from '@zendeskgarden/react-theming';
import { StyledBreadcrumb } from '../styled/StyledBreadcrumb.js';
import { StyledChevronIcon } from '../styled/StyledChevronIcon.js';
import { StyledBreadcrumbItem } from '../styled/StyledBreadcrumbItem.js';
import { StyledCenteredBreadcrumbItem } from '../styled/StyledCenteredBreadcrumbItem.js';

const Breadcrumb = forwardRef((props, ref) => {
  const {
    getContainerProps,
    getCurrentPageProps
  } = useBreadcrumb();
  const totalChildren = Children.count(props.children);
  const mappedChildren = Children.map(props.children, (child, index) => {
    const isLastItem = index === totalChildren - 1;
    if (isLastItem) {
      return React__default.createElement(StyledBreadcrumbItem, {
        $isCurrent: true
      }, cloneElement(child, getCurrentPageProps()));
    }
    return React__default.createElement(React__default.Fragment, null, React__default.createElement(StyledBreadcrumbItem, null, child), React__default.createElement(StyledCenteredBreadcrumbItem, null, React__default.createElement(StyledChevronIcon, null, React__default.createElement(SvgChevronRightStroke, null))));
  });
  const ariaLabel = useText(Breadcrumb, props, 'aria-label', 'Breadcrumbs');
  return React__default.createElement("nav", getContainerProps({
    ...props,
    ref,
    role: null,
    'aria-label': ariaLabel
  }), React__default.createElement(StyledBreadcrumb, null, mappedChildren));
});
Breadcrumb.displayName = 'Breadcrumb';

export { Breadcrumb };
