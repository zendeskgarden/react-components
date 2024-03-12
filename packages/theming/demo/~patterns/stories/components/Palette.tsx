/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { IGardenTheme } from '@zendeskgarden/react-theming';
import {
  Close,
  Notification,
  Paragraph,
  Title,
  Well,
  useToast
} from '@zendeskgarden/react-notifications';
import { Code, CodeBlock } from '@zendeskgarden/react-typography';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { IconButton } from '@zendeskgarden/react-buttons';
import CopyIcon from '@zendeskgarden/svg-icons/src/16/copy-stroke.svg';

interface IPaletteProps {
  palette: IGardenTheme['palette'];
}

export const Palette = ({ palette }: IPaletteProps) => {
  const { addToast } = useToast();

  const paletteText = JSON.stringify(palette, null /* replacer */, '  ')
    .replaceAll('"', "'")
    .replace(/'(?<shade>\d*)'/gmu, '$<shade>');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(paletteText);

    addToast(({ close }) => (
      <Notification type="success">
        <Title>JSON copied</Title>
        <Close aria-label="Close" onClick={close} />
      </Notification>
    ));
  };

  return (
    <Well isRecessed>
      <Title>
        Garden <Code>PALETTE</Code>{' '}
        <Tooltip content="Copy JSON">
          <IconButton onClick={handleCopy} size="small">
            <CopyIcon />
          </IconButton>
        </Tooltip>
      </Title>
      <Paragraph>
        <CodeBlock
          isLight
          language="json"
          containerProps={{ style: { maxHeight: 'calc(100vh - 222px)' } }}
        >
          {paletteText}
        </CodeBlock>
      </Paragraph>
    </Well>
  );
};
