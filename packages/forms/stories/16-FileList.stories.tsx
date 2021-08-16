/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { Ellipsis } from '@zendeskgarden/react-typography';
import { FileList, File } from '@zendeskgarden/react-forms';

export default {
  title: 'Components/Forms/FileList',
  subcomponents: {
    FileList,
    File
  }
} as Meta;

const StyledEllipsis = styled(Ellipsis)`
  /* stylelint-disable-next-line property-no-unknown */
  margin-${props => (props.theme.rtl ? 'left' : 'right')}: ${props => props.theme.space.base * 2}px;
  min-width: 200px;
  max-width: 300px;
`;

interface IFileListStoryProps {
  includeClose: boolean;
  isCompact: boolean;
  type: 'pdf' | 'zip' | 'image' | 'document' | 'spreadsheet' | 'presentation';
}

const files = ['squash.jpg', 'soybean.jpg', 'fresh-spicy-minced-hungarian-wax-peppers.jpg'];

export const Default: Story<IFileListStoryProps> = ({ includeClose, isCompact, type }) => (
  <FileList>
    {files.map(file => (
      <FileList.Item key={file}>
        <File isCompact={isCompact} type={type} aria-label="File">
          <StyledEllipsis>{file}</StyledEllipsis>
          {includeClose && <File.Close aria-label="Remove file" />}
        </File>
      </FileList.Item>
    ))}
  </FileList>
);

Default.args = {
  includeClose: false,
  isCompact: false,
  type: 'image'
};

Default.argTypes = {
  includeClose: {
    name: 'Include File.Close'
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
