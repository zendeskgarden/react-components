/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IFileUploadProps } from '../types';
import { StyledFileUpload } from '../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const FileUpload = React.forwardRef<HTMLDivElement, IFileUploadProps>(
  ({ disabled, ...props }, ref) => {
    return <StyledFileUpload ref={ref} aria-disabled={disabled} {...props} role="button" />;
  }
);

FileUpload.propTypes = {
  isDragging: PropTypes.bool,
  isCompact: PropTypes.bool,
  disabled: PropTypes.bool
};

FileUpload.displayName = 'FileUpload';
