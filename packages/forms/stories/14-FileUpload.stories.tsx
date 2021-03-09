/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Ellipsis, Span } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Progress } from '@zendeskgarden/react-loaders';
import {
  Field,
  Hint,
  Label,
  Input,
  FileUpload,
  IFileUploadProps
} from '@zendeskgarden/react-forms';
import { useDropzone } from 'react-dropzone';
import FileImageStroke from '@zendeskgarden/svg-icons/src/16/file-image-stroke.svg';
import CloseStroke from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

export default {
  title: 'Components/Forms/FileUpload',
  component: FileUpload
} as Meta;

const StyledFileWrapper = styled.ul`
  direction: ${p => (p.theme.rtl ? 'rtl' : 'ltr')};
  margin-top: ${p => p.theme.space.sm};
  padding: 0;
  list-style: none;

  & > *:not(:first-child) {
    margin-top: ${p => p.theme.space.xs};
  }
`;

const StyledFile = styled.div`
  display: inline-flex;
  position: relative;
  flex-wrap: nowrap;
  border: ${p => p.theme.borders.sm};
  border-radius: ${p => p.theme.borderRadii.md};
  border-color: ${p => getColor('neutralHue', 300, p.theme)};
  padding: ${p => p.theme.space.xxs} ${p => p.theme.space.xs};
  min-width: 200px;
`;

const StyledSpan = styled(Span)`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding-right: ${p => p.theme.space.xs};
`;

const StyledProgress = styled(Progress)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
`;

const StyledEllipsis = styled(Ellipsis)`
  max-width: 300px;
`;

const File: React.FC<{ name: string; onRemove: any }> = React.memo(({ name, onRemove }) => {
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
    <StyledFile aria-label="File">
      <StyledSpan aria-label="File name">
        <Span.StartIcon>
          <FileImageStroke />
        </Span.StartIcon>
        <StyledEllipsis>{name}</StyledEllipsis>
      </StyledSpan>
      <IconButton size="small" focusInset onClick={onRemove} aria-label="Remove file">
        <CloseStroke />
      </IconButton>
      {uploadProgress < 100 && (
        <StyledProgress value={uploadProgress} aria-label="Upload progress" />
      )}
    </StyledFile>
  );
});

File.displayName = 'File';

export const Default: Story<IFileUploadProps> = ({ isCompact, disabled }) => {
  const [files, setFiles] = React.useState(['squash.jpg', 'soybean.pdf']);

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
            <Label>File upload</Label>
            <Hint>Works with react-dropzone</Hint>
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
          <StyledFileWrapper>
            {files.map((file, index) => (
              <li key={file}>
                <File
                  name={file}
                  onRemove={() => {
                    removeFile(index);
                  }}
                />
              </li>
            ))}
          </StyledFileWrapper>
        </Col>
      </Row>
    </Grid>
  );
};

Default.argTypes = {
  isDragging: {
    table: {
      disable: true
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
accepts any file type or size.
       `
    }
  }
};
