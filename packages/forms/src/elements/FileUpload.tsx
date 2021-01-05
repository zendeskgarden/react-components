/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFileUpload } from '../styled';

export interface IFileUploadProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies drag styling */
  isDragging?: boolean;
  /** Applies compact styling */
  isCompact?: boolean;
  /** Indicates that the element is not interactive */
  disabled?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const FileUpload = React.forwardRef<HTMLDivElement, IFileUploadProps>(
  ({ disabled, ...props }, ref) => {
    return <StyledFileUpload ref={ref} aria-disabled={disabled} {...props} />;
  }
);

FileUpload.propTypes = {
  isDragging: PropTypes.bool,
  isCompact: PropTypes.bool,
  disabled: PropTypes.bool
};

FileUpload.displayName = 'FileUpload';
