/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Progress } from '@zendeskgarden/react-loaders';
import { FileList, File } from '@zendeskgarden/react-forms';
import { FILE_LIST_ARGS, FILE_LIST_ARG_TYPES, IFileListStoryProps } from './story-types';

export default {
  title: 'Components/Forms/FileList',
  subcomponents: {
    FileList,
    'FileList.Item': FileList.Item,
    File,
    'File.Close': File.Close,
    'File.Delete': File.Delete
  }
} as Meta;

const files = [
  'tomato.txt',
  'squash.jpg',
  'kimchi.pdf',
  'soybean.jpg',
  'fresh-spicy-minced-hungarian-wax-peppers.jpg'
];

const handleKeyDown = (e: React.KeyboardEvent<any>) => {
  if (e.keyCode === KEY_CODES.DELETE || e.keyCode === KEY_CODES.BACKSPACE) {
    e.preventDefault();
    /* eslint-disable-next-line no-alert */
    alert('File dismissed via keyboard');
  }
};

export const Default: Story<IFileListStoryProps> = ({
  focusInset,
  includeProgress,
  isCompact,
  type,
  remove,
  validation
}) => (
  <Grid>
    <Row justifyContent="center">
      <Col sm={5}>
        <FileList>
          {files.map((file, index) => (
            <FileList.Item key={file}>
              <File
                isCompact={isCompact}
                type={type}
                aria-label="File"
                focusInset={focusInset}
                validation={validation}
                tabIndex={0}
                onKeyDown={handleKeyDown}
              >
                {file}
                {remove === File.Delete.displayName && (
                  <File.Delete
                    /* eslint-disable-next-line no-alert */
                    onClick={() => alert('File dismissed via mouse')}
                    title="Delete file"
                  />
                )}
                {remove === File.Close.displayName && (
                  <File.Close
                    /* eslint-disable-next-line no-alert */
                    onClick={() => alert('File dismissed via mouse')}
                    title="Close file"
                  />
                )}
                {includeProgress && (
                  <Progress value={index * 25} size={isCompact ? 'small' : 'medium'} />
                )}
              </File>
            </FileList.Item>
          ))}
        </FileList>
      </Col>
    </Row>
  </Grid>
);

Default.args = FILE_LIST_ARGS;

Default.argTypes = FILE_LIST_ARG_TYPES;
