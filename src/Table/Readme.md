The Table component is a basic abstraction over [react-virtualized](https://bvaughn.github.io/react-virtualized/#/components/Table).  This library has many powerful features including:
- Virtual Scrolling
- Dynamic Resizing
- Render customization

We provide abstractions to enforce styling, user experience, navigation, and accessibility.

### Table
The main component acts as an abstraction of [react-virtualized Table component and accepts all valid Table props](https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md) as well those listed above.

For a simple table the only required property is an array of data. A more complete example of all options can be seen with the Kitchen Sink example below.

### Table.Column
This is a general purpose component to apply default cell and header styling. [All react-virtualized Column props are supported.](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md) By default all cells are truncated if space is limited.  You can disable this by applying a `truncated` prop.

Example:
```js
const data = [{name: 'Austin'}];

<Table.Column
    width={125}
    label='Name'
    dataKey='name' />
```

Column sorting is disabled by applying a `disableSort` prop.

### Table.CheckboxColumn
The CheckboxColumn is used to display/manage the selected state of your data.  It uses it's `dataKey` prop to map a unique identifier from each row of data.  Along with the `onSelect` event and the tables `selectedData` prop it is able to display the table's selection state regardless of sort order.

You are able to disable "Select All" functionality with the `allowSelectAll` prop.

### Table.MenuColumn
The MenuColumn is used to display overflow menus in the Header and Body rows of your Table using the `headerMenuItems` and `rowMenuItems` props respectively.  These props are render functions that are passed the full `rowProps` object and must return a collection of `Menu.Item`'s (or compatible component).

By using a scoped callback with the `onClick` prop, as shown below, allows you to handle menu selection.  Both props are optional.

### Infinite/Virtual Scrolling
Our abstraction fully supports the [react-virtualized InfiniteLoader component.](https://github.com/bvaughn/react-virtualized/blob/master/docs/InfiniteLoader.md)

#### Support Example

```
initialState = {
    selectedData: []
};

const data = [];
for (let x = 0; x < 15; x++) {
    if (x === 0 || x === 3 || x === 10) {
        data.push({
            isGroup: true,
            label: 'Priority',
            value: (() => {
                if (x === 0) {
                    return 'Low';
                } else if (x === 3) {
                    return 'Medium';
                } else {
                    return 'High';
                }
            })()
        });
        continue;
    }

    data.push({
        id: `unique-id-${x}`,
        displayId: `#${x + 1}`,
        about: 'Sample about message that is long Sample about message that is long.',
        group: 'Dev (Lotus)',
        subject: '[React] is cool',
        requester: 'John Doe'
    });
}

<div style={{ height: 400 }}>
    <Table
        data={data}
        selectedData={state.selectedData}
        isGroupRow={(index) => data[index].isGroup}
        groupRowRenderer={({rowData}) => {
            return {
                label: rowData.label,
                value: rowData.value
            };
        }}>
        <Table.CheckboxColumn
            dataKey="id"
            onSelection={selectedData => setState({ selectedData })} />
        <Table.Column
            label='ID'
            dataKey='displayId'
            width={50} />
        <Table.Column
            label='About'
            dataKey='about'
            width={200}
            flexGrow={1} />
        <Table.Column
            label='Group'
            dataKey='group'
            width={120} />
        <Table.Column
            label='Subject'
            dataKey='subject'
            width={150} />
        <Table.Column
            label='Requester'
            dataKey='requester'
            width={150} />
    </Table>
</div>
```

#### Custom Renderers

You are able to fully customize the rendering logic at the Row and Column level.

For loading and empty states it is suggested to use the [noRowsRenderer react-virtualized option](https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md).

```
initialState = {
    isLoading: false,
    isEmpty: false
}

