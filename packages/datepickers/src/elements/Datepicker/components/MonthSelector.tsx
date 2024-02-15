/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { StyledHeader, StyledHeaderPaddle, StyledHeaderLabel } from '../../../styled';
import useDatepickerContext from '../utils/useDatepickerContext';

import ChevronLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import ChevronRightStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';

interface IMonthSelectorProps {
  locale?: string;
  isCompact: boolean;
}

export const MonthSelector: React.FunctionComponent<IMonthSelectorProps> = ({
  locale,
  isCompact
}) => {
  const { state, dispatch } = useDatepickerContext();

  const headerLabelFormatter = useCallback<(date: Date) => string>(
    date => {
      const formatter = new Intl.DateTimeFormat(locale, {
        month: 'long',
        year: 'numeric'
      });

      return formatter.format(date);
    },
    [locale]
  );

  return (
    <StyledHeader isCompact={isCompact}>
      <StyledHeaderPaddle
        isCompact={isCompact}
        onClick={() => {
          dispatch({
            type: 'PREVIEW_PREVIOUS_MONTH'
          });
        }}
        data-test-id="previous-month"
      >
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
      <StyledHeaderLabel isCompact={isCompact} data-test-id="month-display">
        {headerLabelFormatter(state.previewDate)}
      </StyledHeaderLabel>
      <StyledHeaderPaddle
        isCompact={isCompact}
        onClick={() => {
          dispatch({
            type: 'PREVIEW_NEXT_MONTH'
          });
        }}
        data-test-id="next-month"
      >
        <ChevronRightStrokeIcon />
      </StyledHeaderPaddle>
    </StyledHeader>
  );
};
