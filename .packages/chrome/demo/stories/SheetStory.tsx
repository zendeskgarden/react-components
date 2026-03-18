/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import { Button } from '@zendeskgarden/react-buttons';
import { ISheetProps, Sheet } from '@zendeskgarden/react-chrome';
import { Field, Toggle } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';
import { ThemeProvider, IGardenTheme } from '@zendeskgarden/react-theming';
import React, { ChangeEventHandler } from 'react';
import { DefaultTheme } from 'styled-components';

import { IFooterItem } from './types';

interface ISheetComponentProps extends ISheetProps {
  hasBody: boolean;
  body: string;
  hasClose: boolean;
  hasFooter: boolean;
  footerItems: IFooterItem[];
  hasHeader: boolean;
  isCompact: boolean;
  hasTitle?: boolean;
  title: string;
  hasDescription?: boolean;
  description: string;
}

export const SheetComponent = ({
  hasHeader,
  title,
  hasTitle = !!title,
  description,
  hasDescription = !!description,
  hasBody,
  body,
  hasFooter,
  footerItems,
  isCompact,
  onClick,
  hasClose,
  ...props
}: ISheetComponentProps) => (
  <Sheet {...props}>
    {!!hasHeader && (
      <Sheet.Header>
        {!!hasTitle && <Sheet.Title>{title}</Sheet.Title>}
        {!!hasDescription && <Sheet.Description>{description}</Sheet.Description>}
      </Sheet.Header>
    )}
    {hasBody ? <Sheet.Body>{body}</Sheet.Body> : body}
    {!!hasFooter && (
      <Sheet.Footer isCompact={isCompact}>
        {!!footerItems &&
          footerItems.map(({ text, type }, index) => (
            <Sheet.FooterItem key={index}>
              <Button
                isLink={isCompact}
                isBasic={type === 'basic'}
                isPrimary={type === 'primary'}
                onClick={onClick}
              >
                {text}
              </Button>
            </Sheet.FooterItem>
          ))}
      </Sheet.Footer>
    )}
    {!!hasClose && <Sheet.Close onClick={onClick} />}
  </Sheet>
);

interface IArgs extends ISheetComponentProps {
  debug: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SheetStory: StoryFn<IArgs> = ({
  debug,
  onClick,
  onChange,
  hasBody,
  body,
  hasClose,
  hasFooter,
  footerItems,
  hasHeader,
  title,
  description,
  ...args
}) => (
  <>
    <ThemeProvider
      theme={
        ((parentTheme: DefaultTheme) => ({
          ...parentTheme,
          rtl: parentTheme.rtl ? args.placement === 'start' : args.placement !== 'start'
        })) as unknown as IGardenTheme
      }
    >
      <Field>
        <Toggle checked={args.isOpen} onChange={onChange}>
          <Field.Label hidden>Sheet</Field.Label>
        </Toggle>
      </Field>
    </ThemeProvider>
    <Grid debug={debug} gutters={false} style={{ marginTop: 20 }}>
      <Grid.Row style={{ height: 'calc(100vh - 120px)' }} justifyContent={args.placement || 'end'}>
        <Grid.Col size="auto" style={{ maxHeight: '100%' }}>
          <SheetComponent
            hasHeader={hasHeader}
            title={title}
            description={description}
            hasBody={hasBody}
            body={body}
            hasFooter={hasFooter}
            footerItems={footerItems}
            onClick={onClick}
            hasClose={hasClose}
            {...args}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </>
);
