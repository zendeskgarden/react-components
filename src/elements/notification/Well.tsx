/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { IWellProps } from '../../types/elements';
import { StyledWell } from '../../views/notification/StyledWell';
import { COMPONENT_IDS } from '../utils';
import { Paragraph } from './Paragraph';
import { Title } from './Title';

export const WellComponent = forwardRef<HTMLDivElement, IWellProps>(
  ({ isFloating, isRecessed, ...props }, ref) => (
    <StyledWell
      ref={ref}
      $isFloating={isFloating}
      $isRecessed={isRecessed}
      {...props}
      data-garden-id={COMPONENT_IDS['notifications.well']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

WellComponent.displayName = 'Well';

WellComponent.propTypes = {
  isRecessed: PropTypes.bool,
  isFloating: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Well = WellComponent as typeof WellComponent & {
  Paragraph: typeof Paragraph;
  Title: typeof Title;
};

Well.Paragraph = Paragraph;
Well.Title = Title;
