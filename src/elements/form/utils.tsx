/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ReactNode } from 'react';
import FileSuccessCompact from 'svg-icons-legacy/src/12/check-circle-stroke.svg';
import FileDocumentCompact from 'svg-icons-legacy/src/12/file-document-stroke.svg';
import FileErrorCompact from 'svg-icons-legacy/src/12/file-error-stroke.svg';
import FileGenericCompact from 'svg-icons-legacy/src/12/file-generic-stroke.svg';
import FileImageCompact from 'svg-icons-legacy/src/12/file-image-stroke.svg';
import FilePdfCompact from 'svg-icons-legacy/src/12/file-pdf-stroke.svg';
import FilePresentationCompact from 'svg-icons-legacy/src/12/file-presentation-stroke.svg';
import FileSpreadsheetCompact from 'svg-icons-legacy/src/12/file-spreadsheet-stroke.svg';
import FileZipCompact from 'svg-icons-legacy/src/12/file-zip-stroke.svg';
import FileSuccessDefault from 'svg-icons-legacy/src/16/check-circle-stroke.svg';
import FileDocumentDefault from 'svg-icons-legacy/src/16/file-document-stroke.svg';
import FileErrorDefault from 'svg-icons-legacy/src/16/file-error-stroke.svg';
import FileGenericDefault from 'svg-icons-legacy/src/16/file-generic-stroke.svg';
import FileImageDefault from 'svg-icons-legacy/src/16/file-image-stroke.svg';
import FilePdfDefault from 'svg-icons-legacy/src/16/file-pdf-stroke.svg';
import FilePresentationDefault from 'svg-icons-legacy/src/16/file-presentation-stroke.svg';
import FileSpreadsheetDefault from 'svg-icons-legacy/src/16/file-spreadsheet-stroke.svg';
import FileZipDefault from 'svg-icons-legacy/src/16/file-zip-stroke.svg';

import { FileType, FileValidation } from '../../types/elements';

export const fileIconsDefault: Record<FileType | FileValidation, ReactNode> = {
  pdf: <FilePdfDefault />,
  zip: <FileZipDefault />,
  image: <FileImageDefault />,
  document: <FileDocumentDefault />,
  spreadsheet: <FileSpreadsheetDefault />,
  presentation: <FilePresentationDefault />,
  generic: <FileGenericDefault />,
  success: <FileSuccessDefault />,
  error: <FileErrorDefault />
};

export const fileIconsCompact: Record<FileType | FileValidation, ReactNode> = {
  pdf: <FilePdfCompact />,
  zip: <FileZipCompact />,
  image: <FileImageCompact />,
  document: <FileDocumentCompact />,
  spreadsheet: <FileSpreadsheetCompact />,
  presentation: <FilePresentationCompact />,
  generic: <FileGenericCompact />,
  success: <FileSuccessCompact />,
  error: <FileErrorCompact />
};
