/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import FileSuccess from '@zendeskgarden/svg-icons/src/check-circle-stroke.svg';
import FileDocument from '@zendeskgarden/svg-icons/src/file-document-stroke.svg';
import FileError from '@zendeskgarden/svg-icons/src/file-error-stroke.svg';
import FileGeneric from '@zendeskgarden/svg-icons/src/file-generic-stroke.svg';
import FileImage from '@zendeskgarden/svg-icons/src/file-image-stroke.svg';
import FilePdf from '@zendeskgarden/svg-icons/src/file-pdf-stroke.svg';
import FilePresentation from '@zendeskgarden/svg-icons/src/file-presentation-stroke.svg';
import FileSpreadsheet from '@zendeskgarden/svg-icons/src/file-spreadsheet-stroke.svg';
import FileZip from '@zendeskgarden/svg-icons/src/file-zip-stroke.svg';
import { ReactNode } from 'react';

import { FileType, FileValidation } from '../../types/elements';

export const fileIconsDefault: Record<FileType | FileValidation, ReactNode> = {
  pdf: <FilePdf />,
  zip: <FileZip />,
  image: <FileImage />,
  document: <FileDocument />,
  spreadsheet: <FileSpreadsheet />,
  presentation: <FilePresentation />,
  generic: <FileGeneric />,
  success: <FileSuccess />,
  error: <FileError />
};

export const fileIconsCompact: Record<FileType | FileValidation, ReactNode> = {
  pdf: <FilePdf />,
  zip: <FileZip />,
  image: <FileImage />,
  document: <FileDocument />,
  spreadsheet: <FileSpreadsheet />,
  presentation: <FilePresentation />,
  generic: <FileGeneric />,
  success: <FileSuccess />,
  error: <FileError />
};
