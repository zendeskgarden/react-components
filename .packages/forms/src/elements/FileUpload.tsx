/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React from 'react';

import { StyledFileUpload } from '../styled';
import { IFileUploadProps } from '../types';

/**
 * [1] A generic div is used for best support with `react-dropzone`.
 */

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const FileUpload = React.forwardRef<HTMLDivElement, IFileUploadProps>(
  ({ disabled, isCompact, isDragging, ...other }, ref) => {
    return (
      /* [1] */
      // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
      <StyledFileUpload
        ref={ref}
        aria-disabled={disabled}
        $isCompact={isCompact}
        $isDragging={isDragging}
        {...other}
        role="button"
      />
    );
  }
);

FileUpload.propTypes = {
  isDragging: PropTypes.bool,
  isCompact: PropTypes.bool,
  disabled: PropTypes.bool
};

FileUpload.displayName = 'FileUpload';
