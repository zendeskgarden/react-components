/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { StoryFn } from '@storybook/react';
import styled, { useTheme } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import { Dots } from '@zendeskgarden/react-loaders';
import { Code, Paragraph } from '@zendeskgarden/react-typography';

const StyledColor = styled.div`
  display: inline-block;
  border-radius: ${p => p.theme.borderRadii.md};
  width: 100px;
  height: 100px;
`;

export const GetColorStory: StoryFn = () => {
  const theme = useTheme();
  const [initialColor, setInitialColor] = useState(
    getColor({ theme, variable: 'foreground.default' })
  );
  const [backgroundColor, setBackgroundColor] = useState(initialColor);
  const [perf, setPerf] = useState({ milliseconds: 0, calls: 0 });
  const BASELINE_NOCACHE = 2780;
  const BASELINE_CACHE = 2000;
  let CALLS = 0;

  const updateColor = (color: string) => {
    setTimeout(() => {
      setBackgroundColor(color);
    }, 1);

    CALLS++;
  };

  const variablesObject = theme.colors.variables[theme.colors.base];
  const variables = Object.keys(variablesObject) as (keyof typeof variablesObject)[];
  const hues = Object.keys(theme.palette).filter(hue => typeof theme.palette[hue] === 'object');
  const offsets = [-300, -200, -100, 100, 200, 300];
  const transparencies = Object.keys(theme.opacity);

  const testGetColor = () => {
    CALLS = 0;

    variables.forEach(variable => {
      const variableKeys = Object.keys(variablesObject[variable]);

      variableKeys.forEach(variableKey => {
        const parameters = { theme, variable: `${variable}.${variableKey}` };

        updateColor(getColor(parameters));

        transparencies.forEach(transparency => {
          updateColor(getColor({ ...parameters, transparency: parseInt(transparency, 10) }));
        });
      });
    });

    hues.forEach(hue => {
      updateColor(getColor({ theme, hue }));
      updateColor(getColor({ theme, hue, dark: { hue } }));
      updateColor(getColor({ theme, hue, light: { hue } }));

      const shades = Object.keys(theme.palette[hue]);

      shades.forEach(shade => {
        const parameters = { hue, shade: parseInt(shade, 10) };

        updateColor(getColor({ theme, ...parameters }));
        updateColor(getColor({ theme, hue, dark: parameters }));
        updateColor(getColor({ theme, hue, light: parameters }));

        offsets.forEach(offset => {
          updateColor(getColor({ theme, ...parameters, offset }));
          updateColor(getColor({ theme, hue, dark: { ...parameters, offset } }));
          updateColor(getColor({ theme, hue, light: { ...parameters, offset } }));
        });

        transparencies.forEach(_transparency => {
          const transparency = parseInt(_transparency, 10);

          updateColor(getColor({ theme, ...parameters, transparency }));
          updateColor(getColor({ theme, hue, dark: { ...parameters, transparency } }));
          updateColor(getColor({ theme, hue, light: { ...parameters, transparency } }));

          offsets.forEach(offset => {
            updateColor(getColor({ theme, ...parameters, transparency, offset }));
            updateColor(getColor({ theme, hue, dark: { ...parameters, transparency, offset } }));
            updateColor(getColor({ theme, hue, light: { ...parameters, transparency, offset } }));
          });
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
    const color = getColor({ theme, variable: 'foreground.default' });

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
          <div style={{ marginTop: 12 }}>{backgroundColor}</div>
        </Grid.Col>
      </Grid.Row>
      {perf.milliseconds > 10 && backgroundColor === initialColor && (
        <Grid.Row style={{ marginTop: 20 }}>
          <Grid.Col>
            <Paragraph>
              Performed {perf.calls} <Code>getColor</Code> calls in {perf.milliseconds}{' '}
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
