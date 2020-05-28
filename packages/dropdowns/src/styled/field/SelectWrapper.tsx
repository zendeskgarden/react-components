/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import ChevronSVG from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { StyledSelect, StyledSelectIcon, IStyledSelectProps } from './StyledSelect';

export const SelectWrapper = React.forwardRef<
  HTMLDivElement,
  IStyledSelectProps & HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <StyledSelect
      ref={ref}
      data-test-is-open={props.isOpen}
      data-test-is-focused={props.isFocused}
      data-test-is-hovered={props.isHovered}
      {...props}
    >
      {children}
      {!props.isBare && (
        <StyledSelectIcon
          isOpen={props.isOpen}
          isCompact={props.isCompact}
          isHovered={props.isHovered}
          isFocused={props.isFocused}
          disabled={props.disabled}
          data-test-id="select-icon"
        >
          <ChevronSVG />
        </StyledSelectIcon>
      )}
    </StyledSelect>
  );
});

SelectWrapper.displayName = 'SelectWrapper';
