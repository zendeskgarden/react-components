/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import React, { forwardRef, useCallback } from 'react';

import { StyledPaneSplitterButton, StyledPaneSplitterButtonContainer } from '../../../styled';
import { ISplitterButtonProps } from '../../../types';
import { usePaneProviderContextData } from '../../../utils/usePaneProviderContext';
import usePaneSplitterContext from '../../../utils/usePaneSplitterContext';

const SplitterButtonComponent = forwardRef<HTMLButtonElement, ISplitterButtonProps>(
  ({ label, placement: defaultPlacement, ...other }, ref) => {
    const { orientation, layoutKey, min, max, isRow, valueNow, size, providerId } =
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

    const setValue = useCallback<(value: number) => undefined>(
      value => {
        if (isRow) {
          paneProviderContext!.setRowValue(isTop, layoutKey, value);
        } else {
          paneProviderContext!.setColumnValue(isStart, layoutKey, value);
        }
      },
      [isRow, isTop, isStart, layoutKey, paneProviderContext]
    );

    const onClick = composeEventHandlers(other.onClick, () => {
      if (isMin) {
        setValue(max);
      } else {
        setValue(min);
      }
    });

    const onKeyDown = composeEventHandlers(
      other.onKeyDown,
      (event: KeyboardEvent) => event.stopPropagation() // prevent splitter movement with cursor keys
    );

    const onMouseDown = composeEventHandlers(
      other.onMouseDown,
      (event: MouseEvent) => event.stopPropagation() // prevent splitter movement on button drag
    );

    return (
      <StyledPaneSplitterButtonContainer
        $orientation={orientation!}
        $placement={placement!}
        $splitterSize={size || 0}
      >
        <Tooltip
          content={label}
          placement="auto"
          zIndex={2}
          style={{ cursor: 'default' }}
          onMouseDown={e => e.stopPropagation()}
        >
          <StyledPaneSplitterButton
            aria-label={label}
            {...other}
            $orientation={orientation!}
            $isRotated={isMin}
            ref={ref}
            onClick={onClick}
            onKeyDown={onKeyDown}
            onMouseDown={onMouseDown}
          />
        </Tooltip>
      </StyledPaneSplitterButtonContainer>
    );
  }
);

SplitterButtonComponent.displayName = 'Pane.SplitterButton';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const SplitterButton = SplitterButtonComponent;
