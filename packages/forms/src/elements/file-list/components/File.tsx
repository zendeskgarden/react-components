/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent
} from 'react';
import PropTypes from 'prop-types';
import { Close } from './Close';
import { StyledFile, StyledIcon } from '../../../styled';
import { fileIcons, FILE_TYPE, ARRAY_FILE_TYPE } from '../utils';

export interface IFileProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Applies compact styling
   */
  isCompact?: boolean;
  /**
   * Determines the icon to display
   */
  type?: FILE_TYPE;
}

interface IStaticFileExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Close: typeof Close;
}

/* eslint-disable react/display-name */
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const File = forwardRef<HTMLDivElement, IFileProps>(({ children, type, ...props }, ref) => (
  <StyledFile {...props} ref={ref}>
    {type && <StyledIcon>{fileIcons[type]}</StyledIcon>}
    {children}
  </StyledFile>
)) as IStaticFileExport<HTMLDivElement, IFileProps>;

File.Close = Close;

File.propTypes = {
  isCompact: PropTypes.bool,
  type: PropTypes.oneOf(ARRAY_FILE_TYPE)
};
