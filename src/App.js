import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {useEffect} from 'react';

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

function App() {
  // const listItems = [
  //   { id: "1", label: "Screening" },
  //   { id: "2", label: "Identity" },
  //   { id: "3", label: "Relationship" }
  //   // { id: "4", label: "Mike" },
  //   // { id: "5", label: "Dustin" },
  // ];

  useEffect(() => {
    async function fetchData() {
      console.log('start');

      await sleep(1);

      console.log('end');
    }
    fetchData();
  });
  const original = [
    { id: "1", label: "Screening" },
    { id: "2", label: "Identity" },
    { id: "3", label: "Relationship" }
    // { id: "4", label: "Mike" },
    // { id: "5", label: "Dustin" },
  ];
  const row1 = [];
  const row2 = [];
  const row3 = [];
  // const [dragDropList, setDragDropList] = useState(listItems);
  const [sourceList, setSourceList] = useState(original);
  const [row1List, setRow1List] = useState(row1);
  const [row2List, setRow2List] = useState(row2);
  const [row3List, setRow3List] = useState(row3);




  

  // const onDragCompleteOrigin = (result) => {
  //   if (!result.destination) return;

  //   const arr = [...sourceList];

  //   //Changing the position of Array element
  //   let removedItem = arr.splice(result.source.index, 1)[0];
  //   arr.splice(result.destination.index, 0, removedItem);

  //   //Updating the list
  //   setSourceList(arr);
  // };
  // const onDragCompleteRow1 = (result) => {
  //   if (!result.destination) return;

  //   const arr = [...row1List];

  //   //Changing the position of Array element
  //   let removedItem = arr.splice(result.source.index, 1)[0];
  //   arr.splice(result.destination.index, 0, removedItem);

  //   //Updating the list
  //   setRow1List(arr);
  // };
  // const onDragCompleteRow2 = (result) => {
  //   if (!result.destination) return;

  //   const arr = [...row2List];

  //   //Changing the position of Array element
  //   let removedItem = arr.splice(result.source.index, 1)[0];
  //   arr.splice(result.destination.index, 0, removedItem);

  //   //Updating the list
  //   setRow2List(arr);
  // };
  // const onDragCompleteRow3 = (result) => {
  //   // if (!result.destination) return;

  //   const arr = [...row3List];

  //   //Changing the position of Array element
  //   let removedItem = arr.splice(result.source.index, 1)[0];
  //   arr.splice(result.destination.index, 0, removedItem);

  //   //Updating the list
  //   setRow3List(arr);
  // };

  // const onDropOrigin = (result) => {
  //   // let id = ev.s.getData("id");
  //   const arr = [...sourceList];
  //   let removedItem = result.dataTransfer.getData("item");
  //   arr.splice(result.destination.index, 0, removedItem);
  //   setSourceList(arr);
  // }

  // const onDropRow1 = (result) => {
  //   // let id = ev.s.getData("id");
  //   const arr = [...row1List];
  //   let removedItem = result.dataTransfer.getData("item");
  //   arr.splice(result.destination.index, 0, removedItem);
  //   setRow1List(arr);
  // }

  // const onDragStartRow1 = (ev, item) => {
  //   // let id = ev.s.getData("id");
  
  //   ev.dataTransfer.setData("item", item);
  // }
  const onDragOver = (ev) => {
    ev.preventDefault();
  }

  const onDragEnd = (event) => {
    const { destination, source } = event;
    console.log(event);
    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let item = null;
    if (source.droppableId === 'row1') {
      item = row1List.splice(source.index,1)[0];
      setRow1List(row1List);
    } else if (source.droppableId === 'row2') {
      item = row2List.splice(source.index,1)[0];
      setRow2List(row2List);
    } else if (source.droppableId === 'row3') {
      item = row3List.splice(source.index,1)[0];
      setRow3List(row3List);
    } else if (source.droppableId === 'source') {
      item = sourceList.splice(source.index,1)[0];
      setRow1List(sourceList);
    }


    if (destination.droppableId === 'row1') {
      row1List.splice(destination.index,0,item);
      setRow1List(row1List);
    } else if (destination.droppableId === 'row2') {
      row2List.splice(destination.index,0,item);
      setRow2List(row2List);
    } 
     if (destination.droppableId === 'row3') {
      row3List.splice(destination.index,0,item);
      setRow3List(row3List);
    } 
    if (destination.droppableId === 'source') {
      sourceList.splice(destination.index,0,item);
      setSourceList(sourceList);
    }
    console.log("Row1 - ", row1List);
    console.log("Row2 - ", row2List);
    console.log("Row3 - ", row3List);
    console.log("Source - ", sourceList);
 
  }

 


  return (

    
    <div className="container">
      <div className="header"><center>MATAVERI FLOW CONFIGURATION</center></div>
      <br/>
      <div className="card">
        

        <DragDropContext onDragEnd={onDragEnd} onDragOver={onDragOver}>
          <Droppable droppableId="source" direction="vertical">
            
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
                    // ondrop={onDropOrigin}
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
          <div className="maves-flow-container">
            <div className="basic-node">
              <center>START</center>
            </div>
            <Droppable droppableId="row1" direction="horizontal" >
              {(provided, snapshot) => (
                <div
                  className="drag-drop-list-container"
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

            <Droppable droppableId="row2" direction="horizontal" >
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

            <Droppable droppableId="row3" direction="horizontal" >
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

            <div className="basic-node">
              <center>STOP</center>
            </div>
          </div>
          
        </DragDropContext>


        
      </div>
        

        
    </div>


    
  );
}

export default App;