/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';

import { useText } from '../../theming/utils/useText';
import { StyledPage } from '../../views/pagination/StyledPage';
import { COMPONENT_IDS } from '../utils';

const PageComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const ariaLabel = useText(PageComponent, props, 'aria-label', `Page ${props.children}`);

    return (
      <StyledPage
        type="button"
        {...props}
        data-garden-id={COMPONENT_IDS['pagination.page']}
        data-garden-version={PACKAGE_VERSION}
        aria-label={ariaLabel}
        ref={ref}
      />
    );
  }
);

PageComponent.displayName = 'Pagination.Page';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Page = PageComponent;
