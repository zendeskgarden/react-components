/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Progress } from '@zendeskgarden/react-loaders';
import { FileList, File } from '@zendeskgarden/react-forms';

export default {
  title: 'Components/Forms/FileList',
  subcomponents: {
    FileList,
    File
  }
} as Meta;

interface IFileListStoryProps {
  includeClose: boolean;
  includeProgress: boolean;
  isCompact: boolean;
  type: 'pdf' | 'zip' | 'image' | 'document' | 'spreadsheet' | 'presentation';
}

const files = [
  'tomato.txt',
  'squash.jpg',
  'kimchi.pdf',
  'soybean.jpg',
  'fresh-spicy-minced-hungarian-wax-peppers.jpg'
];

export const Default: Story<IFileListStoryProps> = ({
  includeClose,
  includeProgress,
  isCompact,
  type
}) => (
  <Grid>
    <Row justifyContent="center">
      <Col sm={5}>
        <FileList>
          {files.map((file, index) => (
            <FileList.Item key={file}>
              <File isCompact={isCompact} type={type} aria-label="File">
                {file}
                {includeClose && <File.Close aria-label="Remove file" />}
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

Default.args = {
  includeClose: false,
  includeProgress: false,
  isCompact: false,
  type: 'image'
};

Default.argTypes = {
  includeClose: {
    name: 'Include File.Close'
  },
  includeProgress: {
    name: 'Include Progress'
  },
  isCompact: {
    control: 'boolean'
  },
  type: {
    control: {
      type: 'select',
      options: ['pdf', 'zip', 'image', 'document', 'spreadsheet', 'presentation', undefined]
    }
  }
};

Default.parameters = {
  docs: {
    description: {
      component: `
The \`FileList\` component displays a list of uploaded files.
        `
    }
  }
};
