/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  forwardRef,
  Children,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent
} from 'react';
import PropTypes from 'prop-types';
import { Close } from './Close';
import { Delete } from './Delete';
import { StyledFile, StyledFileIcon } from '../../../styled';
import { fileIcons, FILE_TYPE, ARRAY_FILE_TYPE } from '../utils';

export interface IFileProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies compact styling */
  isCompact?: boolean;
  /** Determines the icon to display */
  type?: FILE_TYPE;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
}

interface IStaticFileExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Close: typeof Close;
  Delete: typeof Delete;
}

/* eslint-disable react/display-name */
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const File = forwardRef<HTMLDivElement, IFileProps>(
  ({ children, type, focusInset, ...props }, ref) => (
    <StyledFile {...props} focusInset={focusInset} ref={ref}>
      {type && <StyledFileIcon>{fileIcons[type]}</StyledFileIcon>}
      {Children.map(children, child => (typeof child === 'string' ? <span>{child}</span> : child))}
    </StyledFile>
  )
) as IStaticFileExport<HTMLDivElement, IFileProps>;

File.displayName = 'File';

File.Close = Close;

File.Delete = Delete;

File.propTypes = {
  focusInset: PropTypes.bool,
  isCompact: PropTypes.bool,
  type: PropTypes.oneOf(ARRAY_FILE_TYPE)
};
