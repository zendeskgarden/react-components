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
import {
  Field,
  Hint,
  Label,
  Input,
  Message,
  FileUpload,
  IFileUploadProps,
  File,
  FileList
} from '@zendeskgarden/react-forms';
import { useDropzone } from 'react-dropzone';
import {
  EXTENSION,
  FILE_UPLOAD_ARGS,
  FILE_UPLOAD_ARG_TYPES,
  IFileUploadStoryProps
} from './story-types';

export default {
  title: 'Components/Forms/FileUpload',
  component: FileUpload
} as Meta;

const FileWrapper: React.FC<{
  name: string;
  onRemove: any;
  isCompact?: boolean;
  disabled?: boolean;
  type?: EXTENSION;
}> = React.memo(({ name, disabled, onRemove, isCompact, type }) => {
  const [uploadProgress, setUploadProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setUploadProgress(value => {
        if (value >= 100) {
          clearInterval(interval);

          return 100;
        }

        return value + 10;
      });
    }, Math.random() * 300 + 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<any>) => {
    if (e.keyCode === KEY_CODES.DELETE || e.keyCode === KEY_CODES.BACKSPACE) {
      e.preventDefault();
      onRemove();
    }
  };

  return (
    <FileList.Item key={name}>
      <File
        type={type}
        isCompact={isCompact}
        onKeyDown={handleKeyDown}
        aria-label="File"
        tabIndex={disabled ? undefined : 0}
      >
        {name}
        {!disabled &&
          (uploadProgress < 100 ? (
            <File.Close onClick={onRemove} title="Stop upload" />
          ) : (
            <File.Delete onClick={onRemove} title="Remove file" />
          ))}
        <Progress value={uploadProgress} size={isCompact ? 'small' : 'medium'} />
      </File>
    </FileList.Item>
  );
});

FileWrapper.displayName = 'FileWrapper';

export const Default: Story<IFileUploadStoryProps & IFileUploadProps> = ({
  isCompact,
  disabled,
  isHidden,
  showHint,
  showMessage,
  validation,
  type
}) => {
  const [files, setFiles] = React.useState([] as string[]);

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
      <Row justifyContent="center">
        <Col sm={5}>
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
            {showMessage && <Message validation={validation}>Message</Message>}
            <FileList>
              {files.map((file, index) => (
                <FileWrapper
                  key={file}
                  name={file}
                  type={type}
                  isCompact={isCompact}
                  disabled={disabled}
                  onRemove={() => removeFile(index)}
                />
              ))}
            </FileList>
          </Field>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  ...FILE_UPLOAD_ARGS,
  isHidden: false
};

Default.argTypes = FILE_UPLOAD_ARG_TYPES;
