/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useId } from '@zendeskgarden/container-utilities';
import { forwardRef, HTMLAttributes, useContext, useEffect } from 'react';

import { HeaderContext } from '../../context/accordion/HeaderContext';
import { StyledDescription } from '../../views/accordion/StyledDescription';
import { COMPONENT_IDS } from '../utils';

const DescriptionComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ id, ...props }, ref) => {
    const generatedId = useId();
    const descriptionId = id ?? generatedId;
    /* Plain `useContext`: a `Description` outside a `Header` just renders. */
    const setDescriptionId = useContext(HeaderContext)?.setDescriptionId;

    /* `useEffect`, not `useLayoutEffect`: safe for server rendering. */
    useEffect(() => {
      setDescriptionId?.(descriptionId);

      return () => setDescriptionId?.();
    }, [setDescriptionId, descriptionId]);

    return (
      <StyledDescription
        ref={ref}
        id={descriptionId}
        {...props}
        /* Referenced by the label's `aria-describedby`, so kept out of the
         * button's accessible name. */
        aria-hidden="true"
        data-garden-id={COMPONENT_IDS['accordions.description']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

DescriptionComponent.displayName = 'Accordion.Description';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const Description = DescriptionComponent;
