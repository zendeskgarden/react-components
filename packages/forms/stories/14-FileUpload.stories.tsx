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
        tabIndex={0}
      >
        {name}
        <File.Close onClick={onRemove} title="Remove file" />
        <Progress value={uploadProgress} size={isCompact ? 'small' : 'medium'} />
      </File>
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
            <FileList>
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
          </Field>
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
