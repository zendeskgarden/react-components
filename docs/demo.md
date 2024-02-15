# Garden demos

Garden leverages [Storybook](https://storybook.js.org/) for generating component
demos with story controls. Run `npm start` to build and serve package demos in
development mode (with hot reloading).

The development goal for demos is to render components in isolation with the
least amount of structural scaffolding together with the greatest amount of
control for content and flexibility. Along with global toolbar items (preview
size, locale direction, CSS Bedrock, etc), controls should stress every aspect
of a component's layout and behavior.

## Best practice

The following list of dos and don'ts outline demo code expectations.

### Do this

- Expose controls for all essentials – inherent props, conditional subcomponent
  renders, child content
- Allow natural component layout – full width for block, partial width for inline
- Use the Garden `Grid` to manage layout for components that respond to
  placement values (start, end, top, bottom, etc)
- Rely on `useArgs` from Storybook's client API in order to keep component state
  connected with it's associated Storybook control

### Not this

- Avoid `styled-components`. The addition of demo CSS is an indicator that the
  underlying component may not offer comprehensive styling.
- Refrain from adding component documentation. The Storybook demos are not a
  substitute for the [garden.zendesk.com](https://garden.zendesk.com/) website.
  The website is the source of truth for component documenation.
- Avoid `useState`; prefer Storybook `useArgs` instead
- Do not write "Default" vs "Advanced" stories. A well-written component story
  will render as expected with defaults and offer controls to push into advanced
  component capabilities. See the [patterns](#patterns) section below for cases
  that extend beyond the consideration of an isolated component.
- Do not use numeric file naming. By following the [naming](#naming) conventions
  listed below, component stories will be naturally sorted alphabetically.

## Conventions

Stick to the following conventions for authoring demo stories that are
consistent with the existing codebase. You may find that running `npm run new`
is helpful for auto-generating component demo scaffolding.

### Structure

- Place MDX stories under the package `demo` directory.
- All `Story` TSX files are placed under a `demo/stories` directory.
- Move all boilerplate data constants (i.e. control data for a component's
  `children`) into `demo/stories/data.ts`
- Capture all types and interfaces specific to story data under
  `demo/stories/types.ts`
- If a package has patterns (see [section](#patterns) below), tuck all pattern
  demo code under a `demo/~patterns` directory – repeating the directory structure
  as needed for `Story` TSX, `data.ts`, and `types.ts` files noted above. Prefix
  with a tilde to ensure these stories are ordered last.

### Meta

Story meta appears in the MDX file with the following structure:

```mdx
<Meta
  title="Packages/Package/Component"
  component={Component}
  subcomponents={{...}} />
```

- The `Component` is the element-level component that this story is focused on
- Use the optional `subcomponents` object whenever subcomponents exist in
  support of the main element component. Keep this list in alphabetical order.

### ArgsTable

The next simple section of MDX generates prop tables for the component and
subcomponents identied by the story meta. These tables can be viewed under the
Storybook "Docs" tab.

```mdx
# API

<ArgsTable />
```

### Canvas story (or stories)

The canvas story specifies a name, args, argTypes, parameters, and the rendered
story itself. In its most basic form:

```mdx
# Demo

<Canvas>
  <Story name="Component">{args => <Component {...args} />}</Story>
</Canvas>
```

Often a single story is enough to fulfill the development goal for an isolated
and flexible component demo. But sometimes, in the case of uncontrolled vs.
controlled, there is a need to render multiple stories. In this case, the basic
MDX form is modified to be:

```mdx
# Demo

## Uncontrolled

<Canvas>
  <Story name="Uncontrolled">{args => <ComponentStory {...args} />}</Story>
</Canvas>

## Controlled

<Canvas>
  <Story name="Controlled">
    {args => {
      const updateArgs = useArgs()[1];
      const handleEvent = argName => updateArgs({ argName });
      return <ComponentStory {...args} onEvent={handleEvent} />;
    }}
  </Story>
</Canvas>
```

Note how the `ComponentStory` is reused for both canvas stories. See
[Story](#story) below for additional details. Be sure to move common `args`,
`argTypes`, and `parameters` under the MDX `<Meta>` rather than repeating these
under each story.

#### Story `args`

- Storybook automatically provides main component props as `args`. Usually there
  is no need to specify these values (double-check for missing prop controls). One
  notable exception is for Garden boolean prop values that default to `true`. In
  this case, the `args` should be specified to match.
- Select smart defaults for the remaining subcomponent or "Story" `args`.
  Sometimes the best choice is to leave an arg undefined.

#### Story `argTypes`

Standard convention for `argTypes` exists across dozens of existing stories.
Study demo code for details. Most importantly, main component props that are
_not_ auto-generated must be properly categorized. The two acceptable story
categories are:

- Subcomponent. All subcomponent props (including `children`) are specified
  under the associated subcomponent name.
- "Story". This category includes all ancillary controls that are needed to
  stress the full flexibility of the rendered component(s).

#### Story `parameters`

Currently, story `parameters` are used to link to the Figma page(s) or frame(s)
that best exhibits associated component designs. Note that the parameter URLs
are internal-only and point to designs that exist in the main Garden Figma
branch. Therefore, `parameters` may need to be added as a follow-on for new
components.

### Story

A `Story` type component is the best way to develop demo code for non-trivial
Garden components. Doing so removes complexity of coding in MDX, placing
component rendering and application of story args into TypeScript where code can
be properly maintained. In its basic form, a `Story` looks like this:

```tsx
import React from 'react';
import { Story } from '@storybook/react';
import { Component, IComponentProps } from '@zendeskgarden/react-package';

interface IArgs extends IComponentProps {
  /* Subcomponent and "Story" arg definitions go here */
}

export const ComponentStory: Story<IArgs> = args => <Component {...args} />;
```

Take time to ensure Story `args` and `argTypes` are defined well. Often you will
find that the majority of demo development time is spent on `args` and
`argTypes` and the `Story` itself essentially falls out of the goal to
demonstrate component flexibility in isolation.

## Naming

- Follow the existing Storybook naming hierarcy:
  `Packages/{{PackageName}}/{{ComponentName}}`
- The first story in every package demo should be a `#readme.stories.mdx` file
  that renders the package's README.md. Prefix with a hashtag to ensure this story
  is ordered first.
- Subsequent component story files are named `componentName.stories.mdx`
  (camelCase)
- Use Garden's standard prop naming for story args (i.e. isXxx/hasXxx for
  boolean args), but use `argTypes` to rename with subcomponent notation. For
  example:

```js
args={{
  hasHint: true
}}
argTypes={{
  hasHint: { name: Hint, table: { category: 'Story' } }
}}
```

## Patterns

A pattern is a demo story that highlights a component's ability to work together
with other Garden components or in conjunction with external libraries.
Oftentimes, a pattern ends up violating the best practice of duplicating example
documentation that belongs on the website. However, due to component development
sequencing or a need to persist a visual test, a pattern can be a helpful tool
for (temporarily) demonstrating component layout or behavior that supercedes the
isolation of the component itself.

Follow [structure](#structure) conventions to keep patterns collected in a
(potentially) short-lived location. It is the component developer's
responsibility to track example pattern movement to the website and subsequently
remove the pattern from Storybook – keeping the website as the focal source of
truth.
