/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useCallback } from 'react';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { StyledPaneSplitterButton } from '../../../styled';
import { ISplitterButtonProps } from '../../../types';
import usePaneSplitterContext from '../../../utils/usePaneSplitterContext';
import { usePaneProviderContextData } from '../../../utils/usePaneProviderContext';

const SplitterButtonComponent = forwardRef<HTMLButtonElement, ISplitterButtonProps>(
  (props, ref) => {
    const { label, placement: defaultPlacement } = props;
    const { orientation, layoutKey, min, max, isRow, valueNow, providerId } =
      usePaneSplitterContext();
    const paneProviderContext = usePaneProviderContextData(providerId);
    const isTop = orientation === 'top';
    const isStart = orientation === 'start';
    const isMin = valueNow === min;
    let placement = defaultPlacement;

    if (!defaultPlacement) {
      if (isRow) {
        placement = 'center';
      } else {
        placement = 'start';
      }
    }

    const setValue = useCallback(
      value => {
        if (isRow) {
          paneProviderContext!.setRowValue(isTop, layoutKey, value);

          return;
        }
        paneProviderContext!.setColumnValue(isStart, layoutKey, value);
      },
      [isRow, isTop, isStart, layoutKey, paneProviderContext]
    );

    const onClick = composeEventHandlers(props.onClick, () => {
      if (isMin) {
        setValue(max);
      } else {
        setValue(min);
      }
    });

    const onKeyDown = composeEventHandlers(
      props.onKeyDown,
      (event: KeyboardEvent) => event.stopPropagation() // prevent splitter movement with cursor keys
    );

    return (
      <Tooltip content={label}>
        <StyledPaneSplitterButton
          aria-label={label}
          {...props}
          placement={placement!}
          orientation={orientation!}
          isRotated={isMin}
          ref={ref}
          onClick={onClick}
          onKeyDown={onKeyDown}
        />
      </Tooltip>
    );
  }
);

SplitterButtonComponent.displayName = 'Pane.SplitterButton';

/**
 * @extends HTMLAttributes<HTMLButtonElement>
 */
export const SplitterButton = SplitterButtonComponent;