const data = [];
for (let x = 0; x < 100; x++) {
    data.push({
        id: `unique-id-${x}`,
        name: x % 2 === 0 ? 'John Doe' : 'Jane Doe',
        avatar: x % 2 === 0 ? './images/jason.png' : './images/amir.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
}

<div>
    <Checkbox
        checked={state.isLoading}
        onChange={isLoading => setState({ isLoading })}>
        Is Loading
    </Checkbox>
    <Checkbox
        checked={state.isEmpty}
        onChange={isEmpty => setState({ isEmpty })}>
        Is Empty Data
    </Checkbox>
    <div style={{ height: 300 }}>
        <Table
            data={state.isLoading || state.isEmpty ? [] : data}
            scrollToIndex={45}
            noRowsRenderer={() =>
                <div className="u-alpha u-light u-ta-center u-mt-xl u-fg-aluminum">
                    {state.isLoading ? <Loader /> : "No results found"}
                </div>
            }>
            <Table.Column
                dataKey="avatar"
                width={45}
                cellRenderer={({rowData}) => <Avatar alt={rowData.name} src={rowData.avatar} />} />
            <Table.Column
                label="Name"
                dataKey="name"
                width={100} />
            <Table.Column
                width={125}
                label="Description"
                dataKey="description"
                flexGrow={1} />
        </Table>
    </div>
</div>
```

#### Infinite Scrolling

This example mocks an API call that responds after 3 seconds.

```
const { InfiniteLoader } = require("react-virtualized");

const data = [];
for (let x = 0; x < 30; x++) {
    data.push({
        id: `unique-id-${x}`,
        name: x % 2 === 0 ? 'John Doe' : 'Jane Doe',
        avatar: x % 2 === 0 ? './images/jason.png' : './images/amir.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
}

initialState = {
    data
};

const isRowLoaded = ({ index }) => {
    return index < state.data.length;
};

/**
 * This is used to mock an API call.
 */
const loadMoreRows = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newData = state.data.slice();

            for (let x = 0; x < 30; x++) {
                newData.push({
                    id: `unique-id-${x}`,
                    name: x % 2 === 0 ? 'John Doe' : 'Jane Doe',
                    avatar: x % 2 === 0 ? './images/jason.png' : './images/amir.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                });
            }

            setState({ data: newData });
            resolve();
        }, 3000);
    });
};

<div style={{ height: 300 }}>
    <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={state.data.length + 1}>
        {({ onRowsRendered, registerChild }) => (
            <Table
                innerRef={registerChild}
                data={state.data}
                onRowsRendered={onRowsRendered}
                rowRenderer={(rowProps, defaultRowRenderer) => {
                    if (rowProps.index === state.data.length - 1) {
                        return <div
                            className="u-ta-center u-mt-sm"
                            key={`{rowProps.key}-loader`}
                            style={rowProps.style}>
                            <Loader size={32} />
                        </div>;
                    }

                    return defaultRowRenderer(rowProps);
                }}
                isLoading={state.isLoading}>
                <Table.Column
                    dataKey="avatar"
                    width={45}
                    cellRenderer={({rowData}) => <Avatar alt={rowData.name} src={rowData.avatar} />} />
                <Table.Column
                    label="Name"
                    dataKey="name"
                    width={100} />
                <Table.Column
                    width={125}
                    label="Description"
                    dataKey="description"
                    flexGrow={1} />
            </Table>
        )}
    </InfiniteLoader>
</div>
```

#### Pagination

```
initialState={
    currentPage: 0,
    pageSize: 5
};

const data = [];
for (let x = 0; x < 70; x++) {
    data.push({
        id: `unique-id-${x}`,
        name: x % 2 === 0 ? 'John Doe' : 'Jane Doe',
        avatar: x % 2 === 0 ? './images/jason.png' : './images/amir.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
}

const getPagedData = (data, currentPage, pageSize) => {
    const output = [];

    for (let x = currentPage * pageSize; x < data.length & x < ((currentPage + 1) * pageSize); x++) {
        output.push(data[x]);
    }

    return output;
};

<div>
    <div className="u-altha" style={{marginBottom: 5}}>
        Example Table Caption
    </div>
    <div className="u-epsilon u-fg-aluminum">
        {(state.currentPage * state.pageSize) + 1}-{(state.currentPage + 1) * state.pageSize} of {data.length}
    </div>
    <div style={{height: 275}}>
        <Table data={getPagedData(data, state.currentPage, state.pageSize)}>
            <Table.Column
                dataKey="avatar"
                width={45}
                cellRenderer={({rowData}) => <Avatar alt={rowData.name} src={rowData.avatar} />} />
            <Table.Column
                label="Name"
                dataKey="name"
                width={100} />
            <Table.Column
                width={125}
                label="Description"
                dataKey="description"
                flexGrow={1} />
        </Table>
    </div>
    <Pagination
        total={Math.floor(data.length / state.pageSize)}
        currentPage={state.currentPage}
        onPageSelected={currentPage => { setState({currentPage})}} />
</div>
```

#### Overflow Menu

```

initialState={
    selection: '',
    showRowOverflow: true
};

const data = [];
for (let x = 0; x < 70; x++) {
    data.push({
        id: `unique-id-${x}`,
        name: x % 2 === 0 ? 'John Doe' : 'Jane Doe',
        avatar: x % 2 === 0 ? './images/jason.png' : './images/amir.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
}

const headerMenuItems = (rowProps) => {
    return [
        <Menu.Item key="add" onClick={() => setState({selection: "HEADER ADD"})}>Add</Menu.Item>,
        <Menu.Item key="settings" onClick={() => setState({selection: "HEADER SETTINGS"})}>Settings</Menu.Item>
    ];
};

const rowMenuItems = ({rowData}) => {
    return [
        <Menu.Item key="copy" onClick={() => setState({selection: `COPY ${rowData.id}`})}>Copy</Menu.Item>,
        <Menu.Item key="delete" onClick={() => setState({selection: `DELETE ${rowData.id}`})} className="u-fg-flamingo">Delete</Menu.Item>
    ];
};

<div>
    <Grid columns={2} stretched>
        <div>Current Selection: { state.selection || "Unknown" }</div>
        <Checkbox
            checked={state.showRowOverflow}
            onChange={showRowOverflow => setState({ showRowOverflow })}>
            Show Row Overflow Menus
        </Checkbox>
    </Grid>
    <div style={{height: 300}}>
        <Table data={data}>
            <Table.Column
                dataKey="avatar"
                width={45}
                cellRenderer={({rowData}) => <Avatar alt={rowData.name} src={rowData.avatar} />} />
            <Table.Column
                label="Name"
                dataKey="name"
                width={100} />
            <Table.Column
                width={125}
                label="Description"
                dataKey="description"
                flexGrow={1} />
            <Table.MenuColumn
                headerMenuItems={headerMenuItems}
                rowMenuItems={state.showRowOverflow && rowMenuItems} />
        </Table>
    </div>
</div>

```

#### Kitchen-Sink

```
const data = [];
for (let x = 0; x < 1000; x++) {
    data.push({
        id: `unique-id-${x}`,
        name: x % 2 === 0 ? 'Luke Skywalker' : 'Han Solo',
        description: x % 2 === 0 ? 'Jedi' : 'Smuggler',
        longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        timestamp: new Date(),
        isDisabled: x % 7 === 0 && x !== 0
    });
}

initialState = {
    striped: false,
    data,
    density: 'default',
    isRtl: false,
    selectionEnabled: true,
    allowSelectAll: true,
    selectedData: [],
    sortBy: undefined,
    sortDirection: undefined,
    rowClicked: undefined,
    focusedIndex: undefined
};

const onSort = ({sortBy, sortDirection}) => {
    /**
     * Used to mimic tri-state sorting style.
     * For bi-state, just remove this conditional.
     */
    if (sortBy === state.sortBy && sortDirection === 'ASC') {
        setState({ sortBy: undefined, sortDirection: undefined, data });
        return;
    }

    const newData = state.data.sort((a, b) => {
        const aValue = a[sortBy], bValue = b[sortBy];
        if (aValue > bValue) {
            return sortDirection === 'ASC' ? 1 : -1;
        } else if (aValue < bValue) {
            return sortDirection === 'ASC' ? -1 : 1;
        } else {
            return 0;
        }
    });

    setState({ sortBy, sortDirection, data: newData });
};

<div>
    <Grid columns={3} stretched>
        <Checkbox
            checked={state.striped}
            onChange={striped => setState({ striped })}>
            Striped Styling
        </Checkbox>
        <Checkbox
            checked={state.isRtl}
            onChange={isRtl => setState({ isRtl })}>
            RTL Locale
        </Checkbox>
        <Select
            label='Display Density'
            onChange={ density => setState({ density }) }
            selected={ state.density }
            size='small'>
            <Select.Item value='cozy'>cozy</Select.Item>
            <Select.Item value='default'>default</Select.Item>
            <Select.Item value='airy'>airy</Select.Item>
        </Select>
        <p>Selected Data [{ state.selectedData.length }/{ state.data.length }]</p>
        <Checkbox
            checked={state.selectionEnabled}
            onChange={selectionEnabled => setState({ selectionEnabled })}>
            Selection Enabled
        </Checkbox>
        <Checkbox
            checked={state.allowSelectAll}
            onChange={allowSelectAll => setState({ allowSelectAll })}>
            Allow Select All
        </Checkbox>
        <div style={{ marginTop: 20 }}>
            <p>SortBy: { state.sortBy || 'Unknown' }</p>
        </div>
        <div style={{ marginTop: 20 }}>
            <p>SortDirection: { state.sortDirection || 'Unknown' }</p>
        </div>
        <div style={{ marginTop: 20 }}>
            <p>Clicked Row: { state.rowClicked === undefined ? 'Unknown' : state.rowClicked }</p>
        </div>
        <div style={{ marginTop: 20 }}>
            <p>Focused Row: { state.focusedIndex === undefined ? 'Unknown' : state.focusedIndex }</p>
        </div>
    </Grid>
    <div style={{ marginTop: 25, height: 500 }}>
        <Table
            striped={state.striped}
            density={state.density}
            data={state.data}
            dir={state.isRtl ? 'rtl' : 'ltr'}
            sortBy={state.sortBy}
            sortDirection={state.sortDirection}
            selectedData={state.selectedData}
            onSort={onSort}
            onRowClick={rowClicked => setState({ rowClicked })}
            onRowFocus={focusedIndex => {
                setState({ focusedIndex });
            }}>
            <Table.CheckboxColumn
                dataKey="id"
                allowSelectAll={state.allowSelectAll}
                onSelection={state.selectionEnabled ? selectedData => setState({ selectedData }) : undefined} />
            <Table.Column
                label="Name"
                dataKey="name"
                width={150} />
            <Table.Column
                width={125}
                label="Description"
                dataKey="description" />
            <Table.Column
                width={250}
                label="Long Description"
                dataKey="longText"
                flexGrow={1}
                disableSort />
            <Table.Column
                width={145}
                label="Date"
                dataKey="timestamp"
                cellRenderer={({rowData, dataKey}) => rowData[dataKey].toLocaleDateString()}
                disableSort />
        </Table>
    </div>
</div>
```

#### Tabbable Cell Content

Due to the complexity of determining the focusability of custom renderers, we require the consumer to apply `tabIndex={0}` to all tabbable components when the current row index is equal to the currently focused row. Otherwise, `tabIndex={-1}` should be applied.  This focusedIndex is available through the `onRowFocus` prop and is demonstrated below.

The goal of this separation is to allow the user to tab to the focused row, tab through all focusable elements within that row, and then exit the table.

```
const data = [];
for (let x = 0; x < 1000; x++) {
    data.push({
        id: `unique-id-${x}`,
        name: x % 2 === 0 ? 'Luke Skywalker' : 'Han Solo',
        description: x % 2 === 0 ? 'Jedi' : 'Smuggler',
        longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        timestamp: new Date(),
        isDisabled: x % 7 === 0 && x !== 0
    });
}

const { WindowScroller } = require('react-virtualized');

initialState = {
    focusedIndex: undefined,
    selectedData: []
};

<div>
    <div style={{ marginTop: 25, height: "100%" }}>
        <WindowScroller>
              {({ height, isScrolling, scrollTop }) =>
        <Table
            data={data}
            width={750}
            autoHeight
            height={height}
            isScrolling={isScrolling}
            selectedData={state.selectedData}
            scrollTop={scrollTop}
            onRowFocus={focusedIndex => setState({ focusedIndex })}>
            <Table.CheckboxColumn
                dataKey="id"
                onSelection={selectedData => setState({ selectedData })} />
            <Table.Column
                label="Name"
                dataKey="name"
                width={150} />
            <Table.Column
                width={125}
                label="Description"
                dataKey="description"
                cellRenderer={({ rowIndex }) => {
                    const isSelectedRow = rowIndex === state.focusedIndex;
                    return <Button
                            tabIndex={isSelectedRow ? 0 : -1}
                            onClick={event => {
                                alert('Button selected');
                            }}>
                            Testing
                        </Button>;
                }} />
            <Table.Column
                width={250}
                label="Long Description"
                dataKey="longText"
                flexGrow={1}
                disableSort />
            <Table.Column
                width={145}
                label="Date"
                dataKey="timestamp"
                cellRenderer={({rowData, dataKey}) => rowData[dataKey].toLocaleDateString()}
                disableSort />
        </Table>}
        </WindowScroller>
    </div>
</div>
```
