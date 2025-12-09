/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { ISheetProps } from '../../types';
import { Title } from './components/Title';
import { Description } from './components/Description';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { FooterItem } from './components/FooterItem';
import { Close } from './components/Close';
declare const SheetComponent: React.ForwardRefExoticComponent<ISheetProps & React.RefAttributes<HTMLElement>>;
/**
 * @extends HTMLAttributes<HTMLElement>
 */
export declare const Sheet: typeof SheetComponent & {
    Body: typeof Body;
    Close: typeof Close;
    Description: typeof Description;
    Footer: typeof Footer;
    FooterItem: typeof FooterItem;
    Header: typeof Header;
    Title: typeof Title;
};
export {};
