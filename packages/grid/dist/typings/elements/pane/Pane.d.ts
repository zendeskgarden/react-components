/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { Splitter } from './components/Splitter';
import { Content } from './components/Content';
import { SplitterButton } from './components/SplitterButton';
declare const PaneComponent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Pane: typeof PaneComponent & {
    Content: typeof Content;
    Splitter: typeof Splitter;
    SplitterButton: typeof SplitterButton;
};
export {};
