/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import FilePdfCompact from '@zendeskgarden/svg-icons/src/12/file-pdf-stroke.svg';
import FileZipCompact from '@zendeskgarden/svg-icons/src/12/file-zip-stroke.svg';
import FileImageCompact from '@zendeskgarden/svg-icons/src/12/file-image-stroke.svg';
import FileDocumentCompact from '@zendeskgarden/svg-icons/src/12/file-document-stroke.svg';
import FileSpreadsheetCompact from '@zendeskgarden/svg-icons/src/12/file-spreadsheet-stroke.svg';
import FilePresentationCompact from '@zendeskgarden/svg-icons/src/12/file-presentation-stroke.svg';
import FileGenericCompact from '@zendeskgarden/svg-icons/src/12/file-generic-stroke.svg';
import FileSuccessCompact from '@zendeskgarden/svg-icons/src/12/check-circle-stroke.svg';
import FileErrorCompact from '@zendeskgarden/svg-icons/src/12/file-error-stroke.svg';
import FilePdfDefault from '@zendeskgarden/svg-icons/src/16/file-pdf-stroke.svg';
import FileZipDefault from '@zendeskgarden/svg-icons/src/16/file-zip-stroke.svg';
import FileImageDefault from '@zendeskgarden/svg-icons/src/16/file-image-stroke.svg';
import FileDocumentDefault from '@zendeskgarden/svg-icons/src/16/file-document-stroke.svg';
import FileSpreadsheetDefault from '@zendeskgarden/svg-icons/src/16/file-spreadsheet-stroke.svg';
import FilePresentationDefault from '@zendeskgarden/svg-icons/src/16/file-presentation-stroke.svg';
import FileGenericDefault from '@zendeskgarden/svg-icons/src/16/file-generic-stroke.svg';
import FileSuccessDefault from '@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg';
import FileErrorDefault from '@zendeskgarden/svg-icons/src/16/file-error-stroke.svg';

export enum FileType {
  pdf = 'pdf',
  zip = 'zip',
  image = 'image',
  document = 'document',
  spreadsheet = 'spreadsheet',
  presentation = 'presentation',
  generic = 'generic'
}

export enum ValidationType {
  success = 'success',
  error = 'error'
}

export type FILE_TYPE = keyof typeof FileType;

export type VALIDATION_TYPE = keyof typeof ValidationType;

export const ARRAY_FILE_TYPE: FILE_TYPE[] = [...Object.values(FileType)];

export const fileIconsDefault: Record<FILE_TYPE | VALIDATION_TYPE, React.ReactNode> = {
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

export const fileIconsCompact: Record<FILE_TYPE | VALIDATION_TYPE, React.ReactNode> = {
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
