/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useRef } from 'react';
import { useTheme } from 'styled-components';

import {
  Avatar,
  Button,
  Grid,
  IconButton,
  ITooltipDialogProps,
  TooltipDialog
} from '../../../src/index';
import { getColor } from '../../../src/theming/utils/getColor';

const MODAL_PLACEMENT = [
  'top-start',
  'top',
  'top-end',
  'bottom-start',
  'bottom',
  'bottom-end'
] as const;

interface IArgs extends ITooltipDialogProps {
  count: number;
  handleClick: (ref?: HTMLElement | null) => void;
  hasBody: boolean;
  body: string;
  hasClose: boolean;
  hasFooter: boolean;
  hasTitle: boolean;
  title: string;
  tag: string;
  closeAriaLabel: string;
  dialogAriaLabel: string;
}

export const TooltipDialogStory = ({
  count,
  handleClick,
  hasBody,
  body,
  hasClose,
  hasFooter,
  hasTitle,
  title,
  tag,
  closeAriaLabel,
  dialogAriaLabel,
  ...args
}: IArgs) => {
  const refs = useRef<(HTMLElement | null | undefined)[]>([]);
  const current = refs.current.indexOf(args.referenceElement);
  const theme = useTheme();
  const isLast = current === refs.current.length - 1;

  // Using `aria-label={undefined}` when `hasTitle` is `true` appears to
  // void the fallback value in Storybook, resulting in no rendered attribute
  const ariaProp: Record<string, any> = hasTitle
    ? {}
    : {
        'aria-label': dialogAriaLabel
      };

  return (
    <>
      <TooltipDialog {...args} placement={args.placement || MODAL_PLACEMENT[current]} {...ariaProp}>
        {!!hasTitle && <TooltipDialog.Title tag={tag}>{title}</TooltipDialog.Title>}
        {!!hasBody && <TooltipDialog.Body>{body}</TooltipDialog.Body>}
        {!!hasFooter && (
          <TooltipDialog.Footer>
            {current > 0 && (
              <TooltipDialog.FooterItem>
                <Button size="small" isBasic onClick={() => handleClick(refs.current[current - 1])}>
                  Previous
                </Button>
              </TooltipDialog.FooterItem>
            )}
            {current >= 0 && (
              <TooltipDialog.FooterItem>
                <Button
                  isPrimary
                  size="small"
                  onClick={() => handleClick(isLast ? null : refs.current[current + 1])}
                >
                  {isLast ? 'Finish' : 'Next'}
                </Button>
              </TooltipDialog.FooterItem>
            )}
          </TooltipDialog.Footer>
        )}
        {!!hasClose && <TooltipDialog.Close aria-label={closeAriaLabel} />}
      </TooltipDialog>
      <Grid>
        <Grid.Row style={{ height: 'calc(100vh - 200px)' }}>
          {[...Array(count)].map((_, index) => (
            <Grid.Col key={index} md={4} textAlign="center" alignSelf="center">
              <IconButton
                ref={element => {
                  refs.current[index] = element;
                }}
                onClick={event => handleClick(event.currentTarget)}
              >
                <Avatar foregroundColor={getColor({ variable: 'foreground.default', theme })}>
                  <Avatar.Text>{index + 1}</Avatar.Text>
                </Avatar>
              </IconButton>
            </Grid.Col>
          ))}
        </Grid.Row>
      </Grid>
    </>
  );
};
