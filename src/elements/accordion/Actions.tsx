/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { forwardRef, HTMLAttributes, MouseEvent, useContext, useEffect, useRef } from 'react';

import { HeaderContext } from '../../context/accordion/HeaderContext';
import { withGardenType } from '../../utils/shared/gardenType';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledActions } from '../../views/accordion/StyledActions';
import { COMPONENT_IDS } from '../utils';

const ActionsComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ onClick, onMouseOver, ...props }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const hasWarnedRef = useRef(false);
    /* Plain `useContext`: a standalone `Actions` just renders. */
    const actionEventRef = useContext(HeaderContext)?.actionEventRef;

    useEffect(() => {
      if (process.env.NODE_ENV !== 'development') {
        return;
      }

      if (!hasWarnedRef.current && innerRef.current?.closest('[role="heading"]')) {
        hasWarnedRef.current = true;
        // eslint-disable-next-line no-console
        console.warn(
          'Warning: <Accordion.Actions> is rendered inside the accordion heading, so its labels become part of the heading name. Render it as a direct child of <Accordion.Header>.'
        );
      }
    }, []);

    /*
     * Nothing is cancelled and propagation isn't stopped: the event is
     * recorded, and the header skips its toggle for the recorded event.
     * React events bubble through the React tree, so clicks from a menu an
     * action portalled elsewhere on the page are recorded too.
     */
    const recordEvent = (event: MouseEvent<HTMLDivElement>) => {
      if (actionEventRef) {
        actionEventRef.current = event.nativeEvent;
      }
    };

    return (
      <StyledActions
        ref={mergeRefs([ref, innerRef])}
        onClick={composeEventHandlers(onClick, recordEvent)}
        onMouseOver={composeEventHandlers(onMouseOver, recordEvent)}
        {...props}
        data-garden-id={COMPONENT_IDS['accordions.actions']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

ActionsComponent.displayName = 'Accordion.Actions';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Actions = ActionsComponent;

withGardenType(Actions, COMPONENT_IDS['accordions.actions']);
