/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { ITooltipDialogProps } from '../../types';
import { Title } from './Title';
import { Body } from './Body';
import { Close } from './Close';
import { Footer } from './Footer';
import { FooterItem } from './FooterItem';
/**
 * 1. When content is kept mounted we must manually focus on re-open
 * 2. Hide only at 'exited' so exit animations finish
 *    and floating-ui sizing/focus logic remain valid during 'exiting'.
 *    Earlier hiding would cut animation and risk focus/layout issues.
 */
declare const TooltipDialogComponent: React.ForwardRefExoticComponent<ITooltipDialogProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const TooltipDialog: typeof TooltipDialogComponent & {
    Body: typeof Body;
    Close: typeof Close;
    Footer: typeof Footer;
    FooterItem: typeof FooterItem;
    Title: typeof Title;
};
export {};
