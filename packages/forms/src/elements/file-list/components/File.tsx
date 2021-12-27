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
  ForwardRefExoticComponent,
  useMemo
} from 'react';
import PropTypes from 'prop-types';
import { Close } from './Close';
import { Delete } from './Delete';
import { StyledFile, StyledFileIcon } from '../../../styled';
import { FileContext } from '../../../utils/useFileContext';
import {
  FILE_TYPE,
  ARRAY_FILE_TYPE,
  VALIDATION_TYPE,
  fileIconsDefault,
  fileIconsCompact
} from '../utils';

export interface IFileProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies compact styling */
  isCompact?: boolean;
  /** Determines the icon to display */
  type?: FILE_TYPE;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Applies validation state styling */
  validation?: VALIDATION_TYPE;
}

interface IStaticFileExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Close: typeof Close;
  Delete: typeof Delete;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const File = forwardRef<HTMLDivElement, IFileProps>(
  ({ children, type, isCompact, focusInset, validation, ...props }, ref) => {
    const fileContextValue = useMemo(() => ({ isCompact }), [isCompact]);
    const validationType = validation || type;

    return (
      <FileContext.Provider value={fileContextValue}>
        <StyledFile
          {...props}
          isCompact={isCompact}
          focusInset={focusInset}
          validation={validation}
          ref={ref}
        >
          {validationType && (
            <StyledFileIcon isCompact={isCompact}>
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
) as IStaticFileExport<HTMLDivElement, IFileProps>;

File.displayName = 'File';

File.Close = Close;

File.Delete = Delete;

File.propTypes = {
  focusInset: PropTypes.bool,
  isCompact: PropTypes.bool,
  type: PropTypes.oneOf(ARRAY_FILE_TYPE),
  validation: PropTypes.oneOf(['success', 'error'])
};
