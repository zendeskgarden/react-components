/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef } from 'react';

import { StyledTimeColumn, StyledTimeOption } from '../../../styled';

interface ITimeColumnProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  disabledValues?: string[];
  isCompact?: boolean;
  isScrollable?: boolean;
  onSelect: (value: string) => void;
}

export const TimeColumn: React.FunctionComponent<ITimeColumnProps> = ({
  options,
  selectedValue,
  disabledValues = [],
  isCompact,
  isScrollable = true,
  onSelect
}) => {
  const selectedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedRef.current?.scrollIntoView) {
      selectedRef.current.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedValue]);

  return (
    <StyledTimeColumn
      $isCompact={isCompact}
      $isScrollable={isScrollable}
      data-test-id="time-column"
    >
      {options.map(option => {
        const isSelected = option.value === selectedValue;
        const isDisabled = disabledValues.includes(option.value);

        return (
          <StyledTimeOption
            key={option.value}
            ref={isSelected ? selectedRef : undefined}
            $isCompact={isCompact}
            aria-selected={isSelected || undefined}
            aria-disabled={isDisabled || undefined}
            onClick={() => {
              if (!isDisabled) {
                onSelect(option.value);
              }
            }}
            data-test-id="time-option"
            data-test-selected={isSelected}
            data-test-disabled={isDisabled}
          >
            {option.label}
          </StyledTimeOption>
        );
      })}
    </StyledTimeColumn>
  );
};

TimeColumn.displayName = 'TimeColumn';
