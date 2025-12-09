/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { ITimelineProps } from '../../types';
import { Item } from '../timeline/components/Item';
import { Content } from '../timeline/components/Content';
import { OppositeContent } from '../timeline/components/OppositeContent';
declare const TimelineComponent: React.ForwardRefExoticComponent<ITimelineProps & React.RefAttributes<HTMLOListElement>>;
/**
 * @extends OlHTMLAttributes<HTMLOListElement>
 */
export declare const Timeline: typeof TimelineComponent & {
    Content: typeof Content;
    Item: typeof Item;
    OppositeContent: typeof OppositeContent;
};
export {};
