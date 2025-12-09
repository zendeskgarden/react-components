/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { Content } from './components/Content';
import { Grip } from './components/Grip';
import { IDraggableProps } from '../../types';
declare const DraggableComponent: React.ForwardRefExoticComponent<IDraggableProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Draggable: typeof DraggableComponent & {
    Grip: typeof Grip;
    Content: typeof Content;
};
export {};
