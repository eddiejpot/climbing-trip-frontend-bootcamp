/* =================================================================== */
/* =========================================================== IMPORTS */
/* =================================================================== */

import React, { useState } from 'react';
// Drag and Drop context. Droppable to provid or app with droppable area
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
/* eslint-disable react/jsx-props-no-spreading */
import Grid from '@material-ui/core/Grid';

// ========== drag drop supporting code ===========/
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'white',

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 500,
});

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
// =============== up till here=======

export default function SingleTripTable(props) {
  const { tripRoutes } = props;
  // local state
  // initial state of isComplete x. changes to '✓' on click and vice versa
  const [tripComplete, setTripComplete] = useState('X');
  function setComplete() {
    console.log('clcik');
    if (tripComplete === 'X') {
      setTripComplete('✓');
    }
    else {
      setTripComplete('X');
    }
  }
  return (
    <DragDropContext>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {tripRoutes.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style,
                    )}
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={8}>{item.name}</Grid>
                      <Grid item xs={2}>
                        {item.difficulty}
                      </Grid>
                      <Grid item xs={2}>{(item.isCompleted !== 'null') ? <span>X</span> : <span>✓</span>}</Grid>
                    </Grid>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
