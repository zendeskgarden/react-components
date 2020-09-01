The `FileUpload` component is a styled `<div>` which can be used
with 3rd-party file upload libraries like [react-dropzone](https://github.com/react-dropzone/react-dropzone/).

The example below includes an a mock file upload implementation that
accepts any file type or size.

```jsx
const { useDropzone } = require('react-dropzone');
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Code } = require('@zendeskgarden/react-typography/src');
const { getColor } = require('@zendeskgarden/react-theming/src');
const { IconButton } = require('@zendeskgarden/react-buttons/src');
const { Progress } = require('@zendeskgarden/react-loaders/src');
const FileImageStroke = require('@zendeskgarden/svg-icons/src/16/file-image-stroke.svg').default;
const CloseStroke = require('@zendeskgarden/svg-icons/src/16/x-stroke.svg').default;

const StyledFileWrapper = styled.ul`
  direction: ${p => (p.theme.rtl ? 'rtl' : 'ltr')};
  margin-top: ${p => p.theme.space.sm};
  list-style: none;
  padding: 0;

  & > *:not(:first-child) {
    margin-top: ${p => p.theme.space.xs};
  }
`;

const StyledFile = styled.div`
  position: relative;
  border: ${p => p.theme.borders.sm};
  border-color: ${p => getColor('neutralHue', 300, p.theme)};
  border-radius: ${p => p.theme.borderRadii.md};
  padding: ${p => p.theme.space.xxs} ${p => p.theme.space.xs};
  display: inline-flex;
  min-width: 200px;
  flex-wrap: nowrap;
`;

const StyledFileName = styled.span`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0 ${p => p.theme.space.xs};
`;

const StyledFileIcon = styled.div`
  display: flex;
  align-items: center;
`;

const StyledProgress = styled(Progress)`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
`;

const File = React.memo(({ name, onRemove }) => {
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
      <StyledFileIcon>
        <FileImageStroke />
      </StyledFileIcon>
      <StyledFileName aria-label="File name">{name}</StyledFileName>
      <IconButton size="small" onClick={onRemove} aria-label="Remove file">
        <CloseStroke />
      </IconButton>
      {uploadProgress < 100 && (
        <StyledProgress value={uploadProgress} aria-label="Upload progress" />
      )}
    </StyledFile>
  );
});

const Example = () => {
  const [isCompact, setIsCompact] = React.useState(false);
  const [files, setFiles] = React.useState(['squash.jpg', 'soybean.pdf']);

  const onDrop = React.useCallback(
    acceptedFiles => {
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <Well isRecessed className="u-mb-sm">
        <Field>
          <Toggle checked={isCompact} onChange={event => setIsCompact(event.target.checked)}>
            <Label>
              <Code>isCompact</Code>
            </Label>
          </Toggle>
        </Field>
      </Well>
      <Field>
        <Label>File upload</Label>
        <Hint>Works with react-dropzone</Hint>
        <FileUpload {...getRootProps()} isDragging={isDragActive} isCompact={isCompact}>
          {isDragActive ? (
            <span>Drop files here</span>
          ) : (
            <span>Drag files here or click to upload</span>
          )}
          <Input {...getInputProps()} />
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
    </>
  );
};

<Example />;
```
