/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { MouseEventHandler, useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { useTheme } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import { ITooltipDialogProps, TooltipDialog } from '@zendeskgarden/react-modals';

interface IArgs extends Omit<ITooltipDialogProps, 'children' | 'referenceElement'> {
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

export const TooltipDialogPopupStory: StoryFn<IArgs> = ({
  onClose,
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
  const theme = useTheme();
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [referenceElement, setReferenceElement] = useState<HTMLElement>();
  const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = event =>
    setReferenceElement(event.currentTarget);
  const handleDialogClose: ITooltipDialogProps['onClose'] = event => {
    setReferenceElement(undefined);
    onClose?.(event);
  };
  const handlePopupClose = () => {
    setIsPopupVisible(false);
    setReferenceElement(undefined);
  };

  // Using `aria-label={undefined}` when `hasTitle` is `true` appears to
  // void the fallback value in Storybook, resulting in no rendered attribute.
  const ariaProp: Record<string, any> = hasTitle
    ? {}
    : {
        'aria-label': dialogAriaLabel
      };

  const popupBackground = getColor({ theme, variable: 'background.raised' });
  const popupBorder = getColor({ theme, variable: 'border.default' });
  const popupText = getColor({ theme, variable: 'foreground.subtle' });
  const popupShadow = theme.shadows.lg(
    `${theme.space.base * 5}px`,
    `${theme.space.base * 8}px`,
    getColor({ theme, variable: 'shadow.medium' })
  );

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', position: 'relative' }}>
      {isPopupVisible ? null : (
        <Button isPrimary onClick={() => setIsPopupVisible(true)}>
          Open popup
        </Button>
      )}
      {isPopupVisible ? (
        <>
          <div
            style={{
              position: 'fixed',
              right: `${theme.space.base * 6}px`,
              bottom: `${theme.space.base * 6}px`,
              width: `min(320px, calc(100vw - ${theme.space.base * 12}px))`,
              borderRadius: theme.borderRadii.md,
              border: `${theme.borders.sm} ${popupBorder}`,
              backgroundColor: popupBackground,
              padding: `${theme.space.base * 4}px`,
              boxShadow: popupShadow,
              zIndex: 300,
              display: 'grid',
              gap: `${theme.space.base * 3}px`
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong>Popup Preview</strong>
              <Button size="small" isBasic onClick={handlePopupClose}>
                Close popup
              </Button>
            </div>
            <p style={{ margin: 0, color: popupText }}>
              Open the TooltipDialog from the left or right edge trigger.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: theme.space.base * 2
              }}
            >
              <Button size="small" isBasic onClick={handleTriggerClick}>
                Left edge
              </Button>
              <Button size="small" isPrimary onClick={handleTriggerClick}>
                Right edge
              </Button>
            </div>
          </div>
          <TooltipDialog
            {...args}
            onClose={handleDialogClose}
            referenceElement={referenceElement}
            {...ariaProp}
          >
            {!!hasTitle && <TooltipDialog.Title tag={tag}>{title}</TooltipDialog.Title>}
            {!!hasBody && <TooltipDialog.Body>{body}</TooltipDialog.Body>}
            {!!hasFooter && (
              <TooltipDialog.Footer>
                <TooltipDialog.FooterItem>
                  <Button isPrimary size="small" onClick={() => setReferenceElement(undefined)}>
                    Dismiss
                  </Button>
                </TooltipDialog.FooterItem>
              </TooltipDialog.Footer>
            )}
            {!!hasClose && <TooltipDialog.Close aria-label={closeAriaLabel} />}
          </TooltipDialog>
        </>
      ) : null}
    </div>
  );
};
