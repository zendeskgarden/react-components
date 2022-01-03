/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ChangeEventHandler } from 'react';
import { Story } from '@storybook/react';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider, IGardenTheme } from '@zendeskgarden/react-theming';
import { Field, Label, Toggle } from '@zendeskgarden/react-forms';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { ISheetProps, Sheet } from '@zendeskgarden/react-chrome';
import { IFooterItem } from './types';

interface ISheetComponentProps extends ISheetProps {
  hasBody: boolean;
  body: string;
  hasClose: boolean;
  hasFooter: boolean;
  footerItems: IFooterItem[];
  hasHeader: boolean;
  isCompact: boolean;
  title: string;
  description: string;
}

export const SheetComponent = ({
  hasHeader,
  title,
  description,
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
    {hasHeader && (
      <Sheet.Header>
        <Sheet.Title>{title}</Sheet.Title>
        <Sheet.Description>{description}</Sheet.Description>
      </Sheet.Header>
    )}
    {hasBody ? <Sheet.Body>{body}</Sheet.Body> : body}
    {hasFooter && (
      <Sheet.Footer isCompact={isCompact}>
        {footerItems &&
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
    {hasClose && <Sheet.Close onClick={onClick} />}
  </Sheet>
);

interface IArgs extends ISheetComponentProps {
  debug: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SheetStory: Story<IArgs> = ({
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
      focusVisibleRef={null}
      theme={
        ((parentTheme: DefaultTheme) => ({
          ...parentTheme,
          rtl: parentTheme.rtl ? args.placement === 'start' : args.placement !== 'start'
        })) as unknown as IGardenTheme
      }
    >
      <Field>
        <Toggle checked={args.isOpen} onChange={onChange}>
          <Label hidden>Sheet</Label>
        </Toggle>
      </Field>
    </ThemeProvider>
    <Grid debug={debug} gutters={false} style={{ marginTop: 20 }}>
      <Row style={{ height: 'calc(100vh - 120px)' }} justifyContent={args.placement || 'end'}>
        <Col size="auto" style={{ maxHeight: '100%' }}>
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
        </Col>
      </Row>
    </Grid>
  </>
);
