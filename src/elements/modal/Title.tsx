/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { HTMLAttributes, forwardRef, useEffect } from 'react';

import { useTooltipDialogContext } from '../../hooks/modal/useTooltipDialogContext';
import { ITooltipDialogTitleProps } from '../../types/elements';
import { StyledTooltipDialogTitle } from '../../views/modal/StyledTooltipDialogTitle';
import { COMPONENT_IDS } from '../utils';

const TitleComponent = forwardRef<HTMLDivElement, ITooltipDialogTitleProps>(
  ({ children, tag = 'div', ...other }, ref) => {
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
        data-garden-id={COMPONENT_IDS['modals.tooltip_dialog.title']}
        data-garden-version={PACKAGE_VERSION}
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

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Title = TitleComponent;
