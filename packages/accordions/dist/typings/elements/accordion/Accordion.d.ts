/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IAccordionProps } from '../../types';
import { Section } from './components/Section';
import { Header } from './components/Header';
import { Label } from './components/Label';
import { Panel } from './components/Panel';
declare const AccordionComponent: React.ForwardRefExoticComponent<IAccordionProps<any> & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Accordion: typeof AccordionComponent & {
    Header: typeof Header;
    Label: typeof Label;
    Panel: typeof Panel;
    Section: typeof Section;
};
export {};
