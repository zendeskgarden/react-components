# DO NOT USE
This component is currently a work-in-progress and is not available for use at this time.

The Table component is a basic abstraction over [react-virtualized](https://bvaughn.github.io/react-virtualized/#/components/Table).  This library has many powerful features including:
- Virtual Scrolling
- Dynamic Resizing
- Render customization

We provide three abstractions to enforce styling, user experience, navigation, and accessibility.

### Table
The main component acts as an abstraction of [react-virtualized Table component and accepts all valid Table props](https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md) as well those listed above.

For a simple table the only required property is an array of data.

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
The CheckboxColumn is used to display/manage the selected state of your data.  It uses it's `dataKey` prop to map a unique identifier from each row of data.  Along with the `onSelect` event and the Tables `selectedData` prop it is able to display the tables selection state regardless of sort order.

You are able to disable "Select All" functionality with the `allowSelectAll` prop.

### Virtual Scrolling
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

<Table
    data={data}
    selectedData={state.selectedData}
    height={300}
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
```

#### Custom Renderers

```
const data = [];
for (let x = 0; x < 100; x++) {
    data.push({
        id: `unique-id-${x}`,
        name: x % 2 === 0 ? 'John Doe' : 'Jane Doe',
        avatar: x % 2 === 0 ? './images/jason.png' : './images/amir.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
}


<Table
    data={data}
    height={300}
    scrollToIndex={45}>
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
    <Table
        data={getPagedData(data, state.currentPage, state.pageSize)}
        height={275}>
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
    <Pagination
        total={Math.floor(data.length / state.pageSize)}
        currentPage={state.currentPage}
        onPageSelected={currentPage => { setState({currentPage})}} />
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
    rowClicked: undefined
};

const onSort = ({sortBy, sortDirection}) => {
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
            <Select.Item value='small'>small</Select.Item>
            <Select.Item value='default'>default</Select.Item>
            <Select.Item value='large'>large</Select.Item>
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
            <p>Clicked Row: { state.rowClicked || 'Unknown' }</p>
        </div>
    </Grid>
    <div style={{ marginTop: 25 }}>
        <Table
            height={500}
            striped={state.striped}
            density={state.density}
            data={state.data}
            dir={state.isRtl ? 'rtl' : 'ltr'}
            sortBy={state.sortBy}
            sortDirection={state.sortDirection}
            selectedData={state.selectedData}
            onSort={onSort}
            onRowClick={rowClicked => setState({ rowClicked })}>
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
