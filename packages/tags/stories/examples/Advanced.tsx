/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tag } from '@zendeskgarden/react-tags';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { FauxInput } from '@zendeskgarden/react-forms';

const tags = [
  'veggies es bonus',
  'beet greens corn soko endive',
  'shallot courgette tatsoi pea sprouts',
  'cauliflower',
  'turnip yarrow ricebean rutabaga',
  'celery quandong swiss chard chicory earthnut pea potato',
  'grape wattle seed'
];

interface IAdvancedStoryProps {
  size: 'small' | 'medium' | 'large';
  isPill: boolean;
  includeAvatar: boolean;
  includeClose: boolean;
  width: number;
}

export const Advanced: Story<IAdvancedStoryProps> = ({
  size,
  isPill,
  includeAvatar,
  includeClose,
  width
}) => {
  const fauxInputMinWidth = useMemo(() => {
    let baseWidth = 88;

    if (size === 'small') {
      baseWidth = 34;
    } else if (size === 'medium') {
      baseWidth = 54;
    }

    return baseWidth + 36;
  }, [size]);

  return (
    <Grid>
      <Row>
        <Col md={6} offsetMd={3}>
          <FauxInput
            isCompact
            style={{
              overflow: 'hidden',
              width: `${width}%`,
              minWidth: fauxInputMinWidth
            }}
          >
            {tags.map((tag, index) => (
              <Tag key={index} isPill={isPill} size={size} style={{ margin: 2 }} tabIndex={0}>
                {includeAvatar && (
                  <Tag.Avatar>
                    <img alt="" src={`images/avatar-${(index % 7) + 1}.png`} />
                  </Tag.Avatar>
                )}
                <span>{tag}</span>
                {includeClose && <Tag.Close onClick={() => action(`Delete "${tag}" tag`)} />}
              </Tag>
            ))}
          </FauxInput>
        </Col>
      </Row>
    </Grid>
  );
};

Advanced.args = {
  width: 100,
  size: 'medium',
  isPill: false,
  includeAvatar: false,
  includeClose: false
};

Advanced.argTypes = {
  width: {
    name: 'Width (%)',
    control: {
      type: 'range',
      min: 25,
      max: 100,
      step: 5
    }
  },
  size: {
    name: 'Size',
    control: {
      type: 'select',
      options: ['small', 'medium', 'large']
    }
  },
  isPill: {
    name: 'Pill'
  },
  includeAvatar: {
    name: 'Include `Tag.Avatar`'
  },
  includeClose: {
    name: 'Include `Tag.Close`'
  }
};

Advanced.parameters = {
  docs: {
    storyDescription: `
The following example shows how a Tag can be used together with a child
span in order to handle truncation. Use the slider below to change the
width of the text field container. Text within the tags will truncate with
an ellipsis based on the available container width.
      `
  }
};
