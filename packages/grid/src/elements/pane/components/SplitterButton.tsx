/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledPaneSplitterButton } from '../../../styled';
import { ISplitterButtonProps, Orientation } from '../../../types';
import usePaneSplitterContext from '../../../utils/usePaneSplitterContext';

import UpChevronIcon from '@zendeskgarden/svg-icons/src/12/chevron-up-fill.svg';
import DownChevronIcon from '@zendeskgarden/svg-icons/src/12/chevron-down-fill.svg';
import LeftChevronIcon from '@zendeskgarden/svg-icons/src/12/chevron-left-fill.svg';
import RightChevronIcon from '@zendeskgarden/svg-icons/src/12/chevron-right-fill.svg';

const icons: Record<string, Record<Orientation, ReactNode>> = {
  ltr: {
    start: <LeftChevronIcon />,
    end: <RightChevronIcon />,
    top: <DownChevronIcon />,
    bottom: <UpChevronIcon />
  },
  rtl: {
    start: <RightChevronIcon />,
    end: <LeftChevronIcon />,
    top: <DownChevronIcon />,
    bottom: <UpChevronIcon />
  }
};

const SplitterButtonComponent = forwardRef<HTMLButtonElement, ISplitterButtonProps>(
  (props, ref) => {
    const { label } = props;
    const { orientation = 'start' } = usePaneSplitterContext();
    const { rtl } = useContext(ThemeContext);

    return (
      <StyledPaneSplitterButton
        {...props}
        isBasic={false}
        aria-label={label}
        orientation={orientation}
        ref={ref}
      >
        {icons[rtl ? 'rtl' : 'ltr'][orientation]}
      </StyledPaneSplitterButton>
    );
  }
);

SplitterButtonComponent.displayName = 'Pane.SplitterButton';

/**
 * @extends HTMLAttributes<HTMLButtonElement>
 */
export const SplitterButton = SplitterButtonComponent;
