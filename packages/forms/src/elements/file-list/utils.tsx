/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import FilePdfStroke from '@zendeskgarden/svg-icons/src/16/file-pdf-stroke.svg';
import FileZipStroke from '@zendeskgarden/svg-icons/src/16/file-zip-stroke.svg';
import FileImageStroke from '@zendeskgarden/svg-icons/src/16/file-image-stroke.svg';
import FileDocumentStroke from '@zendeskgarden/svg-icons/src/16/file-document-stroke.svg';
import FileSpreadsheetStroke from '@zendeskgarden/svg-icons/src/16/file-spreadsheet-stroke.svg';
import FilePresentationStroke from '@zendeskgarden/svg-icons/src/16/file-presentation-stroke.svg';

export type FILE_TYPE = 'pdf' | 'zip' | 'image' | 'document' | 'spreadsheet' | 'presentation';

export const ARRAY_FILE_TYPE: FILE_TYPE[] = [
  'pdf',
  'zip',
  'image',
  'document',
  'spreadsheet',
  'presentation'
];

export const fileIcons: Record<FILE_TYPE, React.ReactNode> = {
  pdf: <FilePdfStroke />,
  zip: <FileZipStroke />,
  image: <FileImageStroke />,
  document: <FileDocumentStroke />,
  spreadsheet: <FileSpreadsheetStroke />,
  presentation: <FilePresentationStroke />
};
