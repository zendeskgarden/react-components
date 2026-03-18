/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';

import { useAccordionContext } from '../../hooks/accordion/useAccordionContext';
import { useHeaderContext } from '../../hooks/accordion/useHeaderContext';
import { StyledLabel } from '../../views/accordion/StyledLabel';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Label = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { isCompact, isCollapsible } = useAccordionContext();
    const buttonProps = useHeaderContext();

    return (
      <StyledLabel
        $isCompact={isCompact}
        $isCollapsible={isCollapsible}
        {
          ...(buttonProps as any) /* HACK to workaround https://github.com/styled-components/styled-components/issues/5652 */
        }
        {...props}
        ref={ref}
      />
    );
  }
);

Label.displayName = 'Accordion.Label';
