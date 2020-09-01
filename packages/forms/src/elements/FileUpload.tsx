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
  /** Determines whether to apply drag styling */
  isDragging?: boolean;
}

export const FileUpload = React.forwardRef<HTMLDivElement, IFileUploadProps>((props, ref) => {
  return <StyledFileUpload ref={ref} {...props} />;
});

FileUpload.propTypes = {
  isDragging: PropTypes.bool
};

FileUpload.displayName = 'FileUpload';
