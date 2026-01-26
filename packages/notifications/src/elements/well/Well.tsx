/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React from 'react';

import { StyledWell } from '../../styled';
import { IWellProps } from '../../types';
import { Paragraph } from '../Paragraph';
import { Title } from '../Title';

export const WellComponent = React.forwardRef<HTMLDivElement, IWellProps>(
  ({ isFloating, isRecessed, ...props }, ref) => (
    <StyledWell ref={ref} $isFloating={isFloating} $isRecessed={isRecessed} {...props} />
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
