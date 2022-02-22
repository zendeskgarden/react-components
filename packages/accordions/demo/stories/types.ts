/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export interface IAccordionSection {
  headerLabel: string;
  panel: string;
}

export interface IStepperStep {
  label: string;
  content: string;
}

export interface ITimelineItem {
  title: string;
  description: string;
}
