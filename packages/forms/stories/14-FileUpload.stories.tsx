/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { CSSTransition } from 'react-transition-group';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Ellipsis, Span } from '@zendeskgarden/react-typography';
import { Progress } from '@zendeskgarden/react-loaders';
import {
  Field,
  Hint,
  Label,
  Input,
  FileUpload,
  IFileUploadProps,
  File,
  FileList
} from '@zendeskgarden/react-forms';
import { useDropzone } from 'react-dropzone';

export default {
  title: 'Components/Forms/FileUpload',
  component: FileUpload
} as Meta;

const StyledFile = styled(File)`
  .progress-bar {
    &.enter {
      opacity: 0;
    }

    &.enter-active {
      transition: opacity 200ms;
      opacity: 1;
    }

    &.exit {
      opacity: 1;
    }

    &.exit-active {
      transition: opacity 200ms;
      opacity: 0;
    }

    &.exit-done {
      display: none;
    }
  }
`;

const StyledSpan = styled(Span)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledProgress = styled(Progress)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
`;

const StyledEllipsis = styled(Ellipsis)`
  /* stylelint-disable-next-line property-no-unknown */
  margin-${props => (props.theme.rtl ? 'left' : 'right')}: ${props => props.theme.space.base * 2}px;
  min-width: 200px;
  max-width: 300px;
`;

type EXTENSION = 'pdf' | 'zip' | 'image' | 'document' | 'spreadsheet' | 'presentation';

const FileWrapper: React.FC<{
  name: string;
  onRemove: any;
  isCompact?: boolean;
  type?: EXTENSION;
}> = React.memo(({ name, onRemove, isCompact, type }) => {
  const [uploadProgress, setUploadProgress] = React.useState(0);

  React.useEffect(() => {
    const randomUploadInterval = Math.random() * (600 - 200) + 600;

    const uploadInterval = setInterval(() => {
      setUploadProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(uploadInterval);

          return 100;
        }

        return prevProgress + 10;
      });
    }, randomUploadInterval);

    return () => {
      clearInterval(uploadInterval);
    };
  }, []);

  return (
    <FileList.Item key={name}>
      <StyledFile type={type} isCompact={isCompact} aria-label="File">
        <StyledSpan>
          <StyledEllipsis>{name}</StyledEllipsis>
          <File.Close onClick={onRemove} aria-label="Remove file" />
        </StyledSpan>
        <CSSTransition in={uploadProgress < 100} timeout={200} className="progress-bar">
          <StyledProgress value={uploadProgress} />
        </CSSTransition>
      </StyledFile>
    </FileList.Item>
  );
});

FileWrapper.displayName = 'FileWrapper';

interface IFileUploadStoryProps {
  isHidden: false;
  showHint: boolean;
  type: EXTENSION;
}

export const Default: Story<IFileUploadProps & IFileUploadStoryProps> = ({
  isCompact,
  disabled,
  isHidden,
  showHint,
  type
}) => {
  const [files, setFiles] = React.useState([
    'squash.jpg',
    'soybean.jpg',
    'fresh-spicy-minced-hungarian-wax-peppers.jpg'
  ]);

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const fileNames = acceptedFiles.map(file => file.name);

        setFiles([...files, ...fileNames]);
      }
    },
    [files]
  );

  const removeFile = React.useCallback(
    fileIndex => {
      setFiles(files.filter((file, i) => i !== fileIndex));
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled
  });

  return (
    <Grid>
      <Row>
        <Col lg={8} offsetLg={2}>
          <Field>
            <Label hidden={isHidden}>File upload</Label>
            {showHint && <Hint>Works with react-dropzone</Hint>}
            <FileUpload
              {...getRootProps()}
              isDragging={isDragActive}
              isCompact={isCompact}
              disabled={disabled}
            >
              {isDragActive ? (
                <span>Drop files here</span>
              ) : (
                <span>Drag files here or click to upload</span>
              )}
              <Input {...getInputProps()} disabled={disabled} />
            </FileUpload>
          </Field>

          <FileList style={{ width: '320px', marginTop: '20px' }}>
            {files.map((file, index) => (
              <FileWrapper
                key={file}
                name={file}
                type={type}
                isCompact={isCompact}
                onRemove={() => removeFile(index)}
              />
            ))}
          </FileList>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  showHint: true,
  isHidden: false,
  type: 'image'
};

Default.argTypes = {
  isHidden: {
    name: 'Hidden label'
  },
  showHint: {
    name: 'Hint'
  },
  isDragging: {
    table: {
      disable: true
    }
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
The \`FileUpload\` component is a styled \`<div>\` which can be used
with 3rd-party file upload libraries like [react-dropzone](https://github.com/react-dropzone/react-dropzone/).

The example below includes an a mock file upload implementation that
accepts any file type or size. It also uses the \`FileList\` component to
display a list of uploaded files.
       `
    }
  }
};
