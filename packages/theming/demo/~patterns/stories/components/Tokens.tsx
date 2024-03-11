/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ChangeEventHandler, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { IGardenTheme, PALETTE, mediaQuery } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { Field, Hint, ITextareaProps, Label, Message, Textarea } from '@zendeskgarden/react-forms';
import { ToastProvider } from '@zendeskgarden/react-notifications';
import { Palette } from './Palette';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.md};
  }
`;

export const Tokens = () => {
  const [value, setValue] = useState('');
  const [validation, setValidation] = useState<ITextareaProps['validation']>();
  const [message, setMessage] = useState<string | undefined>();
  const [palette, setPalette] = useState<IGardenTheme['palette']>(PALETTE);
  const theme = useContext(ThemeContext);
  const toastPlacement = {
    'top-end': { style: { top: theme.space.base * 3 } }
  };

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

  return (
    <Grid>
      <Grid.Row>
        <Grid.Col sm={6}>
          <Field>
            <Label>Design tokens</Label>
            <Hint>from Leonardo</Hint>
            <Textarea
              maxRows={38}
              onChange={handleChange}
              placeholder="Paste JSON here"
              validation={validation}
              value={value}
            />
            {validation && <Message validation={validation}>{message}</Message>}
          </Field>
        </Grid.Col>
        <StyledCol sm={6}>
          <ToastProvider placementProps={toastPlacement} zIndex={1}>
            <Palette palette={palette} />
          </ToastProvider>
        </StyledCol>
      </Grid.Row>
    </Grid>
  );
};
