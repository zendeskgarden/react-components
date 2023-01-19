/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTooltipModalContext } from '../../utils/useTooltipModalContext';
import { StyledTooltipModalTitle } from '../../styled';
import { ITooltipModalTitleProps } from '../../types';

const TitleComponent = forwardRef<HTMLDivElement, ITooltipModalTitleProps>(
  ({ children, tag, ...other }, ref) => {
    const { getTitleProps, hasTitle, setHasTitle } = useTooltipModalContext();

    useEffect(() => {
      if (!hasTitle && setHasTitle) {
        setHasTitle(true);
      }

      return () => {
        if (hasTitle && setHasTitle) {
          setHasTitle(false);
        }
      };
    }, [hasTitle, setHasTitle]);

    return (
      <StyledTooltipModalTitle
        {...(getTitleProps(other) as HTMLAttributes<HTMLDivElement>)}
        as={tag}
        ref={ref}
      >
        {children}
      </StyledTooltipModalTitle>
    );
  }
);

TitleComponent.displayName = 'TooltipModal.Title';

TitleComponent.propTypes = {
  tag: PropTypes.any
};

TitleComponent.defaultProps = {
  tag: 'div'
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Title = TitleComponent;
