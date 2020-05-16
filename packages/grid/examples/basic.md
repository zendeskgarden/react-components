The following example provides controls that can be used to manipulate basic
element properties and view their affect upon the grid. In most cases, a
property control will apply to all elements (`Row` and `Col`) in question (one
exception is the "Offset" control which is only applied to the first `Col` in
every `Row`). While this is effective for a basic example, it doesn't come
close to demonstrating the full extent of grid functionality as properties
may be customized on a per-`Row` and per-`Col` basis. Be sure to explore the
[advanced](#advanced) examples below for added detail around `Grid`
capabilities.

Several of the controls are marked as being connected to responsive
properties. A responsive grid property has variants that apply to supported
[theming](https://zendeskgarden.github.io/react-components/theming/#default_theme)
breakpoints (`xs`, `sm`, `md`, `lg`, and `xl`) – see element props for
details. When a "Viewport breakpoint" is selected below, all of the
associated properties will be set to operate against that screen size. Again,
while this simplifies the basic demo, it hardly shows the power of the fully
responsive grid framework where `Row` and `Col` elements can set independent
responsive properties at multiple breakpoints.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Input, Label, Range } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  alignItems: 'default',
  breakpoint: 'default',
  debug: true,
  columns: 12,
  gutters: 'md',
  justifyContent: 'default',
  rows: 1,
  textAlign: 'default',
  offset: 0,
  size: 0,
  wrap: 'default'
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 180 }}>
        <Field>
          <Toggle
            checked={state.debug}
            onChange={event => setState({ debug: event.target.checked })}
          >
            <Label>Debug</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Label>Rows ({state.rows})</Label>
          <Range
            min={1}
            max={10}
            onChange={event => setState({ rows: parseInt(event.target.value, 10) })}
            value={state.rows}
          />
        </Field>
        <Dropdown selectedItem={state.columns} onSelect={columns => setState({ columns })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Columns</SelectLabel>
            <Select isCompact>{state.columns}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value={4}>4</Item>
            <Item value={8}>8</Item>
            <Item value={12}>12</Item>
            <Item value={16}>16</Item>
            <Item value={24}>24</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.gutters} onSelect={gutters => setState({ gutters })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Gutters</SelectLabel>
            <Select isCompact>{state.gutters}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="none">none</Item>
            <Item value="xs">xs</Item>
            <Item value="sm">sm</Item>
            <Item value="md">md</Item>
            <Item value="lg">lg</Item>
            <Item value="xl">xl</Item>
          </Menu>
        </Dropdown>
        <Field className="u-mt-xs">
          <Label>
            Size ({state.size === 0 ? 'none' : state.size === -1 ? 'auto' : state.size}) *
          </Label>
          <Range
            min={-1}
            max={state.columns}
            onChange={event => setState({ size: parseInt(event.target.value, 10) })}
            value={state.size}
          />
        </Field>
        <Dropdown
          selectedItem={state.justifyContent}
          onSelect={justifyContent => setState({ justifyContent })}
        >
          <SelectField className="u-mt-xs">
            <SelectLabel>Justify content (&lt;Row&gt;) *</SelectLabel>
            <Select isCompact>{state.justifyContent}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="default">default</Item>
            <Item value="start">start</Item>
            <Item value="end">end</Item>
            <Item value="center">center</Item>
            <Item value="between">between</Item>
            <Item value="around">around</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.alignItems} onSelect={alignItems => setState({ alignItems })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Align items (&lt;Row&gt;) *</SelectLabel>
            <Select isCompact>{state.alignItems}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="default">default</Item>
            <Item value="start">start</Item>
            <Item value="end">end</Item>
            <Item value="center">center</Item>
            <Item value="baseline">baseline</Item>
            <Item value="stretch">stretch</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.wrap} onSelect={wrap => setState({ wrap })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Wrap (&lt;Row&gt;) *</SelectLabel>
            <Select isCompact>{state.wrap}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="default">default</Item>
            <Item value="wrap">wrap</Item>
            <Item value="nowrap">nowrap</Item>
            <Item value="wrap-reverse">wrap-reverse</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.textAlign} onSelect={textAlign => setState({ textAlign })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Text align (&lt;Col&gt;) *</SelectLabel>
            <Select isCompact>{state.textAlign}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="default">default</Item>
            <Item value="start">start</Item>
            <Item value="end">end</Item>
            <Item value="center">center</Item>
            <Item value="justify">justify</Item>
          </Menu>
        </Dropdown>
        <Field className="u-mt-xs">
          <Label>Col 1 offset ({state.offset.toString() === '0' ? 'none' : state.offset}) *</Label>
          <Range
            disabled={state.columns - (state.size > 0 ? state.size : 1) <= 0}
            max={state.columns - (state.size > 0 ? state.size : 1)}
            onChange={event => setState({ offset: event.target.value })}
            value={state.offset}
          />
        </Field>
        <Dropdown selectedItem={state.breakpoint} onSelect={breakpoint => setState({ breakpoint })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Viewport breakpoint</SelectLabel>
            <Select isCompact>{state.breakpoint}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="default">default (none)</Item>
            <Item value="xs">xs (>= 0px)</Item>
            <Item value="sm">sm (>= 576px)</Item>
            <Item value="md">md (>= 768px)</Item>
            <Item value="lg">lg (>= 992px)</Item>
            <Item value="xl">xl (>= 1200px)</Item>
          </Menu>
        </Dropdown>
      </Well>
      <p>
        * controls a responsive property based on the selected breakpoint (minimum viewport width)
      </p>
    </Col>
    <Col size="8">
      <div className="u-mt">
        <Grid
          columns={state.columns}
          gutters={state.gutters === 'none' ? false : state.gutters}
          debug={state.debug}
        >
          {Array(state.rows)
            .fill()
            .map((_, index) => (
              <Row
                key={index}
                alignItems={
                  state.breakpoint === 'default' && state.alignItems !== 'default'
                    ? state.alignItems
                    : undefined
                }
                alignItemsXs={
                  state.breakpoint === 'xs' && state.alignItems !== 'default'
                    ? state.alignItems
                    : undefined
                }
                alignItemsSm={
                  state.breakpoint === 'sm' && state.alignItems !== 'default'
                    ? state.alignItems
                    : undefined
                }
                alignItemsMd={
                  state.breakpoint === 'md' && state.alignItems !== 'default'
                    ? state.alignItems
                    : undefined
                }
                alignItemsLg={
                  state.breakpoint === 'lg' && state.alignItems !== 'default'
                    ? state.alignItems
                    : undefined
                }
                alignItemsXl={
                  state.breakpoint === 'xl' && state.alignItems !== 'default'
                    ? state.alignItems
                    : undefined
                }
                justifyContent={
                  state.breakpoint === 'default' && state.justifyContent !== 'default'
                    ? state.justifyContent
                    : undefined
                }
                justifyContentXs={
                  state.breakpoint === 'xs' && state.justifyContent !== 'default'
                    ? state.justifyContent
                    : undefined
                }
                justifyContentSm={
                  state.breakpoint === 'sm' && state.justifyContent !== 'default'
                    ? state.justifyContent
                    : undefined
                }
                justifyContentMd={
                  state.breakpoint === 'md' && state.justifyContent !== 'default'
                    ? state.justifyContent
                    : undefined
                }
                justifyContentLg={
                  state.breakpoint === 'lg' && state.justifyContent !== 'default'
                    ? state.justifyContent
                    : undefined
                }
                justifyContentXl={
                  state.breakpoint === 'xl' && state.justifyContent !== 'default'
                    ? state.justifyContent
                    : undefined
                }
                wrap={
                  state.breakpoint === 'default' && state.wrap !== 'default'
                    ? state.wrap
                    : undefined
                }
                wrapXs={
                  state.breakpoint === 'xs' && state.wrap !== 'default' ? state.wrap : undefined
                }
                wrapSm={
                  state.breakpoint === 'sm' && state.wrap !== 'default' ? state.wrap : undefined
                }
                wrapMd={
                  state.breakpoint === 'md' && state.wrap !== 'default' ? state.wrap : undefined
                }
                wrapLg={
                  state.breakpoint === 'lg' && state.wrap !== 'default' ? state.wrap : undefined
                }
                wrapXl={
                  state.breakpoint === 'xl' && state.wrap !== 'default' ? state.wrap : undefined
                }
              >
                {Array(state.columns)
                  .fill()
                  .map((_, index) => (
                    <Col
                      key={index}
                      offset={
                        index === 0 && state.breakpoint === 'default' && state.offset > 0
                          ? state.offset
                          : undefined
                      }
                      offsetXs={
                        index === 0 && state.breakpoint === 'xs' && state.offset > 0
                          ? state.offset
                          : undefined
                      }
                      offsetSm={
                        index === 0 && state.breakpoint === 'sm' && state.offset > 0
                          ? state.offset
                          : undefined
                      }
                      offsetMd={
                        index === 0 && state.breakpoint === 'md' && state.offset > 0
                          ? state.offset
                          : undefined
                      }
                      offsetLg={
                        index === 0 && state.breakpoint === 'lg' && state.offset > 0
                          ? state.offset
                          : undefined
                      }
                      offsetXl={
                        index === 0 && state.breakpoint === 'xl' && state.offset > 0
                          ? state.offset
                          : undefined
                      }
                      size={
                        state.breakpoint === 'default' && state.size > 0
                          ? state.size
                          : state.size === -1
                          ? 'auto'
                          : undefined
                      }
                      xs={
                        state.breakpoint === 'xs' && state.size > 0
                          ? state.size
                          : state.size === -1
                          ? 'auto'
                          : undefined
                      }
                      sm={
                        state.breakpoint === 'sm' && state.size > 0
                          ? state.size
                          : state.size === -1
                          ? 'auto'
                          : undefined
                      }
                      md={
                        state.breakpoint === 'md' && state.size > 0
                          ? state.size
                          : state.size === -1
                          ? 'auto'
                          : undefined
                      }
                      lg={
                        state.breakpoint === 'lg' && state.size > 0
                          ? state.size
                          : state.size === -1
                          ? 'auto'
                          : undefined
                      }
                      xl={
                        state.breakpoint === 'xl' && state.size > 0
                          ? state.size
                          : state.size === -1
                          ? 'auto'
                          : undefined
                      }
                      textAlign={
                        state.breakpoint === 'default' && state.textAlign !== 'default'
                          ? state.textAlign
                          : undefined
                      }
                      textAlignXs={
                        state.breakpoint === 'xs' && state.textAlign !== 'default'
                          ? state.textAlign
                          : undefined
                      }
                      textAlignSm={
                        state.breakpoint === 'sm' && state.textAlign !== 'default'
                          ? state.textAlign
                          : undefined
                      }
                      textAlignMd={
                        state.breakpoint === 'md' && state.textAlign !== 'default'
                          ? state.textAlign
                          : undefined
                      }
                      textAlignLg={
                        state.breakpoint === 'lg' && state.textAlign !== 'default'
                          ? state.textAlign
                          : undefined
                      }
                      textAlignXl={
                        state.breakpoint === 'xl' && state.textAlign !== 'default'
                          ? state.textAlign
                          : undefined
                      }
                    >
                      <div style={{ height: `${1 + 0.5 * index}em` }}>{`${index + 1}`}</div>
                    </Col>
                  ))}
              </Row>
            ))}
        </Grid>
      </div>
    </Col>
  </Row>
</Grid>;
```
