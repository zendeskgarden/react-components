/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import styled, { useTheme } from 'styled-components';
import { getColorV8 } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import { Dots } from '@zendeskgarden/react-loaders';
import { Code, Paragraph, Span } from '@zendeskgarden/react-typography';
import PALETTE_V8 from '../../../src/elements/palette/v8';

const StyledColor = styled.div`
  display: inline-block;
  border-radius: ${p => p.theme.borderRadii.md};
  width: 100px;
  height: 100px;
`;

export const GetColorV8Story: StoryFn = () => {
  const theme = useTheme();
  const [initialColor, setInitialColor] = useState(
    getColorV8(theme.colors.base === 'dark' ? 'background' : 'foreground', 600, theme)
  );
  const [backgroundColor, setBackgroundColor] = useState(initialColor);
  const [perf, setPerf] = useState({ milliseconds: 0, calls: 0 });
  const BASELINE_NOCACHE = 123;
  const BASELINE_CACHE = 107;
  let CALLS = 0;

  const updateColor = (color?: string) => {
    setTimeout(() => {
      setBackgroundColor(color);
    }, 1);

    CALLS++;
  };

  const hues = Object.keys(PALETTE_V8).filter(
    hue => hue !== 'product' && typeof (PALETTE_V8 as any)[hue] === 'object'
  );
  const shades = [100, 200, 300, 400, 500, 600, 700, 800];
  const transparencies = Object.keys(theme.opacity);

  const testGetColor = () => {
    hues.forEach(hue => {
      updateColor(getColorV8(hue, 600));

      shades.forEach(shade => {
        updateColor(getColorV8(hue, shade));

        transparencies.forEach(transparency => {
          updateColor(getColorV8(hue, shade, theme, theme.opacity[parseInt(transparency, 10)]));
        });
      });
    });
  };

  const handleClick = () => {
    setPerf({ milliseconds: 0, calls: 0 });

    const startTime = performance.now();

    testGetColor();
    updateColor(initialColor);

    const endTime = performance.now();
    const milliseconds = Math.round(endTime - startTime);

    setPerf({ milliseconds, calls: CALLS });
  };

  useEffect(() => {
    const color = getColorV8(
      theme.colors.base === 'dark' ? 'background' : 'foreground',
      600,
      theme
    );

    setInitialColor(color);
    setBackgroundColor(color);
  }, [theme]);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Col>
          <Button disabled={backgroundColor !== initialColor} onClick={handleClick}>
            {backgroundColor === initialColor ? (
              'Start'
            ) : (
              <Dots delayMS={0} aria-label="Start" size={theme.space.base * 5} />
            )}
          </Button>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row style={{ marginTop: 20 }}>
        <Grid.Col>
          <StyledColor style={{ backgroundColor }} />
          <div style={{ marginTop: 12 }}>
            <Span isMonospace>{backgroundColor}</Span>
          </div>
        </Grid.Col>
      </Grid.Row>
      {perf.milliseconds > 1 && backgroundColor === initialColor && (
        <Grid.Row style={{ marginTop: 20 }}>
          <Grid.Col>
            <Paragraph>
              Performed {perf.calls} <Code>getColorV8</Code> calls in {perf.milliseconds}{' '}
              milliseconds.
            </Paragraph>
            <Paragraph>
              Resulted in a{' '}
              {`${Math.floor(((BASELINE_NOCACHE - perf.milliseconds) / BASELINE_NOCACHE) * 100)}% (uncached) `}
              and{' '}
              {`${Math.floor(((BASELINE_CACHE - perf.milliseconds) / BASELINE_CACHE) * 100)}% (cached) `}
              improvement over the <Code>JSON.stringify</Code> memoization baseline.
            </Paragraph>
          </Grid.Col>
        </Grid.Row>
      )}
    </Grid>
  );
};
