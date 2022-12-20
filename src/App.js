import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const listItems = [
    { id: "1", label: "Screening" },
    { id: "2", label: "Identity" },
    { id: "3", label: "Relationship" }
    // { id: "4", label: "Mike" },
    // { id: "5", label: "Dustin" },
  ];
  const original = [
    { id: "1", label: "Screening" },
    { id: "2", label: "Identity" },
    { id: "3", label: "Relationship" }
    // { id: "4", label: "Mike" },
    // { id: "5", label: "Dustin" },
  ];
  const row1 = [
    { id: "1", label: "Screening1" },
    { id: "2", label: "Identity1" },
    { id: "3", label: "Relationship1" }
    // { id: "4", label: "Mike" },
    // { id: "5", label: "Dustin" },
  ];
  const row2 = [
    { id: "1", label: "Screening2" },
    { id: "2", label: "Identity2" },
    { id: "3", label: "Relationship2" }
    // { id: "4", label: "Mike" },
    // { id: "5", label: "Dustin" },
  ];
  const row3 = [
    { id: "1", label: "Screening3" },
    { id: "2", label: "Identity3" },
    { id: "3", label: "Relationship3" }
    // { id: "4", label: "Mike" },
    // { id: "5", label: "Dustin" },
  ];
  const [dragDropList, setDragDropList] = useState(listItems);
  const [sourceList, setSourceList] = useState(original);
  const [row1List, setRow1List] = useState(row1);
  const [row2List, setRow2List] = useState(row2);
  const [row3List, setRow3List] = useState(row3);




  const onDragComplete = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setDragDropList(arr);
  };

  const onDragCompleteOrigin = (result) => {
    if (!result.destination) return;

    const arr = [...sourceList];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setSourceList(arr);
  };
  const onDragCompleteRow1 = (result) => {
    if (!result.destination) return;

    const arr = [...row1List];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setRow1List(arr);
  };
  const onDragCompleteRow2 = (result) => {
    if (!result.destination) return;

    const arr = [...row2List];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setRow2List(arr);
  };
  const onDragCompleteRow3 = (result) => {
    if (!result.destination) return;

    const arr = [...row3List];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setRow3List(arr);
  };



  return (


    <div className="container">
      <div className="header"><center>MATAVERI FLOW CONFIGURATION</center></div>
      <br/>
      <div className="card">

        <DragDropContext onDragEnd={onDragCompleteOrigin} >
            
            <Droppable droppableId="drag-drop-list-origin" direction="vertical">
              
              {(provided, snapshot) => (
                <div
                  className="drag-drop-list-container-origin"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {sourceList.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.label}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="item-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <span className="material-symbols-outlined">
                            drag_indicator
                          </span>
                          <div className="char-avatar">
                            {item.label.charAt(0)}
                          </div>
                          <p className="label">{item.label}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
        </DragDropContext>
        <br/>
        
        <div className="maves-flow-container">
          <div className="basic-node">
            <center>START</center>
          </div>

          <DragDropContext onDragEnd={onDragCompleteRow1}>
            <Droppable droppableId="drag-drop-list" direction="horizontal" >
              {(provided, snapshot) => (
                <div
                  className="drag-drop-list-container1"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {row1List.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.label}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="item-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <span className="material-symbols-outlined">
                            drag_indicator
                          </span>
                          <div className="char-avatar">
                            {item.label.charAt(0)}
                          </div>
                          <p className="label">{item.label}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>


          <DragDropContext onDragEnd={onDragCompleteRow2}>
            <Droppable droppableId="drag-drop-list" direction="horizontal" >
              {(provided, snapshot) => (
                <div
                  className="drag-drop-list-container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {row2List.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.label}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="item-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <span className="material-symbols-outlined">
                            drag_indicator
                          </span>
                          <div className="char-avatar">
                            {item.label.charAt(0)}
                          </div>
                          <p className="label">{item.label}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <DragDropContext onDragEnd={onDragCompleteRow3}>
            <Droppable droppableId="drag-drop-list" direction="horizontal" >
              {(provided, snapshot) => (
                <div
                  className="drag-drop-list-container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {row3List.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.label}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="item-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <span className="material-symbols-outlined">
                            drag_indicator
                          </span>
                          <div className="char-avatar">
                            {item.label.charAt(0)}
                          </div>
                          <p className="label">{item.label}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="basic-node">
            <center>STOP</center>
          </div>
        </div>
        

        
      </div>
    </div>


    
  );
}

export default App;