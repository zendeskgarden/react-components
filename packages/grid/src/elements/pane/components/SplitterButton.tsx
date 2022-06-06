/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, ReactNode, useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { StyledPaneSplitterButton } from '../../../styled';
import { ISplitterButtonProps, Orientation } from '../../../types';
import usePaneSplitterContext from '../../../utils/usePaneSplitterContext';
import { usePaneProviderContextData } from '../../../utils/usePaneProviderContext';

import UpChevronIcon from '@zendeskgarden/svg-icons/src/12/chevron-up-stroke.svg';
import DownChevronIcon from '@zendeskgarden/svg-icons/src/12/chevron-down-stroke.svg';
import LeftChevronIcon from '@zendeskgarden/svg-icons/src/12/chevron-left-stroke.svg';
import RightChevronIcon from '@zendeskgarden/svg-icons/src/12/chevron-right-stroke.svg';

const icons: Record<string, Record<Orientation, ReactNode>> = {
  ltr: {
    start: <RightChevronIcon />,
    end: <LeftChevronIcon />,
    top: <DownChevronIcon />,
    bottom: <UpChevronIcon />
  },
  rtl: {
    start: <LeftChevronIcon />,
    end: <RightChevronIcon />,
    top: <DownChevronIcon />,
    bottom: <UpChevronIcon />
  }
};

const reverseIcons: Record<string, Record<Orientation, ReactNode>> = {
  ltr: {
    start: <LeftChevronIcon />,
    end: <RightChevronIcon />,
    top: <UpChevronIcon />,
    bottom: <DownChevronIcon />
  },
  rtl: {
    start: <RightChevronIcon />,
    end: <LeftChevronIcon />,
    top: <UpChevronIcon />,
    bottom: <DownChevronIcon />
  }
};

const SplitterButtonComponent = forwardRef<HTMLButtonElement, ISplitterButtonProps>(
  (props, ref) => {
    const { label } = props;
    const {
      orientation = 'start',
      layoutKey,
      min,
      max,
      isRow,
      valueNow = 0,
      providerId
    } = usePaneSplitterContext();
    const paneProviderContext = usePaneProviderContextData(providerId);
    const { rtl } = useContext(ThemeContext);
    const isTop = orientation === 'top';
    const isStart = orientation === 'start';
    const isMin = valueNow === min;

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

    return (
      <Tooltip content={label}>
        <StyledPaneSplitterButton
          aria-label={label}
          {...props}
          isBasic
          orientation={orientation}
          ref={ref}
          onClick={onClick}
        >
          {isMin
            ? reverseIcons[rtl ? 'rtl' : 'ltr'][orientation]
            : icons[rtl ? 'rtl' : 'ltr'][orientation]}
        </StyledPaneSplitterButton>
      </Tooltip>
    );
  }
);

SplitterButtonComponent.displayName = 'Pane.SplitterButton';

/**
 * @extends HTMLAttributes<HTMLButtonElement>
 */
export const SplitterButton = SplitterButtonComponent;
