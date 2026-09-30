/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { SplitButton } from './SplitButton';
import { Button } from './Button';
import { ChevronButton } from './ChevronButton';
import { IconButton } from './IconButton';
import { ToggleButton } from './ToggleButton';
import { ToggleIconButton } from './ToggleIconButton';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';

describe('SplitButton', () => {
  it('renders child buttons as expected', () => {
    const { getByTestId } = render(
      <SplitButton>
        <Button data-test-id="button">Test</Button>
        <ChevronButton data-test-id="chevron" />
        <ToggleButton data-test-id="toggle">Test</ToggleButton>
        <ToggleIconButton data-test-id="toggle-icon">
          <TestIcon />
        </ToggleIconButton>
      </SplitButton>
    );

    expect(getByTestId('button')).not.toBeNull();
    expect(getByTestId('chevron')).not.toBeNull();
  });

  describe('variant props', () => {
    /* Styled class names are derived from the generated CSS, so equal class
       names mean the segments are styled identically. */
    const renderSegments = (split: React.ReactElement) => {
      const { getByTestId, unmount } = render(split);
      const classNames = {
        button: getByTestId('button').className,
        chevron: getByTestId('chevron').className,
        icon: getByTestId('icon').className,
        toggle: getByTestId('toggle').className,
        toggleIcon: getByTestId('toggle-icon').className
      };

      unmount();

      return classNames;
    };

    const variants = [
      { isPrimary: true },
      { isDanger: true },
      { isNeutral: true },
      { isBasic: true },
      { isPill: true },
      { size: 'small' },
      { size: 'large' },
      { isPrimary: true, isDanger: true, size: 'small' }
    ] as const;

    it.each(variants)('styles its segments as %o by default', variant => {
      const inherited = renderSegments(
        <SplitButton {...variant}>
          <Button data-test-id="button">Test</Button>
          <IconButton data-test-id="icon">
            <TestIcon />
          </IconButton>
          <ChevronButton data-test-id="chevron" />
          <ToggleButton data-test-id="toggle">Test</ToggleButton>
          <ToggleIconButton data-test-id="toggle-icon">
            <TestIcon />
          </ToggleIconButton>
        </SplitButton>
      );
      const explicit = renderSegments(
        <SplitButton>
          <Button data-test-id="button" {...variant}>
            Test
          </Button>
          <IconButton data-test-id="icon" {...variant}>
            <TestIcon />
          </IconButton>
          <ChevronButton data-test-id="chevron" {...variant} />
          <ToggleButton data-test-id="toggle" {...variant}>
            Test
          </ToggleButton>
          <ToggleIconButton data-test-id="toggle-icon" {...variant}>
            <TestIcon />
          </ToggleIconButton>
        </SplitButton>
      );

      expect(inherited).toStrictEqual(explicit);
    });

    it('lets explicit segment props win', () => {
      const overridden = renderSegments(
        <SplitButton isPrimary size="small">
          <Button data-test-id="button" isPrimary={false} size="large">
            Test
          </Button>
          <IconButton data-test-id="icon" isPrimary={false} size="large">
            <TestIcon />
          </IconButton>
          <ChevronButton data-test-id="chevron" isPrimary={false} size="large" />
          <ToggleButton data-test-id="toggle" isPrimary={false} size="large">
            Test
          </ToggleButton>
          <ToggleIconButton data-test-id="toggle-icon" isPrimary={false} size="large">
            <TestIcon />
          </ToggleIconButton>
        </SplitButton>
      );
      const explicit = renderSegments(
        <SplitButton>
          <Button data-test-id="button" size="large">
            Test
          </Button>
          <IconButton data-test-id="icon" size="large">
            <TestIcon />
          </IconButton>
          <ChevronButton data-test-id="chevron" size="large" />
          <ToggleButton data-test-id="toggle" size="large">
            Test
          </ToggleButton>
          <ToggleIconButton data-test-id="toggle-icon" size="large">
            <TestIcon />
          </ToggleIconButton>
        </SplitButton>
      );

      expect(overridden).toStrictEqual(explicit);
    });

    it('keeps segment defaults when no variant is set', () => {
      const unset = renderSegments(
        <SplitButton>
          <Button data-test-id="button">Test</Button>
          <IconButton data-test-id="icon">
            <TestIcon />
          </IconButton>
          <ChevronButton data-test-id="chevron" />
          <ToggleButton data-test-id="toggle">Test</ToggleButton>
          <ToggleIconButton data-test-id="toggle-icon">
            <TestIcon />
          </ToggleIconButton>
        </SplitButton>
      );
      const defaults = renderSegments(
        <SplitButton>
          <Button data-test-id="button" size="medium">
            Test
          </Button>
          <IconButton data-test-id="icon" isBasic isPill size="medium">
            <TestIcon />
          </IconButton>
          <ChevronButton data-test-id="chevron" isBasic={false} isPill={false} size="medium" />
          <ToggleButton data-test-id="toggle" size="medium">
            Test
          </ToggleButton>
          <ToggleIconButton data-test-id="toggle-icon" isBasic isPill size="medium">
            <TestIcon />
          </ToggleIconButton>
        </SplitButton>
      );

      expect(unset).toStrictEqual(defaults);
    });

    it('does not pass variant props to its element', () => {
      const { container } = render(
        <SplitButton isPrimary isDanger isNeutral isBasic isPill size="small">
          <Button>Test</Button>
        </SplitButton>
      );
      const element = container.firstChild as HTMLElement;

      ['isprimary', 'isdanger', 'isneutral', 'isbasic', 'ispill', 'size'].forEach(attribute => {
        expect(element).not.toHaveAttribute(attribute);
      });
    });

    it('does not style buttons outside it', () => {
      const { getByTestId } = render(
        <>
          <SplitButton isPrimary>
            <Button data-test-id="inside">Test</Button>
          </SplitButton>
          <Button data-test-id="outside">Test</Button>
          <Button data-test-id="reference" isPrimary>
            Test
          </Button>
        </>
      );

      expect(getByTestId('outside').className).not.toBe(getByTestId('reference').className);
    });
  });
});
