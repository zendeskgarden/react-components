/* eslint-disable max-classes-per-file, react/no-set-state */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import {
  Table,
  Head,
  HeaderCell,
  HeaderRow,
  Caption,
  Body,
  Cell,
  Row
} from '@zendeskgarden/react-tables';
import {
  DragDropContext,
  Droppable,
  Draggable as DndDraggable,
  DropResult
} from 'react-beautiful-dnd';
import GripIcon from '@zendeskgarden/svg-icons/src/12/grip.svg';

interface IRow {
  id: string;
  selected: boolean;
  content: string;
}

const DraggableRow = styled(Row)<{ isDraggingOver: boolean }>`
  ${props =>
    props.isDraggingOver
      ? `
    :hover {
      background-color: inherit !important;
    }
  `
      : ''};
`;

const StyledCaption = styled(Caption)`
  margin-bottom: ${props => props.theme.space.sm};
  line-height: ${props => props.theme.lineHeights.xl};
  font-size: ${props => props.theme.fontSizes.xl};
`;

interface IDraggableCellProps {
  isDragOccurring: boolean;
}

class DraggableCell extends React.Component<IDraggableCellProps> {
  private ref = React.createRef<HTMLTableCellElement>();

  getSnapshotBeforeUpdate(prevProps: IDraggableCellProps) {
    if (!this.ref) {
      return null;
    }

    const { isDragOccurring } = this.props;

    const isDragStarting = isDragOccurring && !prevProps.isDragOccurring;

    if (!isDragStarting) {
      return null;
    }

    const { width, height } = this.ref.current!.getBoundingClientRect();

    const snapshot = {
      width,
      height
    };

    return snapshot;
  }

  componentDidUpdate(prevProps: IDraggableCellProps, prevState: any, snapshot: any) {
    const ref = this.ref.current!;

    if (!ref) {
      return;
    }

    if (snapshot) {
      if (ref.style.width === snapshot.width) {
        return;
      }
      ref.style.width = `${snapshot.width}px`;
      ref.style.maxWidth = `${snapshot.width}px`;
      ref.style.height = `${snapshot.height}px`;

      return;
    }

    const { isDragOccurring } = this.props;

    if (isDragOccurring) {
      return;
    }

    // inline styles not applied
    if (ref.style.width === null) {
      return;
    }

    // no snapshot and drag is finished - clear the inline styles
    ref.style.removeProperty('height');
    ref.style.removeProperty('width');
    ref.style.removeProperty('maxWidth');
  }

  render() {
    const { children } = this.props;

    return <Cell ref={this.ref}>{children}</Cell>;
  }
}

const DraggableContainer = styled.div`
  :focus {
    outline: none;
  }
`;

const getItems = (count: number): IRow[] =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`,
    selected: false,
    title: ''
  }));

const reorder = (list: IRow[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
};

interface IDraggableExampleState {
  items: IRow[];
}

class DraggableExample extends React.Component<unknown, IDraggableExampleState> {
  constructor(props: any) {
    super(props);

    this.state = {
      items: getItems(10)
    };

    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  handleDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const { items } = this.state;

    const orderedItems = reorder(items, result.source.index, result.destination.index);

    this.setState(
      {
        items: orderedItems
      },
      () => {
        document.getElementById(result.draggableId)!.focus();
      }
    );
  }

  render() {
    const { items } = this.state;

    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <Table>
          <StyledCaption>Your Unsolved Tickets</StyledCaption>
          <Head>
            <HeaderRow>
              <HeaderCell isMinimum />
              <HeaderCell>Subject</HeaderCell>
              <HeaderCell>Requester</HeaderCell>
              <HeaderCell>Requested</HeaderCell>
              <HeaderCell>Type</HeaderCell>
            </HeaderRow>
          </Head>
          <Droppable droppableId="droppable">
            {(provided, droppableSnapshot) => {
              return (
                <Body ref={provided.innerRef}>
                  {items.map((item, index) => (
                    <DndDraggable key={item.id} draggableId={item.id} index={index}>
                      {(providedProps, snapshot) => (
                        <DraggableRow
                          ref={providedProps.innerRef}
                          isDraggingOver={droppableSnapshot.isDraggingOver}
                          isHovered={snapshot.isDragging}
                          isFocused={
                            droppableSnapshot.isDraggingOver ? snapshot.isDragging : undefined
                          }
                          {...providedProps.draggableProps.style}
                          {...providedProps.draggableProps}
                        >
                          <DraggableCell isDragOccurring={snapshot.isDragging}>
                            <DraggableContainer id={item.id} {...providedProps.dragHandleProps}>
                              <GripIcon />
                            </DraggableContainer>
                          </DraggableCell>
                          <DraggableCell isDragOccurring={snapshot.isDragging}>
                            {item.content}
                          </DraggableCell>
                          <DraggableCell isDragOccurring={snapshot.isDragging}>
                            John Smith
                          </DraggableCell>
                          <DraggableCell isDragOccurring={snapshot.isDragging}>
                            15 minutes ago
                          </DraggableCell>
                          <DraggableCell isDragOccurring={snapshot.isDragging}>
                            Ticket
                          </DraggableCell>
                        </DraggableRow>
                      )}
                    </DndDraggable>
                  ))}
                  {provided.placeholder}
                </Body>
              );
            }}
          </Droppable>
        </Table>
      </DragDropContext>
    );
  }
}

/**
 * https://github.com/storybookjs/storybook/issues/13362
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Draggable: Story = ({ foo }) => {
  return <DraggableExample />;
};

Draggable.parameters = {
  docs: {
    description: {
      story: `
This is an example of a draggable Table using [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)

This example includes:

- Drag-and-drop functionality
- Uses the \`Grip\` icon from \`@zendeskgarden/svg-icons\`
- Accessible ordering with the \`Space/Up/Down\` keys

To enable dimension locking of columns when dragging a table row custom sizing logic is required.
Follow the [table dimension locking example](https://github.com/atlassian/react-beautiful-dnd/blob/24a8e6021600920c0b2a28f89d5ffb17538fe96c/stories/src/table/with-dimension-locking.jsx)
for auto layouts.
      `
    }
  }
};
