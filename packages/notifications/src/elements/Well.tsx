/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IWellProps } from '../types';
import { StyledWell } from '../styled';
import { Title } from './content/Title';
import { Paragraph } from './content/Paragraph';

export const WellComponent = React.forwardRef<HTMLDivElement, IWellProps>((props, ref) => (
  <StyledWell ref={ref} {...props} />
));

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
