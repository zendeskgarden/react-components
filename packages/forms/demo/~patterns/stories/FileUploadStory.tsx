/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { Story } from '@storybook/react';
import { DropzoneProps, useDropzone } from 'react-dropzone';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import {
  File,
  FileList,
  FileUpload,
  IFileProps,
  IFileUploadProps,
  Input
} from '@zendeskgarden/react-forms';
import { FieldStory } from '../../stories/FieldStory';
import { FileStory } from '../../stories/FileStory';

interface IFileItemProps extends IFileProps {
  disabled?: boolean;
  onRemove: () => void;
}

const FileItem: FC<IFileItemProps> = memo(({ type, disabled, isCompact, children, onRemove }) => {
  const [uploadProgress, setUploadProgress] = React.useState(0);

  useEffect(() => {
    /* simulate file upload progress */
    const interval = setInterval(() => {
      setUploadProgress(value => {
        if (value >= 100) {
          clearInterval(interval);

          return 100;
        }

        return value + 20;
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
    <FileStory
      type={type}
      isCompact={isCompact}
      value={uploadProgress}
      tabIndex={disabled ? undefined : 0}
      hasClose={!disabled && uploadProgress < 100}
      hasDelete={!disabled && uploadProgress === 100}
      onKeyDown={handleKeyDown}
      onClick={onRemove}
    >
      {children}
    </FileStory>
  );
});

FileItem.displayName = 'FileItem';

interface IArgs extends IFileUploadProps {
  accept?: DropzoneProps['accept'];
  maxFiles?: DropzoneProps['maxFiles'];
  maxSize?: DropzoneProps['maxSize'];
  minSize?: DropzoneProps['minSize'];
  multiple?: DropzoneProps['multiple'];
  type?: IFileProps['type'];
}

export const FileUploadStory: Story<IArgs> = ({
  disabled,
  accept,
  maxFiles,
  maxSize,
  minSize,
  multiple,
  type,
  ...args
}) => {
  const [files, setFiles] = useState<string[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const fileNames = acceptedFiles.map(file => file.name);

        setFiles([...files, ...fileNames]);
      }
    },
    [files]
  );

  const handleRemove = useCallback(
    fileIndex => {
      setFiles(files.filter((file, i) => i !== fileIndex));
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    disabled,
    maxFiles,
    maxSize,
    minSize,
    multiple
  });

  return (
    <FieldStory
      label="File upload"
      hint="With react-dropzone"
      hasMessage={files.length === 0}
      message="Acceptable formats are JPG, PNG, and GIF"
    >
      <FileUpload isDragging={isDragActive} disabled={disabled} {...getRootProps()} {...args}>
        {isDragActive ? (
          <span>Drop files here</span>
        ) : (
          <span>Drag files here or click to upload</span>
        )}
        <Input {...getInputProps()} disabled={disabled} />
      </FileUpload>
      {files.length > 0 && (
        <FileList>
          {files.map((file, index) => (
            <FileList.Item key={index}>
              <FileItem
                onRemove={() => handleRemove(index)}
                disabled={disabled}
                isCompact={args.isCompact}
                type={type}
              >
                {file}
              </FileItem>
            </FileList.Item>
          ))}
        </FileList>
      )}
    </FieldStory>
  );
};
