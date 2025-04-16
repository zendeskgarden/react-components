/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, Children, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FILE_TYPE, FILE_VALIDATION, IFileProps } from '../../../types';
import { Close } from './Close';
import { Delete } from './Delete';
import { StyledFile, StyledFileIcon } from '../../../styled';
import { FileContext } from '../../../utils/useFileContext';
import { fileIconsDefault, fileIconsCompact } from '../utils';

const FileComponent = forwardRef<HTMLDivElement, IFileProps>(
  ({ children, type, isCompact, focusInset, validation, ...props }, ref) => {
    const fileContextValue = useMemo(() => ({ isCompact }), [isCompact]);
    const validationType = validation || type;

    return (
      <FileContext.Provider value={fileContextValue}>
        <StyledFile
          {...props}
          $isCompact={isCompact}
          $focusInset={focusInset}
          $validation={validation}
          ref={ref}
        >
          {!!validationType && (
            <StyledFileIcon $isCompact={isCompact} $validation={validation}>
              {isCompact ? fileIconsCompact[validationType] : fileIconsDefault[validationType]}
            </StyledFileIcon>
          )}
          {Children.map(children, child =>
            typeof child === 'string' ? <span>{child}</span> : child
          )}
        </StyledFile>
      </FileContext.Provider>
    );
  }
);

FileComponent.displayName = 'File';

FileComponent.propTypes = {
  focusInset: PropTypes.bool,
  isCompact: PropTypes.bool,
  type: PropTypes.oneOf(FILE_TYPE),
  validation: PropTypes.oneOf(FILE_VALIDATION)
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const File = FileComponent as typeof FileComponent & {
  Close: typeof Close;
  Delete: typeof Delete;
};

File.Close = Close;
File.Delete = Delete;
