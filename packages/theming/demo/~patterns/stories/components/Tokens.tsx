/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import { IGardenTheme, PALETTE, mediaQuery } from '@zendeskgarden/react-theming';
import { Field, Hint, ITextareaProps, Label, Message, Textarea } from '@zendeskgarden/react-forms';
import { Code, CodeBlock } from '@zendeskgarden/react-typography';
import {
  Close,
  Notification,
  Paragraph,
  Title,
  Well,
  useToast
} from '@zendeskgarden/react-notifications';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { IconButton } from '@zendeskgarden/react-buttons';
import CopyIcon from '@zendeskgarden/svg-icons/src/16/copy-stroke.svg';

const copyToClipboard = (content: string) => {
  const proxyElement = document.createElement('textarea');

  proxyElement.style.cssText = `border:none;outline:none;boxShadow:none;
  position:absolute;top:0;left:-9999px;`;
  document.body.appendChild(proxyElement);
  proxyElement.value = content;
  proxyElement.select();
  document.execCommand('copy');
  proxyElement.remove();
};

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.md};
  }
`;

export const Tokens = () => {
  const [value, setValue] = useState('');
  const [validation, setValidation] = useState<ITextareaProps['validation']>();
  const [message, setMessage] = useState<string | undefined>();
  const [palette, setPalette] = useState<IGardenTheme['palette']>(PALETTE);
  const { addToast } = useToast();

  const paletteText = JSON.stringify(palette, null /* replacer */, '  ');

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
    const text = event.target.value.trim();

    setValue(text);

    if (text) {
      try {
        const json = JSON.parse(text);

        if (json.Garden) {
          Object.keys(json.Garden).forEach(color => {
            const pattern = /(?<hue>\D+)(?<shade>\d+)/gmu;
            const { hue, shade } = pattern.exec(color.toLocaleLowerCase())?.groups || {};

            if (hue && shade && palette[hue]) {
              setPalette(_palette => ({
                ..._palette,
                [hue]: {
                  ...(_palette[hue] as object),
                  [shade]: json.Garden[color].value
                }
              }));
            }
          });

          setValidation('success');
          setMessage('Successful palette conversion');
        } else {
          setValidation('warning');
          setMessage('Unexpected structure');
        }
      } catch (error) {
        setValidation('error');
        setMessage('Invalid JSON');
      }
    } else {
      setValidation(undefined);
    }
  };

  const handleCopy = () => {
    copyToClipboard(paletteText);
    addToast(({ close }) => (
      <Notification type="success">
        <Title>JSON copied</Title>
        <Close aria-label="Close" onClick={close} />
      </Notification>
    ));
  };

  return (
    <Grid>
      <Row>
        <Col sm={5}>
          <Field>
            <Label>Design tokens</Label>
            <Hint>from Leonardo</Hint>
            <Textarea
              minRows={3}
              maxRows={9}
              onChange={handleChange}
              validation={validation}
              value={value}
            />
            {validation && <Message validation={validation}>{message}</Message>}
          </Field>
        </Col>
        <StyledCol sm={7}>
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
              <CodeBlock isLight language="json" containerProps={{ style: { maxHeight: 200 } }}>
                {paletteText}
              </CodeBlock>
            </Paragraph>
          </Well>
        </StyledCol>
      </Row>
    </Grid>
  );
};
