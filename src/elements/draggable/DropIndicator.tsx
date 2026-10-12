/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, LiHTMLAttributes } from 'react';

import { useDraggableListContext } from '../../hooks/draggable/useDraggableListContext';
import { useText } from '../../theming/utils/useText';
import { StyledDropIndicator } from '../../views/draggable/StyledDropIndicator';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const DropIndicator = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  (props, ref) => {
    const { isHorizontal } = useDraggableListContext();
    const ariaLabel = useText(DropIndicator, props, 'aria-label', 'Drop indicator');

    return (
      <StyledDropIndicator
        {...props}
        data-garden-id={COMPONENT_IDS['draggable_list.drop_indicator']}
        data-garden-version={PACKAGE_VERSION}
        aria-label={ariaLabel}
        $isHorizontal={isHorizontal}
        ref={ref}
      />
    );
  }
);

DropIndicator.displayName = 'DraggableList.DropIndicator';
