/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useCallback, FunctionComponent } from 'react';
import ChevronLeftStrokeIcon from 'svg-icons-legacy/src/16/chevron-left-stroke.svg';
import ChevronRightStrokeIcon from 'svg-icons-legacy/src/16/chevron-right-stroke.svg';

import { StyledHeader } from '../../views/datepicker/StyledHeader';
import { StyledHeaderLabel } from '../../views/datepicker/StyledHeaderLabel';
import { StyledHeaderPaddle } from '../../views/datepicker/StyledHeaderPaddle';
import { COMPONENT_IDS } from '../utils';
import { useDatePickerContext } from './useDatePickerContext';

interface IMonthSelectorProps {
  locale?: string;
  isCompact: boolean;
}

export const MonthSelector: FunctionComponent<IMonthSelectorProps> = ({ locale, isCompact }) => {
  const { state, dispatch } = useDatePickerContext();

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
    <StyledHeader
      $isCompact={isCompact}
      data-garden-id={COMPONENT_IDS['datepickers.header']}
      data-garden-version={PACKAGE_VERSION}
    >
      <StyledHeaderPaddle
        $isCompact={isCompact}
        onClick={() => {
          dispatch({
            type: 'PREVIEW_PREVIOUS_MONTH'
          });
        }}
        data-test-id="previous-month"
        data-garden-id={COMPONENT_IDS['datepickers.header_paddle']}
        data-garden-version={PACKAGE_VERSION}
      >
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
      <StyledHeaderLabel
        $isCompact={isCompact}
        data-test-id="month-display"
        data-garden-id={COMPONENT_IDS['datepickers.header_label']}
        data-garden-version={PACKAGE_VERSION}
      >
        {headerLabelFormatter(state.previewDate)}
      </StyledHeaderLabel>
      <StyledHeaderPaddle
        $isCompact={isCompact}
        onClick={() => {
          dispatch({
            type: 'PREVIEW_NEXT_MONTH'
          });
        }}
        data-test-id="next-month"
        data-garden-id={COMPONENT_IDS['datepickers.header_paddle']}
        data-garden-version={PACKAGE_VERSION}
      >
        <ChevronRightStrokeIcon />
      </StyledHeaderPaddle>
    </StyledHeader>
  );
};
