/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IModalProps } from '../types';
import { Body } from './Body';
import { Close } from './Close';
import { Footer } from './Footer';
import { FooterItem } from './FooterItem';
import { Header } from './Header';
export declare const ModalComponent: React.ForwardRefExoticComponent<IModalProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Modal: typeof ModalComponent & {
    Body: typeof Body;
    Close: typeof Close;
    Footer: typeof Footer;
    FooterItem: typeof FooterItem;
    Header: typeof Header;
};
