/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { useTooltipDialogContext } from '../../hooks/modal/useTooltipDialogContext';
import { StyledTooltipDialogBody } from '../../views/modal/StyledTooltipDialogBody';
import { COMPONENT_IDS } from '../utils';

const BodyComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { getContentProps } = useTooltipDialogContext();

  return (
    <StyledTooltipDialogBody
      {...(getContentProps(props) as HTMLAttributes<HTMLDivElement>)}
      data-garden-id={COMPONENT_IDS['modals.tooltip_dialog.body']}
      data-garden-version={PACKAGE_VERSION}
      ref={ref}
    />
  );
});

BodyComponent.displayName = 'TooltipDialog.Body';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = BodyComponent;
