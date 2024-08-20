/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTooltipDialogContext } from '../../utils/useTooltipDialogContext';
import { StyledTooltipDialogTitle } from '../../styled';
import { ITooltipDialogTitleProps } from '../../types';

const TitleComponent = forwardRef<HTMLDivElement, ITooltipDialogTitleProps>(
  ({ children, tag, ...other }, ref) => {
    const { getTitleProps, hasTitle, setHasTitle } = useTooltipDialogContext();

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
      <StyledTooltipDialogTitle
        {...(getTitleProps(other) as HTMLAttributes<HTMLDivElement>)}
        as={tag}
        ref={ref}
      >
        {children}
      </StyledTooltipDialogTitle>
    );
  }
);

TitleComponent.displayName = 'TooltipDialog.Title';

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
