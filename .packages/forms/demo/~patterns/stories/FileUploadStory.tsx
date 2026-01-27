/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import { KEYS } from '@zendeskgarden/container-utilities';
import {
  File,
  FileList,
  FileUpload,
  IFileProps,
  IFileUploadProps,
  Input
} from '@zendeskgarden/react-forms';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { DropzoneProps, useDropzone } from 'react-dropzone';

import { FieldStory } from '../../stories/FieldStory';
import { FileStory } from '../../stories/FileStory';

interface IFileItemProps extends IFileProps {
  disabled?: boolean;
  onRemove: () => void;
  closeAriaLabel: string;
  deleteAriaLabel: string;
}

const ARIA_LABEL = 'Press backspace to delete';

const FileItem: FC<IFileItemProps> = memo(({ type, disabled, isCompact, children, onRemove }) => {
  const [uploadProgress, setUploadProgress] = React.useState(0);

  useEffect(() => {
    /* simulate file upload progress */
    const interval = setInterval(
      () => {
        setUploadProgress(value => {
          if (value >= 100) {
            clearInterval(interval);

            return 100;
          }

          return value + 20;
        });
      },
      Math.random() * 300 + 100
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleCloseKeydown = (e: React.KeyboardEvent<any>) => {
    const _KEYS = [KEYS.SPACE, KEYS.ENTER];

    if (_KEYS.includes(e.key)) {
      e.preventDefault();
      onRemove();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<any>) => {
    const _KEYS = [KEYS.DELETE, KEYS.BACKSPACE];

    if (_KEYS.includes(e.key)) {
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
      onCloseKeydown={handleCloseKeydown}
      onClick={onRemove}
      closeAriaLabel={ARIA_LABEL}
      deleteAriaLabel={ARIA_LABEL}
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
  closeAriaLabel: string;
  deleteAriaLabel: string;
}

export const FileUploadStory: StoryFn<IArgs> = ({
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

  const handleRemove = useCallback<(fileIndex: number) => undefined>(
    fileIndex => {
      setFiles(files.filter((_, i) => i !== fileIndex));
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
                closeAriaLabel={ARIA_LABEL}
                deleteAriaLabel={ARIA_LABEL}
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
