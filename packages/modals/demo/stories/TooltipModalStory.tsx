/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { Story } from '@storybook/react';
import { useTheme } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { Button, IconButton } from '@zendeskgarden/react-buttons';
import { Avatar } from '@zendeskgarden/react-avatars';
import { ITooltipModalProps, TooltipModal } from '@zendeskgarden/react-modals';

const PLACEMENT = ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'] as const;

interface IArgs extends ITooltipModalProps {
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

export const TooltipModalStory: Story<IArgs> = ({
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
}) => {
  const refs = useRef<(HTMLElement | null | undefined)[]>([]);
  const current = refs.current.indexOf(args.referenceElement);
  const theme = useTheme();

  // Using `aria-label={undefined}` when `hasTitle` is `true` appears to
  // void the fallback value in Storybook, resulting in no rendered attribute
  const ariaProp: Record<string, any> = hasTitle
    ? {}
    : {
        'aria-label': dialogAriaLabel
      };

  return (
    <>
      <TooltipModal {...args} placement={args.placement || PLACEMENT[current]} {...ariaProp}>
        {hasTitle && <TooltipModal.Title tag={tag}>{title}</TooltipModal.Title>}
        {hasBody && <TooltipModal.Body>{body}</TooltipModal.Body>}
        {hasFooter && (
          <TooltipModal.Footer>
            {current > 0 && (
              <TooltipModal.FooterItem>
                <Button size="small" isBasic onClick={() => handleClick(refs.current[current - 1])}>
                  Previous
                </Button>
              </TooltipModal.FooterItem>
            )}
            {current >= 0 && (
              <TooltipModal.FooterItem>
                <Button
                  isPrimary
                  size="small"
                  onClick={() =>
                    handleClick(
                      current === refs.current.length - 1 ? null : refs.current[current + 1]
                    )
                  }
                >
                  {current === refs.current.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </TooltipModal.FooterItem>
            )}
          </TooltipModal.Footer>
        )}
        {hasClose && <TooltipModal.Close aria-label={closeAriaLabel} />}
      </TooltipModal>
      <Grid>
        <Grid.Row style={{ height: 'calc(100vh - 80px)' }}>
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
